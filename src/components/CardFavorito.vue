<template>
  <div class="container">
    <!-- Card -->
    <div v-if="arrayFavorites.length > 0">
      <h1 class="my-3 text-white">Lista de favoritos</h1>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" v-for="(item, index) in arrayFavorites" :key="index">
          <div class="card mb-4">
            <img :src="item.image" class="card-img-top" :alt="item.name">
            <div class="card-body text-center">
              <h5 class="card-title">{{item.name}}</h5>
              <p class="card-text">{{item.gender}}</p>
              <a href="#" class="btn btnfav" @click="deleteFav(index)"><font-awesome-icon icon="trash-alt"></font-awesome-icon> Eliminar de favoritos</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Alert -->
    <div class="alert alert-danger mt-5 text-center" role="alert" v-else>
      Aún no existen favoritos seleccionados por el usuario
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  name: 'Favorites',
  computed: {
    arrayFavorites() {
      return this.$store.getters.sendFavorites;
    }
  },

  methods: {
    deleteFav(index) {
      Swal.fire({
        title: '¿Desea eliminar?',
        text: "Esta acción no se puede revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar'
      }).then((result) => {
        if (result.value) {
        this.$store.dispatch('deleteFavorite', index);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

    }
  }
}
</script>

<style scoped>
  /* .container {
     font-family: "Amatic SC", cursive;
  } */
    h1 {
     font-family: "Amatic SC", cursive;
    text-shadow: 1px 2px rgb(38, 37, 37);
    }
    .btnfav {
      border-radius: 15px 20px;
      background-color: rgb(255, 66, 66);
      color: white;
      text-shadow: 1px 2px rgb(38, 37, 37);
    }
    
</style>