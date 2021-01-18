function alphabeticShift(word) {
    let result = ""
    const alphabet = {
        "a": "b",
        "c": "d",
        "e": "f",
        "g": "h",
        "i": "j",
        "k": "l",
        "m": "n",
        "o": "p",
        "q": "r",
        "s": "t",
        "u": "v",
        "w": "x",
        "y": "z",
        "z": "a",
        "b": "c",
        "d": "e",
        "f": "g",
        "h": "i",
        "j": "k",
        "l": "m",
        "n": "o",
        "p": "q",
        "r": "s",
        "t": "u",
        "v": "w",
        "x": "y",
    }

    word.split("").forEach(element => {

        result += alphabet[element]
    });
    return result
}

console.log(alphabeticShift("crazy"))