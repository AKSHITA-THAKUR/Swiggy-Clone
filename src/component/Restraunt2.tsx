import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Restraunt2 = () => {
	const onlineRestraunt: any = useSelector(
		(state: RootState) => state.homepage.data
	);

	const navigate = useNavigate();

	const ClickDiv = () => {
		navigate("/detail");
	};

	const renderRestaurants = () => {
		const card2 = onlineRestraunt?.data?.cards || [];
		// console.log(card2);

		const restCard = card2.find(
			(card: any) => card?.card?.card?.id === "restaurant_grid_listing"
		);
		// console.log("The restcards are",restCard)
		if (!restCard) {
			return null;
		}
		const restaurantCards =
			restCard.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
		// console.log("The main restraunts are" , restaurantCards)

		if (restaurantCards.length === 0) {
			return <p>No restaurants found</p>;
		}
		return restaurantCards.map((restaurant: any) => (
			<div
				key={restaurant.info.id}
				className="w-[273px] mx-4 border my-5  shadow-md"
				onClick={ClickDiv}
			>
				<div className="w-full  ">
					<img
						src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.info.cloudinaryImageId}`}
						alt={restaurant.info.name}
						className="w-full    h-40 object-cover mb-4 rounded-md"
					/>
				</div>

				<div className="ml-3">
					<h2 className="text-lg font-semibold mb-2">
						{restaurant.info.name}
					</h2>
					<p className="text-gray-500">{restaurant.info.locality}</p>
					<p className="text-gray-500">
						{restaurant.info.costForTwo}
					</p>
					<p className="text-gray-500">
						{restaurant.info.cuisines.join(", ")}
					</p>
				</div>
			</div>
		));
	};

	return (
		<React.Fragment>
			<div>
				<h1 className="text-2xl font-bold ml-10 mb-5">
					Restraunts With online food delivery
				</h1>
			</div>

			<div
				className=" border p-2 max-w-[1280px] ml-10"
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(4, 1fr)",
					gap: "16px",
				}}
			>
				{renderRestaurants()}
			</div>
		</React.Fragment>
	);
};
export default Restraunt2;
