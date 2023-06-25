import FavoriteRestaurantIdb from '../data/favorite-resto-idb';
import {
	createLikeButtonTemplate,
	createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
	async init({ likeButtonContainer, restaurant }) {
		this.__likeButtonContainer = likeButtonContainer;
		this.__restaurant = restaurant;

		this.__renderButton();
	},

	async __renderButton() {
		const { id } = this.__restaurant;

		if (await this.__isRestaurantExist(id)) {
			this.__renderLiked();
		} else {
			this.__renderLike();
		}
	},

	async __isRestaurantExist(idRestaurant) {
		const restaurant = await FavoriteRestaurantIdb.getRestaurant(idRestaurant);
		return !!restaurant;
	},

	__renderLike() {
		this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			await FavoriteRestaurantIdb.putRestaurant(this.__restaurant);
			this.__renderButton();
		});
	},

	__renderLiked() {
		this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			await FavoriteRestaurantIdb.deleteRestaurant(this.__restaurant.id);
			this.__renderButton();
		});
	},
};

export default LikeButtonInitiator;
