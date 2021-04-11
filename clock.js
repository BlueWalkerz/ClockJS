

function seetime()
{
    var time = new Date();
    var hh = time.getHours();
    var mm = time.getMinutes();
    var ss = time.getSeconds();
    var period = "AM";
    
    
    if(hh >= 12)
    {
        hh = hh - 12;
        period = "PM";
    }
    if(hh == 00)
    {
        hh = 12;
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    

    var clock = hh + " : " + mm + " : " + ss + " " + period;
    
    document.getElementById('times').innerText = clock;
    document.getElementById('times').textContent = clock;
    
    setTimeout(seetime, 1000);

}

seetime();


// you can use this function by using "times" in your class