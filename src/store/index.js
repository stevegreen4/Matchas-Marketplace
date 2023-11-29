import { createStore as _createStore } from 'vuex';
import ItemService from '../services/ItemService';

export function createStore() {
  return _createStore({
    state: {
      items: [],
      searchTerm: '',
      singleItem: {}
    },
    mutations: {
      GET_ALL_ITEMS(state) {
        ItemService.list().then(response => {
          state.items = response.data;
        })
          .catch(error => {
            console.log(error);
          });
      },
      GET_ITEMS_BY_ID(state, id) {
        ItemService.getById(id).then(response => {
          state.singleItem = response.data;
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
    actions: {},
    modules: {},
    // Strict should not be used in production code. It is used here as a
    // learning aid to warn you if state is modified without using a mutation.
    strict: true
  });
}
