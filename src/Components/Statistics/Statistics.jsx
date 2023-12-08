import { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = ['#00C49F', '#e84118'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const MyPieChart = () => {
    const [donationData, setDonationData] = useState([]);

     
    const getDonationDataFromLocalStorage = () => {
        const donations = Object.keys(localStorage)
            .filter((key) => key.startsWith('donation_'))
            .map((key) => parseFloat(localStorage.getItem(key)));

        return donations;
    };

    useEffect(() => {
         
        const data = getDonationDataFromLocalStorage();
 
        const totalDonations = data.reduce((total, donation) => total + donation, 0);
 
        const yourDonation = data[data.length - 1];  
        const yourDonationPercentage = ((yourDonation / totalDonations) * 100).toFixed(1);
 
        const pieChartData = [
            { name: 'Your Donation', value: parseFloat(yourDonationPercentage), color: 'teal' },
            { name: 'Total Donation', value: 100 - parseFloat(yourDonationPercentage), color: 'red' },
        ];

        setDonationData(pieChartData);
    }, []);

    return (
        <div className='flex justify-center w-full relative'>
            <div style={{ position: 'relative' }}>
                
                <div className='absolute bottom-0  flex items-center justify-center align-middle gap-2'>
                    <div>
                        <p>YourDonation</p>
                    </div>
                    <div className="w-8 h-2 bg-teal-400 mt-1  "></div>
                </div>

                <div className='absolute bottom-0  flex ml-36 items-center justify-center align-middle gap-2'>
                    <div>
                        <p>TotalDonation</p>
                    </div>
                    <div className="w-8 h-2 bg-red-500 mt-1  "></div>
                </div>
                <div style={{ position: 'relative' }}>
                     
                    <div className='absolute bottom-0'>
                        <p><span></span></p>
                        <div className="   "></div>
                    </div>
                </div>

            </div>
            <PieChart className='' width={300} height={400}>
                <Pie
                    data={donationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {donationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>

        </div>
    );
};

export default MyPieChart;
