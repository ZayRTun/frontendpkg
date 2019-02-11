// Vue
window.Vue = require('vue');

window.Event = new Vue();

// Vue Component
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import ExampleComponent from './components/ExampleComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';

const routes = [
    { path: '/', component: HomeComponent},
    { path: '/about', component: AboutComponent}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    components: { 'navbar-component': NavbarComponent},
    router
});
