import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignupInputState, userSignupSchema } from "@/schema/userSchema";
import { Loader, LockKeyhole, Mail, Phone, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const loading = false;

  const [input, setInput] = useState<SignupInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });

  const [errors, setErrors] = useState<Partial<SignupInputState>>({});

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const changeSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    // form validation is starting here
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<SignupInputState>);
      return;
    }

    // login api implementation starts here
    console.log(input);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={changeSubmitHandler}
          className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
        >
          <div className="mb-4">
            <h1 className="font-bold text-2xl">Food Express</h1>
          </div>

          {/* Fullname */}
          <div className="mb-4">
            <div className="relative">
              {/* <Label>Email</Label> */}
              <Input
                type="name"
                placeholder="Enter your Fullname"
                className="pl-8 focus-visible:ring-0"
                name="fullname"
                value={input.fullname}
                onChange={changeEventHandler}
              />

              {/* displaying error message  */}
              {errors && (
                <span className="text-xs text-red-500 flex px-2">
                  {errors.fullname}
                </span>
              )}
              <User className="absolute inset-y-2 left-1 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Email  */}
          <div className="mb-4">
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-8 focus-visible:ring-0"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
              />
              {/* displaying error message  */}
              {errors && (
                <span className="text-xs text-red-500 flex px-2">
                  {errors.email}
                </span>
              )}
              <Mail className="absolute inset-y-2 left-1 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Password  */}
          <div className="mb-4">
            <div className="relative">
              {/* <Label>Password</Label> */}
              <Input
                type="password"
                placeholder="Enter your password"
                className="pl-8 focus-visible:ring-0"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
              />
              {/* displaying error message  */}
              {errors && (
                <span className="text-xs text-red-500 flex px-2">
                  {errors.password}
                </span>
              )}
              <LockKeyhole className="absolute inset-y-2 left-1 text-gray-500" />
            </div>
          </div>

          {/* Contact Number  */}
          <div className="mb-4">
            <div className="relative">
              {/* <Label>Password</Label> */}
              <Input
                type="number"
                placeholder="Enter your number"
                className="pl-8 focus-visible:ring-0"
                name="contact"
                value={input.contact}
                onChange={changeEventHandler}
              />
              {/* displaying error message  */}
              {errors && (
                <span className="text-xs text-red-500 flex px-2">
                  {errors.contact}
                </span>
              )}
              <Phone className="absolute inset-y-2 left-1 text-gray-500" />
            </div>
          </div>

          {/* Login Button  */}
          <div className="mb-10">
            {loading ? (
              <Button disabled className="bg-blue-700 hover:bg-blue-500 w-full">
                please wait <Loader className="ml-2 animate-spin" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-blue-700 hover:bg-blue-500 w-full"
              >
                Login
              </Button>
            )}
          </div>
          <hr className="mb-5" />
          <p>
            Already have an account?
            <Link to="/login" className="text-blue-700 mx-1 font-medium">
              Login
            </Link>
          </p>

          
        </form>


      </div>

    
    </>
  );
};
export default Signup;
