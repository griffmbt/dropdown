import React from "react";
import Dropdown from "./components/Dropdown";
import MenuItem from "./components/MenuItem";

function App() {
  const items = [
    { label: "Moscow", value: 1 },
    { label: "London", value: 2 },
    { label: "Helsinki", value: 3 },
    { label: "Rome", value: 4 },
    { label: "Oslo", value: 5 },
  ];

  return (
    <div className="App">
      <Dropdown label="Выберите язык из списка">
        {items.map((item) => (
          <MenuItem key={item.value} value={item}>
            {item.label}
          </MenuItem>
        ))}
      </Dropdown>
    </div>
  );
}

export default App;
