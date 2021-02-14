let webSite = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '9a4b23ee1a12ffef7d38abce98c146dc';

const zipCode = '94531'

let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();



function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
        //checkForName(formText)
    Client.checkForName(formText)

    console.log("Date: " + newDate);
    getTemp(webSite, postZipcode, apiKey)
        .then(function(data) {
            console.log("Chuck temperature: ", data.main.temp)
            postData('http://localhost:8080/addWeatherData', { temperature: data.main.temp, date: newDate })
                //Update the website user interface
                .then(function() {
                    refreshUI()
                })
        })


    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(dres => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.message
        })
}

//Aysnc GET with website
const getTemp = async(webSite, code, apiKey) => {
    const webRes = await fetch(webSite + code + ',US' + '&APPID=' + apiKey)
    console.log(webRes);
    try {
        const data = await webRes.json();
        console.log(data);

        return data;
    } catch (error) {
        console.log('error', error);
    }
}

//Async to POST
const postData = async(url = '', data = {}) => {
    const postRequest = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {

        const newData = await postRequest.json();

        return newData;
    } catch (error) {
        console.log('POST Error:', error);
    }
}