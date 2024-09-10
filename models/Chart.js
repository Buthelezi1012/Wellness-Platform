import React from 'react';
import { Line } from 'react-chartjs-2';

const StressChart = () => {
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3'], // These will dynamically update
        datasets: [
            {
                label: 'Stress Level',
                data: [4, 7, 3], // Sample data
                borderColor: 'rgba(226, 35, 26, 1)',
                fill: false
            }
        ]
    };

    return <Line data={data} />;
};

export default StressChart;
