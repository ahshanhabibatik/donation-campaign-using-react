import { useEffect, useState } from 'react';
import Layouts from '../Layouts/Layouts';
import noFounded from '../../assets/datafounded.png'

const GridLayout = () => {
    const [layoutData, setLayoutData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch('formalData.json')
            .then((res) => res.json())
            .then((data) => {
                setLayoutData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
         
        const filtered = layoutData.filter((layout) =>
            layout.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchQuery, layoutData]);

    const handleSearch = () => {
         
        const filtered = layoutData.filter((layout) =>
            layout.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div>
            <div className="bg-slate-50 h-48 text-center p-3">
                <h1 className=" text-xl md:text-2xl lg:text-4xl font-extrabold mt-6">
                    I Grow By Helping People In Need
                </h1>
                <div className="mt-10 md:mb-24 border-none">
                    <input
                        className="py-2  px-2 border-none md:w-[200px] lg:w-[400px]"
                        placeholder="Search here...."
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        className="bg-[#FF444A] py-2 px-5 -ml-4 border-none rounded-sm text-white hover:bg-zinc-500"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 p-3">
                {filteredData.length > 0 ? (
                    filteredData.map((layout) => (
                        <div key={layout.id}>
                            <Layouts layout={layout} />
                        </div>
                    ))
                ) : (
                    <div className='text-center mx-auto relative'>
                        <p className='text-3xl font-bold flex   align-middle text-center justify-center mx-auto '>No results found!!</p>
                        <img src={noFounded} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default GridLayout;
