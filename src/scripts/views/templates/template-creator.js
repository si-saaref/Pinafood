import CONFIG from '../../globals/config';

export const cardRestoItemTemplate = (restaurant) => `
  <article class="post-item" tabindex="0">
    <img
      class="post-item__thumbnail"
      src="${CONFIG.BASE_URL}/images/medium/${restaurant.pictureId}"
      alt="Gambar ${restaurant.name}"
    />
    <div class="post-item__content">
      <p class="post-item__city">${restaurant.city}</p>
      <h1 class="post-item__title">
        <a href="/#/restaurant/${restaurant.id}">
          ${restaurant.name}
        </a>
      </h1>
      <p class="post-item__description">
        ${restaurant.description}
      </p>
    </div>
  </article>
`;

export const restoDetailItemTemplate = (restaurant) => `
  <article class="detail-item" tabindex="0">
    <h1 class="detail-item__title">
      ${restaurant.name}
    </h1>
    <div class="detail-item__content">
      <img
        class="detail-item__thumbnail"
        src="${CONFIG.BASE_URL}/images/medium/${restaurant.pictureId}"
        alt="Gambar ${restaurant.name}"
      />
      <div class="detail-item__info">
        <div class="">
          <h1>Rating</h1>
          <p>${restaurant.rating}</p>
        </div>
        <div class="">
          <h1>City</h1>
          <p class="post-item__city">${restaurant.city}</p>
        </div>
        <div class="">
          <h1>Address</h1>
          <p class="detail-item__address">${restaurant.address}</p>
        </div>
        <div class="detail-item__categories">
          <h1>Categories</h1>
          <div class="highlight-wrapper">
            ${generateListItemWithHighlight(restaurant.categories)}
          </div>
        </div>
      </div>
    </div>
    <p class="post-item__description">
      ${restaurant.description}
    </p>
    <div class="detail-item__menus">
      <div class="detail-item__menu__food">
        <h1>Food</h1>
        <div class="highlight-wrapper">
          ${generateListItemWithHighlight(restaurant.menus.foods)}
        </div>
      </div>
      <div class="detail-item__menu__drink">
        <h1>Drink</h1>
        <div class="highlight-wrapper">
          ${generateListItemWithHighlight(restaurant.menus.drinks)}
        </div>
      </div>
    </div>
    <div class="detail-item__reviews">
      <h1>Reviews</h1>
      <div class="highlight-wrapper">
        ${generateListItemWithHighlight(restaurant.customerReviews)}
      </div>
    </div>
  </article>
`;

const generateListItemWithHighlight = (listData) => {
	return listData
		.map((item) => {
			return `
      <p class="highlighted-item">  
        ${item.name}
      </p>
    `;
		})
		.join('');
};

export const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true">Like</i>
  </button>
`;

export const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true">Unlike</i>
  </button>
`;
