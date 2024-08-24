import React, { useOutletContext } from "react-router-dom";

function Marks() {
  const { marks } = useOutletContext();
  console.log("usseeer--->", marks);
  const terms = ["Term 1", "Term 2", "Term 3", "Term 4", "Term 5"];
  return (
    <div>
      <div>
        <table>
          {Object.keys(marks).map((item) => {
            return (
              <tr>
                <td>{item + ":"}</td>
                {marks[item].map((score) => (
                  <td>{score + ","}</td>
                ))}
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Marks;
