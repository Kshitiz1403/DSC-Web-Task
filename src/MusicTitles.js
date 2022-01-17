import React, { useEffect, useState } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsShuffle } from "react-icons/bs";
import { randomIntFromInterval } from './Users';


const MusicTitles = () => {

    const [imagesData, setImagesData] = useState([])
    const [position, setPosition] = useState(0)

    // useEffect(() => {
    //     document.addEventListener("keydown", keyboardHandler)
    // }, [])

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
            <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', width: 250 }}>
                <img src={data?.thumbnailUrl}
                />
                <div>{data?.id}</div>
                <div style={{ textAlign: 'center' }}>
                    {data?.title}
                </div>
            </div>
        )
    }
    console.log(position)

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

    const keyboardHandler = (event) => {
        if (event.keyCode === 37) { //for left key
            previous()
        }
        if (event.keyCode === 39) { //right
            next()
        }
        if (event.keyCode == 32) { //space
            shuffle()
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ alignItems: 'center', display: "flex", flexDirection: 'row', }}>
                <div onClick={previous} style={{ marginRight: 10 }}>
                    <BsFillArrowLeftCircleFill />
                </div>

                <Item data={imageData} />
                <div onClick={next} style={{ marginLeft: 10 }}>
                    <BsFillArrowRightCircleFill />
                </div>
            </div>

            <div style={{ display: "block", marginTop: 10 }} onClick={shuffle}>
                <BsShuffle />
            </div>
        </div>
    )
}

export default MusicTitles
