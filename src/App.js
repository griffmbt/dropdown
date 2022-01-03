import React from "react";
import Dropdown from "./components/Dropdown";
import MenuItem from "./components/MenuItem";

function App() {
  const items = [
    { language: "Русский", id: 1 },
    { language: "Английский", id: 2 },
    { language: "Испанский", id: 3 },
    { language: "Немецкий", id: 4 },
    { language: "Итальянский", id: 5 },
    { language: "Польский", id: 6 }
  ];

  return (
    <div className="App">
      <Dropdown label="Выберите язык из списка">
      
        {items.map((item) => (
          <MenuItem key={item.id} value={item}>
            {item.language}
          </MenuItem>
        ))}

      </Dropdown>
    </div>
  );
}

export default App;
