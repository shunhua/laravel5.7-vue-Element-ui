import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name:"home",
            path:'/',
            component: resolve =>void(require(['./components/Home.vue'], resolve))
        },
        {
            name:"bsh",
            path:'/bsh',
            component: resolve =>void(require(['./components/Bsh.vue'], resolve))
        },
    ]
})