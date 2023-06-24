import RestaurantServices from '../../data/data-source';
import { cardRestoItemTemplate } from '../templates/template-creator';

const Detail = {
	async render() {
		return `
      <section>
				<div class="content-post"></div>
			</section>
    `;
	},

	async afterRender() {
		// const restaurants = await RestaurantServices.getRestaurantList();
		// console.log('RESTAURATNS => ', restaurants);
		// const restaurantListContainer = document.querySelector('.content-post');
		// restaurantListContainer.innerHTML = '';
		// restaurants.forEach((item) => {
		// 	restaurantListContainer.innerHTML += cardRestoItemTemplate(item);
		// });
		const heroImage = document.querySelector('.hero');
		heroImage.style.display = 'block';
	},
};

export default Detail;
