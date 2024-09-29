import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginInputState, userLoginSchema } from "@/schema/userSchema";
import { Loader, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import login from "/assets/login.jpeg";
// import logo from "/assets/Logo.jpeg"

const Login = () => {
  const loading = false;

  const [input, setInput] = useState<loginInputState>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<loginInputState>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const changeSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<loginInputState>);
    }

    // const result = userLoginSchema.safeParse(input);
    // if (!result.success) {
    //   const fieldErrors = result.error.formErrors.fieldErrors;
    //   setErrors(fieldErrors as Partial<loginInputState>);
    //   return;
    // }
    console.log(input);
  };

  return (
    <div className="flex ">
      <div className="">
        <img src={login} alt="" />
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={changeSubmitHandler}
          className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
        >
          <div className="mb-4">
            <h1 className="font-bold text-2xl">Food Express</h1>
          </div>

          <div className="mb-4">
            <div className="relative">
              {/* <Label>Email</Label> */}
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

          <div className="mb-4">
            <div className="relative">
              {/* <Label>Password</Label> */}
              <Input
                type="password"
                placeholder="Enter your email"
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
          <div className="flex text-center space-x-2 px-24">
            <Link to="/forgotPassword">
              <p className="mb-2 text-blue-500 hover:underline">
                Forgot Password &nbsp; |
              </p>
            </Link>

            {/* setting the button that link the reset page */}
            <Link to="/resetPassword">
              <p className="mb-2 text-blue-500 hover:underline">
                Reset Password
              </p>
            </Link>
          </div>

          <p>
            Don't have an account?
            <Link to="/signup" className="text-blue-700 mx-1 font-medium">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
