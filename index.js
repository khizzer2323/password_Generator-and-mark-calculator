"use strict"
// GETTING ACCESS TO ALL THE DATA PROVIDED BY USER :
let marks_obt_nine = document.querySelector("#marksObtainedNine")
let marks_total_nine = document.querySelector("#totalMarksNine")
let marks_obt_ten = document.querySelector("#marksObtainedTen")
let marks_total_ten = document.querySelector("#totalMarksTen")

// FUNCTION TO FIND PERCENTAGE : 
const findPercentage = function () {
    let name = document.querySelector("#userName").value;
    // CONVERTING TO INTEGER AS IT PREVIOUSLY IT WAS IN STRING DATATYPE : 
    marks_obt_nine = Number(marks_obt_nine.value);
    marks_total_nine = Number(marks_total_nine.value);
    marks_obt_ten = Number(marks_obt_ten.value);
    marks_total_ten = Number(marks_total_ten.value);


    if (marks_obt_nine > marks_total_nine || marks_obt_ten > marks_total_ten) {
        error()
    }

    else {
        // FINDING PERCENTAGE
        let total_marks_obt_both = marks_obt_nine + marks_obt_ten;
        let total_marks_both = marks_total_nine + marks_total_ten;
        let percentage = (total_marks_obt_both / total_marks_both) * 100;

        // DISPLAYING RESULTS TO THE USER
        document.querySelector(".resultName").innerHTML = `${name} your result is as following : `
        percentage = percentage.toFixed(2);
        document.querySelector(".resultPercent").innerHTML = percentage + " %";
        document.querySelector(".resultTotal").innerHTML = total_marks_both;
        document.querySelector(".resultObt").innerHTML = total_marks_obt_both;
    }
}

// THROWING ERROR :
const error = function () {
    document.querySelector(".err").classList.toggle("hidden");
}







// Password generator :
let no_letters = document.querySelector("#noletters");
let no_digits = document.querySelector("#nodigits");
let no_characters = document.querySelector("#nocharacters");

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "="]
let password_gen = [];
let password = function () {
    // Getting value and storing in var :
    let no_value = no_letters.value;
    let digit_value = no_digits.value;
    let chr_value = no_characters.value;

    // Looping through the letters array :
    for (let i = 0; i < no_value; i++) {
        password_gen.push(letters[Math.floor(Math.random() * letters.length )])
    }
    // Looping through the numbers array :
    for( let i = 0; i< digit_value; i++){
        password_gen.push(numbers[Math.floor(Math.random() * numbers.length )])
    }
    // Looping through the characters array :
    for(let i =0; i<chr_value; i++){
        password_gen.push(characters[Math.floor(Math.random()*characters.length)])
    }
    // CONVERTING ARRAY TO  STRING :
let password_str = ""
console.log(password_gen)
password_gen.sort(() => (Math.random() > .5) ? 1 : -1);
for( let i = 0; i<password_gen.length; i++){
    password_str += password_gen[i]
}
console.log(password_str)   

// DISPLAYING THE GENERATED PASSWORD TO THE USER : 
document.querySelector(".password_str").innerHTML = password_str;
password_gen = []
password_str = ""
}


