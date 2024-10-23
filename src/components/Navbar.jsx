


const Navbar = () => {
    return (
        <div className="my-8 bg-cover bg-no-repeat rounded-3xl w-full h-full   md:h-[35.5rem]" style={{
            backgroundImage: 'url(https://i.ibb.co/nB0CqQ3/bg-image.png)'
        }}>
          
          <div className="text-white w-9/12 text-center justify-center  items-center mx-auto flex flex-col h-full space-y-4 ">
            <h1 className="font-bold  md:text-[3.25rem]">Discover an exceptional cookingclass tailored for you!</h1>
            <p className="">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding  problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex gap-4 pb-4">
                <button className="font-bold bg-[#0BE58A] rounded-full p-4 text-black">Explore now</button>
                <button className="font-bold rounded-full  p-4 border ">Our Feedback</button>
            </div>
          </div>
        </div>
    );
};

export default Navbar;
