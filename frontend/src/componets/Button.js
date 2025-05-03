import React from 'react'

const buttonStyle = {
    backgroundColor: '#4c78af', // Green
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '8px'
};

const Button = ({title, onClick, style, ...props}) => {
  return (
    <button style={{...buttonStyle, ...style}} onClick={onClick} {...props}>{title}</button>
  )
}

export default Button