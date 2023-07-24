import "./styles.css";
import { db } from "./firebaseInit";

export default function App() {
  console.log(db);
  return (
    <div className="App">
      <h1>Cloud Firestore Initialization</h1>
    </div>
  );
}
