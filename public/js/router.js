class Router {
    constructor(routes, el) {
        this.routes = routes
        this.el = el
    }

    listen () {
        window.onhashchange = this.hashChanged.bind(this)
        this.hashChanged()
    }

    navigate (path) {
        window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
    }

    async hashChanged (ev) {
        if (window.location.hash.length > 0) {
            const pageName = window.location.hash.substr(1)
            this.show(pageName)
        } else {
            this.show("home")
        }
    }

    getUser () {
        if (currentUser) {
            return currentUser
        }
        
        return new Promise((resolve, reject) => {
            const unsubscribe = firebase.auth().onAuthStateChanged( (user) => {
                firebase.auth().onAuthStateChanged((user) => {
                    resolve(user)
                })
                unsubscribe()
            })
        })
    }

    async show (pageName) {
        const page = this.routes[pageName]
        await this.getUser()
        await page.load()
        this.el.innerHTML = ''
        page.show(this.el)
        // Scrolls page to top.
        document.body.scrollTop = 0
    }
}