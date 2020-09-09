import React from "react";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

export default function Chart(){


    const data = [
        {
          name: '', First: 33, Second: 39, amt: 2400,
        },
        {
          name: '', First: 45, Second: 42, amt: 2210,
        }
      ];
  
    return(
        <div className="chart">
       <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="First" fill="#8884d8" />
        <Bar dataKey="Second" fill="#82ca9d" />
      </BarChart>

    </div>
    )
}