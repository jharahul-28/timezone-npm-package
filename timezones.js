const timezones = {
    // UTC and GMT
    "UTC": { offset: 0, dst: false },
    "GMT": { offset: 0, dst: false },

    // Europe
    "Europe/London": { offset: 0, dst: true, dstOffset: 1 },
    "Europe/Berlin": { offset: 1, dst: true, dstOffset: 1 },
    "Europe/Paris": { offset: 1, dst: true, dstOffset: 1 },
    "Europe/Madrid": { offset: 1, dst: true, dstOffset: 1 },
    "Europe/Rome": { offset: 1, dst: true, dstOffset: 1 },
    "Europe/Moscow": { offset: 3, dst: false },

    // America
    "America/New_York": { offset: -5, dst: true, dstOffset: 1 },
    "America/Chicago": { offset: -6, dst: true, dstOffset: 1 },
    "America/Denver": { offset: -7, dst: true, dstOffset: 1 },
    "America/Los_Angeles": { offset: -8, dst: true, dstOffset: 1 },
    "America/Toronto": { offset: -5, dst: true, dstOffset: 1 },
    "America/Sao_Paulo": { offset: -3, dst: false },

    // Africa
    "Africa/Cairo": { offset: 2, dst: true, dstOffset: 1 },
    "Africa/Johannesburg": { offset: 2, dst: false },
    "Africa/Lagos": { offset: 1, dst: false },
    "Africa/Nairobi": { offset: 3, dst: false },

    // Asia
    "Asia/Dubai": { offset: 4, dst: false },
    "Asia/Kolkata": { offset: 5.5, dst: false },
    "Asia/Dhaka": { offset: 6, dst: false },
    "Asia/Jakarta": { offset: 7, dst: false },
    "Asia/Shanghai": { offset: 8, dst: false },
    "Asia/Tokyo": { offset: 9, dst: false },
    "Asia/Seoul": { offset: 9, dst: false },
    "Asia/Hong_Kong": { offset: 8, dst: false },
    "Asia/Singapore": { offset: 8, dst: false },
    "Asia/Kuala_Lumpur": { offset: 8, dst: false },

    // Australia
    "Australia/Sydney": { offset: 10, dst: true, dstOffset: 1 },
    "Australia/Melbourne": { offset: 10, dst: true, dstOffset: 1 },
    "Australia/Brisbane": { offset: 10, dst: false },
    "Australia/Perth": { offset: 8, dst: false },

    // Pacific
    "Pacific/Auckland": { offset: 12, dst: true, dstOffset: 1 },
    "Pacific/Fiji": { offset: 12, dst: false },
    "Pacific/Honolulu": { offset: -10, dst: false },

    // Middle East
    "Asia/Tehran": { offset: 3.5, dst: true, dstOffset: 1 },
    "Asia/Jerusalem": { offset: 2, dst: true, dstOffset: 1 },
    "Asia/Riyadh": { offset: 3, dst: false },

    // South America
    "America/Buenos_Aires": { offset: -3, dst: false },
    "America/Bogota": { offset: -5, dst: false },
    "America/Lima": { offset: -5, dst: false },

    // North America
    "America/Mexico_City": { offset: -6, dst: true, dstOffset: 1 },
    "America/Phoenix": { offset: -7, dst: false },
    "America/Anchorage": { offset: -9, dst: true, dstOffset: 1 },
    
    // Central America
    "America/Guatemala": { offset: -6, dst: false },
    "America/Belize": { offset: -6, dst: false },

    // Caribbean
    "America/Havana": { offset: -5, dst: true, dstOffset: 1 },
    "America/Santo_Domingo": { offset: -4, dst: false },

    // Additional Timezones
    "Antarctica/Palmer": { offset: -3, dst: true, dstOffset: 1 },
    "Asia/Kathmandu": { offset: 5.75, dst: false },
    "Asia/Yangon": { offset: 6.5, dst: false },
    "Asia/Vladivostok": { offset: 10, dst: false },
    "Pacific/Tongatapu": { offset: 13, dst: false }
};

module.exports = timezones;
