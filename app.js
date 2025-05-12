let diff = 1000

function updateTimer() {
    if (0 < diff) {
        const future = Date.parse("2025/05/09 20:15:00");
        const now = new Date();
        diff = future - now;
        document.getElementById("timer").innerHTML = '<div>' + Math.floor(diff / (1000 * 60 * 60 * 24)) + '<span>Days</span></div><div>' + (Math.floor(diff / (1000 * 60 * 60)) - Math.floor(diff / (1000 * 60 * 60 * 24)) * 24) + '<span>Hours</span></div><div>' + (Math.floor(diff / (1000 * 60)) - Math.floor(diff / (1000 * 60 * 60)) * 60) + '<span>Minutes</span></div><div>' + (Math.floor(diff / 1000) - Math.floor(diff / (1000 * 60)) * 60) + '<span>Seconds</span></div>';
        if (0 >= diff) {
            const params = new URLSearchParams(location.hash.substring(1));
            const teacherNo = params.get("no");
            document.getElementById("body").style = 'display: block;'
            if (teacherNo == 0) {
                document.getElementById("body").innerHTML = '<img src="편지0.png">'
            }
        }
    }
}

setInterval(updateTimer, 1000);