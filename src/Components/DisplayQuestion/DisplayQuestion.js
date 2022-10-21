import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import DisplayOptions from '../DisplayOptions/DisplayOptions';

const DisplayQuestion = ({ question }) => {
    const [string, setString] = useState(question.question);
    const [toggle, setToggle] = useState(false);
    const { correctAnswer } = question;

    useEffect(() => {
        const regex = /(<([^>]+)>)/gi;
        const newString = string.replace(regex, "");
        setString(newString);
    })
    return (
        <div className='border rounded border-orange-400w9-12 mx-auto my-6 bg-gray-100'>
            <div className='text-cyan-600 font-bold p-4'>
                {string}
            </div>
            <div className='flex flex-row justify-center align-center'>
                <div>
                    <EyeIcon
                        onClick={() => setToggle(!toggle)}
                        className="h-5 w-5 mx-auto text-purple-400"></EyeIcon>
                    {
                        toggle && <div>Correct Answer : {correctAnswer}</div>
                    }
                </div>

            </div>
            
            <div className='grid grid-cols-2 w-full mx-auto mt-6 mb-6'>
                {
                    question.options.map(option => 
                        <DisplayOptions
                        correctAnswer ={correctAnswer}
                        option={option}
                        ></DisplayOptions>)
                }

            </div>

        </div>
    );
};
export default DisplayQuestion;