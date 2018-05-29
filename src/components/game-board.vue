<template>
  <div>
    <b-row v-for="i in sizeIndex" v-bind:key="i">
      <b-col md="2" v-for="j in sizeIndex" v-bind:key="j">
        <cell-board :coord-x="i" :coord-y="j">
        </cell-board>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import cellBoard from './cell-board.vue';

export default {
  name: 'app-game-board',
  props: [
    'size',
  ],
  components: {
    'cellBoard': cellBoard,
  },
  data() {
    return {
      show: true,
    }
  },
  methods: {
  },
  computed: {
    sizeIndex: function() {
      let res = [];
      for (let i = 0; i < this.size; i += 1) {
        res[i] = i;
      }
      return res;
    },
  }
};
</script>

<style lang="scss">
</style>
