import { useDispatch } from "react-redux";
import styles from "./Tracker.module.css";
import { addObject, totalExpence, totalIncome } from "./trackerSlice";
import { useState } from "react";

function NewTransaction() {
  const dispatch = useDispatch();

  const [newText, setNewText] = useState("");
  const [newAmount, setNewAmount] = useState(1);

  function handleAddObject() {
    const object = {
      text: newText,
      amount: newAmount,
    };
    dispatch(addObject(object));
    setNewText("");
    setNewAmount(0);
    dispatch(totalIncome());
    dispatch(totalExpence());
  }

  function handleAmountChange(e) {
    setNewAmount(e.target.value);
  }
  function handleTextChange(e) {
    setNewText(e.target.value);
  }

  return (
    <div>
      <h3>Add new transaction</h3>

      <p className={styles.h3}>Text</p>
      <input
        type="text"
        placeholder="Enter Text"
        value={newText}
        onChange={handleTextChange}
      />
      <p className={styles.h3}>
        Amount
        <span>(negative-Expense, positive-Income)</span>
      </p>
      <input
        type="number"
        placeholder="Enter Amount"
        value={newAmount}
        onChange={handleAmountChange}
      />
      <button className={styles.btn} onClick={handleAddObject}>
        Add Transaction
      </button>
    </div>
  );
}

export default NewTransaction;
