<template>
  <b-row class="justify-content-center">
    <b-col md="3">
      <b-button :size="'lg'" :variant="'primary'">
        {{ text }}
      </b-button>
    </b-col>
  </b-row>
</template>

<script>

export default {
  name: 'app-button',
  props: [
    'text'
  ],
  data () {
    return {
      
    }
  },
  methods: {
    onClick: function() {
      console.log(1);
      this.$emit('button-click');
    }
  }
};
</script>

<style lang="scss">


</style>
