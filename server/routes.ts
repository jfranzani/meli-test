import {
  Author,
  Item,
  ItemDetail,
  Price,
  SearchItemMeliApi,
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

  return {
    amount,
    decimals,
    currency,
  };
}

function getAuthor(): Author {
  return {
    name: 'Jerónimo',
    lastname: 'Franzani',
  };
}

function getReadableCondition(condition: string): string {
  if (condition === 'new') return 'Nuevo';
  if (condition === 'used') return 'Usado';
  if (condition === 'not_specified') return 'Sin Especificar';
  return condition;
}

function getItem(apiItem: SearchItemMeliApi): Item {
  return {
    id: apiItem.id,
    title: apiItem.title,
    price: getPrice(apiItem.price.toString(), apiItem.currency_id),
    picture: apiItem.thumbnail,
    condition: getReadableCondition(apiItem.condition),
    free_shipping: apiItem.shipping?.free_shipping || false,
    state_name: apiItem.address?.state_name || '',
    sold_quantity: apiItem.sold_quantity || 0,
    category_id: apiItem.category_id || '',
  };
}

/**
 * Map the api search result into a object that we use in our view
 * @param meliSearchResult
 */
function mapApiSearchResultToItems(
  meliSearchResult: SearchMeliApi
): SearchResult {
  const author = getAuthor();
  let items: Item[] = [];
  items = meliSearchResult.results.map(getItem);
  return {
    author,
    categories: getCategories(meliSearchResult),
    items,
  };
}

function convertToDetailItem(item: SearchItemMeliApi): ItemDetail {
  return {
    author: getAuthor(),
    item: getItem(item),
  };
}

function getCategories(searchResult: SearchMeliApi): string[] {
  let categories: string[] = [];
  const categoryFilter = searchResult.filters.find(
    (filter) => filter.id === 'category'
  );
  const currentCategory = categoryFilter?.values[0];

  if (currentCategory) {
    for (let category of currentCategory.path_from_root) {
      categories.push(category.name);
    }
  }
  return categories;
}

routes.get('/api/items', async (req, res) => {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(
      req.query.q
    )}`
  );
  const data = await response.json();
  res.send(mapApiSearchResultToItems(data));
});

routes.get('/api/:categoryId/categories', async (req, res) => {
  const response = await fetch(
    `https://api.mercadolibre.com/categories/${req.params.categoryId}`
  );
  const data = await response.json();
  res.send(data.path_from_root);
});

routes.get('/api/items/:id', async (req, res) => {
  try {
    const itemResponse = await fetch(
      `https://api.mercadolibre.com/items/${req.params.id}`
    );
    const apiItem = await itemResponse.json();
    let itemDetail: ItemDetail = convertToDetailItem(apiItem);

    const itemDescriptionResponse = await fetch(
      `https://api.mercadolibre.com/items/${req.params.id}/description`
    );
    const apiItemDescription = await itemDescriptionResponse.json();
    itemDetail.item.description = apiItemDescription.plain_text;
    res.send(itemDetail);
  } catch (err) {
    res.send(err);
  }
});
