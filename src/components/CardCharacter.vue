<template>
  <div class="container">
    <h1 class="my-3">Lista de personajes</h1>

    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex modales" v-for="(item, index) in sendCharacters" :key="index"> 
        <div class="card mb-3">
          <img :src="item.image" class="card-img-top" :alt="item.name">
          <div class="card-body bg-secondary">
            <h5 class="card-title font-weight-bold text-white text-center py-3">{{item.name}}</h5>
           <div class="d-flex pb-2">
              <!-- Botón Modal 1 'Opinión' -->
              <button type="button" class="btn btnopinar" data-toggle="modal" :data-target="`#modal1-${item.id}`" data-whatever="@mdo"> <font-awesome-icon icon="comment-alt"></font-awesome-icon> Opinar</button>
             
              <!-- Botón Modal 2 'Ver más' -->
              <button type="button" class="btn btnver" data-toggle="modal" :data-target="`#modal2-${item.id}`"> <font-awesome-icon icon="eye"></font-awesome-icon> Ver más</button>
           </div>
          </div>
        </div>

        <!-- Modal 1 'Opinión' -->       
        <div class="modal fade" :id="`modal1-${item.id}`"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{item.name}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Nombre:</label>
                    <input type="text" class="form-control" id="recipient-name" placeholder="Ingresa tu nombre" v-model="userName">
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">Tu opinión:</label>
                    <textarea class="form-control" id="message-text" placeholder="Escribe un comentario" v-model="userComment"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btncerraropinion mx-3" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btnguardar" data-dismiss="modal" data-target="`#modalOpinion-${item.id}`" @click="opinionData(item)">Guardar</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal 2 'Ver más' -->
        <div class="modal fade" :id="`modal2-${item.id}`"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title font-weight-bold" id="exampleModalLabel">{{item.name}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>               
              </div>
              <div class="modal-body">
                <div class="d-flex justify-content-center">
                    <div>
                      <img :src="item.image" class="card-img-top" alt="item.name">
                    </div>
                    <div class="col-8 col-sm-6">
                      <p><strong>Status: </strong>{{item.status}}</p>
                      <p><strong>Especie: </strong> {{item.species}}</p>
                      <p><strong>Ubicación: </strong>{{item.location.name}}</p>
                      <p><strong>Cantidad de episodios: </strong>{{item.episode.length}}</p>
                      <p><strong>Fecha de creación: </strong>{{item.created.slice(0,10)}}</p>
                    </div>                 
                </div> 
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btncerrar" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btnanadir" data-dismiss="modal" @click="favorite(item)">Añadir en Favoritos</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Swal from 'sweetalert2';
export default {
  name: 'Cards',

  data() {
    return {
      userName: '',
      userComment: ''
    }
  },

  computed: {
      ...mapGetters(['sendCharacters'])
  },

  methods: {
    opinionData(item) {
      if(!this.userName && !this.userComment) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debe ingresar datos para guardar un comentario',
        });
      } else if(!this.userName) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debe ingresar su nombre para guardar un comentario',
        });
      } else if(!this.userComment) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debe agregar un comentario',
        });
      } else if(this.userName.length <= 2) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Su nombre debe contener al menos 2 caracteres',
        });
      } else if(this.userComment.length <= 10) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Su comentario de contener como mínimo 10 caracteres',
        });
      } else {
          // Objeto  con datos que ingresó el usuario y los datos del personaje, los que serán enviados a store
          let opinionObject = {
            characterName: item.name,
            characterId: item.id,
            user: this.userName,
            comment: this.userComment
          }

          this.$store.dispatch('saveOpinion', opinionObject);
          // Redireccionando a la ruta 'opinions'
          this.$router.push('/opiniones');
      } 
    },

    favorite(item) {
      this.$store.dispatch('saveFavorites', item);
      // Redireccionando a la ruta 'favoritos'
      this.$router.push('/favoritos');
    }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modales {
    margin-top: 20px;
    padding: 3px;
    box-shadow: 2px 2px 10px rgb(150, 9, 211);
    font-family: "Amatic SC", cursive;
  }

/* .d-flex {
  justify-content: space-evenly;
} */

h1 {
 font-family: "Amatic SC", cursive;
 color: rgb(255, 255, 255);
 text-shadow: 1px 2px rgb(38, 37, 37);
}
.card-title {
   text-shadow: 1px 1px rgb(14, 14, 14);
}
.btn {
  border-radius: 15px 20px;
}
.btnopinar {
  background-color: rgb(40, 74, 148);
  color: white;
  text-shadow: 1px 1px rgb(14, 14, 14);
}
.btnver {
  background-color: rgb(116, 29, 103);
  color: white;
  text-shadow: 1px 1px rgb(14, 14, 14);
}
.btnanadir {
   background-color: rgb(26, 135, 88);
   color: white;
}
.btncerrar {
   background-color: rgb(234, 48, 113);
   color: white;
}
.btnguardar {
   background-color: #008dd3;
   color: white;
}
.btncerraropinion {
   background-color: rgb(234, 48, 113);
   color: white;
}
</style>
