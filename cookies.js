const storeBtn = document.getElementById('store-btn')
const retrBtn = document.getElementById('retrieve-btn')

storeBtn.addEventListener('click', () => {
    const userId = 'u123'
    const user = {name: 'Max', age: 30}
    document.cookie = `uid=${userId}`
    document.cookie = `uid=${userId}; max-age=360` // to set it to last 360 seconds
    // document.cookie = `uid=${userId}; expires=` // to set it to expired
    document.cookie = `user=${JSON.stringify(user)}`
})

retrBtn.addEventListener('click', () => {
    // console.log(document.cookie.split(';'));
    // console.log(document.cookie);
    const cookieData = document.cookie.split(';');
    const data = cookieData.map(i => {
        return i.trim()
    })
    console.log(data);
    console.log(data[1].split('=')); 
    console.log(data[1].split('=')[1]); // user value
})