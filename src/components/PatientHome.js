import React from "react";
import "../styles/PatientHome.css";

const AppList = [
  {
    date: "Oct 23, 2022",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
  },
  {
    date: "Sep 20, 2022",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
  },
  {
    date: "July 22, 2022",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
  },
  {
    date: "June 15, 2022",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
  },
];

const Item = ({ obj }) => {
  return (
    <div className="ItemContainer">
      <p className="CardTitle">{obj.date}</p>
      <p className="CardTitle Purple">Overview:</p>
      <p className="CardDesc">{obj.overview}</p>
    </div>
  );
};

function PatientHome() {
  return (
    <div className="PatientHome">
      <p className="Title">Appointments</p>
      <div className="List">
        {AppList.map((obj) => (
          <Item obj={obj}></Item>
        ))}
      </div>
    </div>
  );
}

export default PatientHome;
