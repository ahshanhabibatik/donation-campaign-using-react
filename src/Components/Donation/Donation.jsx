import { useEffect, useState } from 'react';
import DonationCard from '../DonationCard/DonationCard';

const Donations = () => {
    const [donations, setDonations] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const storedDonations = JSON.parse(localStorage.getItem('donations')) || [];
        setDonations(storedDonations);
    }, []);

    const addToDonations = (donation) => {
        const updatedDonations = [...donations, donation];
        setDonations(updatedDonations);
        localStorage.setItem('donations', JSON.stringify(updatedDonations));
    };

    const visibleDonations = showAll ? donations : donations.slice(0, 4);

    const handleShowAllClick = () => {
        setShowAll(true);
    };

    const handleShowLessClick = () => {
        setShowAll(false);
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3">
                {visibleDonations.map((donation) => (
                    <div key={donation.id}>
                        <DonationCard layout={donation} onAddToDonations={addToDonations} />
                    </div>
                ))}
            </div>

            {!showAll && donations.length > 4 && (
                <div>
                    <button
                        onClick={handleShowAllClick}
                        className='text-xl mt-3 px-3 py-1 mb-5 rounded-xl flex mx-auto text-center font-bold bg-green-700 text-white justify-center'
                    >
                        Show All
                    </button>
                </div>
            )}

            {showAll && (
                <div>
                    <button
                        onClick={handleShowLessClick}
                        className='text-xl mt-3 px-3 py-1 mb-5 rounded-xl font-bold flex mx-auto text-center bg-red-700 text-white justify-center'
                    >
                        Show Less
                    </button>
                </div>
            )}
        </div>
    );
};

export default Donations;
