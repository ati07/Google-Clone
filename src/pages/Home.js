import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core';
import Search from './Search'
function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="header__left">
                    <Link to="/about">About</Link>
                    <Link to="/">Store</Link>

                </div>
                <div className="header__right">
                    <Link to="/">Gamil</Link>
                    <Link to="/">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    alt="Google" />
                    <div className="home__inputContainer">
                        <Search />
                    </div>
            </div>
        </div>
    )
}

export default Home
