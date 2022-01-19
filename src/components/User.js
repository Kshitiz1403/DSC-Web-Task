import React from 'react'
import { Link } from 'react-router-dom'
import { Browser } from 'react-window-ui'
import { vmax, vmin } from '../helperFunctions/viewPort'
import "./styles/User.css"


const User = ({ data }) => {

    return (
        <Browser background={"#2d3034"} topbarColor={"#3b3e43"} border={"#3b3e43"}>

            <div className='container' >
                <div style={{ alignSelf: 'center', marginBottom: 10 }}>{data?.id}</div>
                <div className='item'>
                    <div>Name - </div>
                    <div>{data?.name}</div>
                </div>
                <div className='item'>
                    <div>Username - </div>
                    <div>{data?.username}</div>
                </div>
                <div className='item'>
                    <div>Email - </div>
                    <div>{data?.email}</div>
                </div>
                <div className='item'>
                    <div>Name - </div>
                    <div>{data?.name}</div>
                </div>
                <div className='item'>
                    <div>Phone - </div>
                    <div>{data?.phone}</div>
                </div>
                <div className='item'>
                    <div>Website - </div>
                    <a target={'_blank'} href={`http://${data?.website}`}>{data?.website}</a>
                </div>
                <div className='item'>
                    <div>Address - </div>
                    <div className='details'>
                        <div>
                            {data?.address.suite}{data ? "," : null}  {data?.address.street}{data ? "," : null}
                        </div>
                        <div>
                            {data?.address.city}{data ? "," : null} {data?.address.zipcode}
                        </div>
                        <div>{data ? "lat:" : null}{data?.address.geo.lat}{data ? ", lng:" : null}{data?.address.geo.lng}</div>
                    </div>
                </div>
                <div className='item'>
                    <div>Company - </div>
                    <div className='details'>
                        <div>
                            {data?.company.name}
                        </div>
                        <div>
                            {data?.company.catchPhrase}
                        </div>
                        <div>
                            {data?.company.bs}
                        </div>
                    </div>
                </div>
            </div>
        </Browser>
    )
}

export default User
