$("#btnCalc").click(function () {

    let sumGrade = Math.round((0.55 * $("#gradeAss").val()) + (0.05 * $("#gradePro").val()) + ($("#gradeQui").val() * 0.1) + ($("#gradeExa").val() * 0.2) + ($("#gradeInt").val() * 0.1))


    let letterGrade = "N/A"

    if (sumGrade <= 60) {
        letterGrade = "E"
    }
    else if ($("#numGrade").val() < 63) {
        letterGrade = "D-"
    }
    else if (sumGrade < 67) {
        letterGrade = "D"
    }
    else if (sumGrade < 70) {
        letterGrade = "D+"
    }
    else if (sumGrade < 73) {
        letterGrade = "C-"
    }
    else if (sumGrade < 77) {
        letterGrade = "C"
    }
    else if (sumGrade < 80) {
        letterGrade = "C+"
    }
    else if (sumGrade < 83) {
        letterGrade = "B-"
    }
    else if (sumGrade < 87) {
        letterGrade = "B"
    }
    else if (sumGrade < 90) {
        letterGrade = "B+"
    }
    else if (sumGrade < 93) {
        letterGrade = "A-"
    }
    else {
        letterGrade = "A"
    }


    alert("You received a " + letterGrade + " in the class because your final percent was " + sumGrade + "%"
    )
})
