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
            const isOnboarding = ["userForm", "gardenForm"].includes(pageName)

            // This logic should probably move to the route level. Don't want to allow users to retake onboarding.
            if (isOnboarding && currentUser) {
                this.navigate("dashboard")
            } else {
                this.show(pageName)
            }
        } else {
            this.show("home")
        }
    }

    async show (pageName) {
        const page = this.routes[pageName]
        await page.load()
        this.el.innerHTML = ''
        page.show(this.el)
        // Scrolls page to top.
        document.body.scrollTop = 0
    }
}