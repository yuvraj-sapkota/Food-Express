import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader, LockKeyhole } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const loading = false;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 md:border md:p-8 w-full max-w-md rounded-lg mx-4"
        >
          <div className="text-center ">
            <h1 className="font-extrabold text-2xl mb-2">
              Reset Your Password
            </h1>
            <p className="text-sm text-gray-600">
              Ener you Email to reset your password
            </p>
          </div>
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter your new password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="pl-10"
            />
            <LockKeyhole className="absolute inset-y-3 left-2 text-gray-500 size-5 pointer-events-none" />
          </div>

          {loading ? (
            <Button>
              please wait <Loader className="animate-spin ml-2" />{" "}
            </Button>
          ) : (
            <Button className="bg-green-600 hover:bg-green-500">Send</Button>
          )}
          <span>
            Back to{" "}
            <Link to="/login" className="text-blue-600 font-semibold">
              Login
            </Link>{" "}
          </span>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
