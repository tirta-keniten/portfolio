<template>
  <vue-typer
    :text="identity"
    :repeat="Infinity"
    :shuffle="false"
    initial-action="typing"
    :pre-type-delay="70"
    :type-delay="70"
    :pre-erase-delay="3000"
    :erase-delay="25"
    erase-style="backspace"
    :erase-on-complete="true"
    caret-animation="smooth"
  />
</template>

<script>
export default {
  computed: {
    identity() {
      return this.$store.state.identity.all
    }
  }
}
</script>

<style lang="scss">
/* SCSS */
.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  padding: 1rem;
  background-color: #000000;

  .custom.char {
    /* Styles for each character
       e.g. color, background-color */
    color: #efefef;

    &.typed {
      /* Styles specific to typed characters
         i.e. characters to the left of the caret */
      color: #efefef;
    }
    &.selected {
      /* Styles specific to selected characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a selection-based style */
      background-color: #2e5a86;
    }
  }

  .custom.caret {
    /* Styles for the caret
       e.g. background-color, animation, display */
    background-color: white;
    width: 0.25rem;
  }
}
</style>
