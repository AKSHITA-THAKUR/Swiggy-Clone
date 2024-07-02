import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { IoMdSearch } from "react-icons/io";
import { restrauntData } from "../redux/HomePageSlice";
import { IoIosArrowDown } from "react-icons/io";

const RestrauntDetail: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [currIndex, setCurrIndex] = useState(0);

	const dispatch = useDispatch();

	const Menudata: any = useSelector(
		(state: RootState) => state.menu.MenuList
	);

	useEffect(() => {
		if (!Menudata?.data) {
			dispatch(restrauntData(parseInt(id!)));
		}
	}, [dispatch, id, Menudata]);

	if (Menudata.status === "loading") {
		return <div>Loading...</div>;
	}
	if (Menudata.status === "failed") {
		return <div>Error: {Menudata.error}</div>;
	}
	// console.log("The Menu is ",Menudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);

	const toggleFunction = (i: any) => {
		setCurrIndex(i === currIndex ? null : i);
	};

	const Restinfo = () => {
		const infoBadge = Menudata?.data?.cards[2]?.card?.card?.info;
		return (
			<>
				<p className="text-sm">
					Home / {infoBadge?.city} / {infoBadge?.name}
				</p>
				<h1 className="font-bold text-2xl pt-5"> {infoBadge?.name}</h1>
				<div className="w-full h-[206px]   rounded-3xl pt-4 bg-gradient-to-t from-gray-300/50 to-white">
					<div className=" w-full border rounded-2xl h-[170px] bg-white ml-2 ">
						<span className="font-bold ml-5 my-3 ">
							{infoBadge?.avgRating}
						</span>
						<span className="font-bold ml-5 ">
							{infoBadge?.totalRatingsString}
						</span>
						.
						<span className="font-bold ml-5 ">
							{infoBadge?.costForTwoMessage}
						</span>
						<p className="underline font-bold text-orange-600 ml-5 mt-3 mb-2">
							{infoBadge?.cuisines?.join(", ")}
						</p>
						<div className="flex gap-2">
							<div className="ml-5  flex flex-col justify-center items-center">
								<div className="w-2 h-2 bg-gray-500 rounded-full"></div>
								<div className=" w-[0.5px] h-[25px] bg-gray-500 "></div>
								<div className="w-2 h-2 bg-gray-500 rounded-full"></div>
							</div>
							<div className="flex flex-col gap-2 font-semibold">
								<p className="font-bold mt-1">
									Outlet <span> {infoBadge?.locality}</span>
								</p>
								<p className="font-semibold">
									{infoBadge?.sla?.slaString}
								</p>
							</div>
						</div>
						<div className="  flex pt-3 ml-5 text-slate-600 w-full">
							<img
								src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
								alt="DISTANCE_FEE_FOOD_LM"
								aria-hidden="true"
								className="sc-tNXst jANaa aq w-[20px] h-[20px]"
							></img>
							<span className="pl-4 mb-2">
								{infoBadge?.feeDetails?.message}{" "}
							</span>
						</div>
					</div>
				</div>
			</>
		);
	};

	const discount = () => {
		const discountdata =
			Menudata?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
				?.offers;

		return (
			<>
				<h1 className="  font-bold mt-5 text-xl ">Deals For you</h1>
				<div className="flex">
					{discountdata?.map((offer: any, index: any) => (
						<div
							key={index}
							style={{
								border: "1px solid #ccc",
								margin: "10px",
								padding: "10px",
								width: "250px",
								borderRadius: "30px",
							}}
						>
							<div
								style={{
									fontWeight: "bold",
									color: offer.info.offerTagColor,
								}}
							>
								{/* <img className="sc-kAyceB dpQRhZ" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic" width="30" height="30" alt="Offer"></img> */}
								{offer?.info?.header}
							</div>
							<div>{offer?.cta?.type}</div>
						</div>
					))}
				</div>
			</>
		);
	};
	const itemList = () => {
		const cards =
			Menudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.filter(
				(data: any) => data?.card?.card?.itemCards
			);
		console.log(cards);
		return (
			<>
				<h2 className="text-center mt-5 font-semibold ">MENU</h2>
				<div className="w-full flex">
					<input
						type="text"
						className=" ml-20 w-3/4 mt-5 p-1 h-[50px]  font-semibold bg-slate-400/50 rounded-3xl"
						placeholder="search dishes"
					/>
					<IoMdSearch className="h-8 w-10 mt-7  ml-4" />
				</div>
				<div className="">
					{cards?.map((card: any, i: any) => (
						<div key={card?.card?.card?.title} >
							<div className="flex">
								<h1 className="text-xl font-semibold p-5">
									{card?.card?.card?.title} (
									{card?.card?.card?.itemCards?.length})
								</h1>
								<span
									className="mt-8 ml-2 "
									onClick={() => toggleFunction(i)}
								>
									<IoIosArrowDown />
								</span>
							</div>
							{currIndex === i && (
								<div  >
									{card?.card?.card?.itemCards?.map(
										(info: any, index: number) => (
											<div
												key={index}
												className="flex justify-between overflow-hidden  flex-1 p-1 border mb-10 h-[203px] w-[768px] shadow-lg"
											>
												<div className="p-4 h-[174px] w-[552px]">
													<h1 className="font-bold ">
														{info?.card?.info?.name}
													</h1>
													<h6 className="mt-3 font-semibold">
														{
															info?.card?.info?.price
														}
													</h6>
													<p className="mt-3">
														
														{
															info?.card?.info?.description
														}
													</p>
												</div>
												<div className=" flex flex-wrap h-[144px] w-[156px] ">
													<img
														src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.card?.info?.imageId}`}
														alt={
															info?.card?.info
																?.name
														}
														className="h-full w-full object-cover rounded-xl mr-3  "
													/>
													<button className="w-[120px] h-[40px] rounded-xl bg-white text-green-700  border shadow-lg border ml-3 mt-2 ">  <span className="font-bold"> ADD </span></button>

												</div>
												
											</div>
										)
									)}
								</div>
							)}
						</div>
					))}
				</div>
			</>
		);
	};

	return (
		<React.Fragment>
			<div className="w-full ">
				<div className="w-[800px] mx-auto pt-7">
					{Restinfo()}
					<div>{discount()}</div>
					<div>{itemList()}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default RestrauntDetail;
