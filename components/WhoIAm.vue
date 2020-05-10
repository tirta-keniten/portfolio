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
