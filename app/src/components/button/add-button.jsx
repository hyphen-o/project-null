export const AddButton = ({ handleClick }) => {
    return (
        <div>
            <button onClick={handleClick} style={{
                width: "194px",
                height: "39px",
                backgroundColor: "#939393",
                border: "none",
                color: "white",
                fontSize: "25px",
                borderRadius: "25px"
            }}>+</button>
        </div>
    )
}