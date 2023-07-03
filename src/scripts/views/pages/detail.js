import RestaurantServices from '../../data/data-source';
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import UrlParser from '../../routes/url-parser';
import LayoutHelper from '../../utils/layout-helper';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { notFoundContent, restoDetailItemTemplate } from '../templates/template-creator';

const Detail = {
	async render() {
		return `
      <section class='content-detail-container section-detail'></section>
      <div id="likeButtonContainer"></div>
    `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const { data, status } = await RestaurantServices.getDetailRestaurant(url.id);

		const restaurantDetailContainer = document.querySelector('.content-detail-container');

		if (status === 400) {
			restaurantDetailContainer.innerHTML += notFoundContent();
			LayoutHelper.hideHeroImage();
			return;
		}

		restaurantDetailContainer.innerHTML += restoDetailItemTemplate(data);

		LikeButtonPresenter.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			restaurant: {
				id: data.id,
				pictureId: data.pictureId,
				name: data.name,
				city: data.city,
				description: data.description,
			},
			favoriteRestaurants: FavoriteRestaurantIdb,
		});

		LayoutHelper.hideHeroImage();
	},
};

export default Detail;
