// Form Elements

const githubName = document.querySelector("#githubname");
const githubForm = document.querySelector("#github-form");


// Card Elements

const profileAvatar = document.querySelector("#foto");
const profileFullName = document.querySelector("#fullName");
const profileBio = document.querySelector("#bio");
const profileBadgeFirst = document.querySelector(".badge-light");
const profileBadgeSecond = document.querySelectorAll(".badge-light")[1];
const profileBadgeThird = document.querySelectorAll(".badge-light")[2];
const profileCompany = document.querySelector("#company");
const profileLocation = document.querySelector("#location");
const profileMail = document.querySelector("#mail");
const profileLink =document.querySelector("#blank");



//  Repos Element


const reposElement = document.querySelector("#repos");
const lastUserElement = document.querySelector("#last-users");
const deleteButton = document.querySelector("#clear-last-users");
const lastUsers = document.querySelector("#last-users");

const ui = new UI(profileAvatar,profileFullName,profileBio,profileBadgeFirst,profileBadgeSecond,
    profileBadgeThird,profileCompany,profileLocation,profileMail,profileLink,reposElement);




const github = new GitHubApi();

eventListeners();




function eventListeners(){
    githubForm.addEventListener("submit",searchUser);
    document.addEventListener("DOMContentLoaded",getUsers);
    deleteButton.addEventListener("click",deleteUsers);
 


}




function searchUser(e){
    
    
    
    const githubNameValue = githubName.value;
    
   

   github.getUserData(githubNameValue)
   .then(response => {ui.addProfileDataToUI(response)})
   .catch(err => alert("Kullanıcı Bulunamadı"));


    github.getReposData(githubNameValue)
    .then(response =>{ui.addReposToUI(response)});

    Storage.setItemToStorage(githubNameValue);
   




   
    
    e.preventDefault();
    
}



function getUsers(){
    
    
     Storage.getItemFromStorage();

     ui.addLastSearchedToUI(lastUsers,Storage.getItemFromStorage());












}


function deleteUsers(){

    Storage.deleteItemFromStorage();

    


}