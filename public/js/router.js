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

    checkAuth () {
        return new Promise((resolve, reject) => {
            const unsubscribe = firebase.auth().onAuthStateChanged( (user) => {
                firebase.auth().onAuthStateChanged((user) => {
                    resolve(user)
                })
                unsubscribe()
            })
        })
    }

    async hashChanged (ev) {
        const hash = window.location.hash
        const onboarding = ["home", "productForm", "budgetForm", "roomForm", "detailForm", "userForm", "colorHateForm", "colorLoveForm", "styleForm"]

        this.checkAuth().then((user) => {
            const route = user && hash.length && onboarding.indexOf(hash.substr(1)) > -1 ? "waiting/" + user.uid : hash.length > 0 ? hash.substr(1) : "home"
            this.show(route)
        })
    }

    async show (pageName) {
        var page
        const routes = this.routes

        for (var route in routes) {
            const match = pageName.match(route)
            if (match) {
                page = routes[route]
                await page.load({ params: match })
                this.el.innerHTML = ''
                page.show(this.el)
                // Scrolls page to top.
                document.body.scrollTop = 0
                break
            }
        }
    }
}