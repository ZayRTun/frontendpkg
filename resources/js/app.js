// Vue
window.Vue = require('vue');

// Vue Component
import Vue from 'vue';
import ExampleComponent from './components/ExampleComponent.vue';
import navbar from './components/NavbarComponent.vue';

const app = new Vue({
    el: '#app',
    components: { ExampleComponent, navbar }
});