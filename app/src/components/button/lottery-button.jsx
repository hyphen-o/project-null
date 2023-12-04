export const LotteryButton = ({ handleClick }) => {
  return (
    <div>
      <button
        style={{
          position: "absolute",
          left: "30px",
          bottom: "100px",
          width: "194px",
          height: "39px",
          backgroundColor: "#F58C04",
          border: "none",
          color: "white",
          fontSize: "25px",
          borderRadius: "25px",
        }}
        onClick={handleClick}
      >
        抽選
      </button>
    </div>
  )
}
