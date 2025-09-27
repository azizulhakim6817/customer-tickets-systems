import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="lg:w-11/12 mx-auto navbar bg-base-100 ">
          <div className="navbar-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Changelog</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Download</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <a className=" font-bold ml-0 text-sm md:text-2xl ">
                CS — Ticket System
              </a>
            </div>
          </div>
          <div className="flex ml-auto gap-4 justify-center items-center">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal ">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Changelog</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Download</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div className="">
              <button className="btn p-3 text-xs rounded-md  text-white bg-gradient-to-l from-[#9f62f2] to-[#632ee3]">
                <Plus className="hidden md:block" size={18} /> New Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
