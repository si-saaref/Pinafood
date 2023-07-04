import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-resto-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
	await LikeButtonPresenter.init({
		likeButtonContainer: document.querySelector('#likeButtonContainer'),
		restaurant,
		favoriteRestaurants: FavoriteRestaurantIdb,
	});
};

// eslint-disable-next-line import/prefer-default-export
export default createLikeButtonPresenterWithRestaurant;
