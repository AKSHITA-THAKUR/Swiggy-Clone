import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const Restaurants: React.FC = () => {

    const [slide, setSlide] = useState(0);

	const nextSlide = () => {
		setSlide(slide + 3);
	};

	const prevSlide = () => {
		setSlide(slide - 3);
	};

	const restaurantsData: any = useSelector(
		(state: RootState) => state.homepage.data
	);



	const renderRestaurants = () => {
		const cards = restaurantsData?.data?.cards || [];
		console.log("the card is ", cards);

		const gridCard = cards.find(
			(card: any) =>
				card.card?.card?.gridElements?.infoWithStyle?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
		);
		console.log("The grid card is", gridCard);
		if (!gridCard) {
			return null;
		}

		const restaurantCards =
			gridCard.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

		if (restaurantCards.length === 0) {
			return <p>No restaurants found</p>;
		}

		return restaurantCards.map((restaurant: any) => (
			<div key={restaurant.info.id} className="w-[273px] mx-4 border shrink-0 grow" style={{
                transform: `translate(-${slide * 100}%)`,
            }} >
                <div className="w-[250px]  ">
				<img
					src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.info.cloudinaryImageId}`}
					alt={restaurant.info.name}
					className="w-full h-40 object-cover mb-4 rounded-md"
				/>
                </div>
				
                <div className="ml-3">
                <h2 className="text-lg font-semibold mb-2">
					{restaurant.info.name}
				</h2>
				<p className="text-gray-500">{restaurant.info.locality}</p>
				<p className="text-gray-500">{restaurant.info.costForTwo}</p>
				<p className="text-gray-500">
					{restaurant.info.cuisines.join(", ")}
				</p>
                </div>
			</div>
		));
	};
	return (
		<div className="max-w-[1250px]  mx-auto items-center my-10 ">
			<div className="flex my-3 items-center justify-between ">
				<div className="text-[25px] font-bold ">
					Top Restraunts Chains in Jalandhar
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
			<div className="flex border p-2  overflow-hidden">
                {renderRestaurants()}</div>
		</div>
	);
};

export default Restaurants;
