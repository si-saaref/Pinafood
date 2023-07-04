import {
	createLikeButtonTemplate,
	createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
	async init({ likeButtonContainer, restaurant, favoriteRestaurants: FavoriteRestaurants }) {
		this.__likeButtonContainer = likeButtonContainer;
		this.__restaurant = restaurant;
		this.__favoriteRestaurants = FavoriteRestaurants;

		await this.__renderButton();
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
		const restaurant = await this.__favoriteRestaurants.getRestaurant(idRestaurant);
		return !!restaurant;
	},

	__renderLike() {
		this.__likeButtonContainer.innerHTML = createLikeButtonTemplate();

		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			await this.__favoriteRestaurants.putRestaurant(this.__restaurant);
			this.__renderButton();
		});
	},

	__renderLiked() {
		this.__likeButtonContainer.innerHTML = createLikedButtonTemplate();

		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			await this.__favoriteRestaurants.deleteRestaurant(this.__restaurant.id);
			this.__renderButton();
		});
	},
};

export default LikeButtonPresenter;
