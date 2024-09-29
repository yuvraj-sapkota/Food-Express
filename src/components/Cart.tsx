import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";
import CheckoutConfirmPage from "./CheckoutConfirmPage";

const Cart = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-end">
        <Button variant="link">Clear All</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-right ">Item</TableHead>
            <TableHead className="text-right">Title</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-right">
              <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell className="text-right">Menu ko name</TableCell>
            <TableCell className="text-right">Rs 80</TableCell>
            <TableCell className="flex items-center justify-end">
              <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800 shadow-md">
                <Button
                  size={"icon"}
                  variant={"outline"}
                  className="rounded-full bg-gray-200"
                >
                  <Minus />
                </Button>
                <Button
                  size={"icon"}
                  variant={"outline"}
                  disabled
                  className="font-bold border-none"
                >
                  1
                </Button>
                <Button
                  size={"icon"}
                  variant={"outline"}
                  className="font-bold rounded-full bg-green hover:bg-darkgreen"
                >
                  <Plus />
                </Button>
              </div>
            </TableCell>
            <TableCell className="text-right">Rs 80</TableCell>
            <TableCell className="text-right">
              <Button size={"sm"} className="bg-green hover:bg-darkgreen ">
                Remove
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-right">
              <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell className="text-right">Menu ko name</TableCell>
            <TableCell className="text-right">Rs 80</TableCell>
            <TableCell className="flex items-center justify-end">
              <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800 shadow-md">
                <Button
                  size={"icon"}
                  variant={"outline"}
                  className="rounded-full bg-gray-200"
                >
                  <Minus />
                </Button>
                <Button
                  size={"icon"}
                  variant={"outline"}
                  disabled
                  className="font-bold border-none"
                >
                  1
                </Button>
                <Button
                  size={"icon"}
                  variant={"outline"}
                  className="font-bold rounded-full bg-green hover:bg-darkgreen"
                >
                  <Plus />
                </Button>
              </div>
            </TableCell>
            <TableCell className="text-right">Rs 80</TableCell>
            <TableCell className="text-right">
              <Button size={"sm"} className="bg-green hover:bg-darkgreen ">
                Remove
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter className="text-2xl font-semibold">
          <TableCell colSpan={5} className="text-left">
            Total
          </TableCell>
          <TableCell className="text-right pr-5">Rs 80</TableCell>
        </TableFooter>
      </Table>

      <div className="flex justify-end my-5">
        <Button
          className="bg-green hover:bg-darkgreen"
          onClick={() => setOpen(true)}
        >
          Proceed to check out
        </Button>
      </div>
      {/* CALLING THE CHECKOUTCONFIRMPAGE COMPONENT  */}
      <CheckoutConfirmPage open={open} setOpen={setOpen} />
    </div>
  );
};

export default Cart;
