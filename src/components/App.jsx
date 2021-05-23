import React, { useState } from "react";

function App() {
  const [textContent, setContent] = useState("");
  const [items, update] = useState([]);

  function updateText(event) {
    setContent(event.target.value);
  }

  function buttonClicked() {
    update(function (prevItems) {
      // using sparse operator to add new elements to the array while the other elements reamin same in the array
      return [...prevItems, textContent];
    });
    setContent(""); //after click the button to clear the textcontent we set ""
    // console.log(textContent);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateText} type="text" value={textContent} />
        <button onClick={buttonClicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul id="list">
          {" "}
          {/*whenever an item will add on the items array this map function creates an li elements  */}
          {items.map((item) => {
            // Here I use Math.random() just to distinguish each child
            return <li key={Math.random()}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
