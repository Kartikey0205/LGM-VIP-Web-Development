import React, { Fragment, useState } from "react";

const Navbar = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    // const response = await fetch("https://api.github.com/users");
    const response = await fetch("https://reqres.in/api/users");

    const jsonResponse = await response.json();
    console.log(jsonResponse.data);
    setUsers(jsonResponse.data);
  };
  return (
    <Fragment>
      <nav className="nav">
        <h4>API FETCH</h4>
        <button onClick={loadUsers}>GET USERS</button>
      </nav>

      <h2 style={{ textAlign: "center", color: "black" }}>Users :</h2>

      <div>
        {/* {console.log(users)} */}
        {users.map(({ id, email, avatar, last_name, first_name }) => (
          <div className="detail">
            <br />
            <img src={avatar} alt="" srcset="" />
            <h2>
              Name: {first_name} {last_name}
            </h2>
            <h4>Email : {email}</h4>
            <br />
            <br />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Navbar;
