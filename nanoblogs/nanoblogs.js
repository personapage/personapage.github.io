function timeAgo(date) {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (seconds < 60) return "· now";
    const intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "week", seconds: 604800 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "min", seconds: 60 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
            return `· ${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
        }
    }
}

function updateTimeAgo() {
    document.querySelectorAll(".nanoblog-post-time").forEach((e) => {
        e.textContent = timeAgo(new Date(e.dateTime));
    });
}
updateTimeAgo();
setInterval(updateTimeAgo, 10000);
