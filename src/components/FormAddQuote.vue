<template>
    <form id="add-quote" class="box" action="/api/add-quote" method="POST" 
        @submit.prevent="addQuote">
        <div class="field">
            <label class="label">Author</label>
            <div class="control">
             <input 
             class="input" 
             type="text" 
             placeholder="Ivan Ivanov" 
             v-model="newQuote.author"
             name="author"
             required>
            </div>
        </div>

        <div class="field">
            <label class="label">Quote</label>
            <div class="control">
                <textarea class="textarea" 
                placeholder="input quote" 
                v-model="newQuote.quote"
                required>
                </textarea>
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
            <div class="control">
                <button class="button is-text" @click.prevent="closeModal">Cancel</button>
            </div>
        </div>
    </form>
</template>


<script>
import axios from 'axios';
    export default {
        props: {
            newQuote: {
                type: Object,
                required: true
            }
        },
        methods: {
        closeModal() {
            return this.$emit('closeModal');
        },
        addQuote() {
            this.$emit('addQuote');
        }
        }
    }
</script>

<style>

</style>