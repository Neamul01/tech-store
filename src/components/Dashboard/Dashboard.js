import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setData(data))
    }, [])
    return (
        <div className='mt-8 flex justify-around' >
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
                    <Pie data={data} dataKey="sell" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label />
                    <Pie data={data} dataKey="month" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;