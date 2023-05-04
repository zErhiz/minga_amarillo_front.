import React, { useRef, useState } from "react";
import profileImage from "../../../public/img/imageprofile.png";
import axios from "axios";
import Swal from "sweetalert2";
import apiUrl from "../../../api";
import { Link as Anchor, useNavigate } from "react-router-dom";
import Buttons from "./Buttons";

export default function CompanyFormComponent() {
  const navigate = useNavigate();
  const name = useRef();
  const website = useRef();
  const logo = useRef();
  const description = useRef();
  function handleForm(e) {
    e.preventDefault();

    const data = {
      name: name.current.value,
      website: website.current.value,
      logo: logo.current.value,
      description: description.current.value,
    };
    axios
      .post(apiUrl + "authors", data)
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
    console.log(data);
    if (!website.current.value) {
      setInvalidWebsite(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid website.",
      });
    } else {
      setInvalidWebsite(false);
    }
    if (!logo.current.value) {
      setInvalidPhoto(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'Please enter a valid photo. Here is an example of how the photo should put "url image"',
      });
    } else {
      setInvalidPhoto(false);
    }
    if (!name.current.value) {
      setHasError(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid Name.",
      });
    } else {
      setHasError(false);
    }
    if (!description.current.value) {
      setInvalidDescription(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid Description.",
      });
    } else {
      setInvalidDescription(false);
    }
  }

  function handleChange(event) {
    setProfileImage(event.target.value);
  }

  const [profileImage1, setProfileImage] = useState();
  const [hasError, setHasError] = useState(false);
  const [invalidDescription, setInvalidDescription] = useState(false);
  const [invalidPhoto, setInvalidPhoto] = useState(false);
  const [invalidWebsite, setInvalidWebsite] = useState(false);

  return (
    <>
      <div className=" h-screen flex flex-col justify-center content-center items-center ">
        <h2 className="text-2xl mt-12 lg:text-4xl sm:hidden">New Company</h2>
        <div className="flex flex-col justify-evenly h-4/6 items-center  sm:absolute sm:w-5/6 sm:z-10 sm:rounded-[10px] sm:top-[10.5rem] md:top-[10rem] lg:top-[20.5rem] lg:w-5/6 sm:bg-white sm:flex-row-reverse xl:top-[27rem] lg:h-[50vh]">
          <div className="sm:mb-20">
            <img
              onError={() =>
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Check the image Url!",
                })
              }
              className="h-20 w-20 mt-4 sm:w-40 sm:h-40 lg:w-40 rounded-[500px] lg:h-40"
              src={profileImage1 || profileImage}
              alt=""
            />
          </div>
          <form
            onSubmit={(e) => handleForm(e)}
            className="h-[100%] flex flex-col justify-evenly lg:w-[40%] 2xl:w-[20%]"
            action=""
          >
            <input
              className={`bg-[#EBEBEB] border border-b-black w-[100%] sm:bg-white ${
                hasError ? "border-red-500 border-b-red-500 border-[5px]" : ""
              }`}
              type="text"
              placeholder="Name"
              ref={name}
            />
            <input
              className={`bg-[#EBEBEB] border border-b-black w-[100%] sm:bg-white ${
                invalidWebsite
                  ? "border-red-500 border-b-red-500 border-[5px]"
                  : ""
              }`}
              type="text"
              placeholder="Website"
              ref={website}
            />
            <input
              className={`bg-[#EBEBEB] border border-b-black w-[100%] sm:bg-white ${
                invalidPhoto
                  ? "border-red-500 border-b-red-500 border-[5px]"
                  : ""
              } `}
              type="text"
              placeholder="URL Profile Image"
              onChange={handleChange}
              ref={logo}
            />
            <input
              className={`bg-[#EBEBEB] border border-b-black w-[100%] sm:bg-white   ${invalidDescription
              ? "border-red-500 border-b-red-500 border-[5px]"
              : ""
          }`}
              type="text"
              placeholder="Description"
              ref={description}
            />
            <Buttons
              type="submit"
              className="bg-orange-500 w-[100%] h-12 rounded-[5000px] font-bold text-white lg:w-[40%] lg:justify-start"
            >
              Send
            </Buttons>
          </form>
        </div>
      </div>
    </>
  );
}
