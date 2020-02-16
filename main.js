// 1. Definisikan komponen Vue
// Komponen "Home" akan menampilkan halaman depan aplikasi
const Home = Vue.extend({ 
    template: '#home',
    data: function() {
        return {
            judul:'!'
        }        
    }
});
const Work = Vue.extend({ 
    template: '#work',
    data: function() {
        return {
            kerjaan: [
                {
                    id: 1,
                    url: 'https://imaka.or.id',
                    title: 'IMAKA',
                    img: 'images/work1.png',
                    type: 'CMS'
                },
                {
                    id: 2,
                    url: 'https://paparkir.com',
                    title: 'Paparkir',
                    img: 'images/work2.png',
                    type: 'Landing'
                },
                {
                    id: 3,
                    url: 'https://baleritaflorist.com',
                    title: 'Balerita Florist',
                    img: 'images/work3.png',
                    type: 'CMS'
                }
            ]
        }
    }
});
const About = Vue.extend({ 
    template: '#about',
    data: function() {
        return {
            judul:'!'
        }        
    }
});
const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About },
    { path: '/work', component: Work }
];
const router = new VueRouter({ routes:routes })
const spa = new Vue({ router }).$mount('#main-wrapper');