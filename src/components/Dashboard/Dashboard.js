import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setData(data))
    }, [])
    return (
        <div className='mt-8 grid grid-cols-2 justify-items-center' >
            <div>
                <h2 className="text-4xl text-orange-400 mb-16">Revenue Chart</h2>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey={'sell'} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div>
                <h2 className="text-4xl text-orange-400">Customer Chart</h2>
                <PieChart width={400} height={400}>
                    <Pie data={data} dataKey="sell" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
                </PieChart>
            </div>
            <div>
                <h2 className="text-4xl text-orange-400 mb-8">More Data</h2>
                <BarChart width={500} height={400} data={data}>
                    <Bar dataKey="sell" fill="#8884d8" />
                    <Tooltip />
                    <Legend />
                    <XAxis dataKey={'month'} />
                    <YAxis dataKey={'sell'} />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;