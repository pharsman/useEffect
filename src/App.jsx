import { useState, useEffect } from "react";

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((resp) => resp.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedName, setSelectedName] = useState(null);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedName = (name) => {
    fetch(`/${name}.json`)
      .then((resp) => resp.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
    <div className="App">
      <div>
        {names.map((name) => {
          return (
            <button key={name} onClick={() => onSelectedName(name)}>
              {name}
            </button>
          );
        })}
      </div>
      <div>
        {selectedNameDetails ? JSON.stringify(selectedNameDetails) : null}
      </div>
    </div>
  );
}

export default App;
