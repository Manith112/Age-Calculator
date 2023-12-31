
function Next(){
   const dateDay = document.getElementById("date-day");
   const dateMonth = document.getElementById("date-month");
   const dateYear = document.getElementById("date-year");

    const sign = document.querySelectorAll(".para-first")
    const signSecond = document.querySelectorAll(".para-second")

    const emptyDay = document.querySelector(".empty-day")
    const emptyMonth = document.querySelector(".empty-month")
    const emptyYear = document.querySelector(".empty-year")
    
const resultYear = document.getElementById("result-year")
const resultMonth = document.getElementById("result-month")
const resultDay = document.getElementById("result-day")

const inputDate = document.querySelector(".fill-day")
const inputMonth = document.querySelector(".fill-month")
const inputYear = document.querySelector(".fill-year")

const invalidDay = document.querySelector(".invalid-day");
const invalidMonth = document.querySelector(".invalid-month");
const invalidYear = document.querySelector(".invalid-year");
const birthday = parseInt(document.getElementById('day').value);
const birthmonth = parseInt(document.getElementById('month').value) - 1;
const birthyear = parseInt(document.getElementById('year').value);

const dayInput = document.getElementById("day").value;
const monthInput = document.getElementById("month").value;
const yearInput = document.getElementById("year").value;

if (dayInput === '' || monthInput === '' || yearInput === ''){
        console.log("empty")
       dateDay.style.color = "hsl(0, 100%, 67%)"
       dateMonth.style.color = "hsl(0, 100%, 67%)"
       dateYear.style.color = "hsl(0, 100%, 67%)"

        emptyDay.style.display = "flex"
        emptyMonth.style.display = "flex"
        emptyYear.style.display = "flex"
       
        
        inputDate.style.border = "1px solid hsl(0, 100%, 67%)"
        inputMonth.style.border = "1px solid hsl(0, 100%, 67%)"
        inputYear.style.border = "1px solid hsl(0, 100%, 67%)"
    }

    
    else 
    if (dayInput < 1 || dayInput > 31 && monthInput < 1 || monthInput > 12 && yearInput < 1900 || yearInput > 2023) {
       console.log("invalid")
   
       emptyDay.style.display = "none"
       emptyMonth.style.display = "none"
       emptyYear.style.display = "none"
   
       dateDay.style.color = "hsl(0, 100%, 67%)"
          dateMonth.style.color = "hsl(0, 100%, 67%)"
          dateYear.style.color = "hsl(0, 100%, 67%)"
   
           invalidDay.style.display = "flex"
           invalidMonth.style.display = "flex"
           invalidYear.style.display = "flex"
          
           
           inputDate.style.border = "1px solid hsl(0, 100%, 67%)"
           inputMonth.style.border = "1px solid hsl(0, 100%, 67%)"
           inputYear.style.border = "1px solid hsl(0, 100%, 67%)"
   }

    else if(dayInput < 1 || dayInput > 31 && 0 < monthInput < 13 && 1990 <= yearInput <= 2023){
        console.log("dayInvalid");
        inputDate.style.border = "1px solid hsl(0, 100%, 67%)"
        invalidDay.style.display = "flex";
        dateDay.style.color = "hsl(0, 100%, 67%)"

        invalidMonth.style.display = "none";
        dateMonth.style.color = "hsl(0, 0%, 8%)"
        inputMonth.style.border = "1px solid hsl(0, 1%, 44%)"

        invalidYear.style.display = "none";
        dateYear.style.color = "hsl(0, 0%, 8%)"
        inputYear.style.border = "1px solid hsl(0, 1%, 44%)"
    }

    else if( 1 <= dayInput <= 31 && monthInput < 1 || monthInput > 12 && 1990 <= yearInput <= 2023){
        console.log("MonthInvalid");
        inputMonth.style.border = "1px solid hsl(0, 100%, 67%)"
        invalidMonth.style.display = "flex";
        dateMonth.style.color = "hsl(0, 100%, 67%)"

        invalidDay.style.display = "none";
        dateDay.style.color = "hsl(0, 0%, 8%)"
        inputDate.style.border = "1px solid hsl(0, 1%, 44%)"

        invalidYear.style.display = "none";
        dateYear.style.color = "hsl(0, 0%, 8%)"
        inputYear.style.border = "1px solid hsl(0, 1%, 44%)"
    }

    else if( 1 <= dayInput <= 31 && 0 < monthInput < 13 && yearInput < 1900 || yearInput > 2023){
        console.log("YearInvalid");
        inputYear.style.border = "1px solid hsl(0, 100%, 67%)"
        invalidYear.style.display = "flex";
        dateYear.style.color = "hsl(0, 100%, 67%)"

        invalidMonth.style.display = "none";
        dateMonth.style.color = "hsl(0, 0%, 8%)"
        inputMonth.style.border = "1px solid hsl(0, 1%, 44%)"

        invalidDay.style.display = "none";
        dateDay.style.color = "hsl(0, 0%, 8%)"
        inputDate.style.border = "1px solid hsl(0, 1%, 44%)"
    }

    

    
   
    else if( 1 <= birthday <= 31 && 0 < birthmonth < 13 && birthyear < 1990 <= birthyear <= 2023){
        console.log("completed")
        // Create a Date object for the birthdate
        var birthDateObj = new Date(yearInput, monthInput, dayInput);
    
        // Get the current date
        var currentDate = new Date();
    
        // Calculate the difference in milliseconds
        var ageInMilliseconds = currentDate - birthDateObj;
    
        // Convert milliseconds to years
        var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    
        // Extract years, months, and days
        var years = Math.floor(ageInYears);
        var months = Math.floor((ageInYears % 1) * 12);
        var days = Math.floor((ageInYears % 1) * 365.25);
    
        // Adjust days for leap years
        days -= Math.floor(years / 4);
        inputDate.style.border = "1px solid hsl(0, 1%, 44%)"
        inputMonth.style.border = "1px solid hsl(0, 1%, 44%)"
        inputYear.style.border = "1px solid hsl(0, 1%, 44%)"

        dateDay.style.color = "hsl(0, 1%, 44%)"
          dateMonth.style.color = "hsl(0, 1%, 44%)"
          dateYear.style.color = "hsl(0, 1%, 44%)"

          invalidDay.style.display = "none"
           invalidMonth.style.display = "none"
           invalidYear.style.display = "none"
        sign.forEach(function(sign){
            sign.style.display = "none";
        })
        signSecond.forEach(function(sign) {
            sign.style.display = "none"
        })
            resultYear.innerHTML = years;
            resultMonth.innerHTML = months;
            resultDay.innerHTML = days;

    }
    
   
}
