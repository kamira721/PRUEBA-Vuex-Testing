<template class="container">
  <div class="row text-center mt-3">
      <div class="col-12 col-sm-12">
          <div>
              <img :src="imgError" alt="">  
          </div>
          
          <div>
              <router-link to="/" tag="button" class="btn btn-secondary">Volver al inicio</router-link>
          </div>  
      </div>
  </div>
</template>

<script>
// Importando imagen de error 404
import Error404 from '../assets/error404.jpg.webp';
export default {
    name: 'Error404',
    data () {
        return {
            imgError: Error404
        }
    }
}
</script>

<style scoped>
img {
    width: 100vw;
    height: 70vh;
}
</style>