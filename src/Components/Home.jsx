import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="/tracker">Expense Tracker</Link>
    </div>
  );
}

export default Home;
