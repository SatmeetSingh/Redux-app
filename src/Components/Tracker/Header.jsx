import { useDispatch, useSelector } from "react-redux";
import styles from "./Tracker.module.css";
import { totalExpence, totalIncome } from "./trackerSlice";
import { useEffect } from "react";

function Header() {
  const dispatch = useDispatch();
  const Income = useSelector((state) => state.tracker.TotalIncome);
  const Expence = useSelector((state) => state.tracker.TotalExpence);

  useEffect(() => {
    dispatch(totalIncome());
    dispatch(totalExpence());
  }, [dispatch]);

  const RemainigBalance = Math.abs(Income - Math.abs(Expence));
  return (
    <div>
      <h2>Expense Tracker</h2>
      <p className={styles.para}>
        Your Balance
        <span>
          {Income >= Math.abs(Expence)
            ? `$ ${RemainigBalance}`
            : `-$${RemainigBalance}`}
        </span>
      </p>
      <div className={styles.incContainer}>
        <h4 className={styles.param}>
          Income <span className={styles.plus}>${Income}</span>
        </h4>
        <h4 className={styles.param1}>
          Expense <span className={styles.minus}>${Math.abs(Expence)}</span>
        </h4>
      </div>
    </div>
  );
}

export default Header;
