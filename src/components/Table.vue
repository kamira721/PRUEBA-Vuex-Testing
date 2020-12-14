<template>
  <div class="container justify-content-center">
    <div v-if="arrayOpinions.length > 0">
      <h1 class="my-3">Administración</h1>
      
      <!-- Tabla dinámica-->
      <table class="table table-hover table-responsive-sm">
        <thead>
          <tr class="datos">
            <th>N°</th>
            <th>Personaje</th>
            <th>Opinión</th>
            <th>Usuario</th>
            <th>Eliminar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in arrayOpinions" :key="index">
            <td>{{index + 1}}</td>
            <td>{{item.characterName}}</td>
            <td>{{item.comment}}</td>
            <td>{{item.user}}</td>
            <td>
              <button type="button" class="btn btnn2 text-white" data-toggle="modal" :data-target="`#deleteModal-${index}`"> <font-awesome-icon icon="trash-alt"></font-awesome-icon>
              Eliminar</button>

               <!-- Modal 'Eliminar -->
              <div class="modal fade" :id="`deleteModal-${index}`" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-dark" id="exampleModalLabel">¿Deseas eliminar comentario realizado por {{item.user}}?</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btnvolver" data-dismiss="modal">Volver</button>
                      <button type="button" class="btn btneliminar" data-dismiss="modal" @click="deleteComment(index)">Eliminar</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>

            <td>
              <button class="btn btn-info btnn" @click="editEvent(index)"> <font-awesome-icon icon="edit"></font-awesome-icon> Editar</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Botón para borrar opiniones -->
      <button type="button" class="btn btnn3" @click="restart"><font-awesome-icon icon="times"></font-awesome-icon> Borrar datos</button>     
    </div>

    <!-- Alert -->
    <div class="alert alert-warning mt-5 text-center" role="alert" v-else>
      Aún no existen datos para administrar
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',

  computed: {
    arrayOpinions() {
      return this.$store.getters.sendComments;
    }
  },

  methods: {
    deleteComment(index) {
      this.$store.dispatch('deleteOpinion', index);
    },

    editEvent(index) {
      this.$router.push(`/edit-opinion/${index}`);
    },

    restart(){
      this.$emit('restartAll');
    }
  }
}
</script>
<style scoped>

     h1 {
      font-family: "Amatic SC", cursive;
      color: white;
      text-shadow: 1px 2px rgb(38, 37, 37);
  }
  .datos {
     text-shadow: 1px 2px rgb(62, 5, 53);
     color: rgb(255, 255, 255);
  }

  table {
      font-family: "Amatic SC", cursive;
      color: rgb(255, 255, 255);
      font-size: 19px;
  }
.btnn {
   background-color: rgb(11, 129, 147);
   border-radius: 15px 20px;
   text-shadow: 1px 2px rgb(38, 37, 37);
}
.btnn2 {
  background-color: rgb(228, 57, 57);
  border-radius: 15px 20px;
  text-shadow: 1px 2px rgb(38, 37, 37);
}
.btnn3 {
  background-color: rgb(237, 255, 157);
  border-radius: 15px 20px;
  color: black;
  font-weight: bold;
}
 .btnvolver {
    border-radius: 15px 20px;
    background-color: rgb(81, 81, 81);
    color: white;
 }
 .btneliminar {
    border-radius: 15px 20px;
    background-color: rgb(228, 57, 57);
    color: white;
 }

</style>