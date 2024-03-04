import React from "react";

const Header = () => {
  return (
    <div className="container-lg border flex flex-row ">
      <div>
        <h2>NoteBook</h2>
        <ul>
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Notes</a>
          </li>
          <li>
            <a href="#">To-Dos</a>
          </li>
        </ul>
      </div>
      <div>
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
};

export default Header;
