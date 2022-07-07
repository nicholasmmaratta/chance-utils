function log(text1, text2 = "warning you are missing a text2 value!", text3 = "warning you are missing a text3 value!") {
    console.log("text1:", text1)
    console.log("text2:", text2)
    console.log("text3:", text3)
}

exports.log = log