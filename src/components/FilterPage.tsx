import { Checkbox } from "@radix-ui/react-checkbox";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-menubar";

export type FilterOptionsState = {
  id: string;
  label: string;
};

const FilterOptions: FilterOptionsState[] = [
  { id: "burger", label: "Burger" },
  { id: "momo", label: "Momo" },
  { id: "chowmin", label: "Chowmin" },
  { id: "samosa", label: "Samosa" },
];

const FilterPage = () => {
  const appliedFilterHandler = (value: string) => {
    console.log(value);
  };
  return (
    <div className="md:w-72">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-lg">Filter by cuisines</h1>
        <Button variant={"link"}>Reset</Button>
      </div>
      {FilterOptions.map((option) => {
        return (
          <div key={option.id} className="flex items-center space-x-2 my-5">
            <input
              type="checkbox"
              id={option.id}
              onClick={() => appliedFilterHandler(option.label)}
            />
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {option.label}
            </Label>
          </div>
        );
      })}
    </div>
  );
};

export default FilterPage;
