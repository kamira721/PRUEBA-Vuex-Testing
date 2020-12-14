<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top py-3">
        <div class="container">
            <!-- Logo que redirige a 'Home' -->
            <router-link class="navbar-brand font-weigth-bold shadows texto" to='/'>Rick <span class="span_logo">And</span> Morty</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- Búsqueda personaje -->
                
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link font-weight-bold text-white" to='/opiniones'>Opiniones</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link font-weight-bold text-white" to='/favoritos'>Favoritos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link font-weight-bold text-white" to='/administracion'>Administración</router-link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
nav {
    background-color: rgba(121, 9, 118, 0.961);
    font-family: "Amatic SC", cursive;
    font-size: 20px;
    font-weight: bold
}

.texto {
    font-size: 40px;
    font-family: 'Shadows Into Light', cursive;
   text-shadow: rgb(30, 1, 38) 0.1em 0.2em 0.2em;
}
.span_logo {
    font-size: 25px;
}
.navbar {
    text-shadow: black 0.1em 0.1em 0.2em;
}
a:hover {
  background-color:transparent;
  opacity: .7;
}
</style>