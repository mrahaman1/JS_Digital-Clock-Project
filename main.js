function time(){
    let dt = new Date();
    let hr = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();

    if(hr > 12){
        hr = hr - 12;
        document.getElementById("ap").innerHTML = "PM"
    }
    else{
        document.getElementById("ap").innerHTML = "AM"
    }

    // console.log(hr, min, sec);
    document.getElementById("hr").innerHTML = hr + ' hour'
    document.getElementById("min").innerHTML = min + ' mins'
    document.getElementById("sec").innerHTML = sec +' secs'
} 
    // time();
    setInterval( time , 1000)
    // setTimeout(time, 1000);

  
