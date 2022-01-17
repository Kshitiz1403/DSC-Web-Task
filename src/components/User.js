import React from 'react'
import "./styles/User.css"


const User = ({ data }) => {

    return (
        <div className='container' >
            <div>{data?.id}</div>
            <div>Name - {data?.name}</div>
            <div>Username - {data?.username}</div>
            <div>Email - {data?.email}</div>
            <div>Name - {data?.address.street}</div>
            <div>Phone - {data?.phone}</div>
            <div>Website - <a href={data?.website}>{data?.website}</a></div>
        </div>
    )
}

export default User
