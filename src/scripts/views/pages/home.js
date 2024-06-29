import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">NomNom Apps</h1>
          <p class="hero__tagline">Temukan segala citarasa di NomNom Apps</p>
        </div>
      </div>
      <section class="content">
        <h1 class="explore-text">Explore Restaurants</h1>
        <div id="restaurant-list" class="restaurants"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
