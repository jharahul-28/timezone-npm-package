const timezones = require("./timezones.js");

// Check if DST is applicable
function isDST(timezone, date = new Date()) {
    const tz = timezones[timezone];
    if (!tz || !tz.dst) return false;

    const jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
    const jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
    return Math.max(jan, jul) !== date.getTimezoneOffset();
}

// Get UTC offset based on timezone
function getUTCOffset(timezone) {
    const tz = timezones[timezone];
    if (!tz) throw new Error('Invalid timezone');

    let offset = tz.offset;
    if (tz.dst && isDST(timezone)) {
        offset += tz.dstOffset;
    }

    const sign = offset >= 0 ? "+" : "-";
    const absOffset = Math.abs(offset);
    const hours = Math.floor(absOffset);
    const minutes = (absOffset % 1) * 60;

    return `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

// Convert time from one timezone to another
function convertTime(time, fromTimezone, toTimezone) {
    const fromOffset = getUTCOffset(fromTimezone);
    const toOffset = getUTCOffset(toTimezone);

    const fromHours = parseInt(fromOffset.slice(1, 3), 10);
    const fromMinutes = parseInt(fromOffset.slice(4, 6), 10);

    const toHours = parseInt(toOffset.slice(1, 3), 10);
    const toMinutes = parseInt(toOffset.slice(4, 6), 10);

    const signFrom = fromOffset[0] === '+' ? 1 : -1;
    const signTo = toOffset[0] === '+' ? 1 : -1;

    const date = new Date(time);
    const timeInMinutes = date.getMinutes() + date.getHours() * 60;

    const totalOffset = (signTo * (toHours * 60 + toMinutes)) - (signFrom * (fromHours * 60 + fromMinutes));
    const newTimeInMinutes = timeInMinutes + totalOffset;

    date.setHours(Math.floor(newTimeInMinutes / 60));
    date.setMinutes(newTimeInMinutes % 60);

    return date.toISOString().replace('T', ' ').slice(0, 19);
}

// All available timezones
function listTimezones() {
    return Object.keys(timezones);
}

// Current time in any timezone
function getCurrentTimeInTimezone(timezone) {
    return convertTime(new Date().toISOString(), 'UTC', timezone);
}

// Time difference between two timezones in hours
function getTimeDifference(fromTimezone, toTimezone) {
    const fromOffset = getUTCOffset(fromTimezone);
    const toOffset = getUTCOffset(toTimezone);

    const fromHours = parseInt(fromOffset.slice(1, 3), 10);
    const fromMinutes = parseInt(fromOffset.slice(4, 6), 10);

    const toHours = parseInt(toOffset.slice(1, 3), 10);
    const toMinutes = parseInt(toOffset.slice(4, 6), 10);

    const signFrom = fromOffset[0] === '+' ? 1 : -1;
    const signTo = toOffset[0] === '+' ? 1 : -1;

    const differenceInMinutes = ((signTo * (toHours * 60 + toMinutes)) - (signFrom * (fromHours * 60 + fromMinutes)));
    return differenceInMinutes / 60;
}

// Convert date to a different timezone
function convertDateToTimezone(date, fromTimezone, toTimezone) {
    const convertedTime = convertTime(date + ' 00:00:00', fromTimezone, toTimezone);
    return convertedTime.slice(0, 10);
}

module.exports = {
    getUTCOffset,
    convertTime,
    convertToUTC: (time, fromTimezone) => convertTime(time, fromTimezone, 'UTC'),
    listTimezones,
    getCurrentTimeInTimezone,
    getTimeDifference,
    convertDateToTimezone
};
