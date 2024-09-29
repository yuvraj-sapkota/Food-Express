import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  RestaurantFormSchema,
  restaurantFromSchema,
} from "@/schema/restaurantSchema";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

const Restaurant = () => {
  const loading = false;
  const restaurantXaVane = false;

  const [errors, setErrors] = useState<Partial<RestaurantFormSchema>>({});

  const [input, setInput] = useState<RestaurantFormSchema>({
    restaurantName: "",
    city: "",
    country: "",
    deliveryTime: 0,
    cuisines: [],
    imageFile: undefined,
  });

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = restaurantFromSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<RestaurantFormSchema>);
      return;
    }
    // naya restaurant ko api implementation suru hunxa yaha dekhi
    console.log(input);
  };
  return (
    <>
      <div className="max-w-6xl mx-auto my-10">
        <div>
          <div>
            <h1 className="font-extrabold text-2xl mb-5">Add Restaurant</h1>
            <form onSubmit={submitHandler}>
              <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
                {/* RESTAURANT NAME  */}
                <div>
                  <Label className="flex">Restaurant Name</Label>
                  <Input
                    type="text"
                    name="restaurantName"
                    value={input.restaurantName}
                    onChange={changeEventHandler}
                    placeholder="Enter your restaurant name"
                  />
                  {errors && (
                    <span className="text-xs text-red-600 font-medium">
                      {errors.restaurantName}
                    </span>
                  )}
                </div>
                <div>
                  <Label className="flex">City</Label>
                  <Input
                    type="text"
                    name="city"
                    value={input.city}
                    onChange={changeEventHandler}
                    placeholder="Enter your city name"
                  />
                  {errors && (
                    <span className="text-xs text-red-600 font-medium">
                      {errors.city}
                    </span>
                  )}
                </div>
                <div>
                  <Label className="flex">Country</Label>
                  <Input
                    type="text"
                    name="country"
                    value={input.country}
                    onChange={changeEventHandler}
                    placeholder="Enter your country name"
                  />
                  {errors && (
                    <span className="text-xs text-red-600 font-medium">
                      {errors.country}
                    </span>
                  )}
                </div>
                <div>
                  <Label className="flex">Delivery Time</Label>
                  <Input
                    type="number"
                    name="deliveryTime"
                    value={input.deliveryTime}
                    onChange={changeEventHandler}
                    placeholder="Enter your delivery time"
                  />
                  {errors && (
                    <span className="text-xs text-red-600 font-medium">
                      {errors.deliveryTime}
                    </span>
                  )}
                </div>
                <div>
                  <Label className="flex">Cuisines</Label>
                  <Input
                    type="text"
                    name="cuisines"
                    value={input.cuisines}
                    onChange={(e) =>
                      setInput({
                        ...input,
                        cuisines: e.target.value.split(","),
                      })
                    }
                    placeholder="e.g. Momos, Chowmin"
                  />
                  {errors && (
                    <span className="text-xs text-red-600 font-medium">
                      {errors.cuisines}
                    </span>
                  )}
                </div>
                <div>
                  <Label className="flex">Upload Restaurant Image</Label>
                  <Input
                    onChange={(e) =>
                      setInput({
                        ...input,
                        imageFile: e.target.files?.[0] || undefined,
                      })
                    }
                    type="file"
                    accept="image/*"
                    name="iamgeFile"
                  />
                  {errors && (
                    <span className="text-xs text-red-600 font-medium">
                      {errors.imageFile?.name || "Image file is required"}
                    </span>
                  )}
                </div>
              </div>
              <div className="my-5 w-fit">
                {loading ? (
                  <Button disabled className="bg-green hover:bg-darkgreen">
                    Please wait &nbsp; <Loader2 className="animate-spin" />
                  </Button>
                ) : (
                  <Button className="bg-green hover:bg-darkgreen">
                    {restaurantXaVane
                      ? "Update Restaurant"
                      : " Add new Restaurant"}
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
