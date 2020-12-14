<template>
  <div class>
    <footer class="footer">
        <div class="footer__info mb-3">
           <h6 class="footer__info-text">Página web creada por: Kamira Velasquez</h6>
        </div>
    
        <div class="footer__links">
          <!-- Íconos de redes sociales-->
          <a href="https://www.facebook.com/RickandMorty/photos/" target="_blank">
              <font-awesome-icon class="icon" :icon="[ 'fab', 'facebook-square' ]"/>
          </a>
          <a href="https://www.instagram.com/rickandmorty/?hl=es-la" target="_blank">
              <font-awesome-icon class="icon" :icon="[ 'fab', 'instagram-square' ]"/>
          </a>
          <a href="https://github.com/" target="_blank">
              <font-awesome-icon class="icon" :icon="[ 'fab', 'github-square' ]"/>  
          </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
footer {
  width: 100vw;
  background-color: rgba(121, 9, 118, 0.961);
  display: flex;
  align-items: center;
  padding: 2% 0%;
   justify-content: space-around;
   
}

.footer__links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
   flex-flow: row wrap;
  justify-items: center;
  text-align: center;

}

.footer__links a {
  text-decoration: none;
  color: #e8e8e8;
  padding: 1px 5px;
  
}


.footer__info {
  text-align: center;
  color: #e8e8e8;
  text-align: left;
}

.footer__info-text {
  font-size: 18px;
  font-family: "Amatic SC", cursive;
  margin-top: 7%;
  text-shadow: rgb(30, 1, 38) 0.1em 0.2em 0.2em;
}

a {
  color: white;
  text-decoration: none;
  
}

  .icon {
    font-size: 2rem;
    margin: 0 0,8rem;
    
  }
   a:hover {
  background-color:transparent;
  opacity: .7;
  
}


</style>