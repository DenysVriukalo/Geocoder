import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  actionSetPlacesByUserInput,
  actionSetPlacesByUserUpload,
  actionSetPlacesByHistoryAddressId,
  actionSetPlacesByHistoryFileId
} from '../../redux/places-to-show/places-to-show.actions';
import {
  SlideMenu,
  FormBlock,
  FormInput,
  CustomButton,
  PrimaryText,
  HistoryList
} from '../../components';
import fileHelper from '../../utils/allowed-file-formats';
import './form-layout.css';
import axios from 'axios';


const FormLayout = ({ onLocationUpload, onFileUpload, onSetLocationByHistoryAddress, onSetLocationByHistoryFile }) => {
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

  const handleLocationSubmit = e => {
    e.preventDefault();
    location && onLocationUpload(location);
  };

  const handleFileSubmit = e => {
    e.preventDefault();
    file && onFileUpload(file)
  }

  const onFileChange = e => {
    const newFile = e.target.files[0];
    console.log(newFile);
    if (fileHelper.isTypeAllowed(newFile.type)) {
      console.log('valid')
      setFile(newFile);
    } else console.log('invalid file type')
  }

  if (contentType === 'form')
    content = (<>
      <FormBlock color="green" onSubmit={handleLocationSubmit}>
        <PrimaryText>Search Place</PrimaryText>
        <FormInput
          type="text"
          placeholder="Enter Your Address Here"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <div className="d-flex justify-space-between">
          <CustomButton type="submit" text="Search" />
          <CustomButton secondary text="Open history" onClick={() => setContentType('history_adress')} />
        </div>
      </FormBlock>

      <FormBlock color="yellow" onSubmit={handleFileSubmit}>
        <PrimaryText>Choose File</PrimaryText>
        <FormInput
          type="file"
          name="file"
          placeholder={file.name || "File Not Uploaded"}
          onChange={onFileChange}
        />
        <div className="d-flex justify-space-between">
          <CustomButton type="submit" text="Upload" />
          <CustomButton secondary text="Open uploaded" onClick={() => setContentType('history_upload')} />
        </div>
      </FormBlock>
    </>)

  if (contentType === 'history_adress')
    content = (<>
      <HistoryList
        onHistoryItemClick={onSetLocationByHistoryAddress}
        listItems={listItems}
        bgColor='green'
        adress
      />
      <CustomButton
        onClick={() => setContentType('form')}
        text='Back to Search'
        secondary
        large
      />
    </>)

  if (contentType === 'history_upload')
    content = (<>
      <HistoryList
        onHistoryItemClick={onSetLocationByHistoryFile}
        listItems={listItems}
        bgColor='yellow'
        upload
      />
      <CustomButton
        onClick={() => setContentType('form')}
        text='Back to Search'
        secondary
        large
      />
    </>)

  return (
    <SlideMenu>
      {content}
    </SlideMenu>
  );
}

const mapDispatchToProps = {
  onLocationUpload: actionSetPlacesByUserInput,
  onFileUpload: actionSetPlacesByUserUpload,
  onSetLocationByHistoryAddress: actionSetPlacesByHistoryAddressId,
  onSetLocationByHistoryFile: actionSetPlacesByHistoryFileId
}

export default connect()(FormLayout);
