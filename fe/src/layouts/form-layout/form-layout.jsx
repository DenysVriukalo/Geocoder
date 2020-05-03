import React, { useState } from 'react';
import {
  SlideMenu,
  FormBlock,
  FormInput,
  CustomButton,
  PrimaryText,
  StoryList
} from '../../components';
import './form-layout.css';


const FormLayout = p => {
  let content;
  const [contentType, setContentType] = useState('form');

  const listItems = [
    { id: "123123", name: "Kharkiv, Gorkiy Park" },
    { id: "1231da23", name: "Kharkiv, Shevchenko Garden" },
    { id: "12312xZx3", name: "Kharkiv, Gorkiy Park" },
    { id: "123123cc", name: "Kharkiv, Shevchenko Garden" },
    { id: "123123zxc", name: "Kharkiv, Shevchenko Garden" }
  ];

  const [file, setFile] = useState('');
  const [location, setLocation] = useState('');
  

  const getCoordinates = async (address) => {
    try {
      const location = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?language=en&address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
      const locationData = await location.json();
      return locationData.results[0];
    } 
    catch (error) {
        console.log(error);
    }
  };

  const sendCoordinatesToDB = (coordinates) => {
    console.log("coordinates", coordinates);
  };


  

  function onFileUpload() { }
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    let coordinates = await getCoordinates(location);
  /**  TODO Save places do redux
   *   const places =[{
      coords: { lat: coordinates.geometry.location.lat, lng: coordinates.geometry.location.lng }, // required: latitude & longitude at which to display the marker
      title: coordinates.formatted_address, // optional
    }];
  */
    sendCoordinatesToDB(coordinates);
  };

  if (contentType === 'form')
    content = (<>
      <FormBlock color="green" onSubmit={handleSubmit}>
        <PrimaryText>Search Place</PrimaryText>
        <FormInput
          type="text"
          placeholder="Enter Your Address Here"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <div className="d-flex justify-space-between">
          <CustomButton type="submit" text="Search"/>
          <CustomButton secondary text="Open history" onClick={() => setContentType('story_adress')} />
        </div>
      </FormBlock>

      <FormBlock color="yellow" onSubmit={onFileUpload}>
        <PrimaryText>Choose File</PrimaryText>
        <FormInput
          type="file"
          name="file"
          placeholder={file.name || "File Not Uploaded"}
          onChange={e => setFile(e.target.files[0])}
        />
        <div className="d-flex justify-space-between">
          <CustomButton type="submit" text="Upload" />
          <CustomButton secondary text="Open uploaded" onClick={() => setContentType('story_upload')} />
        </div>
      </FormBlock>
    </>)

  if (contentType === 'story_adress')
    content = (<>
      <StoryList listItems={listItems} bgColor='green' adress />
      <CustomButton onClick={() => setContentType('form')} secondary large text='Back to Search' />
    </>)

  if (contentType === 'story_upload')
    content = (<>
      <StoryList listItems={listItems} bgColor='yellow' upload />
      <CustomButton onClick={() => setContentType('form')} secondary large text='Back to Search' />
    </>)

  return (
    <SlideMenu>
      {content}
    </SlideMenu>
  );
}

export default FormLayout;
