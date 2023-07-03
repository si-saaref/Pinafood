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
});
