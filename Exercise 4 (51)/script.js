let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const showTime = () => {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session = "AM"

    let d = date.getDate()
    let mo = date.getMonth()
    let yr = date.getFullYear()
    let dy = date.getDay()

    if (h == 0) {
        h = 12
    }
    if (h > 12) {
        h = h - 12
        session = "PM"
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = `${h}:${m}:${s} ${session}`
    let fullDate = `${d}-0${mo}-${yr}, ${days[dy]}`

    document.getElementById("clock").innerHTML = time
    document.getElementById("date").innerHTML = fullDate
    // document.getElementById("clock").innerText = time
    // setInterval(displayTime(), 1000)
}  
setInterval(showTime, 1000)