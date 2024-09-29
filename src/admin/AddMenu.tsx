import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import EditMenu from "./EditMenu";
import { MenuFormSchema, menuSchema } from "@/schema/menuSchema";

const AddMenu = () => {
  const [input, setInput] = useState<MenuFormSchema>({
    name: "",
    description: "",
    price: 0,
    image: undefined,
  });

  const loading = false;
  const [selectedMenu, setSelectedMenu] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [error, setError] = useState<Partial<MenuFormSchema>>({});

  const menus = [
    {
      name: "Biryani",
      image: "/assets/restaurant1.png",
      description: "description hunxa yema",
      price: 80,
    },
    {
      name: "chowmin",
      image: "/assets/restaurant1.png",
      description: "chowmin ko description hunxa yema",
      price: 100,
    },
  ];

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = menuSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setError(fieldErrors as Partial<MenuFormSchema>);
      return;
    }

    // API IMPLEMENTATION START FROM HERE
  };
  return (
    <>
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex justify-between">
          <h1 className="font-bold  md:font-extrabold text-lg md:text-2xl">
            Available Menus
          </h1>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <Button className="bg-green hover:bg-darkgreen">
                {" "}
                <Plus className="mr-2" /> Add Menu
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>ADD A NEW MENU</DialogTitle>
                <DialogDescription>
                  Create a menu that will make your restaurant stand out
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={submitHandler} className="space-y-4">
                <div>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={Input.name}
                    onChange={changeEventHandler}
                    placeholder="Enter menu name"
                  />
                  {error && (
                    <span className="text-xs font-medium text-red-600">
                      {error.name}
                    </span>
                  )}
                </div>
                <div>
                  <Label>Description</Label>
                  <Input
                    type="text"
                    name="description"
                    value={input.description}
                    onChange={changeEventHandler}
                    placeholder="Enter menu Description"
                  />
                  {error && (
                    <span className="text-xs font-medium text-red-600">
                      {error.description}
                    </span>
                  )}
                </div>
                <div>
                  <Label>Price in NRS</Label>
                  <Input
                    type="number"
                    name="price"
                    value={input.price}
                    onChange={changeEventHandler}
                    placeholder="Enter menu Price"
                  />
                  {error && (
                    <span className="text-xs font-medium text-red-600">
                      {error.price}
                    </span>
                  )}
                </div>
                <div>
                  <Label>Upload Menu Image</Label>
                  <Input
                    type="file"
                    name="image"
                    onChange={(e) =>
                      setInput({
                        ...input,
                        image: e.target.files?.[0] || undefined,
                      })
                    }
                  />
                  {error && (
                    <span className="text-xs font-medium text-red-600">
                      {error.image?.name}
                    </span>
                  )}
                </div>
                <DialogFooter className="mt-5">
                  {loading ? (
                    <Button
                      disabled
                      className="bg-green hover:bg-darkgreen w-full"
                    >
                      Please Wait &nbsp;{" "}
                      <Loader2 className="animate-spin mr-2 w-4 h-4" />
                    </Button>
                  ) : (
                    <Button className="bg-green hover:bg-darkgreen w-full">
                      Submit
                    </Button>
                  )}
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        {menus.map((menu: any, idx: number) => {
          return (
            <div key={idx} className="mt-6 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border">
                <img
                  src={menu.image}
                  alt=""
                  className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h1 className="text-lg font-semibold text-gray-800 flex">
                    {menu.name}
                  </h1>
                  <p className="text-sm text-gray-600 mt-1 flex">
                    {menu.description}
                  </p>
                  <h2 className="font-semibold mt-2 flex">
                    Price: <span className="text-greencode">{menu.price}</span>
                  </h2>
                </div>
                <Button
                  size={"sm"}
                  className="bg-green hover:bg-darkgreen mt-2"
                  onClick={() => {
                    setSelectedMenu(menu), setEditOpen(true);
                  }}
                >
                  {" "}
                  Edit
                </Button>
              </div>
            </div>
          );
        })}

        {/* CALLING THE COMPONENT EDIT MENU COMPONENT  */}
        <EditMenu
          selectedMenu={selectedMenu}
          editOpen={editOpen}
          setEditOpen={setEditOpen}
        />
      </div>
    </>
  );
};

export default AddMenu;
