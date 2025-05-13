let diff = 1000

function updateTimer() {
    if (new URLSearchParams(location.hash.substring(1)).get("no") == 1000) {
        document.getElementById("body").style = 'display: block;'
        document.getElementById("body").innerHTML = '<img src="편지0.png">'
    } else if (new URLSearchParams(location.hash.substring(1)).get("no") == 1001) {
        window.location.href = "http://127.0.0.1:5500/teacher'sDay/임현영 6-3 선생님";
    } else {
        if (0 < diff) {
            const future = Date.parse("2025/05/15 09:00:00");
            const now = new Date();
            diff = future - now;
            document.getElementById("timer").innerHTML = '<div>' + Math.floor(diff / (1000 * 60 * 60 * 24)) + '<span>Days</span></div><div>' + (Math.floor(diff / (1000 * 60 * 60)) - Math.floor(diff / (1000 * 60 * 60 * 24)) * 24) + '<span>Hours</span></div><div>' + (Math.floor(diff / (1000 * 60)) - Math.floor(diff / (1000 * 60 * 60)) * 60) + '<span>Minutes</span></div><div>' + (Math.floor(diff / 1000) - Math.floor(diff / (1000 * 60)) * 60) + '<span>Seconds</span></div>';
            if (0 >= diff) {
                const params = new URLSearchParams(location.hash.substring(1));
                const teacherNo = params.get("no");
                document.getElementById("body").style = 'display: block;'
                if (teacherNo == 0) {
                    document.getElementById("body").innerHTML = '<img src="편지0.png">'
                } else if (teacherNo == 1) {
                    window.location.href = "http://127.0.0.1:5500/teacher'sDay/임현영 6-3 선생님";
  }
}
        }
    }
}

setInterval(updateTimer, 1000);