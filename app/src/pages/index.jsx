import { useState } from "react"
import { WindMill } from "../components/windmill"
import { SideBar } from "../components/sidebar"

const Index = () => {
  const initArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

  const [seatArray, setSeatArray] = useState(initArray)

  return (
    <>
      <WindMill />
      <SideBar />
    </>
  )
}

export default Index
