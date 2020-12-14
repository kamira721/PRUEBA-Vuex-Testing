<template>
  <div class="container my-5">
    <div v-if="arrayComments.length > 0">
      <h1 class="my-3">Opiniones de usuarios</h1>
      <div :id="`accordion-${index}`" v-for="(item, index) in arrayComments" :key="index">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapse-${index}`" aria-expanded="true" :aria-controls="`collapse-${index}`">
                  Opinión sobre: <strong>{{item.characterName}}</strong> | Realizado por: <strong>{{item.user}}</strong>
                </button>
            </h5>
          </div>
      
          <div :id="`collapse-${index}`" class="collapse px-3" aria-labelledby="headingOne" :data-parent="`#accordion-${index}`">
            <div class="card-body text-justify">
              {{item.comment}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Alert -->
    <div class="alert alert-info mt-5 text-center" role="alert" v-else>
      Aún no existen opiniones de los usuarios
    </div>
  </div>
</template>

<script>
export default {
  name: 'Opiniones',

  computed: {
    arrayComments() {
      return this.$store.getters.sendComments;
    }
  },
}
</script>

<style scoped>

.btn-link {
    color: rgb(63, 63, 70);
    text-decoration: none;
}

    .hover {
      color: #000000;
      text-decoration: none;
    }

  h1 {
      font-family: "Amatic SC", cursive;
      color: white;
      text-shadow: 1px 2px rgb(38, 37, 37);
  }


</style>

