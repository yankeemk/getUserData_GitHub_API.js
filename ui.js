class UI{

    constructor(profileAvatar,profileFullName,profileBio,profileBadgeFirst,profileBadgeSecond,
        profileBadgeThird,profileCompany,profileLocation,profileMail,profileLink,reposElement){
            
            this.profileAvatar = profileAvatar;
            this.profileFullName = profileFullName;
            this.profileBio = profileBio;
            this.profileBadgeFirst = profileBadgeFirst;
            this.profileBadgeSecond = profileBadgeSecond;
            this.profileBadgeThird = profileBadgeThird;
            this.profileCompany = profileCompany;
            this.profileLocation = profileLocation;
            this.profileMail = profileMail;
            this.profileLink = profileLink;
            this.reposElement = reposElement;
        
    }

addProfileDataToUI(response){
    
    


    if(response.avatar_url === null || response.avatar_url === undefined){
        profileAvatar.src.textContent= "Kullanıcı Avatarı Bulunamadı";
    }
    else{
        profileAvatar.src = response.avatar_url;

    }


    if(response.name === null || response.name === undefined){
        profileFullName.textContent= "Kullanıcı Adı Bulunamadı";
    }
    else{
        profileFullName.textContent = response.name;

    }
    
    
    if(response.bio === null || response.bio === undefined){
        this.profileBio.textContent= "Kullanıcı Biyografisi Bulunamadı";
    }
    else{
        this.profileBio.textContent = response.bio;

    }

    if(response.followers === null || response.followers === undefined){
        profileBadgeFirst.textContent = "Takipçi Sayısı Bulunamadı";
    }
    else{
        profileBadgeFirst.textContent = response.followers;

    }
    
    if(response.following === null || response.following === undefined){
        profileBadgeSecond.textContent = "Takip Edilen Sayısı Bulunamadı";
    }
    else{
        profileBadgeSecond.textContent = response.following;
    }

    
    if(response.public_repos === null || response.public_repos === undefined){
        profileBadgeThird.textContent = "Takip Edilen Sayısı Bulunamadı";
    }
    else{
        profileBadgeThird.textContent = response.public_repos;
    }



    if(response.company === null || response.company === undefined){
        profileCompany.textContent = "Kullanıcı Şirketi Bulunamadı";
    }
    else{
        profileCompany.textContent = response.company;
    }



    if(response.location === null || response.location === undefined){
        this.profileLocation.textContent = "Kullanıcı Konumu Bulunamadı";
    }
    else{
        this.profileLocation.textContent = response.location;
    }
    
    
    
    
    
    if(response.email === null || response.email === undefined){
        this.profileMail.textContent = "Kullanıcı E-mail Adresi Bulunamadı";
    }
    else{
        this.profileMail.textContent = response.email;
    }


    if(response.html_url === null || response.html_url === undefined){
        profileLink.href = "#";
    }
    else{
        profileLink.href = response.html_url;
    }




}


addReposToUI(response){

    reposElement.innerHTML =``;
if(response.length < 3){

}
else{
    for(var i=0;i<3;i++){
        
        
        
        reposElement.innerHTML += `
        
        <div class="mb-2 card-body">
                            <div class="row">
                                <div class="col-md-2">
                                <a href="${response[i].html_url}" target = "_blank" id = "repoName">${response[i].name}</a>
                                </div>
                                <div class="col-md-6">
                                    <button class="btn btn-secondary rezga">
                                        Starlar  <span class="badge badge-light" id="repoStar">${response[i].stargazers_count}</span>
                                    </button>
        
                                    <button class="btn btn-info">
                                        Forklar  <span class="badge badge-light" id ="repoFork">${response[i].forks_count}</span>
                                    </button>
                            
                                </div>
                        </div>
        
        
        `;
    
}




}




}








}