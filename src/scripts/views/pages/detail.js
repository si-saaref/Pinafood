import RestaurantServices from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import LayoutHelper from '../../utils/layout-helper';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { restoDetailItemTemplate } from '../templates/template-creator';

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

		if (status === 400) {
			console.log('ERRO BOR');
			return;
		}

		const restaurantDetailContainer = document.querySelector('.content-detail-container');
		restaurantDetailContainer.innerHTML += restoDetailItemTemplate(data);

		LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			restaurant: {
				id: data.id,
				pictureId: data.pictureId,
				name: data.name,
				city: data.city,
				description: data.description,
			},
		});

		LayoutHelper.hideHeroImage();
	},
};

export default Detail;
