<template>
  <div>
    <CardCharacter/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardCharacter from '@/components/CardCharacter.vue'

export default {
  name: 'Home',
  components: {
    CardCharacter
  }
}
</script>
