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
      <h1 class="post-item__title">${restaurant.name}</h1>
      <p class="post-item__description">
        ${restaurant.description}
      </p>
    </div>
  </article>
`;

export const cardRestoItemDetail = () => {};
