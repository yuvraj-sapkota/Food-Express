import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MenuFormSchema, menuSchema } from "@/schema/menuSchema";
import { Label } from "@radix-ui/react-menubar";
import { Loader2 } from "lucide-react";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const EditMenu = ({
  selectedMenu,
  editOpen,
  setEditOpen,
}: {
  selectedMenu: MenuFormSchema;
  editOpen: boolean;
  setEditOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  //    FUNCTION DEFINING SECTION

  const [error, setError] = useState<Partial<MenuFormSchema>>({});
  const loading = false;
  const [input, setInput] = useState<MenuFormSchema>({
    name: "",
    description: "",
    price: 0,
    image: undefined,
  });

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);

    const result = menuSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setError(fieldErrors as Partial<MenuFormSchema>);
      return;
    }

    // api implementations starts from here
  };

  useEffect(() => {
    setInput({
      name: selectedMenu?.name || "",
      description: selectedMenu?.description || "",
      price: selectedMenu?.price || 0,
      image: undefined,
    });
  }, [selectedMenu]);

  return (
    <>
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Menu</DialogTitle>
            <DialogDescription>
              Update your menu to keep your offerings fresh and exciting!
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
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
                <Button disabled className="bg-green hover:bg-darkgreen w-full">
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
    </>
  );
};

export default EditMenu;
