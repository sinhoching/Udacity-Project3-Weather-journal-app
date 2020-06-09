/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather';
let apiKey = 'c223a726fd0e7a9f2e58066f6072780b';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

//click listener
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const zip = document.getElementById('zip').value
    getWeatherData(baseURL, zip, apiKey)
        .then(function (data) {
            postData('/addData', { temp: data.main.temp, date: data.dt, content: document.querySelector('textarea').value });
        })
        .then(function() {
            updateUI();
        });
}

//Dynamic UI Update
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('temp').innerHTML = allData.entries[allData.entries.length-1].temp;
        document.getElementById('date').innerHTML = allData.entries[allData.entries.length-1].date;
        document.getElementById('content').innerHTML = allData.entries[allData.entries.length-1].content;

    } catch (error) {
        console.log("error", error);
    }
}



//getWeatherData GET request
const getWeatherData = async (baseURL, zip, apiKey) => {

    const url = `${baseURL}?zip=${zip},US&appid=${apiKey}`;
    console.log(url);
    const res = await fetch(url);
    try {
        const newData = await res.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

//postData POST request
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