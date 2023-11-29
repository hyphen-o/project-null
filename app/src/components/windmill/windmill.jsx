

export const WindMill = () => {
  return (
    <div style={{
      position: "relative",
      left: "80px",
      top: "50px"
    }}>
      <div style={{
        position: "absolute",
        border: "solid 1px",
        width: "150px",
        height: "81px",
        lineHeight: "81px",
        textAlign: "center",
        transform: "rotate(45deg)",
      }}>岡本</div>
      <div style={{
        position: "absolute",
        border: "solid 1px",
        width: "150px",
        height: "81px",
        lineHeight: "81px",
        textAlign: "center",
        transform: "rotate(-45deg)",
        left: "110px",
        top: "60px"
      }}>岡本</div>
      <div style={{
        position: "absolute",
        border: "solid 1px",
        width: "150px",
        height: "81px",
        lineHeight: "81px",
        textAlign: "center",
        transform: "rotate(45deg)",
        left: "50px",
        top: "170px"
      }}>岡本</div>
      <div style={{
        position: "absolute",
        border: "solid 1px",
        width: "150px",
        height: "81px",
        lineHeight: "81px",
        textAlign: "center",
        transform: "rotate(-45deg)",
        left: "-60px",
        top: "110px"
      }}>岡本</div>
    </div>
  )
}