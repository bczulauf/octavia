class GardenForm {
    constructor() {
    }

    load () {
        return this.html = `
            <div class="text-center m-btm-lg">
                <h3>Tell us about your project.</h3>
                <p>The more we know, the better the designer match.</p>
            </div>
            <div class="flex center">
                <form id="garden-form">
                    <label class="label">Budget</label>
                    <select name="budget" class="block inpt three m-btm-lg">
                        <option>Below $5k</option>
                        <option value="5-10" selected>$5k - 10k</option>
                        <option>$10k - 25k</option>
                        <option>$25k - 75k</option>
                        <option>$75k and up</option>
                    </select>
                    <label class="label">Which design tasks do you need help with?</label>
                    <div class="flex wrap m-btm-lg eight garden-tasks">
                        <input type="checkbox" class="checkbox-input" id="plants" name="plants" value="true" />
                        <label for="plants" class="checkbox-label col two m-btm-md">
                            <div class="text-center">Plants</div>
                            <img src="imgs/plants.png" />
                        </label>
                        <input type="checkbox" class="checkbox-input" id="fence" name="fence" value="true" />
                        <label for="fence" class="checkbox-label col two m-btm-md">
                            <div class="text-center">Fence / Wall</div>
                            <img src="imgs/fence.png" />
                        </label>
                        <input type="checkbox" class="checkbox-input" id="pots" name="pots" value="true" />
                        <label for="pots" class="checkbox-label col two m-btm-md">
                            <div class="text-center">Pots</div>
                            <img src="imgs/pots.png" />
                        </label>
                        <input type="checkbox" class="checkbox-input" id="water" name="waterFeature" value="true" />
                        <label for="water" class="checkbox-label col two m-btm-md no-m-right">
                            <div class="text-center">Water Feature</div>
                            <img src="imgs/water.png" />
                        </label>
                        <input type="checkbox" class="checkbox-input" id="veggie" name="veggieBed" value="true" />
                        <label for="veggie" class="checkbox-label col two m-btm-md">
                            <div class="text-center">Veggie Bed</div>
                            <img src="imgs/veggie.png" />
                        </label>
                        <input type="checkbox" class="checkbox-input" id="lawn" name="lawn" value="true" />
                        <label for="lawn" class="checkbox-label col two m-btm-md">
                            <div class="text-center">Lawn</div>
                            <img src="imgs/lawn.png" />
                        </label>
                        <input type="checkbox" class="checkbox-input" id="deck" name="deck" value="true" />
                        <label for="deck" class="checkbox-label col two m-btm-md">
                            <div class="text-center">Deck</div>
                            <img src="imgs/deck.png" />
                        </label>
                        <input type="checkbox" class="checkbox-input" id="play" name="play" value="true" />
                        <label for="play" class="checkbox-label col two m-btm-md">
                            <div class="text-center">Play Area</div>
                            <img src="imgs/play.png" />
                        </label>
                    </div>
                    <label class="label">Tell us more about you and your project:</label>
                    <textarea class="textarea inpt m-btm-md" name="projectDescription" placeholder="Let us know any additional details like your style and why you are doing a redesign."></textarea>
                    <button id="garden-button" type="submit" class="button button-primary button-lg">Find me a designer</button>
                </form>
            </div>`
    }

    show (el) {
        const div = this.el = document.createElement("div")
        div.className = "container"
        div.innerHTML = this.html
        el.appendChild(div)
    }

    postShow() {
        document.getElementById("garden-form").addEventListener("submit", this.handler.bind(this), false)
        document.getElementById("garden-button").addEventListener("touchend", this.handler.bind(this), false)
    }

    handler (evt) {
        evt.preventDefault()
        const formData = Util.getFormData(new FormData(evt.target))
        spruceAPI.updateUser({ userId: currentUser.uid, data: formData }).then((user) => {
            router.navigate("chat")
        })
    }
}