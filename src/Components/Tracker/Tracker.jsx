import Header from "./Header";
import History from "./History";
import NewTransaction from "./NewTrransaction";
import styles from "./Tracker.module.css";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

function Tracker() {
  return (
    <div className={styles.tracker}>
      <div className={styles.container}>
        <Link to="/" className={styles.back}>
          <IoMdArrowBack color="white" />
          Home page
        </Link>
        <Header />
        <History />
        <NewTransaction />
      </div>
    </div>
  );
}

export default Tracker;
