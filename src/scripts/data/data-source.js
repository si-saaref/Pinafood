import CONFIG from '../globals/config';

const RestaurantServices = (() => {
	async function getRestaurantList() {
		const response = await fetch(`${CONFIG.BASE_URL}/list`);
		const responseJSON = await response.json();
		return responseJSON.restaurants;
	}

	async function getDetailRestaurant(id) {
		const response = await fetch(`${CONFIG.BASE_URL}/detail/${id}`);
		const responseJSON = await response.json();
		return responseJSON.restaurant;
	}

	return {
		getRestaurantList,
		getDetailRestaurant,
	};
})();

export default RestaurantServices;
