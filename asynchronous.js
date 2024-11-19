setTimeout(() => {
    console.log('this will log in 4 seconds')
}, 4000);


function greet(){
    console.log('hello from greet function')
}
setTimeout(greet, 4000)

setTimeout(() => {
    console.log('data fetched')
}, 2000)

console.log('data fetching')

setTimeout(() => {
    console.log('datas')
}, 4000)

const sampleData = [
    {id:1, name:`Item 1`, description: `Description for item 1`},
    {id:2, name:`Item 2`, description: `Description for item 2`},
    {id:3, name:`Item 3`, description: `Description for item 3`}
]

async function fetchData() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data successfully fetched', sampleData)
            resolve(sampleData)
        }, 4000)
    });
};

async function fetchData() {
    const dataList = document.getElementById('data-list')
    try {
        const data = await fetchData()
        const listItems = data.map(item => `<li>${item.name}:
            ${item.description}</li>`).join('');
        dataList.innerHTML = listItems;
    } catch (error) {
        console.log(error)
    }
}
displayUserData();