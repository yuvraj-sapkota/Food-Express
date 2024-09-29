import { Timer } from "lucide-react";
import { Badge } from "./ui/badge";
import restaurantImage from "/assets/restaurant1.png";
import AvailableMenu from "./AvailableMenu";

const RestaurantDetails = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto my-10">
        <div className="w-full">
          <div className="relative w-full h-32 md:h-64 lg:h-72">
            <img
              src={restaurantImage}
              alt="restaurant_image"
              className="object-cover w-full h-full  rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="my-5">
              <h1 className="font-medium text-xl">Restaurant ko name</h1>
              <div className="flex gap-2 my-2">
                {["Biryani", "momos"].map((cuisine: string, idx: number) => {
                  return (
                    <>
                      <Badge key={idx}>{cuisine}</Badge>
                    </>
                  );
                })}
              </div>
              <div className="flex md:flex-row flex-col gap-2 my-5">
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5" />
                  <h1 className="flex items-center gap-2 font-medium">
                    Delivery Time: &nbsp;
                    <span className="text-greencode">35 mins</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* CALLING THE AVAILABLEMENU COMPOENENT  */}
          <AvailableMenu/>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
