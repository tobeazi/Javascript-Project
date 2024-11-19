const userProfiles = [
    {name: "James", age: "22", email: "james@gmail.com"},
    {name: "Jay", age: "23", email: "jay@gmail.com"},
    {name: "Mick", age: "21", email: "mick@gmail.com"},
    {name: "Bob", age: "19", email: "bob@gmail.com"},
];

async function fetchUserProfiles() {
    console.log('Fetching Data...')
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data successfully fetched', userProfiles)
            resolve(userProfiles)
        }, 4000)
    });
};

async function displayUserProfiles() {
    const userList = document.getElementById('user-list')

    try {
        const data = await fetchUserProfiles();
        const displayProfiles = data.map(profiles => `<li>${profiles.name}:
            ${profiles.age}:
            ${profiles.email}</li>`).join('');
            userList.innerHTML = displayProfiles;
    } catch {
        
    }
}