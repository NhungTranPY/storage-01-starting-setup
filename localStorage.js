const storeBtn = document.getElementById('store-btn')
const retrBtn = document.getElementById('retrieve-btn')

const userId = 'u123'
const user = {
    name: "Nina",
    age: 20,
    hobbies: ['Sports', 'Cooking']
}

storeBtn.addEventListener('click', () => {
    sessionStorage.setItem('uid', userId)  // close page and re-open => data lost
    localStorage.setItem('user', JSON.stringify(user)) // close page and re-open => data still there
})

retrBtn.addEventListener('click', () => {
    const extractedId = sessionStorage.getItem('uid')
    const extractedUser = JSON.parse(localStorage.getItem('user'))
    console.log(extractedUser);
    if (extractedId) {
        console.log('Got the id - ' + extractedId);
    } else {
        console.log('Could not find id');
    }
})