
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Heder = () => {
    return (
        <div className="flex flex-col justify-between md:flex-row my-8 md:justify-between items-center ">
        <div>
            <h1 className="font-bold text-3xl">Recipe Calories</h1>
        </div>
        <div className=" ">
            <ul className="flex gap-6">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Recipe</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Search</a>
                </li>
            </ul>
        </div>
        <div className=" flex items-center space-x-2">
       <div className="bg-gray-100 p-1 flex items-center rounded-full space-x-1">
      <span className="ml-4"> <FaSearch /></span>
       <input  className=" p-1 bg-gray-100 "  type="search" name="" id="" placeholder="Search" />
       </div>
        <span className="text-3xl text-[#0BE58A]"><FaRegUserCircle /></span>
        </div>
        </div>
    );
};

export default Heder;