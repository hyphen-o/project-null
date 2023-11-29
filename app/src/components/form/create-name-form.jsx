import { useState } from "react";
import { AddButton } from "../button";
import { useContext } from "react"
import { nameContext } from "../../pages";

export const CreateNameForm = () => {
  const [value, setValue] = useState("");
  const [names, setNames] = useContext(nameContext)

  const handleClick = () => {
    setNames([...names, value]);
    setValue("");
  };

  return (
    <>
      <div style={{
        textAlign: "center"
      }}>
        {
            names.map((name) => {
                return (
                    <div style={{
                        borderLeft: "solid 4px #505050",
                        paddingLeft: "15px",
                        marginBottom: "10px",
                    }}>{name}
                    </div>
                )
            })
        }
        <input onChange={(e) => setValue(e.target.value)} value={value} style = {{
            width: "184px",
            height: "31px",
            backgroundColor: "#ececec",
            border: "none",
            borderRadius: "25px",
            paddingLeft: "10px ",
            marginBottom: "10px"

        }}></input>
        <AddButton handleClick={handleClick} />
      </div>
    </>
  );
};
