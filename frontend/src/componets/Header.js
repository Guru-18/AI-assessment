import React from 'react'

const style = {
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'space-around',
    gap: 10
}

const Header = ({setMenu}) => {
  return (
    <div style={style}>
        <div style={{cursor: 'pointer'}} onClick={() => setMenu('home')}>
            <p>Home</p>
        </div>
        <div style={{cursor: 'pointer'}} onClick={() => setMenu('collection')}>
            <p>Collection</p>
        </div>
    </div>
  )
}

export default Header