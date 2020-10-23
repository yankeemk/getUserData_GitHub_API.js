class Storage {

static  getItemFromStorage(){

let users;

if(localStorage.getItem("searched") === null){
    users = [];
    localStorage.setItem("searched",users);
 
    
   
}else{
    users = localStorage.getItem("searched");
   

}

return users;




}


static setItemToStorage(user){
    const getUsers = JSON.parse( localStorage.getItem("searched"));
    
    if(getUsers.indexOf(user) === -1){
        
        getUsers.push(user);
        localStorage.setItem("searched",JSON.stringify(getUsers));

    }



}

static deleteItemFromStorage(){

localStorage.removeItem("searched");

}



}