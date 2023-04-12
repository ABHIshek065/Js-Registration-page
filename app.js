



let users = [];

let leftcontainer = document.getElementById('leftContainer')
let userDetailsContainer = document.getElementById('userDetailsContainer')
let userDetails = document.getElementById('userDetails')
userDetails.style.display = 'none'


showDetails = (e)=>{
  userDetailsContainer.innerHTML = ''
 leftcontainer.style.display = 'none'
 userDetails.style.display = 'block'
 let email = e.target.innerText;
let result = users.find((user)=>{
  return user.email == email
})
// console.log(result);

let nameElement = document.createElement('p')
let emailElement = document.createElement('p')

nameElement.innerText = result.name
emailElement.innerText = result.email


userDetailsContainer.appendChild(nameElement)
userDetailsContainer.appendChild(emailElement)
}

goBack = () =>{
  leftcontainer.style.display = 'block'
  userDetails.style.display = 'none'
}



function renderUsers() {
  let userContainer = document.getElementById("users");

  userContainer.innerHTML = "";
  users.map((user) => {
    let div = document.createElement("div");
    // let userName = document.createElement("p");
    let userEmail = document.createElement("p");
    div.classList.add("user");

    // userName.innerText = user.name;
    userEmail.innerText = user.email;

div.addEventListener('click', showDetails)


    userContainer.appendChild(div);
    // div.appendChild(userName);
    div.appendChild(userEmail);
  });
}

function successAlert(){
    let alert = document.getElementById('alert');
    alert.classList.add('success');
    alert.innerText = 'User added successfully!'
    setTimeout(()=>{
        alert.classList.remove('success');
        alert.innerText = ''
    }, 2000)
}
function dangerAlert(){
    let alert = document.getElementById('alert');
    alert.classList.add('danger');
    alert.innerText = 'Email already exists!'
    setTimeout(()=>{
        alert.classList.remove('danger');
        alert.innerText = ''
    }, 2000)
}
function register() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");

  let tempUser = {
    name: name.value,
    email: email.value,
  };

  let userEmailCount = users.filter((user) => {
    return user.email == email.value;
  });
  if (userEmailCount.length == 0) {
    users.push(tempUser);
    successAlert();
  } else {
    dangerAlert()
  }

  renderUsers();
  name.value = ''
  email.value = ''
}
