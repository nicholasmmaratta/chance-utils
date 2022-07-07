const chance = require ("./chance")

class RandomUser{
    constructor(name = chance.self.name(), age = chance.self.age(), gender = chance.self.gender()) {
        if(name) {
            this.name = name
        }
        // else{
        //     this.name = chance.self.name()
        // }
        if(age) {
            this.age = age
        }
        // else{
        //     this.age = chance.self.age()
        // }
        if(gender) {
            this.gender = gender
        }
        // else{
        // this.gender = chance.self.gender()
        // }
    }
}
exports.RandomUser = RandomUser
