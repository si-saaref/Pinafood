import RestaurantServices from '../../data/data-source';
import LayoutHelper from '../../utils/layout-helper';
import {
	cardRestoItemSkeleton,
	cardRestoItemTemplate,
	notFoundContent,
} from '../templates/template-creator';

const Home = {
	async render() {
		return `
      <section class='content-container'>
				<div class="content-header">
					<header class="content-header__label">Explore Restaurant</header>
				</div>
				<div class="content-post">
          ${cardRestoItemSkeleton(9)}
        </div>
			</section>
    `;
	},

	async afterRender() {
		const { data, status } = await RestaurantServices.getRestaurantList();
		const restaurantListContainer = document.querySelector('.content-post');

		restaurantListContainer.innerHTML = '';
		if (status === 400) {
			LayoutHelper.hideHeroImage();
			document.querySelector('.content-post').style.display = 'flex';
			document.querySelector('.content-post').style.justifyContent = 'center';
			restaurantListContainer.innerHTML += notFoundContent();
			return;
		}

		data.forEach((item) => {
			restaurantListContainer.innerHTML += cardRestoItemTemplate(item);
		});

		LayoutHelper.showHeroImage();
	},
};

export default Home;
