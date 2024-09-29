import { useParams } from "react-router-dom";
import FilterPage from "./FilterPage";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Divide, Globe, MapPin, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Link } from "react-router-dom";
import restaurant from "/assets/restaurant1.png";
import { Skeleton } from "./ui/skeleton";

const SearchPage = () => {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <>
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* filter page ko component halni yaha  */}
          <FilterPage />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by restaurant & cuisines"
              />
              <Button className="bg-green hover:bg-darkgreen">Search</Button>
            </div>

            {/* search gareko item haru dekhauni yeta */}

            <div>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
                <h1 className="font-medium text-lg">2 Result found</h1>
                <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                  {["momo", "pizza", "Burgur"].map(
                    (selectedFilter: string, idx: number) => {
                      return (
                        <div
                          key={idx}
                          className="relative inline-flex items-center max-w-full"
                        >
                          {/* <Badge>{selectedFilter}</Badge> */}
                          <Badge
                            className="text-[#319a46df] rounded-md hover:cursor-pointer pr-6 whitespace-nowrap"
                            variant={"outline"}
                          >
                            {selectedFilter}
                          </Badge>
                          <X
                            size={16}
                            className="absolute right-1 hover:cursor-pointer text-[#319a46df]"
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Restaurant cards  */}

              <div className="grid md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                  (item: number, idx: number) => {
                    return (
                      <div key={idx}>
                        <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:drop-shadow-2xl transition-shadow duration-300">
                          <div className="relative">
                            <AspectRatio ratio={5 / 4}>
                              <img
                                src={restaurant}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </AspectRatio>
                            <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 bg-opacity-75 rounded-lg py-1 px-3">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Featured
                              </span>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                              Restaurant ko nam
                            </h1>
                            <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                              <MapPin size={16} />
                              <p className="text-sm">
                                City:{" "}
                                <span className="font-medium">Bharatpur</span>
                              </p>
                            </div>
                            <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                              <Globe size={16} />
                              <p className="text-sm">
                                Country:{" "}
                                <span className="font-medium">Nepal</span>
                              </p>
                            </div>
                            <div className="flex gap-2 mt-4 flex-wrap">
                              {["biryani", "momos", "jalebi"].map(
                                (cuising: string, idx: number) => {
                                  return (
                                    <Badge
                                      key={idx}
                                      className="font-medium px-2 py-1 rounded-full shadow-sm"
                                    >
                                      {cuising}
                                    </Badge>
                                  );
                                }
                              )}
                            </div>
                          </CardContent>
                          <CardFooter className="p-4 border-t dark:border-t-gray-700 border-t-gray-100 text-white flex justify-end">
                            <Link to={`/restaurant/${123}`}>
                              <Button className="bg-green hover:bg-darkgreen font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-200">
                                View Menu
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchPage;

// COMPONENT FOR SearchPageSKELETON

const SearchPageSkeleton = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        {[1, 2, 3].map((curElem: number) => {
          return (
            <div>
              <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:drop-shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <AspectRatio ratio={16 / 6}>
                    <Skeleton className="w-full h-full" />
                  </AspectRatio>
                </div>
                <CardContent className="p-4">
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <div className="mt-2 gap-1 flex items-center text-gray-600">
                    <Skeleton className="w-1/2 h-4 " />
                  </div>
                  <div className="mt-2 gap-1 flex items-center text-gray-600">
                    <Skeleton className="w-1/2 h-4 " />
                  </div>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                </CardContent>
                <CardFooter className="p-4 dark:bg-gray-900 flex justify-end">
                  <div className="h-10 w-32 bg-gray-300 dark:bg-gray-900 rounded-full animate-pulse"></div>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

// COMPOENENT FOR NO RESULT FOUND
// const NoResultFound = ({searchText}: {searchText:string}=>{
const NoResultFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-100">
        NO results found
      </h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        We couldn't find any result for "{/*searchText*/}". <br /> Try searching
        with different term.
      </p>
      <Link to="/">
        <Button className="mt-4 bg-green hover:bg-darkgreen">
          Go Back to Home
        </Button>
      </Link>
    </div>
  );
};
