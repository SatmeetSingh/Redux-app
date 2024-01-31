import styles from "./Tracker.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeObject, totalExpence, totalIncome } from "./trackerSlice";
import { TiDeleteOutline } from "react-icons/ti";

function History() {
  const transaction = useSelector((state) => state.tracker.value);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(removeObject(index));
    dispatch(totalIncome());
    dispatch(totalExpence());
  };

  return (
    <div>
      <h3>History</h3>

      <ul className={styles.list}>
        {transaction.map((item, index) => (
          <li
            key={index}
            className={item.amount >= 0 ? styles.plus : styles.minus}
          >
            {item.text}
            <span>
              {item.amount >= 0 ? `+${item.amount}` : item.amount}
              <button onClick={() => handleDelete(index)}>
                <TiDeleteOutline fontSize={25} className="cursor" />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
