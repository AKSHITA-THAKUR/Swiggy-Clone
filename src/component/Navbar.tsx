import React from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { MdLiveHelp } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

const Navbar: React.FC = () => {
	return (
		<header className="p-3 m-3 shadow-xl ">
			<div className="max-w-[1200px] mx-auto h-20 border flex items-center">
				<div className="w-[70px]">
					<img
						src="../../public/images/logo.jpg"
						className="w-full h-20 "
						alt="swiggy-logo"
					/>
				</div>
				<div className="text-orange-600 font-bold p-10 flex">
					<p className="pr-2">Your location</p>{" "}
					<RxCaretDown className="cursor-pointer" />
				</div>
				<nav className="flex list-none gap-14 ml-auto font-semibold text-[15px]">
					<li className="flex items-center gap-2">
						<IoMdSearch />
						Search
					</li>
					<li className="flex items-center gap-2">
						<BiSolidOffer /> Offers
					</li>
					<li className="flex items-center gap-2">
						<MdLiveHelp />
						Help
					</li>
					<li className="flex items-center gap-2">
						<FaUser />
						Signin
					</li>
					<li className="flex items-center gap-2">
						<IoCart />
						Cart
					</li>
				</nav>
			</div>
		</header>
	);
};
export default Navbar;
