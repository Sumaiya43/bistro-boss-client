import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Features.css';

const Features = () => {
    return (
        <section className='featured-item text-white mb-10 bg-fixed '>
            <SectionTitle
                subHeading="Check it Out"
                heading="Featured Item"></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 '>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>May 20, 2023</p>
                    <p className='uppercase my-2'> Where Can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, tenetur esse laboriosam animi quam cupiditate placeat praesentium debitis unde optio quasi facere alias sequi illo, iste aliquam ratione adipisci! Alias.</p>
                    <button className='btn btn-outline border-0 border-b-4 text-white mt-4'>Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Features;