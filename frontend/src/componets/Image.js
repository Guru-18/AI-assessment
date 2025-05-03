import React from 'react'

const imageStyle = {
    borderRadius: "5px",
    border: "2px solid black",
    padding: "5px", 
    width: "350px", 
    maxHeight: "500px"
}

const Image = ({ imageSrc, imageName }) => {
    return (
            <img style={imageStyle} src={imageSrc} alt={imageName} />
        
    )
}

export default Image