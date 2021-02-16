//Vist these sites
// https://levelup.gitconnected.com/all-possible-ways-of-making-an-api-call-in-plain-javascript-c0dee3c11b8b
// https://jsonplaceholder.typicode.com/

const { response } = require("express");

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

    // getUsers().then(data => console.log(data));

    console.log("::: Form Submitted :::")
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(dres => res.json())
        .then(function(res) {
            console.log(users)
            document.getElementById('results').innerHTML = res.message
        })



}

async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json()
    return data;
}