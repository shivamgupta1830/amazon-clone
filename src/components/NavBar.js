import React from "react";
import { ShoppingCartIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px] ">
        {/* Left */}

        <div className="flex items-center m-4 ">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px] m-2 border border-transparent hover:border-white "
              src={"../images/amazon.png"}
              alt="amazon_logo"
            />
          </Link>
          <div className="flex items-center justify-start cursor-pointer border border-transparent hover:border-white">
            <div>
              <MapPinIcon className="h-[24px] pl-4" />
            </div>
            <div className="pr-4 pl-1 ">
              <div className="text-xs xl:text-sm">Deliver to</div>
              <div className="text-xm xl:text-base font-bold">India</div>
            </div>
          </div>
        </div>

        {/* middle */}

        <div className="flex grow relative items-center">
          <Search />
        </div>

        {/* Right */}

        <div className="flex items-center m-4">
          <div className="pr-4 pl-4 border border-transparent hover:border-white cursor-pointer">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-xm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4 border border-transparent hover:border-white cursor-pointer">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-xm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3 border border-transparent hover:border-white cursor-pointer">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex items-center bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm  pl-6 h-[36px]">
        <div className="border border-transparent hover:border-white cursor-pointer  py-2 px-1">
          Today's Deals
        </div>
        <div className="border border-transparent hover:border-white cursor-pointer  py-2 px-1">
          Customer Service
        </div>
        <div className="border border-transparent hover:border-white cursor-pointer  py-2 px-1">
          Registry
        </div>
        <div className="border border-transparent hover:border-white cursor-pointer  py-2 px-1">
          Gift Cards
        </div>
        <div className="border border-transparent hover:border-white cursor-pointer py-2 px-1">
          Sell
        </div>
      </div>
    </header>
  );
};

export default NavBar;
