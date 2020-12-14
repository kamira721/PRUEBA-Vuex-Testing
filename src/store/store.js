import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiData: [],
    characters: [],
    comments: [],
    favorites: [],
    searching: ''
  },

  getters: {
    sendCharacters(state) {
      return state.apiData;
    },

    sendComments(state) {
      return state.comments;
    },

    sendFavorites(state) {
      return state.favorites;
    }
  },

  mutations: { 

    savingOpinionObject(state, opinionObjectReceived) {
      state.comments.push(opinionObjectReceived);
    },

    savingFavObject(state, favReceived) {
      state.favorites.push(favReceived);
    },

    deletingFavorite(state, index) {
      state.favorites.splice(index, 1);
    },

    deletingOpinion(state, index) {
      // compara el valor de id enviado con el id del elemento del array
      console.time("Duración");
      state.comments.splice(index, 1);
      console.timeEnd("Duración");
    },

    editingOpinion(state, newCommentReceived) {
      // Modificando valores del objeto
      state.comments[newCommentReceived.index].user = newCommentReceived.user;
      state.comments[newCommentReceived.index].comment = newCommentReceived.comment;
    },
    receivedApiInfo(state, response) {
      state.apiData = response;
    },
  },

  actions: {
    saveOpinion(context, opinionObjectReceived ) {
      context.commit('savingOpinionObject', opinionObjectReceived);
    },

    saveFavorites(context, favReceived) {
      context.commit('savingFavObject', favReceived);
    },

    deleteFavorite(context, index) {
      context.commit('deletingFavorite', index);
    },

    deleteOpinion(context, index) {
      context.commit('deletingOpinion', index);
    },

    editOpinion(context, newCommentReceived) {
      context.commit('editingOpinion', newCommentReceived);
    },
    apiData({commit}) {
      fetch('https://rickandmortyapi.com/api/character/')
      .then(result => result.json())
      .then(response => {console.log(response.results)
        commit('receivedApiInfo', response.results);
    })
      
      .catch(error => console.error(error));
    }
 
  }
});
