import './App.css';
import User from './components/User';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsShuffle } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { randomIntFromInterval } from './helperFunctions/randomIntFromInterval';

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
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 649px)'
    })

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
        <div className='App'>
            <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', width: isDesktopOrLaptop ? 650 : '100%' }}>
                <div style={{ alignItems: 'center', display: "flex", flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                    <div onClick={previous} style={{ marginRight: 10, cursor: "pointer" }}>
                        <BsFillArrowLeftCircleFill />
                    </div>
                    <div style={{ width: '100%' }}>
                        <User data={userData} />
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

    );
}

export default Users;
