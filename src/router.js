import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login';
import Panelmain from './components/Panelmain'
import Error from '@/views/Error404';
import Home from '@/views/Home';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        }, // cualquier ruta que no e reconoca el * es el que va actuar
        {
            path: '*',
            name: 'error',
            component: Error
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/Panelmain',
            name: 'PanelInicio',
            component: Panelmain
        }
    ]
    });