import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaDatabase, FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Users = () => {
  const [view, setView] = useState(false);
  const [users, setUsers] = useState([]);
  const token = JSON.parse(localStorage.getItem("apiResponse")).data.token;
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://api.linkagesagreements.oauife.edu.ng/api/v1/users?limit=10&page=1",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response saved to local storage:", response.data);
      const result = response.data;
      if (result.status == 200) {
        setUsers(result.data);
      }
    } catch (error) {
      console.log("the error", error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const ViewProfile = () => {
    return (
      <div className="bg-[#F1F1F1] w-[100vw] overflow-hidden lg:w-full h-full px-10 pt-10 lg:pt-32 ">
        <div className="w-fit mx-auto  p-20 bg-white rounded-lg drop-shadow-lg">
          <div className="flex gap-3 mx-auto w-fit flex-wrap">
            <div className="bg-white  p-8 rounded-lg  w-fit">
              <img src="iconstest.jpg" className="w-40 h-40 rounded-lg" />
            </div>
            <div>
              <h1 className="text-2xl mb-4 font-bold">Abiola Motunrayo</h1>
              <div className="flex flex-wrap gap-4 w-96 h-fit text-lg">
                <div className="flex gap-3 bg-white p-4 rounded-md hover:cursor-pointer font-semibold">
                  <input
                    name="upload"
                    id="upload"
                    type="checkbox"
                    className="h-10 rounded-md w-10"
                  />
                  <label htmlFor="upload" className="mt-2">
                    UPLOAD
                  </label>
                </div>
                <div className="flex gap-3 bg-white p-4 rounded-md hover:cursor-pointer font-semibold">
                  <input
                    name="delete"
                    id="delete"
                    type="checkbox"
                    className="h-10 rounded-md w-10"
                  />
                  <label htmlFor="delete" className="mt-2">
                    DELETE
                  </label>
                </div>
                <div className="flex gap-3 bg-white p-4 rounded-md hover:cursor-pointer font-semibold">
                  <input
                    name="edit"
                    id="edit"
                    type="checkbox"
                    className="h-10 rounded-md w-10"
                  />
                  <label htmlFor="edit" className="mt-2">
                    EDIT
                  </label>
                </div>
                <div className="flex gap-3 bg-white p-4 rounded-md hover:cursor-pointer font-semibold">
                  <input
                    name="download"
                    id="download"
                    type="checkbox"
                    className="h-10 rounded-md w-10"
                  />
                  <label htmlFor="download" className="mt-2">
                    DOWNLOAD
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setView(false);
            }}
            className=" hover:cursor-pointer ml-3 lg:mx-auto mt-3 w-60 lg:w-full bg-blue-800 text-center
         text-white py-2 h-fit"
          >
            Approve.
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div
        className="w-[100vw]  z-20 lg:hidden  fixed  bottom-0 bg-gradient-to-t py-3 rounded-t-lg from-[#FECC48]
       to-[#010080]"
      >
        <ul className="flex w-full justify-around text-center  text-sm">
          <li>
            <Link to="/dashboard" className=" text-white gap-2">
              <MdDashboard size={24} color="#fff" className="mx-auto" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/users" className=" text-white gap-2">
              <FaUsers size={24} color="#fff" className="mx-auto" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/mou" className=" text-white gap-2">
              <FaDatabase size={24} color="#fff" className="mx-auto" />
              <span>MOU's</span>
            </Link>
          </li>
          <li>
            <Link to="/mou" className=" text-white gap-2">
              <IoMdSettings size={24} color="#fff" className="mx-auto" />
              <span>Setting</span>
            </Link>
          </li>
          <li>
            <Link to="/mou" className=" text-white gap-2">
              <FaDatabase size={24} color="#fff" className="mx-auto" />
              <span>MOU's</span>
            </Link>
          </li>
        </ul>
      </div>
      {view ? (
        <ViewProfile />
      ) : (
        <div className="lg:pl-14 lg:py-5 bg-[#F1F1F1]  h-[92vh] w-full lg:w-[80vw] overflow-hidden">
          <div
            className="flex gap-2 lg:justify-between px-4 py-4   lg:pr-20 bg-gradient-to-r from-[#FECC48]
       to-[#010080] lg:bg-none"
          >
            <img src="iconstest.jpg" className="w-24 lg:hidden" />
            <h3 className="lg:text-2xl font-bold mt-4 text-base text-white lg:mt-0 lg:text-[#211A79]">
              Welcome Admin <br /> Biola James
            </h3>
            <img src="/oaulogo.svg" className="w-12 ml-auto lg:hidden" />
          </div>
          <img src="oaulogo.svg" className="ml-auto mr-20  hidden lg:block" />
          <div className="ml-4 text-xl font-bold mt-10  mb-2">
            List of Users
          </div>
          <div
            className=" grid grid-cols-3 px-4  text-center lg:flex lg:flex-wrap gap-4 lg:gap-8 h-[40rem] 
    lg:h-[34rem] overflow-auto  no-scrollbar "
          >
            {users.map((user, index) => (
              <div
                key={index}
                onClick={() => {
                  setView(true);
                }}
                className="text-[#010080]  hover:cursor-pointer
         hover:bg-[#010080] hover:text-white py-8 lg:p-10  h-fit bg-white rounded-xl"
              >
                <img
                  src="iconstest.jpg"
                  className="auto h-10 rounded-full  lg:h-20 mb-2 mx-auto"
                />
                <span className="font-semibold">
                  {user.firstName} {user.lastName}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
