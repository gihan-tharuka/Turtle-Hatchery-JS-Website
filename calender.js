//FUNCTION FOR THE CALENDER
function calenderf() {
  var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");
var monthHeader = document.getElementById("monthHeader");
var yearHeader = document.getElementById("yearHeader");
var nextBtn = document.getElementById("next");
var previousBtn = document.getElementById("previous");
var datePicked = document.getElementById("date-picked");
var months = "";
var days = "";
var monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

months = monthsArr;
days = daysArr;

var tableHeaderMonth = document.getElementById("thead-month");
var dataHead = "<tr>";
var startDay = "";

for (dhead in days) {
  days[dhead] === "Sun" ? startDay = "red-text" : startDay = "";
  dataHead += "<th data-days='" + days[dhead] + "' class='" + startDay + "'>" + days[dhead] + "</th>";
}

dataHead += "</tr>";
tableHeaderMonth.innerHTML = dataHead;
showCalendar(currentMonth, currentYear);  

nextBtn.addEventListener("click", next, false);
previousBtn.addEventListener("click", previous, false);

function yearRange(start, end) {
  var years = "";

  for (var year = start; year <= end; year++) {
    years += "<option value='" + year + "'>" + year + "</option>";
  }

  return years;
}

var createYear = yearRange(1970, 2050);
selectYear.innerHTML = createYear;

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  var firstDay = new Date(year, month).getDay();
  var monthString = monthsArr[month];

  table = document.getElementById("calendar-body");
  table.innerHTML = ""; 
  monthHeader.innerHTML = monthString.substring(0, 3);
  yearHeader.innerHTML = year;
  selectYear.value = year;
  selectMonth.value = month;

  var date = 1;

  for (var i = 0; i < 6; i++ ) {
    var row = document.createElement("tr");

    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
        cell = document.createElement("td");
        cell.setAttribute("data-date", date);
        cell.setAttribute("data-month", month + 1);
        cell.setAttribute("data-year", year);
        cell.setAttribute("data-month-name", months[month]);
        cell.className = "date-picker";
        cell.innerHTML = "<span>" + date + "</span>";
        cell.onclick = function(event) {
          var dates = document.querySelectorAll(".date-picker");
          var currentTarget = event.currentTarget;
          var date = currentTarget.dataset.date;
          var month = currentTarget.dataset.month - 1;
          var year = currentTarget.dataset.year;

          for (var i = 0; i < dates.length; i++) {
            dates[i].classList.remove("selected");
          }

          currentTarget.classList.add("selected");
          datePicked.innerHTML = date + " " + monthsArr[month] + " " + year;

          // CODE TO UPDATE TABLE AND STORE DATA TO SESSION STORAGE
          var lsdate = datePicked.textContent;
          var dateCell = document.getElementById("date");
          dateCell.textContent = lsdate;
          sessionStorage.setItem('storedDate', lsdate);
        }

        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
          cell.className = "date-picker selected";
        }

        row.appendChild(cell);
        date++;
      }
    }

    table.appendChild(row);
  }
}


function daysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}
}

//CURRENT DATE, DEFAULT DURATION
function currentdatef() {

var dateCell = document.getElementById("date");

// Extract year, month, and date from the Date object
var today = new Date(); 
var year = today.getFullYear();
var month = today.getMonth() +1;// Adding 1 because getMonth() returns zero-based month (0-11)
var date = today.getDate();
var currentday = year + " / " + month + " / " + date;

// Set text to the table cell elements
dateCell.textContent = currentday;

//table show duration 
var duraCell = document.getElementById("duration");
duraCell.textContent = "3 Hours (1 Normal : 2 Peek)";
}




 


///////////////////////////////////////////////////////////////////////////////////////////////////
//SELECTING THE NUMBER OF TICKETS
//First row
function ticketcountf() {
  const addB1 = document.getElementById("pBut1");
 addB1.addEventListener("click", function () {
    const countElement = document.getElementById('laNum');
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
 });

 const minB1 = document.getElementById("mBut1");
 minB1.addEventListener("click", function () {
    const countElement = document.getElementById('laNum');
    let count = parseInt(countElement.textContent);
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
 });
 //Second row
 const addB2 = document.getElementById("pBut2");
 addB2.addEventListener("click", function () {
    const countElement = document.getElementById('faNum');
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
 });

 const minB2 = document.getElementById("mBut2");
 minB2.addEventListener("click", function () {
    const countElement = document.getElementById('faNum');
    let count = parseInt(countElement.textContent);
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
 });
 //Third row
 const addB3 = document.getElementById("pBut3");
 addB3.addEventListener("click", function () {
    const countElement = document.getElementById('lcNum');
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
 });

 const minB3 = document.getElementById("mBut3");
 minB3.addEventListener("click", function () {
    const countElement = document.getElementById('lcNum');
    let count = parseInt(countElement.textContent);
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
 });
//Fourth row
const addB4 = document.getElementById("pBut4");
 addB4.addEventListener("click", function () {
    const countElement = document.getElementById('fcNum');
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
 });

 const minB4 = document.getElementById("mBut4");
 minB4.addEventListener("click", function () {
    const countElement = document.getElementById('fcNum');
    let count = parseInt(countElement.textContent);
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
 });
 //Fifth row
 const addB5 = document.getElementById("pBut5");
 addB5.addEventListener("click", function () {
    const countElement = document.getElementById('inNum');
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
 });

 const minB5 = document.getElementById("mBut5");
 minB5.addEventListener("click", function () {
    const countElement = document.getElementById('inNum');
    let count = parseInt(countElement.textContent);
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
 });

}

///////////////////////////////////////////////////////////////////////////////////////////////
//SELECTING THE TIME SLOTS 
// Function to update number of hours
var totalHours = 0;
var normalHours = 0;
var peakHours = 0;

function updateCounts() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  totalHours = 0;
  normalHours = 0;
  peakHours = 0;

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      totalHours = totalHours + 1;
      const type = parseInt(checkbox.getAttribute('data-type'));
      if (type === 1) {
        normalHours = normalHours + 1;
      } else if (type === 2) {
        peakHours = peakHours + 1;
      } 
    }
    
  });
  let hrsInfo = " hrs (" + normalHours + " Normal : " + peakHours + " Peak)";
  duradisplay = totalHours + hrsInfo;
  var duraCell = document.getElementById("duration");
  duraCell.textContent = duradisplay;
  sessionStorage.setItem('duration', duradisplay);

}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateCounts);
});



//variables for categories count
const laNumElement = document.getElementById('laNum');
const faNumElement = document.getElementById('faNum');
const lcNumElement = document.getElementById('lcNum');
const fcNumElement = document.getElementById('fcNum');
const inNumElement = document.getElementById('inNum');


//functions to calculate totals for each categorie
function slAdultTot() {
  var slAdult = parseInt(laNumElement.textContent);
  let peakTot = slAdult * (peakHours*6);
  let normalTot = slAdult * (normalHours*4);
  let slAdultCharge = peakTot + normalTot;
  return slAdultCharge;
}
function slChildTot() {
  var slChild = parseInt(lcNumElement.textContent);
  var peakTot = slChild * (peakHours*3);
  let normalTot = slChild * (normalHours*2);
  let slChildCharge = peakTot + normalTot;
  return slChildCharge;
}
function fAdultTot() {
  var fAdult = parseInt(faNumElement.textContent);
  let peakTot = fAdult* (peakHours*13);
  let normalTot = fAdult * (normalHours*10);
  let fAdultCharge = peakTot + normalTot;
  return fAdultCharge;
}
function fChildtTot() {
  var fChild = parseInt(fcNumElement.textContent);
  let peakTot = fChild * (peakHours*8);
  let normalTot = fChild * (normalHours*5);
  let fChildCharge = peakTot + normalTot;
  return fChildCharge;
}

//function to get total payment
function main() {
  var charge1= slAdultTot();
  var charge2 = slChildTot();
  var charge3 = fAdultTot();
  var charge4 = fChildtTot();
  totalCharge = charge1 + charge2 + charge3 + charge4;
  return totalCharge;
}

// Function to display "Hello, World!" inside the <p> tag
function displayHelloWorld() {
  

  var outputParagraph = document.getElementById("outputParagraph");
  var result = main();
  outputParagraph.textContent = result;
}


var totalpayment = 0;

//function TO Update the summary table 
function updateTable() {
  //getting the number of guests
    let slChild = parseInt(lcNumElement.textContent);
    let slAdult = parseInt(laNumElement.textContent);
    let fAdult = parseInt(faNumElement.textContent);
    let fChild = parseInt(fcNumElement.textContent);
    let infant = parseInt(inNumElement.textContent);
  
  // Store form field values in session storage
  sessionStorage.setItem('slChilds', slChild);
  sessionStorage.setItem('slAdults', slAdult);
  sessionStorage.setItem('fAdults', fAdult);
  sessionStorage.setItem('fChilds', fChild);
  sessionStorage.setItem('infants', infant);
  
    let slAdultCharge = slAdultTot();
    let slChildCharge = slChildTot();
    let fChildCharge = fChildtTot();
    let fAdultCharge = fAdultTot();
    var result = main();
  
  // Store form field values in session storage
  sessionStorage.setItem('slAdultCharges', slAdultCharge);
  sessionStorage.setItem('slChildCharges', slChildCharge);
  sessionStorage.setItem('fChildCharges', fChildCharge);
  sessionStorage.setItem('fAdultCharges', fAdultCharge);
  sessionStorage.setItem('totalcharge', result);

    var table = document.getElementById("myTable");

    //removing rows
    const rowsToremove = document.querySelectorAll(".rowremove");
    rowsToremove.forEach(row => row.remove());

    if (slChild > 0) {
  
    // Create a new row
    var row = table.insertRow(); // Inserts after the first row (index 1)

    // Create new cells and set values
      var typeCell = row.insertCell(0);
      typeCell.textContent = slChild+" SL Child"; // Display the newName variable here
      var priceCell = row.insertCell(1);
      priceCell.textContent = "$" + slChildCharge;
    }

    if (slAdult > 0) {

        // Create a new row
        var row = table.insertRow(); // Inserts after the first row (index 1)

        // Create new cells and set values
        var typeCell = row.insertCell(0);
        typeCell.textContent = slAdult+ " SL Adult"; // Display the newName variable here
        var priceCell = row.insertCell(1);
        priceCell.textContent = "$" + slAdultCharge; 
    }

    if (fChild > 0) {

        // Create a new row
        var row = table.insertRow(); // Inserts after the first row (index 1)

        // Create new cells and set values
        var typeCell = row.insertCell(0);
        typeCell.textContent = fChild + " Foreign Child"; // Display the newName variable here
        var priceCell = row.insertCell(1);
        priceCell.textContent = "$" + fChildCharge ; 
    }

     if (fAdult > 0) {

        // Create a new row
        var row = table.insertRow(); // Inserts after the first row (index 1)

        // Create new cells and set values
        var typeCell = row.insertCell(0);
        typeCell.textContent = fAdult + " Foreign Adult"; // Display the newName variable here
        var priceCell = row.insertCell(1);
        priceCell.textContent = "$" + fAdultCharge; 
    }

     if (infant > 0) {

        // Create a new row
        var row = table.insertRow(); // Inserts after the first row (index 1)

        // Create new cells and set values
        var typeCell = row.insertCell(0);
        typeCell.textContent = infant + " Infant"; // Display the newName variable here
        var priceCell = row.insertCell(1);
        priceCell.textContent = "Free"; 
    }

    //Code for the Total row
    // Create a new row
    var row = table.insertRow(); // Inserts after the first row (index 1)
    row.id = 'lastrow';
    // Create new cells and set values
    var typeCell = row.insertCell(0);
    typeCell.textContent = "Total Payable"; 
    var priceCell = row.insertCell(1);
    priceCell.textContent = "$ " + result;

}

function disablingf() {
  var datePicked = document.getElementById("date-picked");
  const myLink = document.getElementById('link0');
  var totalcharge = main();

  if (datePicked === "" || totalHours == 0 || totalcharge == 0 ) {
    myLink.classList.add('disabled-link0');
  }else {
    
    myLink.classList.remove('disabled-link0');
  }
 
}
function timesup() {
  


            var box1 = document.getElementById('checkbox1');
            var box2 = document.getElementById('checkbox2');
            var box3 = document.getElementById('checkbox3');
            var box4 = document.getElementById('checkbox4');
            var box5 = document.getElementById('checkbox5');
            var box6 = document.getElementById('checkbox6');
            var box7 = document.getElementById('checkbox7');
            var box8 = document.getElementById('checkbox8');
            var box9 = document.getElementById('checkbox9');
            var box10 = document.getElementById('checkbox10');
            var box11 = document.getElementById('checkbox11');

            var value1 = "";
            var value2 = "";
            var value3 = "";
            var value4 = "";
            var value5 = "";
            var value6 = "";
            var value7 = "";
            var value8 = "";
            var value9 = "";
            var value10 = "";
            var value11 = "";

            // Initialize an empty array
            const timesArray = [];

            if (box1.checked) {
                value1 = "07.00 am - 08.00 am";
                timesArray.push('07.00 am - 08.00 am');
            }

            if (box2.checked) {
                value2 = "08.00 am - 09.00 am";
                timesArray.push('08.00 am - 09.00 am');
            }

            if (box3.checked) {
                value3 = "09.00 am - 10.00 am";
                timesArray.push('09.00 am - 10.00 am');
            }

            if (box4.checked) {
                value4 = "10.00 am - 11.00 am";
                timesArray.push('10.00 am - 11.00 am');
            }

            if (box5.checked) {
                value5 = "11.00 am - 12.00 pm";
                timesArray.push('11.00 am - 12.00 pm');
            }
            if (box6.checked) {
                value6 = "12.00 pm - 01.00 pm";
                timesArray.push('12.00 pm - 01.00 pm');
            }

            if (box7.checked) {
                value7 = "01.00 pm - 02.00 pm";
                timesArray.push('01.00 pm - 02.00 pm');
            }

            if (box8.checked) {
                value8 = "02.00 pm - 03.00 pm";
                timesArray.push('02.00 pm - 03.00 pm');
            }

            if (box9.checked) {
                value9 = "03.00 pm - 04.00 pm";
                timesArray.push('03.00 pm - 04.00 pm');
            }

            if (box10.checked) {
                value10 = "04.00 pm - 05.00 pm";
                timesArray.push('04.00 pm - 05.00 pm');
            }
            if (box11.checked) {
                value11 = "05.00 pm - 06.00 pm";
                timesArray.push('05.00 pm - 06.00 pm');
            }

            // Get the <td> tag container
            const listContainer = document.getElementById('listContainer');
            listContainer.textContent = "";

            // Create an <ul> element
            const ulElement = document.createElement('ul');

            // Loop through the array and create <li> elements with <span> elements inside
            timesArray.forEach((value) => {
                const liElement = document.createElement('li');
                const spanElement = document.createElement('span');
                spanElement.textContent = value;
                liElement.appendChild(spanElement);
                ulElement.appendChild(liElement);
            });

            // Append the <ul> element with all the <li> elements to the <p> tag container
            listContainer.appendChild(ulElement);
  
            // Convert the array to a JSON string and store it in sessionStorage
            sessionStorage.setItem('timesArray', JSON.stringify(timesArray));
        


           
        }
function uptablef() {
  var chargeupButton = document.getElementById('chargeupbut');

  chargeupButton.addEventListener('click', () => {

  
  totalpayment = main(); 
  updateTable();
  disablingf();
  timesup();
 

});
}

// Check the current page's URL and run the function -> avoid errors
if (window.location.href.includes("ticketspage.html")) {
  currentdatef();
  calenderf();
  ticketcountf();
  uptablef();
  
}

//Function to update the table on the 2nd , 3rd and 4th pages
function updateTable2() {

  // Retrieve the JSON string from sessionStorage and convert it back to an array
  const timesArray = JSON.parse(sessionStorage.getItem('timesArray'));

  // Get the <td> tag container
  const listContainer = document.getElementById('listContainer');
  listContainer.textContent = "";

  // Create an <ul> element
  const ulElement = document.createElement('ul');

  // Loop through the array and create <li> elements with <span> elements inside
  timesArray.forEach((value) => {
  const liElement = document.createElement('li');
  const spanElement = document.createElement('span');
  spanElement.textContent = value;
  liElement.appendChild(spanElement);
  ulElement.appendChild(liElement);
  });

  // Append the <ul> element with all the <li> elements to the <p> tag container
  listContainer.appendChild(ulElement);

  var datecell = document.getElementById('dateCell');
  var duracell = document.getElementById('durationc');

  var getdate = sessionStorage.getItem("storedDate");
  var getduration = sessionStorage.getItem("duration");

  datecell.textContent = getdate;
  duracell.textContent = getduration;

  let slChild = sessionStorage.getItem("slChilds");
  let slAdult = sessionStorage.getItem("slAdults");
  let fAdult = sessionStorage.getItem("fAdults");
  let fChild = sessionStorage.getItem("fChilds");
  let infant = sessionStorage.getItem("infants");
  
  let slAdultCharge = sessionStorage.getItem("slAdultCharges");
  let slChildCharge = sessionStorage.getItem("slChildCharges");
  let fChildCharge = sessionStorage.getItem("fChildCharges");
  let fAdultCharge = sessionStorage.getItem("fAdultCharges");
  var result = sessionStorage.getItem("totalcharge");
  
  var table = document.getElementById("myTable2");

  //removing rows
  const rowsToremove = document.querySelectorAll(".rowremove");
   rowsToremove.forEach(row => row.remove());

  if (slChild > 0) {
  
  // Create a new row
  var row = table.insertRow(); // Inserts after the first row (index 1)

  // Create new cells and set values
    var typeCell = row.insertCell(0);
    typeCell.textContent = slChild+" SL Child"; // Display the newName variable here
    var priceCell = row.insertCell(1);
    priceCell.textContent = "$" + slChildCharge;
  }

    if (slAdult > 0) {

        // Create a new row
        var row = table.insertRow(); // Inserts after the first row (index 1)

        // Create new cells and set values
        var typeCell = row.insertCell(0);
        typeCell.textContent = slAdult+ " SL Adult"; // Display the newName variable here
        var priceCell = row.insertCell(1);
        priceCell.textContent = "$" + slAdultCharge; 
    }

    if (fChild > 0) {

        // Create a new row
        var row = table.insertRow(); // Inserts after the first row (index 1)

        // Create new cells and set values
        var typeCell = row.insertCell(0);
        typeCell.textContent = fChild + " Foreign Child"; // Display the newName variable here
        var priceCell = row.insertCell(1);
        priceCell.textContent = "$" + fChildCharge ; 
    }

     if (fAdult > 0) {

        // Create a new row
        var row = table.insertRow(); // Inserts after the first row (index 1)

        // Create new cells and set values
        var typeCell = row.insertCell(0);
        typeCell.textContent = fAdult + " Foreign Adult"; // Display the newName variable here
        var priceCell = row.insertCell(1);
        priceCell.textContent = "$" + fAdultCharge; 
    }

     if (infant > 0) {

        // Create a new row
        var row = table.insertRow(); // Inserts after the first row (index 1)

        // Create new cells and set values
        var typeCell = row.insertCell(0);
        typeCell.textContent = infant + " Infant"; // Display the newName variable here
        var priceCell = row.insertCell(1);
        priceCell.textContent = "Free"; 
    }

    //Total row
    // Create a new row
    var row = table.insertRow(); // Inserts after the first row (index 1)
    row.id = 'lastrow';
    // Create new cells and set values
    var typeCell = row.insertCell(0);
    typeCell.textContent = "Total Payable"; 
    var priceCell = row.insertCell(1);
    priceCell.textContent = "$ " + result;

}

 // Run the update table function on details page
if (window.location.href.includes("detailspage.html")) {
  updateTable2();
}

 // Run the update table function on payment page
if (window.location.href.includes("paypage.html")) {
  updateTable2();
}

 // Run the update table function on confirmation page
if (window.location.href.includes("confirm.html")) {
  updateTable2();
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//DETAILS PAGE CODES START FROM HERE

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;

  const link1 = document.getElementById('link1');
  link1.classList.add('disabled-link');

}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';

  const link1 = document.getElementById('link1');
  link1.classList.remove('disabled-link');
}

//check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//To check required on gender
function checkgender(input) {
  if (input.value === 'Select your gender') {
    showError(input, `${getFieldName(input)} is required`);
  } else {
    showSuccess(input);
  }
}

//check input lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// check email match
function checkEmailMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Email do not match');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Storing the form inputs to the session storage
function storeFormData() {
  // Get the input values from the form
  var fullNameV = document.getElementById('fullname').value;
  var mobilenumV = document.getElementById('mobile').value;
  var emailV = document.getElementById('email').value;
  var genderV = document.getElementById('gender').value;
  
// Store form field values in session storage
  sessionStorage.setItem('fullName', fullNameV);
  sessionStorage.setItem('email', emailV);
  sessionStorage.setItem('gender', genderV);
  sessionStorage.setItem('mobilenum', mobilenumV);
  
}


//function to diplay values on summary table on confirmation page
function myFunction() {

  var getfullname = sessionStorage.getItem("fullName");
  var getmobile = sessionStorage.getItem("mobilenum");
  var getemail = sessionStorage.getItem("email");
  var getgender = sessionStorage.getItem("gender");
  var getdate = sessionStorage.getItem("storedDate");
  var getduration = sessionStorage.getItem("duration");

  
  var namecell = document.getElementById('namec');
  var mobilecell = document.getElementById('mobilec');
  var emailcell = document.getElementById('emailc');
  var gendercell = document.getElementById('genderc');
  var datecell = document.getElementById('dateCell');
  var duracell = document.getElementById('durationc');

  namecell.textContent = getfullname;
  mobilecell.textContent = getmobile;
  emailcell.textContent = getemail;
  gendercell.textContent = getgender;
  datecell.textContent = getdate;
  duracell.textContent = getduration;

  

  
}
// To run the function to update summary table on confirmation page
if (window.location.href.includes("confirm.html")) {
    myFunction();
}

function form1f() {
  const form = document.getElementById('form');
// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const fullname = document.getElementById('fullname');
  const mobile = document.getElementById('mobile');
  const email = document.getElementById('email');
  const email2 = document.getElementById('email2');
  const gender = document.getElementById('gender');
  
  checkRequired([fullname, mobile, email, email2]);
  checkgender(gender);
  checkEmail(email);
  checkEmailMatch(email, email2);
  storeFormData();
  getdata();
  
});
}

//To run the form validation functions on the details page
if (window.location.href.includes("detailspage.html")) {
  form1f();
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PAYMENT PAGE CODES START FROM HERE
//form validation functions for the form in details page
// show input error message
function showError2(input, message) {
  const form2Control = input.parentElement;
  form2Control.className = 'form2-control error';
  const small = form2Control.querySelector('small');
  small.innerText = message;

  const link1 = document.getElementById('link2');
  link1.classList.add('disabled-link');
}

// show success message
function showSuccess2(input) {
  form2Control = input.parentElement;
  form2Control.className = 'form2-control success';

  const link1 = document.getElementById('link2');
  link1.classList.remove('disabled-link');
}

//check cvv is valid
function checkexpdate(input) {
  const re = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
  if (re.test(input.value.trim())) {
    showSuccess2(input);
  } else {
    showError2(input, 'Expiry date is not valid');
  }
}

//check required fields
function checkRequired2(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError2(input, `This field is required`);
    } else {
      showSuccess2(input);
    }
  });
}

//check input lenght
function checkLength2(input, min, max) {
  if (input.value.length < min) {
    showError2(input, `The number must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError2(input, `The number must be less than ${max} characters`);
  } else {
    showSuccess2(input);
  }
}

//Function to store the form inputs to session storage
function storeForm2Data() {
  // Get the input values
  var cardnum = document.getElementById('cardnum').value;
  var expdate = document.getElementById('expdate').value;
  var cvv = document.getElementById('cvv').value;
  var cardname = document.getElementById('cardname').value;
  
// Store form field values in session storage
  sessionStorage.setItem('cardnums', cardnum);
  sessionStorage.setItem('expdates', expdate);
  sessionStorage.setItem('cvvs', cvv);
  sessionStorage.setItem('cardnames', cardname);

}

// Get fieldname
function getFieldName2(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function form2f() {
  // Event listeners
  const form2 = document.getElementById('form2');
  form2.addEventListener('submit', function (e) {
  e.preventDefault();

  const cardnum = document.getElementById('cardnum');
  const expdate = document.getElementById('expdate');
  const cvv = document.getElementById('cvv');
  const cardname = document.getElementById('cardname');
    
  checkRequired2([cardnum, expdate, cvv, cardname]);
  checkLength2(cardnum, 8, 10);
  checkLength2(cvv, 3, 3);
  checkexpdate(expdate);
  storeForm2Data();

});
}
//To run the form validation functions on the payment page
if (window.location.href.includes("paypage.html")) {
  form2f();
}
