import { Link } from "react-router-dom";
import img from '../../assets/datafounded.png'

const ErrorPage = () => {
    return (
        <div className=" mx-auto text-center  ">
            <img className="flex justify-center mx-auto w-96" src={img} alt="" />
            <h1 className="text-3xl">Oops!!!</h1>
            <Link className="btn" to={'/'}>Go back Home</Link>
        </div>
    );
};

export default ErrorPage;