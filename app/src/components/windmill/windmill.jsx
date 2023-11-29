export const WindMill = ({data}) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          border: "solid 1px",
          width: "150px",
          height: "81px",
          lineHeight: "81px",
          textAlign: "center",
          transform: "rotate(45deg)",
        }}
        >
        {data[0]}
      </div>
      <div
        style={{
          position: "absolute",
          border: "solid 1px",
          width: "150px",
          height: "81px",
          lineHeight: "81px",
          textAlign: "center",
          transform: "rotate(-45deg)",
          left: "110px",
          top: "60px",
        }}
        >
        {data[1]}
      </div>
      <div
        style={{
          position: "absolute",
          border: "solid 1px",
          width: "150px",
          height: "81px",
          lineHeight: "81px",
          textAlign: "center",
          transform: "rotate(45deg)",
          left: "50px",
          top: "170px",
        }}
        >
        {data[2]}
      </div>
      <div
        style={{
          position: "absolute",
          border: "solid 1px",
          width: "150px",
          height: "81px",
          lineHeight: "81px",
          textAlign: "center",
          transform: "rotate(-45deg)",
          left: "-60px",
          top: "110px",
        }}
        >
        {data[3]}
      </div>
    </>
  )
}
