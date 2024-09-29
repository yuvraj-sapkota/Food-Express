import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  HandPlatter,
  Loader2,
  Menu,
  PackageCheck,
  ShoppingBag,
  ShoppingCartIcon,
  SquareMenu,
  User,
  Utensils,
} from "lucide-react";

import { Link } from "react-router-dom";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import logo from "/assets/Logo.jpeg";

const Navbar = () => {
  const admin = true;
  const loading = false;

  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14 ">
          <Link to="/">
            {/* <h1 className="font-bold md:font-extrabold text-2xl">
              Food Express
            </h1> */}
            <img className="w-60 h-30" src={logo} alt="" />
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <div className="hidden md:flex items-center gap-6">
              <Link to="/">Home</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/order/status">Order</Link>

              {admin && (
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>Dashboard</MenubarTrigger>

                    <MenubarContent>
                      <MenubarItem>
                        <Link to="/admin/restaurant">Restaurant</Link>
                      </MenubarItem>
                      <MenubarItem>
                        <Link to="/admin/menu">Menu</Link>
                      </MenubarItem>
                      <MenubarItem>
                        <Link to="/admin/orders">Orders</Link>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              )}
            </div>
            <div className="flex items-center gap-4">
              {/* <div>d</div> */}
              <Link to="/cart" className="relative cursor-pointer">
                <ShoppingCartIcon />

                <Button
                  size={"icon"}
                  className="bg-red-500 rounded-full h-4 w-4 absolute -inset-y-3 left-2 text-xs"
                >
                  4
                </Button>
              </Link>

              <div>
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div>
                {loading ? (
                  <Button disabled className="bg-green-600 ">
                    please wait &nbsp; <Loader2 className="animate-spin" />
                  </Button>
                ) : (
                  <Button className="bg-green hover:bg-darkgreen">
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden lg:hidden">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const MobileNavbar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} className="rounded-full" variant="outline">
            <Menu className=" h-5 w-5" />{" "}
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader className="flex">
            <SheetTitle>Food Express </SheetTitle>
          </SheetHeader>
          <hr className="my-2" />

          <SheetDescription className="flex-1">
            <Link
              to="/profile"
              className=" flex  items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <User />
              <span>Profile</span>
            </Link>
            <Link
              to="/order/status"
              className=" flex  items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <HandPlatter />
              <span>Oder</span>
            </Link>
            <Link
              to="/cart"
              className=" flex  items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <ShoppingBag />
              <span>Cart(0)</span>
            </Link>
            <Link
              to="/admin/menu"
              className=" flex  items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <SquareMenu />
              <span>Menu</span>
            </Link>
            <Link
              to="/admin/restaurant"
              className=" flex  items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <Utensils />
              <span>Restaurant</span>
            </Link>
            <Link
              to="/admin/orders"
              className=" flex  items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
            >
              <PackageCheck />
              <span>Reataurant Orders</span>
            </Link>
          </SheetDescription>
          <SheetFooter className="flex flex-col gap-3">
            {/* {user ? ( */}
            <div className="flex flex-row items-center gap-2">
              <Avatar>
                <AvatarImage />
                <AvatarFallback className="bg-gray-200 h-4 w-4 px-1 py-1 rounded-full">
                  CN
                </AvatarFallback>
              </Avatar>
              <h1 className=" font-bold">User ko name</h1>
            </div>

            <SheetClose asChild>
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 w-full"
              >
                Logout
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
