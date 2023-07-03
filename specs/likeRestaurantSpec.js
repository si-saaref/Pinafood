// import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';
import LikeButtonPresenter from '../src/scripts/utils/like-button-presenter';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Movie', () => {
	const addLikeButtonContainer = () => {
		document.body.innerHTML = '<div id="likeButtonContainer"></div>';
	};

	beforeEach(() => {
		addLikeButtonContainer();
	});

	it('should show the like button when the movie has not been liked before', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

		expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
	});

	it('should not show the unlike button when the movie has not been liked before', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
		expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
	});

	it('should be able to like the movie', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

		document.querySelector('#likeButton').dispatchEvent(new Event('click'));
		const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
		expect(restaurant).toEqual({ id: 1 });

		FavoriteRestaurantIdb.deleteRestaurant(1);
	});

	it('should not add a movie again when its already liked', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

		await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

		document.querySelector('#likeButton').dispatchEvent(new Event('click'));

		expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
		FavoriteRestaurantIdb.deleteRestaurant(1);
	});

	it('should not add a movie when it has no id', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurant({});
		document.querySelector('#likeButton').dispatchEvent(new Event('click'));
		expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
	});
});
