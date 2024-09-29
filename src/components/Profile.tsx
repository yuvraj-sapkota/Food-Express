import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Loader,
  Loader2,
  Locate,
  Mail,
  MapPin,
  MapPinHouse,
  Plus,
} from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-menubar";
import { Button } from "./ui/button";
// import { image } from "../assets/image.png";
import profileImage from "../assets/image.png";

const Profile = () => {
  const loading = false;
  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    profilePicture: "",
  });
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [selectedProfilePicture, setSelectedProfilePicture] =
    useState<string>("");

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedProfilePicture(result);
        setProfileData((prevData) => ({ ...prevData, profilePicture: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // update profile api implementation start 


  };

  return (
    <>
      <form
        className="max-w-7xl mx-auto my-5 mt-10"
        onSubmit={updateProfileHandler}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="bg-gray-200 flex items-center justify-center rounded-full relative md:w-28 md:h-28 w-20 h-20">
              <AvatarImage src={selectedProfilePicture} />
              <AvatarFallback>CN</AvatarFallback>
              <input
                ref={imageRef}
                type="file"
                className="hidden "
                accept="image/*"
                onChange={fileChangeHandler}
              />
              <div
                onClick={() => imageRef.current?.click()}
                className="absolute border border-black inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer"
              >
                <Plus className="text-white w-8 h-8 " />
              </div>
            </Avatar>
            <Input
              type="text"
              name="fullname"
              value={profileData.fullname}
              onChange={changeHandler}
              className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent"
            />
          </div>
        </div>

        <div className="flex justify-between">
          {/* input for email */}
          <div className="grid md:grid-cols-1  w-2/4 md:gap-2 gap-3 my-10">
            <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
              <Mail className="text-gray-500" />
              <div className="w-full">
                <Label className="flex">Email</Label>
                <input
                  name="email"
                  value={profileData.email}
                  onChange={changeHandler}
                  className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
              <Locate className="text-gray-500" />
              <div className="w-full">
                <Label className="flex">Address</Label>
                <input
                  name="address"
                  value={profileData.address}
                  onChange={changeHandler}
                  className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                />
              </div>
            </div>
            {/* </div> */}

            {/* input for city  */}

            <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
              <MapPin className="text-gray-500" />
              <div className="w-full">
                <Label className="flex">City</Label>
                <input
                  // type="text"
                  name="city"
                  value={profileData.city}
                  onChange={changeHandler}
                  className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                />
              </div>
            </div>
            {/* </div> */}

            {/* input for country  */}

            <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
              <MapPinHouse className="text-gray-500" />
              <div className="w-full">
                <Label className="flex">Country</Label>
                <input
                  name="country"
                  value={profileData.country}
                  onChange={changeHandler}
                  className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
                />
              </div> 
            </div>
          </div>

          {/* just checking for photo */}
          <div className="  h-2/5  ">
            {/* <img className="w-2/3 mt-5 rounded-full" src={selectedProfilePicture} alt="" /> */}
            <img
              className="w-2/3 mt-2 rounded-full"
              src={profileImage}
              alt=""
            />
          </div>
        </div>

        <div className="text-center">
          {loading ? (
            <Button className="bg-green-500 hover:bg-green-600">
              Please wait &nbsp;{" "}
              <Loader2 className="animate-spin mr-2 h-4 w-4" />{" "}
            </Button>
          ) : (
            <Button className="bg-green hover:bg-darkgreen "> Update </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default Profile;
