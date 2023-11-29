export const LotteryButton = ({ handleClick }) => {
    return (
        <div>
            <button onClick={handleClick} style={{
                position: "absolute",
                left: "30px",
                bottom: "70px",
                width: "194px",
                height: "39px",
                backgroundColor: "#F58C04",
                border: "none",
                color: "white",
                fontSize: "25px",
                borderRadius: "25px"
            }}>抽選</button>
        </div>

    )
}