// This brings in JavaScipt to do a if else statement to assign a percentage a letter grade


$("#btnSend").click(function () {

    var a = $("#assignments").val();
    var g = $("#gp").val();
    var q = $("#quiz").val();
    var e = $("#exam").val();
    var i = $("#intex").val();
    var input = ((a*.55) + (g*.05) + (q*.1) + (e*.2) + (i*.1))
    if (input >= 94) {
        output = "A"
    } else if (input >= 90 && input < 94) {
        output = "A-"
    } else if (input >= 87 && input < 90) {
        output = "B+"
    } else if (input >= 84 && input < 87) {
        output = "B"
    } else if (input >= 80 && input < 84) {
        output = "B-"
    } else if (input >= 77 && input < 80) {
        output = "C+"
    } else if (input >= 74 && input < 77) {
        output = "C"
    } else if (input >= 70 && input < 74) {
        output = "C-"
    } else if (input >= 67 && input < 70) {
        output = "D+"
    } else if (input >= 64 && input < 67) {
        output = "D"
    } else if (input >= 60 && input < 64) {
        output = "D-"
    } else {
        output = "E"
    } 


    // sends out alert of final grade and final percentage

    alert("Final Percentage is: " + input + "% " + "Letter Grade: " + output)
})