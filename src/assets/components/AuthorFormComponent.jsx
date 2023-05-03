import React, { useRef, useState } from "react";
import profileImage from "../../../public/img/imageprofile.png";
import axios from "axios";
import Swal from "sweetalert2";
import apiUrl from "../../../api";
import { Link as Anchor, useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
function AuthorFormComponent() {
  const navigate = useNavigate();
  const name = useRef();
  const last_name = useRef();
  const city_and_country = useRef();
  const photo = useRef();
  const date = useRef();
  function handleForm(e) {
    e.preventDefault();

    const [city, country] = city_and_country.current.value.split(",");

    if (!city || !country) {
      setInvalidCityCountry(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'There is an error with the city or country entered Here is an example of how "Caseros, Argentina" should be worn. Please try again.',
      });
    } else {
      setInvalidCityCountry(false);
    }

    if (!date.current.value) {
      setInvalidDate(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid date. Here is an example of how the date should be formatted: YYYY-MM-DD.",
      });
    } else {
      setInvalidDate(false);
    }

    if (!photo.current.value) {
      setInvalidPhoto(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'Please enter a valid photo. Here is an example of how the photo should put "url image"',
      });
    } else {
      setInvalidPhoto(false);
    }

    if (!last_name.current.value) {
      setInvalidLastName(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid LastName.",
      });
    } else {
      setInvalidLastName(false);
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

    const data = {
      name: name.current.value,
      last_name: last_name.current.value,
      country: country.trim(),
      city: city.trim(),
      date: date.current.value,
      photo: photo.current.value,
    };
    axios
      .post( apiUrl  +'authors', data)
      .then((res) => {
        setHasError(false);
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response && err.response.status === 400) {
          setHasError(true);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "there is already an author with this name or check that the profile image is not valid!",
          });
        } else {
          console.log(err);
        }
      });
    console.log(data);
  }

  function handleChange(event) {
    setProfileImage(event.target.value);
  }
  function handleChange1Name(event) {
    setNameInput(event.target.value);
  }
  function handleChange1LastName(event) {
    setLastNameInput(event.target.value);
  }
  function handleChange1Date(event) {
    const formattedDate = event.target.value.split("-").reverse().join("-");
    setDateInput(formattedDate);
  }
  function handleChange1CityCountry(event) {
    setCityCountryInput(event.target.value);
  }
  const [cityCountryInput, setCityCountryInput] = useState();
  const [dateInput, setDateInput] = useState();
  const [nameInput, setNameInput] = useState();
  const [lastNameInput, setLastNameInput] = useState();
  const [profileImage1, setProfileImage] = useState();
  const [hasError, setHasError] = useState(false);
  const [InvalidCityCountry, setInvalidCityCountry] = useState(false);
  const [invalidDate, setInvalidDate] = useState(false);
  const [invalidPhoto, setInvalidPhoto] = useState(false);
  const [invalidLastName, setInvalidLastName] = useState(false);
  return (
    <>
      <div className="border border-black h-screen flex flex-col justify-center content-center items-center ">
        <h2 className="text-2xl mt-12 lg:text-4xl sm:hidden">New Author</h2>
        <div className="flex flex-col justify-evenly h-4/6 items-center  sm:absolute sm:w-5/6 sm:z-10 sm:rounded-[10px] sm:top-[10.5rem] md:top-[13rem] lg:top-[25.5rem] lg:w-5/6 sm:bg-white sm:flex-row-reverse xl:top-[27rem] lg:h-[50vh]">
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

            <h2 className="text-black font-semibold md:text-3xl hidden sm:block overflow-x-auto overflow-y-auto md:max-h-[8rem] sm:max-w-[12rem] sm:text-md sm:max-h-[5rem]">
              {nameInput} {lastNameInput}
            </h2>
            {cityCountryInput ? (
              <h3 className="sm:flex sm:flex-row items-center overflow-x-auto overflow-y-auto md:max-h-[8vh]  sm:max-h-[5vh]  sm:max-w-[15rem] text-black md:text-2xl sm:text-sm hidden sm:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                {cityCountryInput}
              </h3>
            ) : null}
            {dateInput ? (
              <h3 className="sm:flex sm:flex-row items-center overflow-x-auto overflow-y-auto md:max-h-[8vh] sm:max-h-[5vh]  sm:max-w-[12rem] text-black md:text-2xl sm:text-sm hidden sm:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                  />
                </svg>
                {dateInput}
              </h3>
            ) : null}
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
              onChange={handleChange1Name}
            />
            <input
              className={`bg-[#EBEBEB] border border-b-black w-[100%] sm:bg-white ${
                invalidLastName
                  ? "border-red-500 border-b-red-500 border-[5px]"
                  : ""
              }`}
              type="text"
              placeholder="Last Name"
              ref={last_name}
              onChange={handleChange1LastName}
            />
            <input
              className={`bg-[#EBEBEB] border border-b-black w-[100%] sm:bg-white ${
                InvalidCityCountry
                  ? "border-red-500 border-b-red-500 border-[5px]"
                  : ""
              }`}
              type="text"
              placeholder="City, Country"
              ref={city_and_country}
              onChange={handleChange1CityCountry}
            />

            <input
              className={`bg-[#EBEBEB] border border-b-black w-[100%] sm:bg-white ${
                invalidDate
                  ? "border-red-500 border-b-red-500 border-[5px]"
                  : ""
              }`}
              type="date"
              placeholder="Birthday"
              ref={date}
              onChange={handleChange1Date}
              min="1980-01-01"
              max="2020-12-30"
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
              ref={photo}
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

export default AuthorFormComponent;
