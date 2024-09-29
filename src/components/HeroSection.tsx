import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import HeroImage from "../assets/hero-section-img.jpeg";

const HeroSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  console.log(searchText);

  const navigate = useNavigate();
  return (
    <>
      <div className=" flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20  bg-[url('/assets/heroimg.jpg')] bg-cover bg-center h-screen ">
        <div className="flex flex-col gap-5  mr-80 w-full mt-20 ">
          <div className="flex flex-col gap-5 justify-start ">
            {/* <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
              Order food anytime & anywhere
            </h1> */}
            <h1 className="font-bold  text-4xl mr-15 ">
              Express your Craving, We'll <br /> Deliver the flavor
            </h1>
            <p className="text-gray-500 ">
              Hey! Our delicious food is waiting for you
            </p>
          </div>
          <div className="relative flex items-center gap-2 justify-end ">
            <Input
              type="text"
              placeholder="Search Restaurant or Cuisine"
              className="pl-10 border-2 shadow-lg w-2/3 flex"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Search className=" text-gray-500 inset-y-2 inset-x-36 absolute" />
            <Button
              className="bg-green hover:bg-darkgreen"
              onClick={() => navigate(`/search/${searchText}`)}
            >
              Find Restaurant
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

// const HeroSection = () => {
//   return (
//     <>
//       <div className=" bg-[url('/assets/hero-section-img.jpeg')] bg-cover bg-center h-screen">
//         <h1 className="font-bold text-4xl mt-5">Heros section </h1>
//       </div>
//     </>
//   );
// };

// export default HeroSection;
