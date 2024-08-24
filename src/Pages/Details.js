import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation, NavLink, Outlet } from "react-router-dom";
function Details() {
  const obj = useParams();
  const location = useLocation();
  const state = location.state || {};

  const [user, setUser] = useState(state.item);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      axios("http://localhost:3500/users").then((response) => {
        const item = response.data.find((item) => item.id === obj.userId);
        console.log("item==>", item);
        setUser(item);
      });
    }
  }, [obj, user]);

  if (!user) {
    return null;
  }
  return (
    <div className="detailsDiv">
      <div className="details">{`${user.id} ${user.name},${user.address}`}</div>

      <div className="detailNavLink">
        <NavLink to=""><span>Marks</span></NavLink>
        <NavLink to="sports"><span>Sports</span></NavLink>
        <NavLink to="remarks"><span>Remarks</span></NavLink>
      </div>
      <div>
        <Outlet context={user}/>
      </div>
      <button
        className="backBtn"
        onClick={() => {
          navigate("/users");
          //navigate(-1); // same as above
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Details;
