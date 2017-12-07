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
            new Header (),
            new HomePage(),
            new Footer()
        ),
        // dashboard: new Layout (
        //     new Header (),
        //     new DashboardPage(),
        //     new Footer()
        // )
    },
    document.querySelector('main')
)
router.listen()