import { Facebook } from "lucide-react";
import { X } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className=" bg-[#000000]">
      <div className="text-white w-10/12 md:w-11/12 my-10 mx-6  md:mx-auto">
        <footer className="footer sm:footer-horizontal ">
          <div className="md:w-[250px] lg:w-[350px]">
            <h3 className="font-bold text-2xl">CS — Ticket System</h3>
            <p className="text-[#a1a1aa]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <nav>
            <h6 className=" text-white">Company</h6>
            <a className="link link-hover text-[#a1a1aa] ">About Us</a>
            <a className="link link-hover text-[#a1a1aa]">Our Mission</a>
            <a className="link link-hover text-[#a1a1aa]">Contact Saled</a>
          </nav>
          <nav>
            <h6 className=" text-white">Services</h6>
            <a className="link link-hover text-[#a1a1aa] ">
              Products & Services
            </a>
            <a className="link link-hover text-[#a1a1aa]">Customer Stories</a>
            <a className="link link-hover text-[#a1a1aa]">Download Apps</a>
          </nav>
          <nav>
            <h6 className=" text-white">Information</h6>
            <a className="link link-hover text-[#a1a1aa] ">Privacy Policy</a>
            <a className="link link-hover text-[#a1a1aa]">Terms & Conditions</a>
            <a className="link link-hover text-[#a1a1aa]">Join Us</a>
          </nav>
          <nav>
            <h6 className=" text-white">Social Links</h6>
            <div className="flex gap-1 justify-center items-center">
              <X size={20} className="bg-white text-black rounded-full" />
              <a className="link link-hover p-[2px] text-[#a1a1aa] ">
                @CS — Ticket System
              </a>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <Facebook
                size={20}
                className="bg-white p-[2px] text-black rounded-full"
              />
              <a className="link link-hover text-[#a1a1aa] ">
                @CS — Ticket System
              </a>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <Linkedin
                size={20}
                className="bg-white p-[2px] text-black rounded-full"
              />
              <a className="link link-hover text-[#a1a1aa] ">
                @CS — Ticket System
              </a>
            </div>

            <div className="flex gap-1 justify-center items-center">
              <Mail
                size={20}
                className="bg-white p-[2px] text-black rounded-full"
              />
              <a className="link link-hover text-[#a1a1aa]">support@cst.com</a>
            </div>
          </nav>
        </footer>
        <div className="text-[#fafafa] text-center my-8">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
