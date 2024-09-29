import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import availableMenuImage from "/assets/heroimg.jpg";

const AvailableMenu = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menu
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">

        {
            // yo map chai maile afaile gareko hai, khas ma yesma 1ta matra menu available xa
            [1,2,3,4,5,6].map((menu:number, idx:number)=>{
                return <div>

        <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden mb-4">
          <img
            src={availableMenuImage}
            alt=""
            className="w-full h-40 object-cover"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Menu ko name
            </h2>
            <p className="  text-sm text-gray-600 mt-2">
              Description hunxa yesma lakldfla aldfl aldfhlal fsrfq asdgfa a
            </p>
            <h3 className="text-lg mt-4">
              Price:{" "}
              <span
                className="text-[#319a46df]"
              >
                Rs 80
              </span>
            </h3>
            <CardFooter className="p-4">
                <Button className="bg-green hover:bg-darkgreen w-full">Add to Cart</Button>
            </CardFooter>
          </CardContent>
        </Card>
                </div>
            })
        }
      </div>
    </div>
  );
};

export default AvailableMenu;


// TIME PUGYO VANE LOADING HUNI BELA MA SHOW GARNA LAI SKELETON BANAUXU YOU AVAILABLEMENU COMPONENT KO LAGI
