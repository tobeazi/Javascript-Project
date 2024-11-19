async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('User data contains some error')
    }
    return response.json();
}

//function to display data in HTML
async function displayUserData() {
    const userlist = document.getElementById('user-list');
    try {
        const users = await fetchUserData();
        const listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`)
        userList.innerHTML = listItems;
    } catch (error) {
        console.log(`Error Fetching User Data:`, error)
        userlist.innerHTML = `<li>Error Fetching User Data. Please Try Again Later</>`
    }
}

displayUserData();