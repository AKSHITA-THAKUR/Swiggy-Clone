import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { RootState } from "../redux/store";
import { dishesData } from "../redux/HomePageSlice";

const ScrollBar: React.FC = () => {
	const dispatch = useDispatch();
	const [slide, setSlide] = useState(0);

	const nextSlide = () => {
		setSlide(slide + 3);
	};

	const prevSlide = () => {
		setSlide(slide - 3);
	};

	const homepageData: any = useSelector(
		(state: RootState) => state.homepage.data
	);
	console.log("This is the homepageData", homepageData);

	useEffect(() => {
		dispatch(dishesData());
	}, [dispatch]);

	const renderImageGridCards = () => {
		// Extract the cards array from the response data
		const cards = homepageData?.data?.cards || [];

		// Find the card with the GridWidget type that contains the imageGridCards info
		const gridCard = cards.find(
			(card: any) =>
				card.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
		);

		// Extract the info array from imageGridCards if available
		const imageGridCards = gridCard?.card?.card?.imageGridCards?.info || [];

		return imageGridCards.map((item: any) => (
			<div
				style={{
					transform: `translate(-${slide * 100}%)`,
				}}
				key={item.id}
				className="w-[150px]  shrink-0"
			>
				<img
					className=""
					src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
					alt={item.accessibility?.altText || "Image"}
				/>
			</div>
		));
	};

	return (
		<div className="max-w-[1200px] mx-auto items-center my-10 ">
			<div className="flex my-3 items-center justify-between ">
				<div className="text-[25px] font-bold ">
					What's on your mind?
				</div>
				<div className="flex ">
					<div className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-5 flex justify-center items-center cursor-pointer">
						<FaArrowLeft onClick={prevSlide} />
					</div>
					<div className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-5 flex justify-center items-center cursor-pointer">
						<FaArrowRight onClick={nextSlide} />
					</div>
				</div>
			</div>

			<div className=" flex border  overflow-hidden shadow-md">
				{renderImageGridCards()}
			</div>

			


		</div>
	);
};

export default ScrollBar;
