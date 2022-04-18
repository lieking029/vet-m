function page(path) {
    return () => import(/* webpackChunkName: '' */ `../pages/${path}`).then(m => m.default || m)
  }
  
  export default [
  
    { path: '*', name:'invalid-page', component: page('errors/page-not-found.vue') }, 
    // Login 
    { path: '/',  name: 'main', component: page('index.vue') },
    { path: '/home', name: 'home', component: page('dashboard.vue') },
    { path: '/dashboard', name: 'dashboard', component: page('dashboard.vue') },
    { path: '/login', name: 'login', component: page('auth/login.vue') }, 
    { path: '/email', name: 'email-password', component: page('auth/email.vue') },
    { path: '/reset', name: 'reset-password', component: page('auth/reset.vue') },
    { path: '/register', name: 'register', component: page('auth/register.vue') },
    { path: '/register/success', name: 'register-success', component: page('auth/register_success.vue') }, 
    { path:'/users', name: 'users', component: page('school/menu2/index.vue') },  
    { path:'/profile', name: 'profile', component: page('school/menu2/profile.vue') },   
    { path: '/change-password', name: 'change-password', component: page('settings/password.vue') }, 
    { path:'/settings', name: 'settings', component: page('settings/index.vue') },  
   
 
    { path:'/pets', name: 'pets', component: page('vet/pets/index.vue') },  
    { path:'/animals', name: 'animals', component: page('vet/animals/index.vue') },  
    { path:'/services', name: 'services', component: page('vet/services/index.vue') },  
    { path:'/appointments', name: 'appointments', component: page('vet/appointments/index.vue') },  
    { path:'/shop', name: 'shop', component: page('vet/shop/index.vue') },  
    { path:'/order', name: 'order', component: page('vet/shop/orders.vue') },   
    { path:'/reports', name: 'reports', component: page('vet/reports/index.vue') },  


     
  ]