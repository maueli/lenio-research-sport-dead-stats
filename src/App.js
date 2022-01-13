import logo from "./logo512.png";
import imgg from "./img.png";
import { useEffect, useRef, useState } from "react";
import { Stage, Sprite, TilingSprite } from '@inlet/react-pixi'
import { url } from "@pixi/utils";

function App() {

  const [position,setPosition] = useState([100,100]);

  useEffect(()=>{
    setTimeout(()=>{
      setPosition([position[0]-50,position[1]]);
    },200);
  },[position])


  return (
    <div style={{justifyContent:"center", alignItems:"center", display:"flex", flex:1,flexDirection:"column"}}>

      <Stage width="1000" height="100">
        <TilingSprite
          image={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/p2.jpeg'}
          width={1000}
          height={100}
          tilePosition={{ x: position[0], y: position[1] }}
          tileScale={{ x: 0.5, y: 0.3 }}
        />
        </Stage>
        <div style={{justifyContent:"center", alignItems:"center", display:"flex", flex:1}}>
        <img
          src={imgg}
          style={{width:100,height:100}}
        />
        </div>

        <Stage width="1000" height="100" >
          <TilingSprite
            image={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/p2.jpeg'}
            width={1000}
            height={100}
            tilePosition={{ x: position[0], y: position[1] }}
            tileScale={{ x: 0.5, y: 0.3 }}
          />

      </Stage>
      {Math.abs(position[0])}
    </div>
  );
}

export default App;
