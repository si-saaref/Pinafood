import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';
import createLikeButtonPresenterWithRestaurant from './helpers/testFactories';

describe('Unlike a Restaurant', () => {
	const initLikeButtonContainer = () =>
		(document.body.innerHTML = '<div id="likeButtonContainer"></div>');

	beforeEach(async () => {
		initLikeButtonContainer();
		await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
	});

	afterEach(async () => {
		await FavoriteRestaurantIdb.deleteRestaurant(1);
	});

	it('should show the unlike button when the restaurant has been liked before', async () => {
		await createLikeButtonPresenterWithRestaurant({ id: 1 });

		expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy();
	});

	it('should not show the like button when the restaurant has not been liked before', async () => {
		await createLikeButtonPresenterWithRestaurant({ id: 1 });

		expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy();
	});

	it('should be able to unlike the restaurant', async () => {
		await createLikeButtonPresenterWithRestaurant({ id: 1 });

		document.querySelector('#likeButton').dispatchEvent(new Event('click'));

		expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
	});

	it('should not throw error if the unliked restaurant is not in the list', async () => {
		await createLikeButtonPresenterWithRestaurant({ id: 1 });

		await FavoriteRestaurantIdb.deleteRestaurant(1);

		document.querySelector('#likeButton').dispatchEvent(new Event('click'));

		expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
	});
});
