import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCloudUploadAlt, FaUserFriends } from "react-icons/fa";
import { FaComputer, FaFileShield } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Storage from "../components/config/firebase";

// let list =  []

const Dashboard = () => {
  const navigate = useNavigate();
  const [view, setUploadview] = useState(false);
  const [fileSuccess, setFileSuccess] = useState(false);
  const [stats, setStats] = useState({
    totalMemo: 0,
    totalUser: 0,
    totalRequest: 0,
  });
  let mouData = {
    url: "",
    title: "",
    collaborators: ["OAU"],
    commencementYear: 0,
    duration: 0,
    type: "LOCAL",
  };
  const [isReady, setIsReady] = useState(false);
  const [imageUpload, setImageUpload] = useState(false);
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState("");
  const [list, setList] = useState([]);
  const [deleteStatus, setDelStatus] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("Upload File");
  let collabText;
  let collabValue = ["OAU"];

  const token = JSON.parse(localStorage.getItem("apiResponse")).data.token;
  const fetchMou = async () => {
    try {
      const response = await axios.get(
        "https://api.linkagesagreements.oauife.edu.ng/api/v1/memorandums?limit=4",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response saved to local storage:", response);
      const result = response.data;
      if (result.status == 200) {
        console.log(result.data);
        setList(result.data);
      }
    } catch (error) {
      console.log("the error", error);
    }
  };

  //  UPLOAD SECTION
  const UploadPDF = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!pdfFile) {
      alert("Please choose a PDF file first");
      return;
    }

    const storageRef = ref(Storage, `pdfs/${pdfFile.name}`);

    try {
      // Upload the file
      setUploadMessage("Generating file please wait...");
      await uploadBytes(storageRef, pdfFile);

      // Get the file's URL
      const url = await getDownloadURL(storageRef);
      setPdfUrl(url);
      setUploadMessage("File link generated");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Upload failed");
    }
  };

  const deleteMemorandum = async (id) => {
    try {
      setDelStatus(true);
      console.log("the starting...");
      const response = await axios.delete(
        `https://api.linkagesagreements.oauife.edu.ng/api/v1/memorandum/${id}`,
        {
          headers: {
            "Content-Type": "application/json", // Include headers if necessary
            Authorization: `Bearer ${token}`, // Include this if authentication is required
          },
        }
      );

      if (response.status === 200) {
        const result = response.data;
        // console.log("Memorandum deleted successfully:", response.data);
        setDelStatus(false);
        console.log(result);
        const recent = list.filter(
          (item) => item._id !== result.data.memorandum._id
        );
        setList(recent);
      } else {
        console.log("Failed to delete memorandum:", response.status);
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };
  const setNewCollab = (e) => {
    collabText = e.target.value;
    console.log(collabText);
  };
  const setInfo = (e) => {
    const { name, value } = e.target;
    if (mouData.url.length < 1) {
      mouData.url = pdfUrl;
    }
    if (name == "duration") {
      setIsReady(true);
    }
    if (name == "commencementYear" || name == "duration") {
      mouData[name] = Number(value);
    } else {
      mouData[name] = value;
    }
    console.log(mouData);
  };

  const sendAll = async () => {
    const token = JSON.parse(localStorage.getItem("apiResponse")).data.token;
    try {
      const response = await axios.post(
        "https://api.linkagesagreements.oauife.edu.ng/api/v1/memorandum",
        mouData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFileSuccess(true);
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const Upload = () => {
    const SuccessMessage = () => {
      return (
        <div className="w-screen left-0 absolute top-0 bg-opacity-45 backdrop-blur-sm h-screen bg-black z-50">
          <div className="px-10 md:px-20 py-16 mt-40 w-fit relative mx-auto rounded-lg text-green-950 bg-white">
            <IoCloseCircleSharp
              className="absolute -top-4 -right-4 cursor-pointer"
              onClick={() => {
                setFileSuccess(false);
              }}
              size={35}
            />
            {/* <GrStatusGood  size={50} className="mb-4 mx-auto"/> */}
            <GrStatusGood size={70} className="mb-4 mx-auto " />
            <h4 className="text-xl font-semibold ">
              File Uploaded Successfully!
            </h4>
          </div>
        </div>
      );
    };

    return (
      <div className="pt-4 w-fit mx-auto lg:mx-0 ">
        <div
          className="text-md font-semibold cursor-pointer flex gap-1"
          onClick={() => {
            setUploadview(false);
          }}
        >
          <IoIosArrowBack /> Back
        </div>
        <div className="flex gap-4  text-white py-10 mx-auto lg:mx-0 w-fit">
          <input
            type="file"
            placeholder="select file"
            className="bg-[#211A79] p-4 "
            onChange={UploadPDF}
          />
          <button
            className="border h-fit border-[#211A79]  text-[#211A79]  px-6 py-2 "
            onClick={handleUpload}
          >
            {uploadMessage}
          </button>
        </div>
        <div>
          <form className="flex flex-wrap gap-8 mt-10 mb-20 mx-auto lg:mx-0 font-semibold w-5/6">
            <div>
              <label for="title" className="text-sm  mb-2">
                Title
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder=""
                name="title"
                className="border outline-none w-80 h-10"
                onChange={(e) => {
                  setInfo(e);
                }}
              />
            </div>
            <div>
              <label for="title" className="text-sm  mb-2">
                Collaboration Partner
              </label>{" "}
              <br />
              <input
                type="text"
                name="collaborators"
                onChange={(e) => {
                  setNewCollab(e);
                }}
                placeholder=""
                className="border outline-none w-80 h-10"
              />
              <button
                className="bg-blue-800 ml-3 rounded-lg px-8 text-white py-2"
                onClick={(e) => {
                  e.preventDefault();
                  collabValue.push(collabText);
                  mouData["collaborators"] = collabValue;
                  console.log(mouData);
                }}
              >
                Add
              </button>
            </div>
            {mouData["collaborators"].map((collab, idx) => (
              <div key={idx}>{collab}</div>
            ))}
            <div class="">
              <label
                for="options"
                class="block text-sm font-medium text-gray-700"
              >
                Commencement Year
              </label>
              <input
                list="options"
                id="options-input"
                name="commencementYear"
                onChange={(e) => {
                  setInfo(e);
                }}
                class="mt-1 block  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Select or type year"
              />
              <datalist id="options">
                <option value="2025"></option>
                <option value="2023"></option>
                <option value="2022"></option>
                <option value="2021"></option>
              </datalist>
            </div>
            <div>
              {" "}
              <label
                htmlFor="options"
                className="block text-sm font-medium text-gray-700"
              >
                Select type
              </label>
              <select
                id="options"
                name="type"
                onChange={(e) => {
                  setInfo(e);
                }}
                className="block w-full mt-1 p-2 
       border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500
        focus:border-blue-500 sm:text-sm"
              >
                <option value="LOCAL">LOCAL</option>
                <option value="FOREIGN">FOREIGN </option>
              </select>
            </div>
            {/* <div> <label htmlFor="options" className="block text-sm font-medium text-gray-700">Status</label>
      <select id="options" className="block w-full mt-1 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        <option value="LOCAL">ONGOING</option>
        <option value="FOREIGN">FOREIGN </option>
      </select>
                    </div> */}
            <div class="">
              <label
                for="options"
                class="block text-sm font-medium text-gray-700"
              >
                Duration
              </label>
              <input
                list="options"
                id="options-input"
                name="duration"
                onChange={(e) => {
                  setInfo(e);
                }}
                class="mt-1 block  p-2 border border-gray-300 bg-white rounded-md 
            shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Select or type duration..."
              />
              <datalist id="options">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
              </datalist>
            </div>
            <div
              onClick={sendAll}
              className={`border-0 rounded-none mx-auto lg:mx-0 text-center
                      text-white w-[80%] py-3 ${
                        isReady ? "bg-[#211A79]" : "bg-gray-300"
                      } `}
              type="submit"
            >
              Submit
            </div>
          </form>
        </div>
        {fileSuccess && <SuccessMessage />}
      </div>
    );
  };
  function displayDayDateYear(timestamp) {
    const date = new Date(timestamp);

    // Options for formatting: only display weekday, day of the month, and year
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    // Format the date according to the options
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  }
  function limitTo15Chars(str) {
    return str.length > 40 ? str.slice(0, 37) + "..." : str;
  }

  useEffect(() => {
    const token = localStorage.getItem("apiResponse");
    fetchMou();
    const totalmemo = JSON.parse(token).data.stats.totalMemoranda;
    const totalUsers = JSON.parse(token).data.stats.totalUsers;
    const unverified = JSON.parse(token).data.stats.unVerifiedUsers;
    setStats({
      totalMemo: totalmemo,
      totalUser: totalUsers,
      totalRequest: unverified,
    });
    setName({
      firstName: JSON.parse(token).data.user.firstName,
      lastName: JSON.parse(token).data.user.lastName,
    });
  }, []);
  return (
    <div>
      {deleteStatus && <DeleteProcessing />}
      <div className="w-full lg:w-[80vw] bg-[#F1F1F1] h-[92vh] lg:h-full no-scrollbar overflow-auto  lg:pt-10 lg:pl-20">
        {view ? (
          <Upload />
        ) : (
          <>
            <div
              className="flex gap-2 lg:justify-between px-4 py-4 lg:p-0  lg:pr-20 bg-gradient-to-r from-[#FECC48]
       to-[#010080] lg:bg-none"
            >
              <img src="iconstest.jpg" className="w-24 rounded-full" />
              <h3 className="lg:text-2xl font-bold mt-4 text-base text-white lg:mt-0 lg:text-[#211A79]">
                Welcome Admin
                <br /> {name.firstName} {name.lastName}
              </h3>
              <img src="/oaulogo.svg" className="w-12 ml-auto" />
            </div>
            <div
              className="flex w-full flex-wrap 
        gap-10 justify-center lg:justify-between pr-4 lg:pr-20 mt-10 font-semibold text-[#211A79]"
            >
              <a
                href="/mou"
                className="bg-white w-1/3 py-2  lg:w-1/6 text-sm lg:text-base  lg:py-5  rounded-lg drop-shadow-md text-center"
              >
                <h4>Total MOUs</h4>
                <FaFileShield className="mx-auto" size={30} />
                <span className="">{stats.totalMemo}</span>
              </a>
              <div
                onClick={() => {
                  navigate("/users");
                }}
                className="hover:cursor-pointer  bg-white w-1/3 lg:py-5 lg:w-1/6  rounded-lg drop-shadow-md text-center"
              >
                <h4>Total Users</h4>
                <FaUserFriends className="mx-auto" size={30} />
                <span className="">{stats.totalUser}</span>
              </div>
              <div
                onClick={() => {
                  navigate("/request");
                }}
                className="hover:cursor-pointer bg-white w-1/3 px-2 lg:py-5 lg:w-1/6   rounded-lg drop-shadow-md text-center"
              >
                <h4>New User request</h4>
                <FaComputer className="mx-auto" size={30} />
                <span className="">{stats.totalRequest}</span>
              </div>
              <div
                onClick={() => {
                  setUploadview(!view);
                }}
                className="text-white w-1/3 lg:py-5 lg:w-1/4 bg-[#211A79] hover:cursor-pointer hover:bg-white
            hover:text-[#211A79] hover:border-2 hover:border-[#211A79]  rounded-lg drop-shadow-md text-center"
              >
                <FaCloudUploadAlt className="mx-auto mt-3" size={30} />
                <span className="">Upload MOU</span>
              </div>
            </div>

            <div className="mt-10 ">
              <h3 className="text-xl mb-4 ml-4 font-semibold">
                Recently Uploaded
              </h3>
              <div className=" lg:h-64 ">
                <table className="w-5/6 bg-white">
                  <thead className=" text-white bg-black text-center">
                    <tr>
                      <th className="py-4">#</th>
                      <th>File</th>
                      <th>Title</th>
                      <th>Collaborators</th>
                      <th>Date </th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((memo, idx) => (
                      <tr className="hover:bg-gray-400 text-sm text-center">
                        <td className="py-4">{idx + 1}</td>
                        <td>
                          {" "}
                          <FaFileShield
                            size={16}
                            color="#211A79"
                            className="mx-auto"
                          />
                        </td>
                        <td>{limitTo15Chars(memo.title)}</td>
                        <td>
                          {memo.collaborators.map((collab, idx) => (
                            <span key={idx}>{collab} </span>
                          ))}
                        </td>
                        <td> {displayDayDateYear(memo.createdAt)}</td>
                        <td>
                          {" "}
                          <MdDelete
                            className="text-red-700 mx-auto cursor-pointer "
                            onClick={() => {
                              deleteMemorandum(memo._id);
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

const DeleteProcessing = () => {
  return (
    <div className="absolute bg-black h-[100vh] z-[999] top-0 w-full bg-opacity-70 ">
      <div className="p-16 bg-white w-fit mt-32 relative mx-auto rounded-sm">
        <p className="font-semibold text-red-600">
          Deleting file please wait...
        </p>
        <img src="fade.gif" alt="" className="mx-auto mt-4" />
      </div>
    </div>
  );
};
