import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

import logoDark from "../assets/logo-dark.png";

var stdNo=0;
var total=0;

const TakeAttendance = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);


  // Changing state of button
  const [isTakingAttendance, setIsTakingAttendance] = useState(false);
  // Changing state of the database element when state of button is changed
  const totalClass= firebase
  .database()
  .ref("TotalClassCount");
  const changeStateTakeAttendance = firebase
    .database()
    .ref("StateTakeAttendance");
  
  const handleClick = () => {
    if (isTakingAttendance) {
      fun2();
      setIsTakingAttendance(false);
    } else {
      fun1();
      setIsTakingAttendance(true);
    }
  };

  const fun1 = () => {
    total++;
    console.log("Start Taking Attendance");
    totalClass.set(total)
    changeStateTakeAttendance.set(1);
  };

  const fun2 = () => {
    console.log("Not Taking Attendance");
    changeStateTakeAttendance.set(0);
  };

  useEffect(() => {
    // Firebase configuration
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_API_KEY,
      authDomain: import.meta.env.VITE_AUTH_DOMAIN,
      databaseURL: import.meta.env.VITE_DATABASE_URL,
      projectId: import.meta.env.VITE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_APP_ID,
      measurementId: import.meta.env.VITE_MEASUREMENT_ID,
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Reference to the database
    const studentsRef = firebase.database().ref("Students/");
    const attendanceRef = firebase.database().ref("users/");

    studentsRef.on("value", (snapshot) => {
      const studentsData = snapshot.val();
      setStudents(studentsData);
    });

    attendanceRef.on("value", (snapshot) => {
      const attendanceData = snapshot.val();
      setAttendance(attendanceData);
    });



    
  }, []);

  return (
    <main className="fixed w-screen h-screen justify-center p-120 md:p-160 px-4 bg-gradient-to-r from-black to-red-900 flex flex-col items-center">
      {/* Navbar */}
      <div className="flex justify-between items-center w-full h-15 px-4 text-white bg-black fixed z-10 top-0">
        <div>
          <img src={logoDark} alt="logoDark" className="w-20"></img>
        </div>
        <div>
          <h2 className="px-5">© STUSEC</h2>
        </div>
      </div>

      <div className="mt-[-200px]">
        <button
          className={`py-2 px-4 rounded ${
            isTakingAttendance ? "bg-red-500" : "bg-green-500"
          } font-bold text-white`}
          onClick={handleClick}
        >
          {isTakingAttendance ? "Stop" : "Take Attendance"}
        </button>
      </div>

      {/* Table */}
      <div className="container mt-8 mx-auto max-w-2xl text-white ml-[410px] my-[-200px]">
        <table className="table bg-gray-900 rounded-2xl">
          <caption className="text-3xl font-bold pb-6">PRESENT STUDENTS</caption>
          <thead>
            <tr className="text-2xl content-center font-bold">
              {/* <th className="px-20 py-10">S NO</th> */}
              <th className="px-20 py-10">NAME</th>
              <th className="px-20 py-10">ROLL NO</th>
              <th className="px-20 py-10">ID</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(attendance).map(([key, value]) => {
              if (value === 1 && students[key]) {
                const student = students[key];
                return (
                  <tr
                    key={key}
                    className="text-xl bg-gray-700 text-center py-20 rounded-2xl"
                  >
                    {/* <td className="py-2">{stdNo++}</td> */}
                    <td className="py-2">{student.name}</td>
                    <td className="py-2" >{student.roll}</td>
                    <td className="py-2">{student.uniqueID}</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default TakeAttendance;
