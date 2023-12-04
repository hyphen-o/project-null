import { useState, useRef, useEffect } from "react"
import { WindMill } from "../components/windmill"
import { SideBar } from "../components/sidebar"
import { createContext } from "react"
import { createRandomArray } from "../utils/random-picker"
import { cutArray } from "../utils/cut-array"
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';


export const nameContext = createContext()
export const nameArrayContext = createContext()

const Index = () => {
  const initArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
  const imageRef = useRef()
  const [seatArray, setSeatArray] = useState(initArray)
  const nameState = useState([])
  const handleClick = () => {
    const randomNameArray = createRandomArray(initArray, nameState[0])
    const cutRandomArray = cutArray(randomNameArray)
    setSeatArray(cutRandomArray)
  }
  

  const pdfDownloadHandler = async () => { 
    html2canvas(imageRef.current, { scale: 2.5 }).then((canvas) => {
        console.log(imageRef.current);
        const imgData = canvas.toDataURL('image/png', 1.0);
        console.log(imgData);
        saveAs(imgData, "席替え.png")
      });
  }

  return (
    <>
      <nameContext.Provider value={nameState}>
        <div ref={imageRef} style={{
          position: "absolute",
          width: "1000px",
          height: "768px",
          zIndex: -1,
        }}>
        <div
          style={{
            position: "relative",
            left: "200px",
            top: "50px",
          }}
          >
          <WindMill data={seatArray[0]} />
        </div>
        <div
          style={{
            position: "relative",
            left: "640px",
            top: "50px",
          }}
          >
          <WindMill data={seatArray[1]} />
        </div>
        <div
          style={{
            position: "relative",
            left: "200px",
            top: "450px",
          }}
          >
          <WindMill data={seatArray[2]} />
        </div>
        <div
          style={{
            position: "relative",
            left: "640px",
            top: "450px",
          }}
          >
          <WindMill data={seatArray[3]} />
        </div>
        <div style={{
          position: "absolute",
          top: "42%",
          width: "40px",
          height: "100px",
          backgroundColor: "gray",
          color: "white",
          textAlign: "center",
          lineHeight: "100px"
        }}>扉</div>
        </div>
        <button onClick={pdfDownloadHandler} style={{
          position: "absolute",
          right: "-200px",
          bottom: "30px"
        }}>画像ダウンロード</button>
        <SideBar handleClick={handleClick} />
      </nameContext.Provider>
    </>
  )
}

export default Index
