var countdown;   // timer variable

function startCountdown() {

    var inputDate = document.getElementById("examDate").value;

    if (inputDate === "") {
        alert("Please select exam date and time");
        return;
    }

    var examTime = new Date(inputDate).getTime();

    // Agar pehle se chal raha ho to stop karo
    clearInterval(countdown);

    countdown = setInterval(function () {

        var currentTime = new Date().getTime();
        var gap = examTime - currentTime;

        if (gap <= 0) {
            clearInterval(countdown);
            alert("Exam time reached!");
            resetCountdown();
            return;
        }

        var days = Math.floor(gap / (1000 * 60 * 60 * 24));
        var hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
        var minutes = Math.floor((gap / (1000 * 60)) % 60);
        var seconds = Math.floor((gap / 1000) % 60);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

    }, 1000);
}


// Reset Function
function resetCountdown() {

    clearInterval(countdown);

    document.getElementById("days").innerText = 0;
    document.getElementById("hours").innerText = 0;
    document.getElementById("minutes").innerText = 0;
    document.getElementById("seconds").innerText = 0;

    document.getElementById("examDate").value = "";
}