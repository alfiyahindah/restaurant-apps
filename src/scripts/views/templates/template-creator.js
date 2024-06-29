import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <div class="restaurant-detail__header">
      <img class="restaurant-detail__image lazyload" alt="${restaurant.name}"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-detail__info">
        <h2 class="restaurant__name">${restaurant.name}</h2>
        <p class="restaurant-detail__address">📍 ${restaurant.address}</p>
        <p class="restaurant-detail__city">🏙️ ${restaurant.city}</p>
        <p class="restaurant-detail__rating">⭐️ ${restaurant.rating}</p>
        <p class="restaurant-detail__description">${restaurant.description}</p>
      </div>
    </div>
    <div class="restaurant-detail__menus">
      <div class="restaurant-detail__foods">
        <h3>Foods Menu 🍴</h3>
        <ul>
          ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
      </div>
      <div class="restaurant-detail__separator"></div>
      <div class="restaurant-detail__drinks">
        <h3>Drinks Menu 🍹</h3>
        <ul>
          ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="restaurant-detail__reviews">
      <h2>Customer Reviews</h2>
      ${restaurant.customerReviews.map((review) => `
        <div class="restaurant-detail__review">
          <p><strong>${review.name}</strong> - ${review.date}</p>
          <p>${review.review}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__picture lazyload" alt="${restaurant.name || '-'}"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h2 class="restaurant__name"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h2>
      <p class="restaurant-item__city">City: ${restaurant.city || '-'}</p>
      <p class="restaurant-item__description">${(restaurant.description?.slice(0, 200) ?? '-') || '-'}...</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
