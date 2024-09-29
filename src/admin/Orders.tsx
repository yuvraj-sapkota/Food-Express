import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-menubar";

const Orders = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Orders Overview
        </h1>
        <div className="space-y-8">
          {/* Restaurant orders display here  */}
          <div className="flex flex-col md:flex-row justify-between items-start sm:items-center bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 border-gray-200 dark:border-gray-700">
            <div className="flex-1 mb-6 sm:mb-0">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex">
                Lorem
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2 flex">
                <span className="font-semibold ">Address: &nbsp;</span>
                Lorem, ipsum dolor.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 flex">
                <span>Total Amount: </span>
                160
              </p>
            </div>
            <div className="w-full sm:w-1/3 ">
              <Label className=" text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex">
                Order Status
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="select status"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {[
                      "Pending",
                      "Conifrmed",
                      "Preparing",
                      "OutFOrDelivery",
                      "Delivered",
                    ].map((status: string, index: number) => {
                      return (
                        <SelectItem key={index} value={status.toLowerCase()}>
                          {status}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
