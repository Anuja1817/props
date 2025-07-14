import React from "react";
import UserCard from "./UserCard";

function App() {
  return (
    <div className="App">
      <h1>User List</h1>
      <UserCard name="Anushka" age={23} />
      <UserCard name="Rahul" age={25} />
      <UserCard name="Sneha" age={21} />
    </div>
  );
}

export default App;
