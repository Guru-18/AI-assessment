import React from 'react';
import Dropzone from 'react-dropzone';
import Button from './Button';

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 400,
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#bcbcbc',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#4a4a4a',
  outline: 'none',
  cursor: 'pointer',
  transition: 'border .24s ease-in-out'
};

function MyDropzone({ handleDrop, file}) {

  return (
    <section style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={divStyle}>
            <input {...getInputProps()} accept="image/jpeg, image/png, image/jpg"   />
            <Button title="Select a file" />
            <p style={{ background: 'inherit'}}>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
    </section>
  )
}

export default MyDropzone