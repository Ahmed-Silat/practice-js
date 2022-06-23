// alert("hello")
// alert("Error! Please enter a valid password.")
// alert("Welcome to JS Land \n Happy Coding!")
// alert("Welcome to JS Land...")
// alert("Happy Coding!")


// var userName
// var myName = 'Ahmed Silat'
// var message
// message='Hello World'
// alert(message)


// var studentName = "Ahmed Silat"
// var studentAge = "21 years old"
// var studentBio = "Certified Mobile Application Development"

// alert(studentName)
// alert(studentAge)
// alert(studentBio)


// var message="PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(message)


// var email = "ahmedsilat95@gmail.com"
// alert("My email address is "+ email)

// var book = 'A smarter way to learn JavaScript'
// alert("I am trying to learn from the Book " + book)

// document.write("Yah! I can write HTML content through JavaScript")


// var age = 21
// alert("I am " + age + " years old")

// var birthYear = 2000
// document.write("My birth year is " + birthYear + "<br/>Data type of my declared variable is number")


// var visitorName=prompt("Enter Your Name")
// var productTitle=prompt("Enter The Title Of The Product")
// var quantity =Number(prompt("Enter The Quantity"))

// document.write(visitorName+" ordered "+quantity+" "+productTitle+"(s)"+" on XYZ Clothing store")


// var num1 = 1
// var num2 = 2
// var num3 = 3
// document.write(num1, num2, num3)

// var num1 = Number(prompt("Enter Number 1"))
// var num2 = Number(prompt("Enter Number 2"))
// var num3 = num1 + num2
// document.write("Sum of " + num1 + " and " + num2 + " is " + num3)


// var num1 = Number(prompt("Enter Number 1"))
// var num2 = Number(prompt("Enter Number 2"))
// var num3 = num1 - num2
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + num3)


// var num1 = Number(prompt("Enter Number 1"))
// var num2 = Number(prompt("Enter Number 2"))
// var num3 = num1 * num2
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + num3)


// var num1 = Number(prompt("Enter Number 1"))
// var num2 = Number(prompt("Enter Number 2"))
// var num3 = num1 / num2
// document.write("Division of " + num1 + " and " + num2 + " is " + num3)


// var num1 = Number(prompt("Enter Number 1"))
// var num2 = Number(prompt("Enter Number 2"))
// var num3 = num1 % num2
// document.write("Modulus of " + num1 + " and " + num2 + " is " + num3)


// var num
// document.write("Value after variable declaration is: " + num)
// num = 5
// document.write("<br/>Initial value: " + num)
// num++
// document.write("<br/>Value after increment is: " + num)
// num = num + 7
// document.write("<br/>Value after addition is: " + num)
// num--
// document.write("<br/>Value after decrement is: " + num)
// num = num % 3
// document.write("<br/>The remainder is: " + num)


// var ticketPrice = Number(prompt("Enter ticket price"))
// var noOfTickets = Number(prompt("Enter Number of tickets"))
// var totalPrice = ticketPrice * noOfTickets
// document.write("Total cost to buy " + noOfTickets + " tickets to a movie is " + totalPrice + "PKR")


// var tableNo = Number(prompt("Enter Table No."))
// var tableLimit = Number(prompt("Enter Table Limit"))
// document.write("Table of " + tableNo)
// for (var i = 1; i <= tableLimit; i++) {
//     document.write("<br/>" + tableNo + "x" + i + "=" + tableNo * i)
// }


// var userInput1 = Number(prompt("Enter The Temperature In Celsius"))
// var userInput2 = Number(prompt("Enter The Temperature In Fahrenheit"))
// var celcius = ((userInput2 - 32) * (5 / 9))
// var fahrenheit = ((userInput1 * (9 / 5)) + 32)
// document.write(userInput1 + " is " + fahrenheit + "<br/>" + userInput2 + " is " + celcius)


// var item1Price = Number(prompt("Enter Price Of Item 1"))
// var item2Price = Number(prompt("Enter Price Of Item 2"))
// var item1Quantity = Number(prompt("Enter Quantity Of Item 1"))
// var item2Quantity = Number(prompt("Enter Quantity Of Item 2"))
// var shippingCharges = Number(prompt("Enter Shipping Charges"))
// var totalCost = item1Price * item1Quantity + item2Price * item2Quantity + shippingCharges

// document.write("Price of item 1 is " + item1Price + "<br/>" + "Quantity of item 1 is "
//     + item1Quantity + "<br/>" + "Price of item 2 is " + item2Price + "<br/>"
//     + "Quantity of item 2 is " + item2Quantity + "<br/>" + "Shipping Charges "
//     + shippingCharges + "<br/>" + "<br/>" + "Total cost of your order is " + totalCost)


// var totalMarks = Number(prompt("Enter Total Marks"))
// var marksObtained = Number(prompt("Enter Obtained Marks"))
// var percentage = (marksObtained / totalMarks) * 100

// document.write("Total marks: " + totalMarks + "<br/>" + "Marks obtained: "
//     + marksObtained + "<br/>" + "Percentage: " + percentage+"%")


// var dollars = Number(prompt("Enter No Of Dollars"))
// var riyals = Number(prompt("Enter No Of Riyals"))
// var pakistani = dollars * 104.80 + riyals * 28

// document.write("<strong>Currency in PKR</strong>"
//     + "<br/><br/><br/><br/>" + "Total Currency in PKR: " + pakistani)


// var num = 1
// document.write(((num+5)*10)/2)


// var radius = Number(prompt("Enter The Radius Of a Circle"))
// var circumference = 2 * 3.142 * radius
// var area = 3.142 * radius * radius

// document.write("Radius of a circle: " + radius + "<br/>" + "The circumference is: " + circumference
//     + "<br/>" + "The area is: " + area)


// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--

// document.write("a is " + a + "<br/>" + "b is " + b + "<br/>" + "result is " + result)


// var tableNo = Number(prompt("Enter Table No.")) || 5
// var tableLimit = Number(prompt("Enter Table Limit"))
// document.write("Table of " + tableNo)
// for (var i = 1; i <= tableLimit; i++) {
//     document.write("<br/>" + tableNo + "x" + i + "=" + tableNo * i)
// }


// var sub1 = prompt("Enter 1st Subject Name")
// var sub2 = prompt("Enter 2nd Subject Name")
// var sub3 = prompt("Enter 3rd Subject Name")
// var totalMarks = 100
// var sub1Marks = Number(prompt("Enter Marks Of 1st Subject"))
// var sub2Marks = Number(prompt("Enter Marks Of 2nd Subject"))
// var sub3Marks = Number(prompt("Enter Marks Of 3rd Subject"))
// var sub1Percentage = (sub1Marks / totalMarks) * 100
// var sub2Percentage = (sub2Marks / totalMarks) * 100
// var sub3Percentage = (sub3Marks / totalMarks) * 100

// document.write("<strong>Subject Total Marks Obtained Marks Percentage</strong>"
//     + "<br/>" + sub1 + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + totalMarks + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + sub1Marks + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + sub1Percentage + "%"
//     + "<br/>" + sub2 + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + totalMarks + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + sub2Marks + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + sub2Percentage + "%"
//     + "<br/>" + sub3 + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + totalMarks + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + sub3Marks + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + sub3Percentage + "%"
// )


// var cityName = prompt("Enter City Name")

// if (cityName === 'karachi') {
//     alert("Welcome to city of lights")
// }
// else {
//     alert("Wrong city name")
// }


// var gender = prompt("Enter your Gender Male or Female")
// if (gender === 'male') {
//     alert("Good Morning Sir")
// }
// else if (gender === 'female') {
//     alert("Good Morning Ma'am")
// }
// else {
//     alert("Please enter correct gender")
// }


// var color = prompt("Enter Signal Color")
// if (color === 'red') {
//     alert("Must Stop")
// }
// else if (color === 'yellow') {
//     alert("Ready To Move")
// }
// else if (color === 'green') {
//     alert("Move Now")
// }
// else {
//     alert("invalid choice")
// }


// var fuel = Number(prompt("Enter current fuel in your car"))

// if (fuel < 0.25 && fuel >= 0) {
//     alert("Please refill the fuel in your car")
// }
// else if (fuel >= 0.25) {
//     alert("You are good to go")
// }
// else {
//     alert("Invalid input")
// }


// var character = prompt("Enter the character")
// if (character === 'A' || character === 'Z') {
//     alert(character + " is an Uppercase character")
// }
// else if (character === 'a' || character === 'z') {
//     alert(character + " is a Lowercase character")
// }
// else {
//     alert(character + " is a Number")
// }


// var num1 = Number(prompt("Enter Number 1"))
// var num2 = Number(prompt("Enter Number 2"))

// if (num1 > num2) {
//     alert(num1)
// }

// else if (num2 > num1) {
//     alert(num2)
// }

// else {
//     alert("both the integers are equal")
// }


// var number = Number(prompt('Enter The Number'))

// if (number > 0) {
//     alert("number is positive")
// }

// else if (number < 0) {
//     alert("number is negative")
// }

// else if (number === 0) {
//     alert("number is zero")
// }

// else{
//     alert("invalid input")
// }


// var character = prompt("Enter the character")
// var result = checkVowel(character)
// alert(result)
// function checkVowel(item) {
//     if (character === 'a' || character === 'A' || character === 'e' || character === 'E'
//         || character === 'i' || character === 'I' || character === '0' || character === 'O'
//         || character === 'u' || character === 'U') {
//         // alert("vowel")
//         return true
//     }
//     return false
// }


// var correctPassword = 'ahmed'
// var checkPassword = prompt("Enter your Password")
// if (checkPassword === '') {
//     alert("Please enter your password")
// }
// else if (correctPassword === checkPassword) {
//     alert("Correct!")
// }
// else {
//     alert("Incorrect password")
// }


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}


var time = Number(prompt("Enter time in hundred hours format"))

if (time >= 0000 && time < 1200) {
    alert("Good Morning!")
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!")
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening!")
}
else if (time >= 2100 && time <= 2359) {
    alert("Good Night!")
}
else {
    alert("Invalid time input")
}