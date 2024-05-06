import React, { useState} from "react";
import ReactDOM from "react-dom/client";
import "./stylesheet.css";


function App(){
const [soundName,setDisplay] = useState("");




function keyHandler(event){
  for (let i=0; i<=Sounds.drums.length;i++){
    if(Sounds.drums[i].keyPress === event.key.toUpperCase()){
      console.log(event.key.toUpperCase());

      const soundPress = document.getElementById(Sounds.drums[i].keyPress.toUpperCase());
      console.log(soundPress)
             return soundPress.play();
    }
  }

/*let soundPress = document.getElementById(event.key.toUpperCase());
return soundPress.play();*/


  }



  return(
    <div id="drum-machine">
      <div id="pad-container">      
      {
        Sounds.drums.map(function(drum,index){

          function playSound(){
            setDisplay(drum.name)
            let soundClick = document.getElementById(drum.keyPress)
             soundClick.play();
            }

        return (
              <div tabIndex={0} key={index} id={drum.name} className="drum-pad" onClick={playSound} onMouseEnter={() => { setDisplay(drum.name);} } onKeyDown={e =>{keyHandler(e)}}>
                <audio src={drum.source} className="clip" id={drum.keyPress} ></audio>
                <p>{drum.keyPress}</p>   
              </div>             
          )
        }) 
      }
  </div>


  <div id="display" ><p>{soundName}</p></div>
  <div id="Key-section">
  <div className="WhiteKey-container">
  {
      Sounds.flat.map(function(key,index){

        function playSound(){
          setDisplay(key.name)
          console.log(key.name)
          let soundClick = document.getElementById(key.keyPress)
           soundClick.play();
          }

          return(
          
            <div tabIndex={0} key={index} className="Piano-key"  onClick={playSound} onMouseEnter={()=>{setDisplay(key.name)}} onKeyDown={e=>{keyHandler(e)}}>
              <audio src={key.source} id={key.keyPress}></audio>
            </div>
          )

      })
    }
    </div>

    <div className="BlackKey-container">
      <PianoBlackKey />
      <PianoBlackKey/>
      <PianoBlackKey/>
      <PianoBlackKey/>
      <PianoBlackKey/>
      <PianoBlackKey/>
    </div>
  </div>
    </div>
  )
}



const PianoBlackKey = () =>{
  return(
    <div className="BlackPiano-key"></div>
  )
}


const Sounds = {
     
  drums:[
    {name:"Heater-1",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",keyPress:"Q"},
    {name:"Heater-2",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",keyPress:"W"},
    {name:"Heater-3",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",keyPress:"E"},
    {name:"Heater-4",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",keyPress:"A"},
    {name:"Clap",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",keyPress:"S"},
    {name:"Dsc_Oh",source:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",keyPress:"D"},
    {name:"Kick_n_Hat",source:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",keyPress:"Z"},
    {name:"RP4_Kick_1",source:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",keyPress:"X"},
    {name:"Cev_H2",source:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",keyPress:"C"}
  ],

  flat:[
    {name:"Grand Piano C - 3rd Octave",source:"https://etc.usf.edu/clipaudio/files/377.mp3",keyPress:"T"},
    {name:"Grand Piano D - 3rd Octave",source:"https://etc.usf.edu/clipaudio/files/381.mp3",keyPress:"Y"},
    {name:"Grand Piano E - 3rd Octave",source:"https://etc.usf.edu/clipaudio/files/385.mp3",keyPress:"U"},
    {name:"Grand Piano F - 3rd Octave",source:"https://etc.usf.edu/clipaudio/files/387.mp3",keyPress:"I"},
    {name:"Grand Piano G - 3rd Octave",source:"https://etc.usf.edu/clipaudio/files/391.mp3",keyPress:"I"},
    {name:"Grand Piano A - 3rd Octave",source:"https://etc.usf.edu/clipaudio/files/395.mp3",keyPress:"O"},
    {name:"Grand Piano B - 3rd Octave",source:"https://etc.usf.edu/clipaudio/files/399.mp3",keyPress:"P"},
  
    
  ]

  

};
  

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<App/>);
