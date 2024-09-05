import myImage from "../../images/Swiggy-2.png";
import linkin from "../../images/icons8-linkedin-50.png";
import github from "../../images/icons8-github-64.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap justify-between">
          <div className="sm:w-1/4 items-center mb-8">
            <div className="flex">
              <img src={myImage} alt="Swiggy Logo" style={{ height: "3rem" }} />
              <span className="font-bold text-3xl mt-2">Flavours Fusion</span>
            </div>
            <div className="ml-4 text-white-500 mt-2">
              <p>&copy; {new Date().getFullYear()} Swiggy Clone by Varsha</p>
            </div>

            <div className="flex text-white-500 ml-4 mt-8">
              <img src={linkin} alt="Swiggy Logo" style={{ height: "2rem" }} />
              <img
                src={github}
                alt="Swiggy Logo"
                style={{ height: "2rem", marginLeft: "16px" }}
              />
            </div>
          </div>

          {/* Company Section */}
          <div className="sm:w-1/4 mb-6">
            <h4 className="text-xl font-bold mb-4">Company</h4>
            <ul>
              <li className="mb-2">
                <span className="text-gray-400 ">About Us</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Careers</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Press</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Swiggy Blog</span>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className=" sm:w-1/4 mb-6">
            <h4 className="text-xl font-bold mb-4">Support</h4>
            <ul>
              <li className="mb-2">
                <span className="text-gray-400 ">Help & Support</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Partner with Us</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Ride with Us</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Corporate Gifts</span>
              </li>
            </ul>

            {/* Legal Section */}
            <h4 className="text-xl font-bold mb-4 mt-8">Legal</h4>
            <ul>
              <li className="mb-2">
                <span className="text-gray-400 ">Terms & Conditions</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Refund Policy</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Privacy Policy</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Cookie Policy</span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="sm:w-1/4 mb-6">
            <h4 className="text-xl font-bold mb-4">We deliver to</h4>
            <ul>
              <li className="mb-2">
                <span className="text-gray-400 ">Bangalore</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Chennai</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Hyderabad</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Delhi</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Mumbai</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-400 ">Pune</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
