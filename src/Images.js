import React, { useEffect, useState } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsShuffle } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';
import { Browser } from 'react-window-ui';
import { randomIntFromInterval } from './Users';


const Images = () => {

    const [imagesData, setImagesData] = useState([])
    const [position, setPosition] = useState(0)
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 649px)'
    })

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => {
                response.json().then((data) => {
                    console.log(data)
                    setImagesData(data)
                })
            }).catch(err => console.warn(err))
    }, [])

    const Item = ({ data }) => {
        return (
            <Browser background={"#2d3034"} topbarColor={"#3b3e43"} border={"#3b3e43"} boxShadow={"none"}>
                <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', width: '100%', height: 400, justifyContent: 'center' }}>

                    <img src={data?.thumbnailUrl}
                    />
                    <div style={{ marginBottom: 10, marginTop: 10 }}>{data?.id}</div>
                    <div style={{ textAlign: 'center' }}>
                        {data?.title}
                    </div>

                </div>
            </Browser>
        )
    }

    let imageData = imagesData[position]

    const shuffle = () => {
        console.log("shuffle")
        setPosition(randomIntFromInterval(0, imagesData.length - 1))
    }

    const previous = () => {
        console.log("prev")
        if (position === 0) {
            setPosition(imagesData.length - 1)
        }
        else {
            setPosition(position - 1)
        }
    }
    const next = () => {
        console.log("next")
        setPosition((position + 1) % (imagesData.length))
    }

    return (
        <div className='App'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: isDesktopOrLaptop ? 650 : '100%' }}>

                <div style={{ alignItems: 'center', display: "flex", flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                    <div onClick={previous} style={{ marginRight: 10, cursor: "pointer" }}>
                        <BsFillArrowLeftCircleFill />
                    </div>

                    <div style={{ width: '100%' }}>
                        <Item data={imageData} />
                    </div>
                    <div onClick={next} style={{ marginLeft: 10, cursor: "pointer" }}>
                        <BsFillArrowRightCircleFill />
                    </div>
                </div>

                <div style={{ display: "block", marginTop: 10, cursor: "pointer" }} onClick={shuffle}>
                    <BsShuffle />
                </div>
                
            </div>
        </div>
    )
}

export default Images
