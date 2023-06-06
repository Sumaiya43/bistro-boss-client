import { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../components/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../components/FoodCard';
import OrderTabPanel from './OrderTabPanel';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const OrderFood = () => {

    <Helmet>
        <title>Bistro Boss || Order</title>
    </Helmet>

    // selected tab based on route
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)

    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Cover
                img={orderImg}
                title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    {/* <div className='grid md:grid-cols-3 gap-10'>
                        {

                            salad.map(item => <FoodCard
                                key={item._id}
                                item={item}></FoodCard>)

                        }
                    </div> */}
                    <OrderTabPanel items={salad}></OrderTabPanel>
                </TabPanel>
                <TabPanel>
                    <OrderTabPanel items={pizza}></OrderTabPanel>
                </TabPanel>
                <TabPanel>
                    <OrderTabPanel items={soup}></OrderTabPanel>
                </TabPanel>
                <TabPanel>
                    <OrderTabPanel items={dessert}></OrderTabPanel>
                </TabPanel>
                <TabPanel>
                    <OrderTabPanel items={drinks}></OrderTabPanel>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderFood;