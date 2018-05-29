<template>
  <div class="wrap-cell">
    <div class="inner-cell" @click="onClick">
      <span class="icon" @click="onClick">{{ icon }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-ceil-board',
  props: [
    'coordX',
    'coordY',
  ],
  data() {
    return {
      indexIcon: 0,
      isCrossTurn: true,
    }
  },
  methods: {
    onClick: function() {
      this.indexIcon = this.isCrossTurn ? 1 : 2;
      this.isCrossTurn = !this.isCrossTurn;
    }
  },
  computed: {
    icon: function() {
      const icons = ['', 'x', 'о'];
      console.log(this.indexIcon);
      return icons[this.indexIcon];
    }
  }
};
</script>

<style lang="scss">
.wrap-cell {
  position: relative;
  padding-top: 100%;
  margin: 10px;
  background-color: rgb(225, 235, 229);
  border-radius: 10%;
}

.inner-cell {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  font-size: 200px;
  line-height: 20px;
}

</style>
