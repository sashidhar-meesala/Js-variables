

//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

//fetches the button
var button = document.querySelector("#fortune");

//makes button listens to a click event and calls the calSum function when button is clicked
button.addEventListener("click",fortune);


function fortune()
{   
   
   
    let jobTitle= document.querySelector("#jobtitle").value;
    let geographicLoacation=document.querySelector("#geolocation").value;
    let annualSalary=document.querySelector("#salary").value;
    let companyName=document.querySelector("#company").value;
    

    //alert(`you will be a ${jobTitle} in ${geographicLoacation}, making $ ${annualSalary} for ${companyName}.`);
    //console.log(`you will be a ${jobTitle} in ${geographicLoacation}, making $ ${annualSalary} for ${companyName}.`);
    const xoutput= document.getElementById(`outputFortune`);
    xoutput.innerHTML=`
    <p> you will be a ${jobTitle} in ${geographicLoacation}, making $ ${annualSalary} for ${companyName}. </p>`;
    
}





//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.
var xbutton= document.querySelector("#agebut");
xbutton.addEventListener("click",CalculateAge);

function CalculateAge(){
    
 let presentYear=2019;
 let year= document.querySelector("#year").value;
  calculatedAge= presentYear- year;

 //alert(`They are ${calculatedAge} years old.`);
 //console.log(`They are ${calculatedAge} years old.`);

 const aoutput= document.getElementById(`outputAge`);
    aoutput.innerHTML=`They are ${calculatedAge} years old.`;
}





//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var button=document.querySelector("#lifetime");
button.addEventListener("click",lifetime);

function lifetime(){
    var max= 92;
    var age= document.querySelector("#age").value;
    var perDay= 35;
    answer = (max - age) * 365 * 35;
   //alert(`You will need  $${answer}  to last you until the ripe old age of ${max}`);
    //console.log(`You will need $${answer}  to last you until the ripe old age of ${max}`);
    const soutput= document.getElementById(`outputSupply`);
    soutput.innerHTML=`You will need  $${answer}  to last you until the ripe old age of ${max}`;
}
//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

var qbutton=document.querySelector("#area");
qbutton.addEventListener("click",area);


var abutton=document.querySelector("#circumference");
abutton.addEventListener("click",circumference);

function area(){
    var pi=3.14;
    var radius=document.querySelector("#radius").value;
    var area=2*pi*radius*radius;
    //alert(`The area is ${area}`);
    const goutput= document.getElementById(`outputGeo`);
    goutput.innerHTML=`The area is ${area}`;

}


function circumference(){
    var pi=3.14;
    var radius=document.querySelector("#radius").value;
    var circumference=2*pi*radius;
    //alert(`The circumference is ${circumference} `);
    const goutput= document.getElementById(`outputGeo`);
    goutput.innerHTML=`The circumference is ${circumference}`;
}


//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

var cbutton=document.querySelector("#CtoF");
cbutton.addEventListener("click",CtoF);

var fbutton=document.querySelector("#FtoC");
fbutton.addEventListener("click",FtoC);

function CtoF(){
    var temp= document.querySelector("#Ctemp").value;
    var fahrenheit=(temp * (9/5)) + 32;
    //alert(` the temperature in fahrenheit is ${fahrenheit}` +'\&#8457');
    const toutput= document.getElementById(`outputTemp`);
    toutput.innerHTML=`the temperature in fahrenheit is ${fahrenheit} &#8457`;
}

function FtoC(){
    var temp= document.querySelector("#Ftemp").value;
    var celcius=(temp-32) * (5/9);
   // alert( `the temperature in celcius is ${celcius}`);
    const toutput= document.getElementById(`outputTemp`);
    toutput.innerHTML=`the temperature in celcius is ${celcius} &#8451`;
}    