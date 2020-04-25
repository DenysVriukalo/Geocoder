import React, { useState } from 'react';
import {
  FormBlock,
  FormInput,
  CustomButton,
  SlideButton,
  PrimaryText
} from '../../components';
import './form-layout.css';

const FormLayout = p => {

  const [sideRef] = useState(React.createRef());

  const [file, setFile] = useState('')
  const [location, setLocation] = useState('')

  const [hidden, setHidden] = useState(false);

  function onFileUpload() { }
  function onSearch() { }
  return (
    <div className="side right-side" ref={sideRef}
      style={{
        marginRight: hidden ? `-${+sideRef.current.offsetWidth - 30}px` : "0px"
      }}
    >
      <div className="side__inner side__inner-right">
        <div className="right-side__bg-image">
          <img src="/images/gerodot.png" alt="gerodot" />
        </div>
        <div className="right-side__content">
          <SlideButton hidden={hidden} onClick={() => setHidden(!hidden)} />

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

        </div>
      </div>
    </div>
  );
}

export default FormLayout;