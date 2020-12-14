import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store/store';

describe('Inicio con Vue-Store', () => {
    beforeAll(() => {
      Vue.use(Vuex);
      store = new Vuex.Store(store);
    })
  });

  describe('Probando actions y mutation de store', () => {
    it('Probando saveOpinion', () => {
    store.dispatch('saveOpinion', 'prueba action y mutation numero 1');
    expect(typeof store.state.comments).toBe("object");
  
    })
  });