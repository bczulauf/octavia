class SignupForm {
    constructor() {
    }

    load () {
        return this.html = `
            <div class="text-center m-btm-lg">
                <h3>Create account.</h3>
                <p>Sign up and join the garden party.</p>
            </div>
            <div class="flex center">
                <form id="signup-form" class="five">
                    <input name="firstName" class="inpt block m-btm-md" placeholder="First name" />
                    <input name="lastName" class="inpt block m-btm-md" placeholder="Last name" />
                    <input name="email" class="inpt block m-btm-md" type="email" placeholder="Email" />
                    <input name="password" class="inpt block m-btm-md" type="password" placeholder="Password" />
                    <button id="signup-button" type="submit" class="button button-primary button-lg">Next</button>
                </form>
            </div>
            `
    }

    show (el) {
        const div = this.el = document.createElement("div")
        div.className = "container"
        div.innerHTML = this.html
        el.appendChild(div)
    }

    postShow() {
        document.getElementById("signup-form").addEventListener("submit", this.handler.bind(this), false)
        document.getElementById("signup-button").addEventListener("touchend", this.handler.bind(this), false)
    }

    handler (evt) {
        evt.preventDefault()
        const formData = Util.getFormData(new FormData(evt.target))
        spruceAPI.addUser({ 
            email: formData.email,
            password: formData.password, 
            firstName: formData.firstName,
            lastName: formData.lastName,
            group: "client"
        }).then((user) => {
            router.navigate("address")
        })
        .catch((error) => {
            alert(error)
        })
    }
}