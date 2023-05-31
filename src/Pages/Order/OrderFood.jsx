import { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../components/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../components/FoodCard';
import OrderTabPanel from './OrderTabPanel';

const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0)
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
                    <Tab>Desserts</Tab>
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