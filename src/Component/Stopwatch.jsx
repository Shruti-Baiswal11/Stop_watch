import React, { useState } from "react";
const Stopwatch=()=>{
    const [time, setTime]=useState({hr:0, min:0, sec:0, mili:0})
    //setStatus updated hota h wo ata he or 
    // or jo bhi isme update hote he wo current State ke pass chle jata he 
    // Mean Status(currentState) = setStatus(updatedState)

     const [Status, setStatus]=useState()

    //kyuki hmne setTime ke andar kuch store nhi kia he isliye abhi btn ke click par kuch bhi nhi dikhega
    const Start=()=>{
        myFun();
        // setInterval ka kam hota he repitative task perform krna ye callback function leta he 10 mili second bad isko chlao
        //myFun() ko call kra or 10 miliseconds me isko chlana he
        setStatus(setInterval(myFun, 10))
    }
    const Stop =()=>{
        // setInterval ko rokne ke lie clearInterval method ka use krte he
        clearInterval(Status)
    }
    const Reset=()=>{
         clearInterval(Status);
         //ye pura clear kar dega
         setTime({hr:0, min:0, sec:0, mili:0})

    }

    //abhi isme 0 he jab bhi kuch update hoga wo yha change hoga
    let updateHr= time.hr;
    let updateMin=time.min;
    let updateSec=time.sec;
    let updateMili=time.mili;

    const myFun=()=>{
        if(updateMili=== 100){
            //start again from 0
            updateMili=0;
            updateSec++; //100 miliSecond=> 1 second
        }
        if(updateSec===60){
            updateSec=0;
            updateMin; // 60 seconds => 1 Minute
        }
        if(updateMin===60){
            updateMin=0;
            updateHr++; // 60 minutes == 1 Hour
        }
        updateMili++;
        return setTime({hr:updateHr, min:updateMin, sec:updateSec, mili:updateMili})

    }
    return<>
        <div className="container">
          <div className="buttons">
            <h1>{time.hr +" : "+time.min+" : "+time.sec+" : "+time.mili}</h1>
            <button onClick={Start} className="strat" style={{backgroundColor:"green"}}>Start</button>
            <button onClick={Stop} className="stop" style={{backgroundColor:"red"}}>Stop</button>
            <button onClick={Reset} className="reset" style={{backgroundColor:"yellow"}}>Reset</button>
            </div>  
        </div>
    </>
}
export default Stopwatch;