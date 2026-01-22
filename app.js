// QUESTION NO 03
for (var a = 0; a <= 10; a++){
    document.write(a + "<br>");
}

// QUESTION NO 04
var numInput = +prompt("Enter a number to show its multiplication table");
var lengthInput = +prompt("Enter length multiplication table");

document.write("Multiplication table of : " + numInput);
document.write("<br> Length : " + lengthInput + "<br><br>");

for (var b = 1; b <= lengthInput; b++) {
    document.write(numInput + " * " + b + " = " + (numInput * b) + "<br>");
}

// QUESTION NO 05
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var c = 0; c < fruits.length; c++) {
    document.write("Element at index " + c + " is " + fruits[c] + "<br>");
}

// QUESTION NO 06
document.write("<b> Counting : </b> ");
for (var d = 1; d <= 15; d++) {
    document.write(d + ", ");
}

document.write("<br><b> Reverse Counting : </b> ");
for (var e = 10; e >= 1; e--) {
    document.write(e + ", ");
}

document.write("<br><b> Even : </b> ");
for (var f = 0; f <= 20; f += 2) {
    document.write(f + ", ");
}

document.write("<br><b> Odd : </b> ");
for (var g = 1; g < 20; g += 2) {
    document.write(g + ", ");
}

document.write("<br><b> Series : </b> ");
for (var h = 2; h <= 20; h += 2) {
    document.write(h + "k, ");
}

// QUESTION NO 07
var $items = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
var $order = prompt("Welcome to ABC bakery. what do you want to order ?").toLowerCase(); 

if ($items[0] === $order) {
    alert($order + " is available at index " + $items.indexOf($order) + " in our bakery");       
} 

else if ($items[1] === $order) {
    alert($order + " is available at index " + $items.indexOf($order) + " in our bakery");     
} 

else if ($items[2] === $order) {
    alert($order + " is available at index " + $items.indexOf($order) + " in our bakery");     
} 

else if ($items[3] === $order) {
    alert($order + " is available at index " + $items.indexOf($order) + " in our bakery");     
} 

else if ($items[4] === $order) {
    alert($order + " is available at index " + $items.indexOf($order) + " in our bakery");     
} 

else {
    alert("We are sorry. " + $order + " is not available in our bakery")
}

// QUESTION NO 08
var largeNum = [24, 53, 78, 91, 12];

if (largeNum[0] > largeNum[1] && largeNum[0] > largeNum[2] && largeNum[0] > largeNum[3] && largeNum[0] > largeNum[4]) {
    alert("Largest Number is : " + largeNum[0]);
}

else if (largeNum[1] > largeNum[0] && largeNum[1] > largeNum[2] && largeNum[1] > largeNum[3] && largeNum[1] > largeNum[4]) {
    alert("Largest Number is : " + largeNum[1]);
}

else if (largeNum[2] > largeNum[0] && largeNum[2] > largeNum[1] && largeNum[2] > largeNum[3] && largeNum[2] > largeNum[4]) {
    alert("Largest Number is : " + largeNum[2]);
}

else if (largeNum[3] > largeNum[0] && largeNum[3] > largeNum[1] && largeNum[3] > largeNum[2] && largeNum[3] > largeNum[4]) {
    alert("Largest Number is : " + largeNum[3]);
}

else {
    alert("Largest Number is : " + largeNum[4]);
}

// QUESTION NO 09
var largeNum = [24, 53, 78, 91, 12];

if (largeNum[0] < largeNum[1] && largeNum[0] < largeNum[2] && largeNum[0] < largeNum[3] && largeNum[0] < largeNum[4]) {
    alert("Largest Number is : " + largeNum[0]);
}

else if (largeNum[1] < largeNum[0] && largeNum[1] < largeNum[2] && largeNum[1] < largeNum[3] && largeNum[1] < largeNum[4]) {
    alert("Largest Number is : " + largeNum[1]);
}

else if (largeNum[2] < largeNum[0] && largeNum[2] < largeNum[1] && largeNum[2] < largeNum[3] && largeNum[2] < largeNum[4]) {
    alert("Largest Number is : " + largeNum[2]);
}

else if (largeNum[3] < largeNum[0] && largeNum[3] < largeNum[1] && largeNum[3] < largeNum[2] && largeNum[3] < largeNum[4]) {
    alert("Largest Number is : " + largeNum[3]);
}

else {
    alert("Largest Number is : " + largeNum[4]);
}

// QUESTION NO 10
for (var i = 5; i <= 100; i += 5) {
    document.write(i + ", ");
}


// QUESTION NO 01
var firstName = prompt("Enter your first name ?");
var lastName = prompt("Enter your last name ?");

var fullName = firstName + lastName;
alert("Hello " + fullName + " Welcome");

// QUESTION NO 02
var mobilePhone = prompt("Enter your favorite mobile phone model");
alert("My favorite phone is : " + mobilePhone);

var length = mobilePhone.length;
alert("Length of string : " + length);

// QUESTION NO 03
var word = "Pakistani";
var letter = "n";

var index = word.indexOf(letter);

alert("String : " + word)
alert("Index of 'n' : " + index); 

// QUESTION NO 04
var $Word = "Hello World";

var lastIndex = $Word.lastIndexOf("l");

alert("String : " + $Word);
alert("Last index of 'l' : " + lastIndex);

// QUESTION NO 05
var _word = "Pakistani";

var character = _word.charAt(3);

alert("String : " + _word);
alert("Character at index '3' is : " + character);

// QUESTION NO 06
var $firstName = prompt("Enter your first name ?");
var $lastName = prompt("Enter your last name ?");

var fullName = $firstName.concat(" " , $lastName);

alert("Hello " + fullName + " Welcome");

// QUESTION NO 07
var city = "Hyderabad";

var replacedCity = city.replace("Hyder" , "Islam");

alert("City : " + city);
alert("After Replacement : " + replacedCity);

// QUESTION NO 08
var message = "Ali and Sami are best friends.They play cricket and football together.";

var replacedMessage = message.replaceAll("and" , "&");

alert("Message with 'and' : " + message);
alert("Replaced 'and' : " + replacedMessage);

// QUESTION NO 09
var value = "472";
var type = typeof(value);

alert("Value : " + value);
alert("Type : " + type);

value = Number(value);
type = typeof(value);

alert("Value : " + value);
alert("Type : " + type);

// QUESTION NO 10
var userInput = prompt("Enter a fruit name :");
alert("User Input : " + userInput);

userInput = userInput.toUpperCase();
alert("Upper Case : " + userInput);

// QUESTION NO 11
var input = prompt("Enter your favorite programing language name :");
alert("User Input : " + input);

input = input.toLowerCase();
alert("Lower Case : " + input);

// QUESTION NO 12
var num = 35.36;
alert("Number : " + num);

num = num.toString();

var result = num.replace("." , "");
alert("Result : " + result); 

// QUESTION NO 13
var user_name = prompt("Enter Your Name :");

for (var i = 0; i < user_name.length; i++) {

    var $Code = user_name.charCodeAt(i);

    if ($Code == 33 || $Code == 44 || $Code == 46 || $Code == 64) {
        alert("Please enter a valid username");
        break;
    }

    if (i == user_name.length -1) {
        alert("Valid User Name");
    }
}

// QUESTION NO 14
var items = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];

var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am ?");
order = order.toLowerCase();

if (items[0] === order) {
    alert(order + " is available at index "  + items.indexOf(order) + " in our bakery");
}

else if (items[1] === order) {
    alert(order + " is available at index "  + items.indexOf(order) + " in our bakery");
}

else if (items[2] === order) {
    alert(order + " is available at index "  + items.indexOf(order) + " in our bakery");
}

else if (items[3] === order) {
    alert(order + " is available at index "  + items.indexOf(order) + " in our bakery");
}

else if (items[4] === order) {
    alert(order + " is available at index "  + items.indexOf(order) + " in our bakery");
} 

else {
    alert("We are sorry . " + order + " is not available in our bakery");
}

// QUESTION NO 15
var password = prompt("Enter Your Password");

var $Alphabet = 0;
var $Number = 0;

if (password.length < 6) {
    alert("Password kam az kam 6 letters ka hona chaiye");
}

else {
    var first_LtrCheck = password.charCodeAt(0);

    if (first_LtrCheck >= 48 && first_LtrCheck <= 57) {
        alert("Password number se shuru nhi hona chaiye");
    }

    else {
        for (var j = 0; j < password.length; j++) {
            var passCode = password.charCodeAt(j);

            if (passCode >= 65 && passCode <= 90 || passCode >= 97 && passCode <= 122) {
                $Alphabet = 1;
            }

            if (passCode >= 48 && passCode <= 57) {
                $Number = 1;
            }
        }

        if ($Alphabet == 1 && $Number == 1) {
            alert("Valid Password");
        }

        else {
            alert("Please Enter a valid Password");
        }
    }
}

// QUESTION NO 17
var national = prompt("Koi word ya sentence likho");

var last_Index = national.length -1;
var last_Char = national.charAt(last_Index);

alert("User Input : " + national);
alert("Last character of input : " + last_Char);



// QUESTION NO 1
var num_2 = +prompt("Enter a positive number : ");

document.write("Number : " + num_2 + "<br>");
document.write("Round off value : " + Math.round(num_2) + "<br>");
document.write("Floor value : " + Math.floor(num_2) + "<br>");
document.write("Ceil value : " + Math.ceil(num_2));

// QUESTION NO 2
var num_3 = +prompt("Enter a Negative number : ");

document.write("Number : " + num_3 + "<br>");
document.write("Round off value : " + Math.round(num_3) + "<br>");
document.write("Floor value : " + Math.floor(num_3) + "<br>");
document.write("Ceil value : " + Math.ceil(num_3));

// QUESTION NO 4
var dice = Math.random() * 6; 
dice = Math.floor(dice) + 1;

document.write("Random Dice Value : " + dice);

// QUESTION NO 5
var dice_2 = Math.random() * 2;
dice_2 = Math.floor(dice_2) + 1;

if (dice_2 == 2) {
    document.write("Random Coin Value Heads : " + dice_2);
} else {
    document.write("Random Coin Value Tails : " + dice_2);
}

// QUESTION NO 6
var random = Math.random() * 100;
random = Math.floor(random) + 1;

document.write(random);

// QUESTION NO 8
var secretNum = Math.floor(Math.random() * 10) + 1;
var Guess = +prompt("Guess a number between 1 and 10:");

if (Guess === secretNum) {
    alert("Congratulations! You guessed the correct number.");
} else {
    alert("Sorry! The secret number was : " + secretNum);
}









