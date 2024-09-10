import React, { useState } from 'react';
import StressChart from './StressChart';

const Dashboard = () => {
    const [stressLevel, setStressLevel] = useState(5);

    const handleStressLog = (e) => {
        e.preventDefault();
        // Log stress level (send to backend)
        console.log(`Stress level logged: ${stressLevel}`);
    };

    return (
        <div className="dashboard">
            <h2>Welcome to Your Dashboard</h2>
            <form onSubmit={handleStressLog}>
                <label>Log Your Stress Level (1-10):</label>
                <input 
                    type="number" 
                    value={stressLevel} 
                    onChange={(e) => setStressLevel(e.target.value)} 
                    min="1" 
                    max="10" 
                    required 
                />
                <button type="submit">Submit</button>
            </form>
            <StressChart />
        </div>
    );
};

export default Dashboard;
