const launches = require('./launches.mongo');

var lastestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

async function addNewLaunch(launch) {
    await lastestFlightNumber++;
    let newLaunch = new launches({
        flightNumber: lastestFlightNumber,
        mission: launch.mission,
        rocket: launch.rocket,
        launchDate: launch.Date,
        target: launch.target,
        customer: ['Zero to Mastery', 'NASA'],
        upcoming: true,
        success: true,
    })
    newLaunch.save(newLaunch).then(data => {
        return data;
    }).catch(err => { return err; })
}

async function existsLaunchWithId(launchId) {
    let launchExist = await launches.findOne({ flightNumber: launchId })
    if (launchExist) {
        return true;
    } else {
        return false
    }
}

async function abortLaunchById(launchId) {
    let aborted = await launches.findOneAndUpdate({ flightNumber: launchId }, { upcoming: false, success: false })
    return aborted;
}

module.exports = { addNewLaunch, existsLaunchWithId, abortLaunchById };