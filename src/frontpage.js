import React from 'react';
import FastForwardIcon from '@mui/icons-material/FastForward';
import './frontpage.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

function Frontpage() {
    const [query, setQuery] = React.useState("");

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="frontpage">

            <FastForwardIcon className="app__logo"/>
            <h1>testTUBE</h1>
        
            <div className="search__bar">
                <SearchIcon className="search__icon"/>
                <input className="search__input" 
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={handleSearch}
                />
            </div>

            <div className="feed">
                <HomeIcon className="home__icon"/>
                <h2>Feed</h2>
            </div>

            <div className="profile">
                <Person2Icon className="profile__icon"/>
                <h2>Profile</h2>
            </div>

            <div className="credits">
                <LoyaltyIcon className="credits__icon"/>
                <h2>Credits</h2>
                <h3> Irfan Tamim </h3>
                <h3> 01.2025 </h3>

            </div>

        </div>
    )
}

export default Frontpage;
