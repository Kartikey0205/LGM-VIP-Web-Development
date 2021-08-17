import React, { Fragment, useState } from "react";

const Navbar = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);

  const loadUsers = async () => {
    setLoader(true);
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

      {loader ? (
        <div className="container">
          {users.map(({ id, email, avatar, last_name, first_name }) => (
            <div className="detail">
              <br />
              <img src={avatar} style={{ borderRadius: "50%" }} />
              <h4 className="head">
                Name: {first_name} {last_name}
              </h4>
              <h5 className="head">Email : {email}</h5>
              <br />
              <br />
            </div>
          ))}
        </div>
      ) : (
        <div className="loader">{loader}</div>
      )}
    </Fragment>
  );
};

export default Navbar;
