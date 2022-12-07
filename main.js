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

    
        document.getElementById("hr").innerHTML = hr + ' hour'
        document.getElementById("min").innerHTML = min + ' mins'
        document.getElementById("sec").innerHTML = sec +' secs'

    
    } 
    
    setInterval( time , 1000)
   


// --------------------------------------------------------------------------------------------------//
    //---------------- for wakeup time---------------
    function valuediv1(){
        let values1=document.getElementById("wakeup");
        let valuesMsg1=values1.options[values1.selectedIndex].text;
        document.getElementById("value-msg1").innerHTML="Wake-Up Time:  " + valuesMsg1;
        console.log(valuesMsg1, values1)
    }

    //------------------for lunch time------------------
    function valuediv2(){
        var values2=document.getElementById("lunch");
        var valuesMsg2=values2.options[values2.selectedIndex].text;
        document.getElementById("value-msg2").innerHTML="Lunch Time:  " + valuesMsg2;
    }

    //-----------------for nap time-----------
    function valuediv3(){
        var values3=document.getElementById("nap");
        var valuesMsg3=values3.options[values3.selectedIndex].text;
        document.getElementById("value-msg3").innerHTML="Nap Time:  " + valuesMsg3;
    }

    //--------------for night tme-----------------
    function valuediv4(){
        var values4=document.getElementById("night");
        var valuesMsg4=values4.options[values4.selectedIndex].text;
        document.getElementById("value-msg4").innerHTML="Night Time:  " + valuesMsg4;
    }

    



    function settime(){
        var wt = document.getElementById("wakeup").value;
        var lt = document.getElementById("lunch").value;
        var nt = document.getElementById("nap").value;
        var nit = document.getElementById("night").value;
        var hour1 =new Date().getHours();
        // console.log(wt,lt,nt,nit)
        
        
        if(wt== hour1){

            document.getElementById("image-select").style.backgroundImage= "url(./aset/morning.png)";
            document.getElementById("left-pop-msg").innerHTML="GOOD MORNING!! WAKE UP !!";
        }
        else if(lt==hour1){
            document.getElementById("image-select").style.backgroundImage= "url(./aset/lunch.png)";
            document.getElementById("left-pop-msg").innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
        }
        else if(nt==hour1){
            document.getElementById("image-select").style.backgroundImage= "url(./aset/evening.png)";
            document.getElementById("left-pop-msg").innerHTML="GOOD EVENING !!";
        }
        else if(nit==hour1){
            document.getElementById("image-select").style.backgroundImage= "url(./aset/night.png)";
            document.getElementById("left-pop-msg").innerHTML="GOOD NIGHT !!";
        }
        else{
            document.getElementById("image-select").style.backgroundImage= "url(./aset/wellcome.jpg)";
            document.getElementById("left-pop-msg").innerHTML=" WELL COME !! DIGITAL CLOCK !!";
        }

        valuediv1()
        valuediv2()
        valuediv3()
        valuediv4()
    }; 
       
      
        
    
    function popMsg2(){
        var newtime = new Date();
        var hour2 = newtime.getHours();
        console.log(hour2);
    
        if(hour2>=4 && hour2<12){
            document.getElementById("right-pop-msg").innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
        }
        else if(hour2>=12 && hour2<16){
            document.getElementById("right-pop-msg").innerHTML="LET'S HAVE SOME LUNCH !!";
        }
        else if(hour2>=16 && hour2<20){
            document.getElementById("right-pop-msg").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        }
        else if(hour2>=20 || hour2<4){
            document.getElementById("right-pop-msg").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
        }
    
    }

    popMsg2();