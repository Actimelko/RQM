<template>
  <div id="app" class="has-background-white-ter">
    <modal :active-modal="activeModal" @closeModal="closeModal">
      <form-add-quote 
        @closeModal="closeModal"
        :newQuote="newQuote"
        @addQuote="addQuote"/>
    </modal>
    <div class="container is-widescreen display-quote">
      <display-quote 
        class="has-background-white-bis"
        :author="randomQuote.author"
        :quote="randomQuote.quote"
        @displayModal="displayModal" 
        @randomQuote="getRandomQuote"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Modal from './components/Modal.vue';
import FormAddQuote from './components/FormAddQuote.vue';
import DisplayQuote from './components/DisplayQuote.vue';
const baseURL = 'http://localhost:3000';
const vm = {
  name: 'app',
  components: {
    Modal, FormAddQuote, DisplayQuote
  },
  data () {
    return {
      activeModal: false,
      quotes: [],
      randomQuote: '',
      newQuote: {}
    }
  },
  mounted() {
    axios.get(baseURL + '/api/quotes')
      .then(response => {
        this.quotes = response.data
        this.randomQuote = this.quotes[0];
      })
      .catch(error => console.log(error));
  },
  methods: {
    displayModal() {
      this.activeModal = true;
    },
    closeModal() {
      this.formClear();
      this.activeModal = false;
    },
    getRandomQuote() {
      if (this.quotes.length){
        const random = Math.floor(Math.random() * this.quotes.length);
        this.randomQuote = this.quotes[random];
      }
    },
    addQuote() {
      axios.post(baseURL + '/api/add-quote', {
        quote: this.newQuote.quote,
        author: this.newQuote.author
      })
      .then(response => {
          this.quotes.push(response.data);
          this.formClear();
      })
      .catch(error => console.log(error));
    },
    formClear() {
      this.newQuote.quote = '';
      this.newQuote.author = '';
    }
  }
}

export default vm;
</script>

<style scoped>
  .display-quote {
    height: 100vh;
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
