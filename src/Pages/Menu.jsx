import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from './components/Cover';
import menuImg from '../assets/menu/soup-bg.jpg'
import PopularMenu from './Home/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover
            img={menuImg}
            title="Out Menu"
            ></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;