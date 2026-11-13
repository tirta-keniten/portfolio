<template>
  <span class="typewriter">{{ text }}<span class="caret" /></span>
</template>

<script setup>
const identityStore = useIdentityStore()

const { text } = useTyper(identityStore.all)
</script>

<style lang="scss">
.typewriter {
  /* Styles for the typewriter container
     e.g. font-family, font-size  */
  padding: 1rem;
  background-color: #000000;
  color: #efefef;

  .caret {
    /* Styles for the caret
       e.g. background-color, animation, display */
    display: inline-block;
    width: 0.25rem;
    height: 1em;
    margin-left: 2px;
    vertical-align: text-bottom;
    background-color: white;
    animation: typewriter-caret 1s step-end infinite;
  }
}

@keyframes typewriter-caret {
  50% {
    opacity: 0;
  }
}
</style>
