<template>
<div class="card fixedCard">
  <div class="card-content">
    <p class="title">
      {{ quote }}
    </p>
    <p class="subtitle">
      {{ author }}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <button class="button is-medium" @click="$emit('displayModal')">Add quote</button>
    </p>
    <p class="card-footer-item">
      <button class="button is-medium" @click="$emit('randomQuote')">Random quote</button>
    </p>
  </footer>
</div>
</template>

<script>
    export default {
        props: {
            quote: {
                type: String,
                required: true,
                default: 'quote'
            },
            author: {
                type: String,
                required: true,
                default: 'author'
            }
        }
    }
</script>

<style scoped>
    .fixedCard {
        min-width: 60vw;
    }
    .card-footer-item{
      padding: 0;
    }
    button {
      border-radius: 0;
      width: 100%;
      height: 100%;
    }
</style>