import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface Expense {
  option: string;
  name: string;
  price: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [option, setOption] = useState<string>("Food");

  const [list, setList] = useState<Expense[]>([]);
  const [editIndex, setEditIndex] = useState<number>(-1); //

  const onPress = () => {
    const expense: Expense = {
      option,
      name,
      price,
    };

    if (name === "") {
      alert("Enter name is required");
      return;
    }

    if (price === "") {
      alert("Enter price is required");
      return;
    }

    if (editIndex === -1) {
      //add wala logic

      const newList = [expense];
      newList.push(...list);
      setList(newList);
    } else {
      //update wala logic
      list[editIndex] = expense;
      setList([...list]);
    }
    setName("");
    setOption("");
    setPrice("");
  };

  function eventHandle(e: any) {
    setName(e.target.value);
  }

  function onOptionChange(e: any) {
    setOption(e.target.value);
  }

  function onPriceChange(e: any) {
    setPrice(e.target.value);
  }

  function editData(item: Expense, index: number) {
    setEditIndex(index);
    setName(item.name);
    setPrice(item.price);
    setOption(item.option);
  }
  return (
    <div className="App">
      <div style={{ flexDirection: "column", display: "flex", width: "50%" }}>
        <h1 className="fieldMargen">My Expense</h1>
        <select className="fieldMargen" value={option} onChange={onOptionChange}>
          <option value={"Food"}>Food</option>
          <option value={"Gift"}>Gift</option>
          <option value={"Other"}>Other</option>
        </select>

        <input className="fieldMargen" id="name" value={name} placeholder="Enter Expense name" onChange={eventHandle} />

        <input
          className="fieldMargen"
          id="price"
          value={price}
          placeholder=" Enter Price"
          onChange={onPriceChange}
          type="number"
        />

        <button className="fieldMargen" onClick={onPress}>
          {editIndex === -1 ? "Add expense" : "Update expense"}
        </button>
      </div>
      <div style={{ flexDirection: "column", display: "flex", width: "50%", marginTop: "10px" }}>
        {list.map((item, index) => {
          return (
            <div style={{ border: "1px solid black", display: "flex", justifyContent: "space-between" }}>
              <div style={{ flexDirection: "column", display: "flex" }}>
                <label>{item.price}</label>
                <label>{item.name}</label>
                <label>{item.option}</label>
              </div>
              <div style={{ flexDirection: "column", display: "flex" }}>
                <button onClick={() => editData(item, index)}>Edit</button> <button>Remove</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
