import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-green flex flex-col md:flex-row justify-between p-5">
        {/* About Us Section */}
        <div className="text-gray-200 mb-4 md:mb-0">
          <p className="font-medium text-white mb-2">WE'RE FOOD EXPRESS</p>
          <p>
            <Link to="">About Us</Link>
          </p>
          <p>
            <Link to="">Available Areas</Link>
          </p>
          <p>
            <Link to="">Delivery Charges</Link>
          </p>
        </div>

        {/* Get Help Section */}
        <div className="text-gray-200 mb-4 md:mb-0">
          <p className="font-medium text-white mb-2">GET HELP</p>
          <p>
            <Link to="">How to order?</Link>
          </p>
          <p>
            <Link to="">FAQs</Link>
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="text-gray-200 mb-4 md:mb-0">
          <p className="font-medium text-white mb-2">CONTACT US</p>
          <p>Chitwan: 12345, 09876</p>
        </div>

        {/* Connect with Us Section */}
        <div className="text-gray-200 cursor-pointer">
          <p className="font-medium text-white mb-2">CONNECT WITH US</p>
          <div className="  ">
            <p className="flex items-center mb-2">
              <Facebook /> &nbsp; Facebook
            </p>
            <p className="flex items-center mb-2">
              <Instagram /> &nbsp; Instagram
            </p>
            <p className="flex items-center">
              <Youtube /> &nbsp; Youtube
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
