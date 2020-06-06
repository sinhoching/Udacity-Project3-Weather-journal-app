/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather';
let apiKey = 'c223a726fd0e7a9f2e58066f6072780b';
// Sample URL for GET request:
// http://api.openweathermap.org/data/2.5/weather?zip=94025,US&appid=c223a726fd0e7a9f2e58066f6072780b
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const zip = document.getElementById('zip').value
    //const entryData = { zip: document.getElementById('zip').value, feel: document.getElementById('feelings').value };
    getWeatherData(baseURL, zip, apiKey);
}

const getWeatherData = async (baseURL, zip, apiKey) => {

    const url = `${baseURL}?zip=${zip},US&appid=${apiKey}`;
    console.log(url);
    const res = await fetch(url);
    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    }catch(error){
        console.log("error", error);
    }
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

//async POST
const postData = async (url = '', data = {}) => {
    //console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        //console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}
postData('/addData', { temp: '1123', date: '567890', content: '' });

//async GET
/*const getData = async(url = '') => {
    const request = await fetch(url);
    try {
        const allData = await request.json()
    } catch(error) {
        console.log("error", error);
    }
}*/