class LoginForm {
    constructor() {
    }

    load () {
        return this.html = `
            <div class="text-center m-btm-lg">
                <h3>Login.</h3>
                <p>Welcome back.</p>
            </div>
            <div class="flex center">
                <form id="login-form" class="five">
                    <input name="email" class="inpt block m-btm-md" type="email" placeholder="Email" />
                    <input name="password" class="inpt block m-btm-md" type="password" placeholder="Password" />
                    <button type="submit" class="button button-primary button-lg">Login</button>
                </form>
            </div>
            <div>Don't have an account? <a href="#signup">Join now!</a></div>
            `
    }

    show (el) {
        const div = this.el = document.createElement("div")
        div.className = "container"
        div.innerHTML = this.html
        el.appendChild(div)
    }

    postShow() {
        document.getElementById("login-form").addEventListener("submit", this.handler.bind(this), false)
    }

    handler (evt) {
        evt.preventDefault()
        const formData = Util.getFormData(new FormData(evt.target))
        spruceAPI.loginUser(formData).then((user) => {
            router.navigate("home")
        })
    }
}