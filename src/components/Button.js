import React, { useState } from 'react'
import "./styles/Button.css"

const Button = (props) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className='container' style={{
            backgroundColor: visible ? 'rgba(255,255,255,0.1)' : null,
            width: 200,
            height: 200,
        }}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onClick={props.onPress}
        >
            {props.text}
        </div>
    )
}

export default Button
