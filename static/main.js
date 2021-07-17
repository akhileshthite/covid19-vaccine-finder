// Realtime Database
const pin = document.getElementById("pincode");
const date = document.getElementById("date");
const btnSubmit = document.getElementById("submit");

const database = firebase.database();
const rootRef = database.ref('/users/');

btnSubmit.addEventListener('click', (e)=> {
  const autoId = rootRef.push().key
  rootRef.child(autoId).set({
    pin: pin.value,
    date: date.value
  });
});

// Onclick functions
function github(){
  window.open('https://github.com/AkhileshThite')
}

function feedback(){
  window.open('/feedback','_self')
}

function source() {
  alert('Are you a developer? would you like to contribute to this project?');
  window.open('https://github.com/AkhileshThite/COVID-19-VaccineFinder');
}

// IN DEVELOPMENT //
/* Firebase auth
const auth =  firebase.auth();

//signup function
function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  promise.catch(e=>alert(e.message));
  alert("Signed Up Successfully!");
  window.open('./loggedin.html','_self')
}
//Login function
function  signIn(){
  var email = document.getElementById("email");
  var password  = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value,password.value);
  promise.catch(e=>alert(e.message));
  alert("Logged in Successfully!");
  window.open('./loggedin.html','_self')
}
//Logout
function signOut(){
  auth.signOut();
  alert("Logged out Successfully!");
  window.open('./index.html','_self')
}
//active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    var email = user.email;
    alert("Active user "+email);

  }else{
    alert("No Active user Found")
  }
})
*/
