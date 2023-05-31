
import { Helmet } from 'react-helmet-async';
import Cover from './components/Cover';
import menuImg from '../assets/menu/soup-bg.jpg'

import useMenu from '../Hooks/useMenu';

const Menu = () => {

    const [menu] = useMenu();
    
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover
            img={menuImg}
            title="Out Menu"
            ></Cover>
            
        </div>
    );
};

export default Menu;