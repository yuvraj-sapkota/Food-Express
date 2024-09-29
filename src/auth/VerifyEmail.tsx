import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const loading = false;
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<any>([]);
  //   const navigate = useNavigate();
  const handleChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }

    // Move to the next input field if a digit is enter
    if (value != "" && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index: any, e: any) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl">Verify Your Email</h1>
          <p className="text-sm text-gray-600">
            Enter the 6 digit code send to you email
          </p>
        </div>
        <form action="">
          <div className="flex justify-between">
            {otp.map((letter: string, idx: number) => {
              return (
                <Input
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                    handleKeyDown(idx, e)
                  }
                  type="text"
                  ref={(element) => (inputRef.current[idx] = element)}
                  value={letter}
                  maxLength={1}
                  key={idx}
                  onChange={(e: any) => handleChange(idx, e.target.value)}
                  className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              );
            })}
          </div>
          {loading ? (
            <Button
              disabled
              className="w-full mt-5 bg-green-600 hover:bg-green-500"
            >
              Please Wait &nbsp;{" "}
              <Loader className="animate-spin mr-2 w-4 h-4" />
            </Button>
          ) : (
            <Button className="w-full mt-5 bg-green-600 hover:bg-green-500">
              Verify
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
