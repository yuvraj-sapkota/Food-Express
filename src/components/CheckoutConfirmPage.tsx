import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

import { Label } from "@radix-ui/react-menubar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
// import { Contact } from "lucide-react";

const CheckoutConfirmPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    country: "",
  });

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const checkoutHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // api implementation started from here
    console.log(input);
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle className="font-bold">Review your order</DialogTitle>
          <DialogDescription className="text-xs">
            Double check your delivery details and ensure everything is in
            order. <br />
            When you are ready, hit confirm button to finalize your order.
          </DialogDescription>
          <form
            onSubmit={checkoutHandler}
            className="md:grid grid-cols-2 gap-2 space-y-1 md:space-y-0"
          >
            <div>
              <Label>Fullname</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Contact</Label>
              <Input
                type="text"
                name="contact"
                value={input.contact}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Address</Label>
              <Input
                type="text"
                name="address"
                value={input.address}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>City</Label>
              <Input
                type="text"
                name="city"
                value={input.city}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Country</Label>
              <Input
                type="text"
                name="country"
                value={input.country}
                onChange={changeEventHandler}
              />
            </div>
            <DialogFooter className="col-span-2 pt-5">
              <Button className="bg-green hover:bg-lime-600">
                Continue To Payment
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CheckoutConfirmPage;
