import React, { useState } from 'react';
import { BarChart, Bar, ComposedChart, Line, Area, /* , Tooltip */ } from 'recharts';
import mockBarData from './MockData/MockProfileData';

export default function ProfileBarChart (){

const [barData] = useState(mockBarData);


    return (
      <ComposedChart
        width={100}
        height={50}
        data={barData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        {/* <Tooltip /> */}
        {/* <Area type="monotone" dataKey="profiledata" fill="#4392d6"/> */}
        <Bar dataKey="profiledata" barSize={3.5} fill="#4392d6"/>
        <Line type="monotone" dataKey="profiledata" dot={false} />
      </ComposedChart>
    );

}
