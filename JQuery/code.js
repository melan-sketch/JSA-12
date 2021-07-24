
/*Bai1*/
function findEven() {
    var num = prompt('enter any even number')
    for (var i = 1; i <= num; i++)
        if (i % 2 == 0) { document.write(i + ", ") }
}
/*Bai2*/
function oneTriangle() {
    var rows = prompt('enter number of rows');
    for (var i = 1; i <= rows; i++) {
        for (var j = 1; j <= i; j++) {
            document.write(" 1 ");
        }
        document.write("<br/>");
    }
}

/*Bai 4*/

    function updateTime(){
        var dateTime = new Date();
        var hr = dateTime.getHours();
        var min = dateTime.getMinutes();
        var sec = dateTime.getSeconds();
        var ampm = document.getElementById('ampm');
    
        if(hr >= 12){ 
            ampm.innerHTML = "PM";
        }
        else{
            ampm.innerHTML = "AM";
        }

        if( hr > 12){
            hr = hr - 12;
        
        }
        document.getElementById('hr').innerHTML = hr ;
        document.getElementById('min').innerHTML = min ;
        document.getElementById('sec').innerHTML = sec ;
    }

    setInterval( updateTime, 1000);