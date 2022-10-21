import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Home = () => {
    const homeItem = useLoaderData();
    return (
        <div>
            <div className='bg-orange-400 p-8 flex justify-center'>
                <div>
                    <img className='w-40 image mr-2' src="https://img.freepik.com/premium-vector/vector-question-answers-template-neon-style-quiz-game-exam-tv-show-school-examination-test_111651-575.jpg?w=1480" alt="" />
                    
                </div>
                <div>
                <h1 className='text-3xl'>Welcome to Mega Quiz !!</h1>
                    <p><small>Here your can check your knowledge. explore your knowledge from deferent angle.</small></p>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 p-12'>
                {
                    homeItem.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Home;