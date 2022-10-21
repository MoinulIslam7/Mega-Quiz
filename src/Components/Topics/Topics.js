import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactQuestion from '..//DisplayQuestion/DisplayQuestion';

const Topics = () => {
    const data = useLoaderData();
    const {questions} = data.data
    return (
        <div className=''>
          <h1 className='text-pink-800 text-4xl'> Quiz on {data.data.name}</h1>
          
          
          {
            questions.map(question => <ReactQuestion
            key={question.id}
            question={question}
            ></ReactQuestion>)
          }
          
            
        </div>
    );
};

export default Topics;