let diff = 1000

function updateTimer() {
    if (0 < diff) {
        const future = Date.parse("2025/05/15 09:00:00");
        const now = new Date();
        diff = future - now;
        document.getElementById("timer").innerHTML = '<div>' + Math.floor(diff / (1000 * 60 * 60 * 24)) + '<span>Days</span></div><div>' + (Math.floor(diff / (1000 * 60 * 60)) - Math.floor(diff / (1000 * 60 * 60 * 24)) * 24) + '<span>Hours</span></div><div>' + (Math.floor(diff / (1000 * 60)) - Math.floor(diff / (1000 * 60 * 60)) * 60) + '<span>Minutes</span></div><div>' + (Math.floor(diff / 1000) - Math.floor(diff / (1000 * 60)) * 60) + '<span>Seconds</span></div><div id="later">후에 열립니다.</div>';
        if (0 >= diff) {
            const params = new URLSearchParams(location.hash.substring(1));
            const teacherNo = params.get("no");
            if (teacherNo == 0) {
                document.getElementById("body").innerHTML = '<img src="편지0.png">'
            }
        }
    }
}

setInterval(updateTimer, 1000);
