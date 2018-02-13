class WelcomePage {
    constructor() {
        this.designers = {
            octavia: {
                name: "octavia",
                img: "octavia.jpg"
            }
        }
    }

    load(options) {
        const uid = options.params[1]
        return firebase.firestore().collection("users").doc(uid).get().then((doc) => {
            return this.html = `
                <div class="flex center">
                    <div class="text-center logo m-btm-lg m-top-lg">Garden Spruce</div>
                </div>
                <div class="flex center">
                    <div class="six">
                        <h3 class="text-center m-btm-lg">
                            Meet your garden designer.
                        </h3>
                        <div class="flex center m-btm-lg">
                            <div><img src="imgs/${this.designers[doc.data().stylist].img}" class="designer-img" /></div>
                        </div>
                        <p class="m-btm-md text-center quote">
                            "I have been a garden designer in Seattle for over twenty years and..."
                        </p>
                        <div class="text-center capitalize"><b>- ${doc.data().stylist}</b></div>
                    </div>
                </div>
                `
        })
    }

    show(el) {
        const div = this.el = document.createElement("div")
        div.className = "container"
        div.innerHTML = this.html
        el.appendChild(div)
    }
}