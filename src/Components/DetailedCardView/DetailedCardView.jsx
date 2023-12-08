
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const DetailedCardView = () => {
    const { id } = useParams();
    const jobs = useLoaderData();
    const idToFetch = parseInt(id);
    const job = jobs.find((job) => job.id === idToFetch);

    if (!job) {
        return <div>Loading...</div>;
    }

    const { image, title, description, price, backgroundColor } = job;

    const backgroundStyle = {
        backgroundColor: backgroundColor,
        padding: '4px 8px',
    };

    const handleDonateClick = () => {

        const currentTotal = parseFloat(localStorage.getItem('totalDonations')) || 0;


        const newTotal = currentTotal + price;


        const donationKey = `donation_${Date.now()}`;


        localStorage.setItem('totalDonations', newTotal.toString());


        localStorage.setItem(donationKey, price.toString());

        toast.success("Successfully donated!");
    };


    return (
        <div className='p-10'>
            <div className="w-full h-96 relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full md:w-full h-96 md:h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-stone-500 opacity-90 text-white p-2 rounded-lg">
                    <button onClick={handleDonateClick}>
                        <p className="text-xl font-semibold">
                            <span className="round" style={backgroundStyle}>Donate ${price}</span>
                        </p>
                    </button>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-justify">{description}</p>
            </div>
        </div>
    );
};

export default DetailedCardView;
