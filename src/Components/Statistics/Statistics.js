import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();

    return (
        <div>
            <h2 className='text-2xl'>Total questions graph</h2> <br />
            <LineChart className='mx-auto' width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default Statistics;