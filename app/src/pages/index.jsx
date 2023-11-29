import { useState } from "react"
import { WindMill } from "../components/windmill"
import { SideBar } from "../components/sidebar"
import { createContext } from "react"
import { createRandomArray } from "../utils/random-picker"
import { cutArray } from "../utils/cut-array"

export const nameContext = createContext()
export const nameArrayContext = createContext()

const Index = () => {
  const initArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

  const [seatArray, setSeatArray] = useState(initArray)
  const nameState = useState([])
  const handleClick = () => {
    const randomNameArray = createRandomArray(initArray, nameState[0])
    const cutRandomArray = cutArray(randomNameArray)
    setSeatArray(cutRandomArray)
  }

  return (
    <>
      <nameContext.Provider value={nameState}>
        <div
          style={{
            position: "relative",
            left: "80px",
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
            left: "80px",
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
        <SideBar handleClick={handleClick} />
      </nameContext.Provider>
    </>
  )
}

export default Index
