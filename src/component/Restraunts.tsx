import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Restaurants: React.FC = () => {
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
			<div key={restaurant.info.id} className="p-4 border m-2">
				<img
					src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.info.cloudinaryImageId}`}
					alt={restaurant.info.name}
					className="w-full h-32 object-cover mb-4"
				/>
				<h2 className="text-lg font-semibold">
					{restaurant.info.name}
				</h2>
				<p className="text-gray-500">{restaurant.info.locality}</p>
				<p className="text-gray-500">{restaurant.info.costForTwo}</p>

				<p className="text-gray-500">
					{restaurant.info.cuisines.join(", ")}
				</p>
			</div>
		));
	};
	return (
		<div className="container mx-auto">
			<h1 className="text-2xl font-bold mb-4">
				{" "}
				Top Restaurants Chains Near You
			</h1>

			<div className="flex ">{renderRestaurants()}</div>
		</div>
	);
};

export default Restaurants;
