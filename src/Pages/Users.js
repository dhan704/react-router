import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

function Users() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate(); // returns a function

  const cls = searchParams.get("class"); //search param returns an object
  console.log("clss-->", cls);

  useEffect(() => {
    axios("http://localhost:3500/users").then((response) => {
      console.log("resp-->", response.data);
      setData(response.data);
    });
  }, []);

  const handleClassChange = (event) => {
    setSearchParams({ class: event.target.value, hello: "me" });
  };
  return (
    <div className="users">
      <select onChange={handleClassChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      {data
        .filter((item) => {
          if (!cls) return true;
          return item.class === parseInt(cls);
        })
        .map((item, index) => {
          return (
            <div
              className="mainDiv"
              onClick={() => {
                navigate(`/details/${item.id}`, {
                  replace: true,
                  state: {
                    item,
                  },
                }); //navigate to user details screen
              }}
            >
              <div className="nameDiv">
                <Link to={`/details/${item.id}`}>{item.name}</Link>
              </div>
              <div className="addressDiv">{item.address}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Users;
