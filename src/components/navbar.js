import React from "react";
import Link from "next/link";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client";

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header
      className="text-white"
      style={{
        marginTop: "-3.5px",
        backgroundColor: "#040404",
        boxShadow: "rgb(36 36 36) 0px 1px 0px",
      }}
    >
      <div className=" flex flex-wrap items-center justify-between max-w-7xl p-2 mx-auto md:p-3 ">
        <Link href="/">
          <a className="block mt-2  no-underline md:inline-block md:mt-0 md:ml-6 font-mono">
            Peditor
            {/* <span className="text-xl font-bold tracking-tight">{title}</span> */}
          </a>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-gray rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          <button
            className="text-sm rounded-md  px-2 text-gray-900 bg-gradient-to-r from-green-400 to-blue-500 hover:from-yellow-500 hover:to-pink-500 focus:outline-none"
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/" })
            }
          >
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
