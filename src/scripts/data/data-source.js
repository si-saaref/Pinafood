import CONFIG from '../globals/config';

const RestaurantServices = (() => {
	async function getRestaurantList() {
		const response = await fetch(`${CONFIG.BASE_URL}/list`);
		const responseJSON = await response.json();
		return responseJSON.restaurants;
	}

	async function getDetailRestaurant(id) {
		let response;
		try {
			response = await fetch(`${CONFIG.BASE_URL}/detail/${id}`);
		} catch (error) {
			return { status: 400 };
		}

		const responseJSON = await response.json();
		return { data: responseJSON.restaurant, status: 200 };
	}

	return {
		getRestaurantList,
		getDetailRestaurant,
	};
})();

export default RestaurantServices;
