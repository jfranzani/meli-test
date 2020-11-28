import {
  Author,
  Item,
  Price,
  SearchMeliApi,
  SearchResult,
} from './core/models/models';

const express = require('express');
const fetch = require('node-fetch');
export const routes = express.Router();

/**
 * This will split the price into amount and decimals and return a Price object
 * It will also take care of the internacionalization of the currency and format
 * @param price
 * @param currency
 */
function getPrice(price: string, currency: string): Price {
  let amount = 0;
  let decimals = 0;
  if (price.indexOf('.') !== -1) {
    const priceSplitted = price.split('.');
    amount = Number(priceSplitted[0]);
    decimals = Number(priceSplitted[1]);
  } else {
    amount = Number(price);
    decimals = 0;
  }

  // Parece que para la localización en español muestra recién el separador de miles después de 4 digitos
  // https://stackoverflow.com/questions/57628055/tolocalestring-not-working-on-numbers-less-than-10000-in-all-browsers
  const fullPrice = new Intl.NumberFormat('es-AR', {
    currency,
    maximumFractionDigits: 2,
    style: 'decimal',
  }).format(+price);
  return {
    amount,
    decimals,
    currency,
    fullPrice,
  };
}

/**
 * Map the api search result into a object that we use in our view
 * @param meliSearchResult
 */
function mapApiSearchResultToItems(
  meliSearchResult: SearchMeliApi
): SearchResult {
  const author: Author = {
    name: 'Jerónimo',
    lastname: 'Franzani',
  };
  let items: Item[] = [];

  items = meliSearchResult.results.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: getPrice(item.price.toString(), item.currency_id),
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      state_name: item.address.state_name,
    };
  });

  return {
    author,
    categories: [],
    items,
  };
}

routes.get('/api/items', async (req, res) => {
    console.log(req)
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`
  );
  const data = await response.json();
  res.send(mapApiSearchResultToItems(data));
});
