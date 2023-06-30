import "./App.css";
import { useState } from "react";
import Box from "@mui/material/Box";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [arr, setArr] = useState([0]);

  function handleAdd() {
    setArr((previousValue) => [...previousValue, inputValue]);
  }

  function handleDelete(i) {
    let newArr = arr.filter((_, index) => i !== index);
    setArr(newArr);
  }

  return (
    <>
      <div className="todo">
        <div style={{ fontWeight: "bolder", marginLeft: "40%" }}>TO DO App</div>
        <Box
          style={{ display: "flex", overflow: "auto" }}
          sx={{
            width: 400,
            height: 400,
            maxHeight: "400px",
            backgroundColor: "#2D2424",
          }}
        >
          <div style={{ maxHeight: "400px" }}>
            {arr.map((_, index) => {
              return (
                <div>
                  <input
                    style={{ width: "200px", marginLeft: "10px" }}
                    value={index}
                    key={index}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button style={{ width: "75px" }} onClick={handleAdd}>
                    Add
                  </button>
                  <button
                    style={{ width: "75px" }}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </Box>
      </div>
    </>
  );
}

export default App;
