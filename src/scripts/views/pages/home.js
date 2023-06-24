import RestaurantServices from '../../data/data-source';

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
		console.log('FIRED HOME RENDER');
		const restaurants = await RestaurantServices.getRestaurantList();
		console.log('RESTAURANTS =>', restaurants);
	},
};

export default Home;
