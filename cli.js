#!/usr/bin/env node

// Dependencies
import minimist from 'minimist';
import fetch from 'node-fetch';
import moment from 'moment-timezone';

const args = minimist(process.argv.slice(2))
//console.log(args)
// Default action
// Was the command called with `-h`?
if ( args.h ) {
// If yes, then log the help message onto STDOUT
console.log(`Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE

    -h            Show this help message and exit.
    -n, -s        Latitude: N positive; S negative.
    -e, -w        Longitude: E positive; W negative.
    -z            Time zone: uses tz.guess() from moment-timezone by default.
    -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.
    -j            Echo pretty JSON from open-meteo API and exit.
`)
// And exit
process.exit(0)
}

const timezone = moment.tz.guess();

// declaring variables
const tz = "America/New_York"
let latitude = "40.71"
let longitude = "-74.01"
const base_url = "https://api.open-meteo.com/v1/forecast"
const data_string = "latitude=" + latitude + "&longitude=" + longitude + "&daily=precipitation_hours&current_weather=true&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=" + tz
const url = base_url + "?" + data_string


// Make a request
const response = await fetch(url)
const data = await response.json()

console.log(url)

console.log(data)

//import fs from 'fs';

let dataString = JSON.stringify(data)

//fs.writeFileSync("./weather_forecast.json", dataString)

const days = args.d 

if(".daily.precipitation_hours[day]" > 0) {
    console.log("You might need your galoshes")
} else {
    console.log("You probably won't need your galoshes")
}

if (days == 0) {
  console.log("today.")
} else if (days > 1) {
  console.log("in " + days + " days.")
} else {
  console.log("tomorrow.")
}
