class GitHubApi{

constructor(){


}


async getUserData(username){
    var url = "https://api.github.com/users/";

const response = await fetch(url+username);
const response2 = await response.json();


return response2;



}


async getReposData(username){
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(url);
    const response2 = response.json();
    return response2;

}















}