var currentHour = 0;
var timeValue = 0;
var textAreaValue = 0;
var saveIndex = "";
var displayText = ""
var userText = ""



// Current Date and Time
var m = moment();
console.log(m);
currentHour = m.hour();//this is in format

// Create from ISO 8601 String
m = moment("2019-05-19T23:10:00.000+05:00");

// Using a format
m = moment("14/06/2019 4:50PM", "DD/MM/YYYY h:mmA");

// Create using milliseconds since epoch (1st Jan 1970)
m = moment(600000);

// Create using seconds since epoch (1st Jan 1970)
m = moment.unix(7200);

// Create a moment object in UTC mode
m = moment.utc("2019-05-19T23:10:00.000+05:00");

m = moment();

var timeIdArray = [m.format('09:00'), m.format('10:00'), m.format('11:00'), m.format('12:00'), m.format('13:00'), m.format('14:00'), m.format('15:00'), m.format('16:00'), m.format('17:00')];
var textAreaValue = [""]
console.log(`toString() => ${m.toString()}`);
console.log(`toISOString() => ${m.toISOString()}`);


function update() {
    $('#minutes').html(moment().format('HH:mm:ss'));
}

setInterval(update, 1000);

interval = setInterval(function () {
    // location.reload();
    $('#seconds').html(moment().format('HH'));
    // var currentHour = secondsDisplayEl.textContent;
    // console.log(currentHour);
}, 1000);

var displayCurrentDay = m.format("dddd DD MMMMM YYYY")

$("#currentDay").text(m.format("dddd DD MMMM YYYY"));
console.log(m.format("dddd DD MMMM YYYY"))

// display schedule with a loop, by creating each element according to the time array
displaySchedule()
function displaySchedule() {
    for (i = 0; i < timeIdArray.length; i++) {
        var userForm = $("<textarea>").addClass("textarea row save comapre-time time-block")
        // Add id, task9, task10
        userForm.append(userForm);
        var timeId = $("<div>")
        var saveButton = $("<button>").addClass("saveBtn")
        timeId.text(timeIdArray[i])
        timeId.attr("value", timeIdArray[i])
        userForm.attr("id", timeIdArray[i])
        timeId.addClass("compare-time time-block")
        saveButton.addClass("saveBtn")
        saveButton.attr("value", timeIdArray[i])
        saveButton.text("save")

        $(".container").append(timeId, saveButton, userForm)
        // $(".container").append(saveButton)
        // $(".container").append(timeId)

        // $(".container").append(userForm)

    }

}
compareTime()
// function to compare if the displaytime to the current hour
function compareTime() {
    setInterval(function () {
        // .eachfunction as the jquery loop alternative to for 
        $(".compare-time").each(function () {
            // created time value so that we could compare to value attribute added 
            // change time value from a string into a number so that can compare value
            var timeValue = parseInt($(this).attr("value"))
            // assigning values to the text area to register which box is storing the user input
            var textAreaValue = parseInt($(this).attr("value"))



            if (timeValue === currentHour) {
                // create class for each value based on comparison
                $(this).removeClass("past")
                $(this).addClass("present")
            }
            else if (timeValue < currentHour) {
                $(this).removeClass("present")
                $(this).addClass("past")
                //  })
            }
            else {
                $(this).addClass("future")

            }
        })
    }), 3000;
}

// var userText = $(".textarea").each(function(){
//     $(".textarea").append()
// });





$(".saveBtn").on("click", function saveInfo(event) {

    // event.preventDefault();
    // var userInput = $(".textarea").val()
    var userInput = $(this).next(".textarea").val()
    var userTextValue = JSON.stringify(userInput)
    saveIndex = $(this).attr("value");
    // registering which save button is clicked 
    console.log(userTextValue, saveIndex)
    // console.log(this)
    //    establish variable to have value which represents the userText
    // userText = $(".textarea").val()
    // save variable to local storage
    localStorage.setItem(saveIndex, userTextValue)

})


function displaySavedText() {

    $("textarea").each(function(){
        var timeId = $(this).attr("id")
        console.log("timeId is " + timeId)
        $(this).val(localStorage.getItem(timeId))
        
        var displayText = JSON.parse(localStorage.getItem(timeId))
        // console.log(saveIndex)
        // console.log(saveIndex, userText)
        // check that the variable is being saved in local storage and stores the value of the users text
        var timeDisplayEl = $("textarea").attr("timeDisplay")
        // console.log(timeDisplayEl)
    
        console.log("text Retrieved from LocalStorage is " + displayText)


        // if (localStorage.getItem(saveIndex)) {
        // }
        // $("textarea").text(localStorage.setItem(userTextValue))
        //    display saved value in text area which matches value of that saved item
        $("textarea").append(displayText)
        // $("textarea").attr("timeDisplayEl").text(displayText)
        //    var saveText = JSON.parse(displayText)
        // timeDisplayEl.text(saveText)
        // savedSchedule()
        // console.log(saveText)  



        // In each loop

        // 1. Get The timeId
        // 2. Use timeId to get Value from LocalStorage
        // 3. Create a TextArea
        // 4. Fill TextArea value with previously retireved value from step 2
        // 5. Find corresponding row for the index
        // 5. Attach the above TextArea to correcponding row
    })

}
displaySavedText()

$("#clear").on("click", function clearItems(event){
      localStorage.clear();
        console.log("clear")
})










        // 

        // })











        // })























