<template>
  <b-container v-on:button-click="buttonClick">
    <app-button text="Играть" @click="onClick">
    </app-button>
      <app-game-board :size=3>
      </app-game-board>
  </b-container>

</template>

<script>
import appButton from "./button.vue";
import appGameBoard from "./game-board.vue";

export default {
  name: 'ticTakToe',
  components: {
    'appButton': appButton,
    'appGameBoard': appGameBoard,
  },
  data () {
    return {
      
    }
  },
  method: {
    buttonClick: function() {
      alert('das');
    },
    onClick: function() {
      alert('das');
    }
  }
}
</script>

<style lang="scss">
</style>
