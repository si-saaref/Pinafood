import CONFIG from '../globals/config';

const RestaurantServices = (() => {
	async function getRestaurantList() {
		const response = await fetch(`${CONFIG.BASE_URL}/list`);
		const responseJSON = await response.json();
		return responseJSON.restaurants;
	}

	return {
		getRestaurantList,
	};
})();

export default RestaurantServices;
