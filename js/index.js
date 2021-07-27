const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector(".num-users");

const getData = async function(numUsers){
    const usersRequest = await fetch (`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    // console.log(data);
    const usersResults = data.results;
    // console.log(usersResults);  
    displayUsers(usersResults);
}

getData();

const displayUsers = function(usersResults){
    randomFolks.innerHTML = "";
    
    for (let user of usersResults){
        const country = user.location.country;
        const name = user.name.first; 
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
    `;
        randomFolks.append(userDiv);
    }
};

selectUserNumber.addEventListener("change", function(e){
    const numUsers = e.target.value;
    getData(numUsers);
});

getData(3);