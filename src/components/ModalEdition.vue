<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editando opinión: {{objectOpinion.characterName}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="name-user" class="col-form-label">Tu nombre:</label>
                <input type="text" class="form-control" id="name-user" v-model="newNameUser" />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Tu opinión:</label>
                <textarea class="form-control" id="message-text" v-model="newComment"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btnvol" data-dismiss="modal" @click="returnToAdmin">Volver</button>
            <!-- Otra forma botón volver, con router-link demora un poco más -->
            <!-- <router-link to="/administration" tag="button" class="btn btn-secondary">Volver</router-link> -->
            <button type="button" class="btn btnguardar" data-dismiss="modal" @click="editComment">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Inicializar variable '$' de jQuery
import $ from "jquery";
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      // Forma directa
      newNameUser: '',
      newComment: '',
      objectOpinion: {}
    }
  },
  
  mounted() {
    this.objectOpinion = this.$store.getters.sendComments[this.$route.params.index];
    this.newNameUser = this.objectOpinion.user;
    this.newComment = this.objectOpinion.comment;
    // Activando la ventana modal cuando se monte la vista
    $("#editModal").modal("show");
  },

  methods: {
    returnToAdmin() {
      this.$router.push('/administracion');
    },

    editComment() {

      if (this.newNameUser && this.newComment) {
        let newCommentData = {
          user: this.newNameUser,
          comment: this.newComment,
          index: this.$route.params.index
        };

        this.$store.dispatch('editOpinion', newCommentData);
        this.$router.push('/administracion');

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ingrese datos para modificar',
        }).then(() => {
          this.$router.push('/administracion');
        })
      }
    },
  },
};
</script>

<style scoped>
  .modal {
     font-family: "Amatic SC", cursive;
  }
  .btnvol {
    border-radius: 15px 20px;
    background-color: rgb(63, 62, 62);
    color: white;
  }
  .btnguardar {
    border-radius: 15px 20px;
    background-color: #008dd3;
    color: white;
  }
</style>