<template>
    <div class="modal" :class="{'is-active': activeModal}">
        <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
        <slot></slot>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
</div>
</template>

<script>
    export default {
    props: {
        activeModal: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    methods: {
        closeModal() {
            return this.$emit('closeModal');
        }
    }  
    }
</script>

<style>

</style>
