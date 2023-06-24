import RestaurantServices from '../../data/data-source';
import { cardRestoItemTemplate } from '../templates/template-creator';

const Home = {
	async render() {
		return `
      <section>
				<div class="content-header">
					<header class="content-header__label">Explore Restaurant</header>
				</div>
				<div class="content-post"></div>
			</section>
    `;
	},

	async afterRender() {
		const restaurants = await RestaurantServices.getRestaurantList();
		const restaurantListContainer = document.querySelector('.content-post');
		restaurantListContainer.innerHTML = '';
		console.log('FIRED');
		restaurants.forEach((item) => {
			console.log('FIRED');
			restaurantListContainer.innerHTML += cardRestoItemTemplate(item);
		});
	},
};

export default Home;
