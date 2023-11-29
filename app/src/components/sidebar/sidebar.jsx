import { CreateNameForm } from "../form"
import { LotteryButton } from "../button"

export const SideBar = ({ handleClick }) => {

  return (
    <>
      <div
        style={{
          position: "absolute",
          right: "0px",
          height: "100vh",
          width: "230px",
          padding: "20px",
          borderLeft: "solid 2px #D1D1D1",
          backgroundColor: "white"
        }}
      >
        <CreateNameForm />
        <LotteryButton handleClick={handleClick}/>
      </div>
    </>
  )
}
