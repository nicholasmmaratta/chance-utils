const logger = require ("./logger")
const chance = require ("./chance")
const freshMeat = require ("./random-user")
const object = require ("./object")
// . is one level up and ./logger is one level down of the file directoryish thing
function main() {
    let arg1 = "Hello World!"
    let arg2 = "eat a C..."
    let arg3 = "lmao oh"
    logger.log(arg1, "the first one", "lol this is the third variable")
    logger.log(arg2, "the second one", "haha not undefined anymore")
    logger.log(arg3, "the third one!!", chance.getRandomPhoneNumber())
    let randomUser1 = new freshMeat.RandomUser()
    let randomUser2 = new freshMeat.RandomUser()
    let randomUser3 = new freshMeat.RandomUser("Jerry", null, "mixed")
    logger.log(randomUser1, randomUser2, randomUser3)
    logger.log(object.example.boolean)
    object.example.subobject.sayHello()
}


// module.exports = main()

//main(arg1, arg2)
//F2 to rename varied instances
//PASSING = exploded version of variable 
//function main is stored in heap memory in line 1
//functions are frames like a picture!
//main(arg2, arg1)
main()
