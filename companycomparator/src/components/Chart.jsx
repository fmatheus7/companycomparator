import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import Form from './Form'
export default function Chart(props) {

    const data = [
        {
            name: 'P/L', Company: props.precoLucro,
        },
        {
            name: 'D. Yield', Company: props.dividendYield,
        },
        {
            name: 'Liquidez Corrente', Company: props.liquidezCorrent,
        },
        {
            name: 'PVPA', Company: props.PVPA,
        },
           ];




    return (
        <div className="grafico">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* <Bar dataKey="Ideal" stackId="a" fill="#8884d8" /> */}
                <Bar dataKey="Company" stackId="a" fill="#82ca9d" />
            </BarChart>
        </div>
    )
}
