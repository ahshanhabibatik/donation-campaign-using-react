import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const Layouts = ({ layout }) => {
    const { id, image, title, category, backgroundColor, textColor, price, description } = layout;
    const [addedToDonations, setAddedToDonations] = useState(false);

    const cardStyle = {
        backgroundColor,
    };

    const titleStyle = {
        color: textColor,
    };

    const handleCardClick = () => {
        if (!addedToDonations) {

            const donations = JSON.parse(localStorage.getItem('donations')) || [];

            const isAlreadyAdded = donations.some((donation) => donation.id === id);

            if (!isAlreadyAdded) {

                donations.push({ id, image, title, category, backgroundColor, textColor, price, description });
                localStorage.setItem('donations', JSON.stringify(donations));
                setAddedToDonations(true);
                toast.success('Successfully added to donations!');
            } else {
                toast.info('Already added to donations!');
            }
        }
    };

    return (
        <div onClick={handleCardClick}>
            <div className="shadow-lg rounded-lg" style={cardStyle}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-56 object-cover object-center"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold " style={titleStyle}>
                        <span className='px-2 py-1' style={cardStyle}>
                            {title}
                        </span>
                    </h2>
                    <p className="text-gray-500" style={titleStyle} >{category}</p>
                </div>
                {addedToDonations ? (
                    <div className="bg-gray rounded-md text-white">

                    </div>
                ) : null}
            </div>
        </div>
    );
};

Layouts.propTypes = {
    layout: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        textColor: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Layouts;
