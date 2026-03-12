let studyInterval = null;
let totalSeconds = 0;
let earnedBadges = [];

function startStudy() {

    if (studyInterval !== null) return;

    studyInterval = setInterval(() => {

        totalSeconds++;

        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        document.getElementById("studyTime").textContent =
            hours + " hr " + minutes + " min " + seconds + " sec";

        let progress = (totalSeconds % 3600) / 36;
        document.getElementById("progressBar").style.width =
            progress + "%";

        checkBadges();

    }, 1000);
}

function stopStudy() {
    clearInterval(studyInterval);
    studyInterval = null;
}

function resetStudy() {
    clearInterval(studyInterval);
    studyInterval = null;
    totalSeconds = 0;
    earnedBadges = [];

    document.getElementById("studyTime").textContent =
        "0 hr 0 min 0 sec";

    document.getElementById("progressBar").style.width = "0%";
    document.getElementById("badges").textContent =
        "No achievements yet";
}

function checkBadges() {

    let badgeText = "";

    if (totalSeconds >= 1800 && !earnedBadges.includes("30min")) {
        earnedBadges.push("30min");
        badgeText += "🥉 Getting Started (30 min) ";
    }

    if (totalSeconds >= 3600 && !earnedBadges.includes("1hour")) {
        earnedBadges.push("1hour");
        badgeText += "🥈 Focused Learner (1 hr) ";
    }

    if (totalSeconds >= 10800 && !earnedBadges.includes("3hour")) {
        earnedBadges.push("3hour");
        badgeText += "🥇 Study Warrior (3 hr) ";
    }

    if (totalSeconds >= 18000 && !earnedBadges.includes("5hour")) {
        earnedBadges.push("5hour");
        badgeText += "🏆 Productivity Master (5 hr) ";
    }

    if (badgeText !== "") {
        document.getElementById("badges").textContent = badgeText;
    }
}