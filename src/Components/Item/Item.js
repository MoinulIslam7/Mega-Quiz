import React from 'react';
import { ArrowRightIcon} from '@heroicons/react/24/solid'
import Topics from '../Topics/Topics';

import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const {id, name, total, logo } = item;
    return (
        <div className='border-2 p-2 rounded-lg'>
            <div className='bg-gray-500 rounded-lg'>
                <img src={logo} alt="" />
            </div>
            <div>
                <h2 className='text-2xl font-semibold'>Topic: {name}</h2>
                <p><small>Total Question: {total}</small></p>
            </div>
            <div className='bg-orange-500 flex items-center justify-center rounded-lg px-24 py-1 font-semibold mt-2 text-white'>
                <button><Link to={`${id}`}>Start Now</Link></button>
                <ArrowRightIcon className='h-4 w-4 text-black-500 ml-2'></ArrowRightIcon>
               
            </div>
        </div>
    );
};

export default Item;