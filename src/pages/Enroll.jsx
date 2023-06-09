import React from "react";
import logoDark from "../assets/logo-dark.png";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

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

// initialize firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Enroll = () => {



  
  const contactFormDB = firebase.database().ref("Students");
  const temp2 = firebase.database().ref("temp");
  const temp3 = firebase.database().ref("State");
  var temp4=0;

  const submitForm = (e) => {
    e.preventDefault();

    var name = getElementVal("name");
    var uid = getElementVal("uid");
    var roll = getElementVal("roll");

    saveMessages(uid,name, uid, roll,temp4);
    temp2.set(Number(uid));
    temp3.set(1);

    //  enable alert
    document.querySelector(".w-full.bg-teal-500.py-2.px-4.rounded-lg.text-center.text-white.font-bold.text-xl.hidden").style.display = "block";

    //   remove the alert
    setTimeout(() => {
      document.querySelector(".w-full.bg-teal-500.py-2.px-4.rounded-lg.text-center.text-white.font-bold.text-xl.hidden").style.display = "none";
    }, 3000);
    document.querySelector(".w-full.bg-green-500.py-2.px-4.rounded-lg.text-center.text-white.font-bold.text-xl.hidden").style.display = "block";

  };

  const saveMessages = (id,name, roll, uid,temp4) => {
    firebase.database().ref('Students/' + id).set({
      name: name,
      roll: roll,
      uniqueID : uid,
      Classcount: temp4
    });
    firebase.database().ref('AttendanceRecord/' + id).set(temp4);
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  return (
    <main className="h-screen fixed w-screen flex justify-center p-120 md:p-160 px-4 bg-gradient-to-r from-black to-red-900">
      <div className="flex justify-between items-center w-full h-15 px-4 text-white bg-black fixed z-10 top-0">
        <div>
          <img src={logoDark} alt="logoDark" className="w-20" />
        </div>
        <div>
          <h2 className="px-5">© STUSEC</h2>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="text-4xl text-yellow-200 font-bold text-center py-5">
          STUSEC
        </h2>
        <h4 className="text-2xl text-yellow-50 font-bold text-center pb-10">
          Enrolment of Student
        </h4>

        <div>
          <form
            action=""
            id="enrollmentForm"
            className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8"
            onSubmit={submitForm}
          >
            <div className="w-full bg-teal-500 py-2 px-4 rounded-lg text-center text-white font-bold text-xl hidden">
              Please put your finger on the Scanner
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="name">Student Name:</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                id="name"
                placeholder="Your Name"
              />
            </div>

            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="email">Unique ID:</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="number"
                id="uid"
                placeholder="Your Unique ID"
              />
            </div>

            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="name">Roll No:</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                id="roll"
                placeholder="Your Roll No."
              />
            </div>

            <div className="w-20 my-5 py-2 bg-teal-500 hover:bg-teal-700 text-white font-semibold rounded-lg text-center flex items-center justify-center">
              <button type="submit">Enrol</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Enroll;
