import React from "react";
import Dropdown from "./components/Dropdown";
import MenuItem from "./components/MenuItem";

function App() {
  const countries = [
    { language: "Русский", id: 1, src: "/img/ru.png" },
    { language: "Английский", id: 2, src: "/img/brit.png" },
    { language: "Испанский", id: 3, src: "/img/spain.png" },
    { language: "Немецкий", id: 4, src: "/img/germ.png" },
    { language: "Итальянский", id: 5, src: "/img/italy.png" },
    { language: "Польский", id: 6, src: "/img/poland.png" },
  ];

  return (
    <div className="App">
      <Dropdown>
        {countries.map((country) => (
          <MenuItem key={country.id} value={country} src={country.src}>
            {country.language}
          </MenuItem>
        ))}
      </Dropdown>
    </div>
  );
}

export default App;
