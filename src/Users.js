import './App.css';
import User from './components/User';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsShuffle } from "react-icons/bs";
import { useEffect, useState } from 'react';

const Users = () => {
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                response.json().then((data) => {
                    console.log(data)
                    setUsers(data)
                })

            }).catch(err => console.log(err))
    }, [])

    const [users, setUsers] = useState([])
    const [position, setPosition] = useState(0)

    let userData = users[position]

    const shuffle = () => {
        console.log("shuffle")
        setPosition(randomIntFromInterval(0, users.length - 1))
    }

    const previous = () => {
        console.log("prev")
        if (position === 0) {
            return setPosition(users.length - 1)
        }
        setPosition(position - 1)
    }
    const next = () => {
        console.log("next")
        setPosition((position + 1) % (users.length))
    }
    return (
        <div className='App' style={{ display: "flex", }}>
            <div style={{ alignItems: 'center', display: "flex", flexDirection: 'row', }}>
                <div onClick={previous} style={{ marginRight: 10 }}>
                    <BsFillArrowLeftCircleFill />
                </div>

                <User data={userData} />
                <div onClick={next} style={{ marginLeft: 10 }}>
                    <BsFillArrowRightCircleFill />
                </div>
            </div>

            <div style={{ display: "block", marginTop: 10 }} onClick={shuffle}>
                <BsShuffle />
            </div>
        </div>
    );
}
export const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default Users;
