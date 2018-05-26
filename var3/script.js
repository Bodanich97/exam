var sec = 6754345;
function getTime() {
    hour = parseInt(sec/3600);
    mins = parseInt(hour / 60);
    sec = parseInt(mins % 60);


    hour = parseInt(hour / 24 );
    day = parseInt(hour /24);



    return "time: "+day+" days " + +hour + "hour:" + mins + "minutes:" + sec+"seconds";
}

console.log(getTime());
