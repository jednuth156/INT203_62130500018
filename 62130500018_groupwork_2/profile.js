    const app = {
        data() {
            return {
                firstname : "Jednuth",
                lastname : "Tatirat",
                career : 'Hello Teacher',
                image:'./images/profile.jpg',
                show: true,
                // url: 'http://www.sit.kmutt.ac.th'
            }
        },
        // created(){
        //     console.log('message is ' + this.msg)
        // },
        // update(){
        //     console.log('message is changed to ' + this.msg)
        // },

    }
    mountedApp = Vue.createApp(app).mount('#app')