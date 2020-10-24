class Storage{

    

static getItemFromStorage(){
    let searchedUser;
   
if(localStorage.getItem("searchedUsers") === null){
searchedUser = [];
localStorage.setItem("searchedUsers",JSON.stringify(searchedUser));

}else{
    searchedUser = JSON.parse(localStorage.getItem("searchedUsers"));
    console.log("HELLO");
}

return searchedUser;

}



static setItemToStorage(username){

   

const  searched = JSON.parse(localStorage.getItem("searchedUsers"));

if(searched.indexOf(username)=== -1){
    searched.push(username);
    localStorage.setItem("searchedUsers",JSON.stringify(searched));

    

}
   








}










}