import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

import logoDark from "../assets/logo-dark.png";


const Enrolled = () => {

  const [user2, setUser2] = useState(null);

  useEffect(() => {
    var firebaseConfig = {
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
    //const analytics = getAnalytics(app);

    var usersRef = firebase.database().ref("Students/");
    var user;
    var usersRef1 = firebase.database().ref("AttendanceRecord/");
    var user1;


    var usersRef2 = firebase.database().ref("TotalClassCount/");

    usersRef2.on("value", (snapshot) => {
      setUser2(snapshot.val());
    });



    usersRef1.on("value", (snapshot) => {
      user1 = snapshot.val();
      for (user in user1) {
        firebase
          .database()
          .ref("Students/" + user1[user])
          .set({
            Classcount: user1[user].classCount,
          });
      }
    });
  
    usersRef.on("value", (snapshot) => {
      const users = snapshot.val();
      var tableBody = document.getElementById("crud");
      tableBody.innerHTML = "";
      let tr0 = `
    <caption class="text-4xl font-bold pb-10">ENROLLED STUDENTS</caption>
    <thead>
        <tr class="text-2xl content-center font-bold">
            <td class="px-20 py-10">NAME</td>
            <td class="px-20 py-10">ROLL NO</td>
            <td class="px-20 py-10">ID</td>
            <td class="px-20 py-10">CLASSES ATTENDED</td>
        </tr>
    </thead>`;
      tableBody.innerHTML += tr0;
  
      for (user in users) {
        let tr = `
      <tr class="text-xl bg-gray-700 text-center py-20 rounded-2xl">
        <td class="py-2">${users[user].name}</td>
        <td class="py-2">${users[user].uniqueID}</td>
        <td class="py-2">${users[user].roll}</td>
        <td class="py-2">${users[user].Classcount}</td>
  
      </tr>`;
        tableBody.innerHTML += tr;
      }
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

      {/* Table */}
      <div className="container mt-8 mx-auto max-w-2xl text-white ml-[320px]">
        <table id="crud" className="table bg-gray-900 rounded-2xl">
        
        </table>
      </div>

      {/* Total Classes */}
      <div className="bg-gray-900 text-white px-5 py-5 rounded-lg mt-[20px]">
        {"Total classes: "+ user2 }
      </div>
    </main>
  );
};

export default Enrolled;