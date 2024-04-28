function timetoday(){
    var clockElement = document.getElementById("clock");
    var dateElement = document.getElementById("date");

    if (clockElement && dateElement) {
        var today = new Date();
        var hr = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();
        
        var ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
        hr = (hr == 0) ? 12 : hr;
        hr = (hr > 12) ? hr - 12 : hr;
        
        hr = updateTime(hr);
        min = updateTime(min);
        sec = updateTime(sec);
        
        clockElement.innerHTML = hr + " : " + min + " : " + sec + " " + ap;
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var curWeekDay = days[today.getDay()];
        var curDay = today.getDate();
        var curMonth = months[today.getMonth()];
        var curYear = today.getFullYear();
        var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
        dateElement.innerText = date;
    }

    var time = setTimeout(function(){ timetoday() }, 500);

    function updateTime(k) {
        if(k < 10) {
            return "0" + k;
        } else {
            return k;
        }
    }
}

// Panggil fungsi timetoday setelah dokumen selesai dimuat
window.onload = timetoday();

