

const Banner = () => {
    return (
        <div className="bg-slate-50 h-48 text-center p-3 ">


            <h1 className="text-4xl font-extrabold mt-6">I Grow By Helping People In Need</h1>
            <div className="mt-10 ">
                <input className="py-2 px-2 border w-[400px]" placeholder="Search here...." type="text" />
                <button className="bg-[#FF444A] py-2 px-5 rounded-sm text-white hover:bg-zinc-500 ">Search</button>
            </div>
        </div>
    );
};

export default Banner;