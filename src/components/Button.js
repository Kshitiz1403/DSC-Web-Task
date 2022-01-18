import React, { useState } from 'react'

const Button = (props) => {
    const [visible, setVisible] = useState(false)
    return (
        <div style={{
            width: 200,
            height: 200,
            borderRadius: 20,
            boxShadow: "27px 12px 121px -69px  rgba(255,255,255,0.75)",
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            borderColor: "#6b94bc",
            borderWidth: 2,
            borderStyle: 'solid',
            backgroundColor: visible ? 'rgba(255,255,255,0.1)' : null,
            fontSize: '1.8rem',
            fontWeight:'bold',
            marginBlockEnd:50,
            marginBlockStart:50,
            marginInlineStart:50,
            marginInlineEnd:50,
            cursor:'pointer'
            // flex:1
            // marginRight:50,
            // marginLeft:50
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
