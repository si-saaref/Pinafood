import RestaurantServices from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import { restoDetailItemTemplate } from '../templates/template-creator';

const Detail = {
	async render() {
		return `
      <section>
				<div class="content-post"></div>
			</section>
    `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurant = await RestaurantServices.getDetailRestaurant(url.id);
		console.log('RESTAURATNS => ', restaurant);
		const restaurantDetailContainer = document.querySelector('.content-post');
		restaurantDetailContainer.innerHTML += restoDetailItemTemplate(restaurant);
		// restaurants.forEach((item) => {
		// 	restaurantListContainer.innerHTML += cardRestoItemTemplate(item);
		// });
		const heroImage = document.querySelector('.hero');
		heroImage.style.display = 'none';
	},
};

export default Detail;
