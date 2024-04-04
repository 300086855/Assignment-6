/*
Assignment 3 code
const isMorning = hours >= 4 && hours < 12; // is it morning?
const isAfternoon = hours >= 12 && hours < 17; // is it afternoon?
const isEvening = hours >= 17 || hours < 4; // is it evening?
*/

function getTimeOfDay(time) {
    if (time >= 4 && time < 12) {
        return 'Morning';
    } else if (time >= 12 && time < 17) {
        return 'Afternoon';
    } else {
        return 'Evening';
    }
}

function isMorning(time) {
    return time >= 4 && time < 12;
}

function isAfternoon(time) {
    return time >= 12 && time < 17;
}

function isEvening(time) {
    return time >= 17 || time < 4;
}

module.exports = {getTimeOfDay, isMorning, isAfternoon, isEvening};