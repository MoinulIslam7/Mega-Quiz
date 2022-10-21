import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='flex md:justify-between items-center p-5'>
                <h4 className='ml-12 md:text-4xl font-semibold bg-orange-300 p-2 rounded-lg'>Mega Quiz</h4>
                <nav className='header mr-12'>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;