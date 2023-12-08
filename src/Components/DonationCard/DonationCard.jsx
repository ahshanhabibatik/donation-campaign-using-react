import PropTypes from 'prop-types';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ layout }) => {
    const { id, image, title, price, category, backgroundColor, textColor } = layout;
    // const [addedToDonations, setAddedToDonations] = useState(false);

    const cardStyle = {
        backgroundColor,
    };

    const titleStyle = {
        color: textColor,
    };

    return (
        <div>
            <div className="rounded-lg" style={cardStyle}>
                <div className='flex'>
                    <img
                        src={image}
                        alt={title}
                        className=" w-32 md:w-48 object-cover object-center"
                    />
                    <div className="p-4">
                        <h2 className="text-sm font-semibold" style={titleStyle}>
                            <span className='px-2 py-1 rounded-lg' style={cardStyle}>{title}</span>
                        </h2>
                        <p className="text-sm md:text-2xl md:font-bold">{category}</p>

                        <p className='text-sm md:text-xl font-bold' style={titleStyle}>Price:${price}</p>

                        <Link to={`/details/${id}`}>
                            <button style={cardStyle} className='mt-2 text-sm md:text-xl px-2 py-1 rounded-lg text-white md:font-bold'>
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Define propTypes for DonationCard
DonationCard.propTypes = {
    layout: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        textColor: PropTypes.string.isRequired,
    }).isRequired,
};

export default DonationCard;
