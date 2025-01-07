import { Link } from "react-router-dom";
import react, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
function Sign() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSign = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // alert("Sign up successfully!");
      window.location.href = "/Login";
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };
  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handleSign}>
          <h2>Signup</h2>
          <input
            type="name"
            placeholder="Fullname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign up</button>
          <p>
            <span>if you have an account</span>
            <Link to="/Login"> login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Sign;
