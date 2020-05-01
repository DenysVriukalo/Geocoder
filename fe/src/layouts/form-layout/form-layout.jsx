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

  function onFileUpload() { }
  function onSearch() { }

  if (contentType === 'form')
    content = (<>
      <FormBlock color="green" onSubmit={onSearch}>
        <PrimaryText>Enter Place</PrimaryText>
        <FormInput
          type="text"
          placeholder="Enter Something Here"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <div className="d-flex justify-space-between">
          <CustomButton type="submit" text="Search" />
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
