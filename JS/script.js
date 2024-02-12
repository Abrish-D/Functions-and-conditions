// Questions on functions
// Question 1
function myFirst() {
    console.log("Hello");
}
myFirst();
// Question 2
let mySecond=(num) => console.log(num);
mySecond(8);
// Question 3
let myThird=(num) => {
    mySecond(num);
}
myThird("Abrham");
// Question 4
let myFourth=(array1) => {
    console.log(array1[0]);
}
let array=["abebe", 4 , "dani"];
myFourth(array);
// Question 5
let myFifth=(array2) => {
   console.log(array2[0] + array2[1]);
}
let array2=[23,45];
myFifth(array2);
// Question 6
let convertToMinutes=(minute) =>{
    if (typeof minute !== 'number')
    {
        return "please enter a number only!";
    }
    else if (minute < 0)
    {
        return "minute must be positive";
    }
    else
    {
        var second = minute * 60;
        return second;
    }
}
console.log(convertToMinutes(5));
// Question 7
let increment = (number) => {
    return ++number;
}
console.log(increment(10));
// Question 8
let calculateArea=(base , height) => {
    var Area = (base * height)/2;
    return Area;
}
console.log(calculateArea(10,3));
// Question 9
let numberOfLegs=(chicken, cow ,pig) => {
    var totalNumberOfLegs = chicken * 2 + 4 * (cow  + pig) ;
    return totalNumberOfLegs;
}
console.log(numberOfLegs(2, 4, 5));
// Question 10
let Triple = (Array3) => {
    return (Array3[0] * 3);
}
let Array3 = [8 , 7];
console.log(Triple(Array3));
// Questions on Conditional statements and - practice exercise
// Question 11
let myFunction1 = (num1 , num2) => {
    if (num1 == num2) 
    {
        return true;
    }
    else
    {
       return false;
    }
}
console.log(myFunction1(4 , 4));
// Question 12
let  myFunction2 = (num) => {
    if ((num%100) == 0) 
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(myFunction2(110));
// Question 13
let myFunction3 = (num) => {
    if ((num%2) == 0)
    {
        return "Even";
    }
    else
    {
        return "Odd";
    }
}
console.log(myFunction3(8));
// Question 14
let myFunction4 = (score) => {
    if (score > 100 || score < 0) 
    {
        return "Invalid score";
    }
    else if(score >= 90)
    {
        return "Grade A";
    }
    else if(score >= 80)
    {
        return "Grade B";
    }
    else
    {
        return "Grade C";
    }
}
console.log(myFunction4(95));

 

