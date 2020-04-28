import React, { useState } from 'react';
import {
  SlideMenu,
  FormBlock,
  FormInput,
  CustomButton,
  PrimaryText
} from '../../components';
import './form-layout.css';

const FormLayout = p => {

  const [file, setFile] = useState('')
  const [location, setLocation] = useState('')

  function onFileUpload() { }
  function onSearch() { }
  return (
    <SlideMenu>

      <FormBlock color="green" onSubmit={onSearch}>
        <PrimaryText>Enter Place</PrimaryText>
        <FormInput
          type="text"
          placeholder="Enter Something Here"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <CustomButton type="submit" text="Search" />
      </FormBlock>

      <FormBlock color="yellow" onSubmit={onFileUpload}>
        <PrimaryText>Choose File</PrimaryText>
        <FormInput
          type="file"
          name="file"
          placeholder={file.name || "File Not Uploaded"}
          onChange={e => setFile(e.target.files[0])}
        />
        <CustomButton type="submit" text="Upload" />
      </FormBlock>

    </SlideMenu>
  );
}

export default FormLayout;