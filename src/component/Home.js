import Slot from "./Slot";
import { useState } from "react";

export const Home = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [data, setData] = useState([]);

  return (
    <>
      <nav className="navbar">
        <h1>Easy Parking</h1>
      </nav>
      <div className="container">
        <div className="header">
          <h2> Vehicle Number :</h2>
          <input
            type="text"
            placeholder="Enter Car Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <h2> Driver Name :</h2>
          <input
            type="text"
            placeholder="Enter Driver Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h2> Checkin Time :</h2>
          <input
            type="time"
            value={checkInTime}
            onChange={(e) => setCheckInTime(e.target.value)}
          />
          <h2> Checout Time :</h2>
          <input
            type="time"
            value={checkOutTime}
            onChange={(e) => setCheckOutTime(e.target.value)}
          />
          <button
            onClick={() =>
              setData(
                [
                  ...data,
                  {
                    number: number,
                    name: name,
                    checkInTime: checkInTime,
                    checkOutTime: checkOutTime,
                  },
                ],
                setName(""),
                setNumber("")
              )
            }
          >
            Park Your Car
          </button>
        </div>
      </div>
      <h1 className="navbar">Garage</h1>
      <div className="slots">
        <Slot data={data} />
      </div>
    </>
  );
};

export default Home;
