import RestaurantServices from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import LayoutHelper from '../../utils/layout-helper';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createLikeButtonTemplate, restoDetailItemTemplate } from '../templates/template-creator';

const Detail = {
	async render() {
		return `
      <section class='content-detail-container'></section>
      <div id="likeButtonContainer"></div>
    `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurant = await RestaurantServices.getDetailRestaurant(url.id);
		console.log('RESTAURATNS => ', restaurant);
		const restaurantDetailContainer = document.querySelector('.content-detail-container');
		restaurantDetailContainer.innerHTML += restoDetailItemTemplate(restaurant);

		LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			restaurant: {
				id: restaurant.id,
				pictureId: restaurant.pictureId,
				name: restaurant.name,
				city: restaurant.city,
				description: restaurant.description,
			},
		});

		LayoutHelper.hideHeroImage();
	},
};

export default Detail;
