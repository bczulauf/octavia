class ChatPage {
    constructor() {}

    load() {
        return this.html = `
            <div class="flex center">
                <div class="eight">
                    <ul id="messages">
                        <li>
                            <div class="flex">
                                <div class="message-author">Garden Spruce Team</div>
                                <div class="message-date">${new Date()}</div>
                            </div>
                            <p>
                                Welcome, ${currentUser.displayName}! We will match you with a designer in the next 48 hours. In the meantime could you please tell us the days and times that work best for you to meet? Thanks!
                            </p>
                        </li>
                    </ul>
                    <form id="message-form">
                        <div class="flex">
                            <input type="text" class="inpt inpt-lg m-btm-md" name="message" placeholder="Message" />
                            <button type="submit" id="feedback-button" class="button button-primary button-lg">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            `
    }

    show(el) {
        const div = this.el = document.createElement("div")
        div.classList = "container dashboard"
        div.innerHTML = this.html
        el.appendChild(div)
    }

    postShow() {
        const messagesElem = document.getElementById("messages")
        const unsubscribe = firebase.firestore().collection("messages").where("userId", "==", currentUser.uid).orderBy("timestamp").onSnapshot((snapshot) => {
            const fragment = document.createDocumentFragment()
            snapshot.docChanges.forEach(function(change) {
                if (change.type === "added") {
                    const data = change.doc.data()
                    const li = document.createElement("li")

                    li.innerHTML = `
                        <div class="flex">
                            <div class="message-author">${data.authorName}</div>
                            <div class="message-date">${data.date}</div>
                        </div>
                        <p>
                            ${data.message}
                        </p>
                    `
                    fragment.appendChild(li)
                }
            })

            messagesElem.appendChild(fragment)
            messagesElem.scrollIntoView(false)
        })

        document.getElementById("message-form").addEventListener("submit", this.handler.bind(this), false)
    }

    handler (evt) {
        evt.preventDefault()
        const formElem = document.getElementById("message-form")
        const formData = Util.getFormData(new FormData(formElem))
        spruceAPI.addMessage(currentUser.uid, "testStylist", currentUser.uid, currentUser.displayName, formData.message)
        formElem.reset()
    }
}
