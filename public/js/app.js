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
            new HomePage()
        ),
        addressForm: new Layout (
            new ProgressBar({ index: 1 }),
            new AddressForm()
        ),
        gardenForm: new Layout (
            new ProgressBar({ index: 2 }),
            new GardenForm()
        ),
        styleForm: new Layout (
            new ProgressBar({ index: 3 }),
            new StyleForm()
        ),
        budgetForm: new Layout (
            new ProgressBar({ index: 4 }),
            new BudgetForm()
        ),
        userForm: new Layout (
            new ProgressBar({ index: 5 }),
            new UserForm()
        ),
        "welcome/(.*)": new Layout (
            new WelcomePage(),
        )
    },
    document.querySelector('main')
)
router.listen()