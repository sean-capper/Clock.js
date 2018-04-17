const date = new Date();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December'];
const dayMonthYear = document.querySelector('h3[data-type="date"]');
dayMonthYear.innerHTML = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();


const secsHand = document.querySelector('span[data-type="second"]');
const minsHand = document.querySelector('span[data-type="minute"]');
const hourHand = document.querySelector('span[data-type="hour"]');
const timeLabel = document.querySelector('h3[data-type="time"]');

function setDate() {
    const time = new Date();
    const secs = time.getSeconds();
    const mins = time.getMinutes();
    const hour = time.getHours();

    const secsDegrees = ((secs / 60 ) * 360) + 90;
    const minsDegrees = ((mins / 60) * 360) + ((secs/60)*6) + 90;
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;

    secsHand.style.transform = `rotate(${secsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
    var s = ((secs <= 9) ? ("0"+secs):(""+secs));
    var m = (mins <= 9) ? ("0"+mins):(""+mins);
    var h = ((hour < 12) ? ("0"+hour):(""+(hour)));
    if (hour == 0) {
        h = "00"
    }
    timeLabel.innerHTML = h+":"+m+":"+s;
}

setInterval(setDate, 1000); // every second
