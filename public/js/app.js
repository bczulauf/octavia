// Initialize Firebase
const config = {
    apiKey: "AIzaSyDDFNfA09umSRWIcWiwB_t7ytWm_Zpn-iQ",
    authDomain: "octavia-66675.firebaseapp.com",
    databaseURL: "https://octavia-66675.firebaseio.com",
    projectId: "octavia-66675",
    storageBucket: "octavia-66675.appspot.com",
    messagingSenderId: "906541894720"
}
firebase.initializeApp(config)
const spruceAPI = new FirebaseAPI(firebase)

let currentUser
firebase.auth().onAuthStateChanged((user) => {
    currentUser = user
})

const router = new Router(
    {
        home: new Layout (
            new Header(),
            new HomePage(),
            new Footer()
        ),
        about: new Layout (
            new Header(),
            new AboutPage(),
            new Footer()
        ),
        logout: new Layout (
            new LogoutPage()
        ),
        login: new Layout (
            new LoginForm()
        ),
        signup: new Layout (
            new ProgressBar({ index: 1 }),
            new SignupForm()
        ),
        address: new Layout (
            new ProgressBar({ index: 2 }),
            new AddressForm()
        ),
        garden: new Layout (
            new ProgressBar({ index: 3 }),
            new GardenForm()
        ),
        chat: new Layout (
            new Header(),
            new Navigation({ links: [{ url: "chat", name: "Chat" }, {url: "design", name: "Designs" }], selectedLink: "chat"}),
            new ChatPage(),
            new Footer()
        ),
        design: new Layout (
            new Header(),
            new Navigation({ links: [{ url: "chat", name: "Chat" }, {url: "design", name: "Designs" }], selectedLink: "design"}),
            new DesignPage(),
            new Footer()
        )
    },
    document.querySelector('main')
)
router.listen()