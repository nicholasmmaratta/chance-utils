const Chance = require("chance")
const chance = new Chance()
//define class or Class lol
 // require looks up depencencies to make sure that you have chance
const phoneNumber = chance.phone()

exports.phoneNumber = phoneNumber 

function getRandomPhoneNumber() {
    return chance.phone()

}

exports.getRandomPhoneNumber = getRandomPhoneNumber
exports.self = chance