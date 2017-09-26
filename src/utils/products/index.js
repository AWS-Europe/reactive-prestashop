import GET from '../GET'
import config from "../config.json"
let get = new GET('products');
let getCategory = new GET('categories');

export const products = {
  all() {
    return get.collections();
  },
  one(id) {
    return get.one(id);
  },
  selected(array) {
    return get.selected(array);
  },
  getProductCategoryName(id) {
    return getCategory.one(id);
  },
  getFilterProductsList(limit = null, category = null, manufacturer = null){
    return fetch(`${config.apiUrl}/products/` +
    `?display=[id,id_default_image,price,wholesale_price,name,show_price,link_rewrite]` +
    `&filter[active]=[1]` +
    `${category !== null ?  `&filter[id_category_default]=[${category}]` : ``}` +
    `${manufacturer !== null ?  `&filter[id_manufacturer]=[${manufacturer}]` : ``}` +
    `${limit !== null ?  `&limit=${limit}` : ``}` +
    `&ws_key=${config.apiKey}&${config.dataType}`)
    .then(function (response) {
      return response.json();
    }).then(d => {
      return d.products;
    })
  }
}
