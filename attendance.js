function calculateAttendance() {
    let total = document.getElementById("totalClasses").value;
    let attended = document.getElementById("attendedClasses").value;

    if (total === "" || attended === "") {
        alert("Please enter all fields");
        return;
    }

    total = Number(total);
    attended = Number(attended);

    let percentage = (attended / total) * 100;

    let result = document.getElementById("attendanceResult");
    result.textContent = "Attendance: " + percentage.toFixed(2) + "%";

    result.style.color = percentage >= 75 ? "green" : "red";
}