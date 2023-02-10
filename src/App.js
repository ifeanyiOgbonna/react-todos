import React, { useState } from "react";
import "./App.css";
import List from "./List";


function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = e => {
    setCurrentItem(e.target.value);
  };

  const addTodoList = () => {
    updateItemList([...itemList, {item :currentItem, key: Date.now() }]);
    setCurrentItem("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="input-wrapper">
            <input value={currentItem} onChange={onChangeHandler} type="text"  placeholder="Enter Text" />
            <button onClick={addTodoList} type="submit"> Add </button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
