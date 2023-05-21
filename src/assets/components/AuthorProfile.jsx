import React from "react";
import ImageProfile from "../../../public/img/imageprofile.png";
import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../../api";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authors_storage_global from "../../store/actions/authors_storage";
function AuthorProfile() {
  let token = localStorage.getItem('token')
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }
  const [authors, setAuthors] = useState(null);
  const dispatch = useDispatch();
  const { authors_storage } = authors_storage_global;
  const { storage } = useSelector((store) => store.almacenamiento);
  console.log(storage);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios(apiUrl + `authors/${id}`,headers)
      .then((res) => {
        const data = res.data.response;
        setAuthors(data);
        dispatch(
          authors_storage({
            storage: data,
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(authors);
  return (
    <>
      {authors && (
        <div className="flex flex-col items-center h-[40vh] justify-end  sm:bg-bgauthors sm:bg-cover sm:bg-center sm:bg-no-repeat -mt-7 sm:-mt-8">
          <div className="flex flex-row   justify-between lg:px-40 2xl:px-80  items-center w-[90%] h-[20vh]  ">
            <img
              className="h-[80%] w-[25vw] 2xl:w-[8vw] xl:w-[15vw] lg:w-[19vw] sm:w-[15vw] rounded-full  object-cover object-center"
              src={authors.photo}
              alt=""
            />
            <div className="text-center sm:text-left ">
              <h1 className="text-[#000000] sm:text-white sm:text-2xl text-center font-semibold">
                {authors.name && authors.name[0].toUpperCase()}
                {authors.name && authors.name.substring(1)}
                {authors.last_name &&
                  `,${authors.last_name[0].toUpperCase()}${authors.last_name.substring(
                    1
                  )}`}
              </h1>
              {authors.city && authors.country && (
                <h2 className="text-[#9D9D9D] flex flex-row text-left items-center font-semibold sm:text-white sm:text-2xl sm:font-normal overflow-hidden">
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
                  {authors.city && authors.city[0].toUpperCase()}
                  {authors.city && authors.city.substring(1)}
                  {authors.country &&
                    `,${authors.country[0].toUpperCase()}${authors.country.substring(
                      1
                    )}`}
                </h2>
              )}{" "}
              {authors.date && (
                <h2 className="text-[#9D9D9D] flex flex-row items-center font-semibold sm:text-white sm:text-2xl sm:font-normal overflow-hidden">
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
                  {authors.date &&
                    `${authors.date
                      .split("-")
                      .reverse()
                      .join("-")
                      .slice(0, 2)}${authors.date
                      .split("-")
                      .reverse()
                      .join("-")
                      .slice(-8)}`}
                </h2>
              )}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 sm:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
          <div className=" w-[90%]">
            {" "}
            <p className="text-[#9D9D9D] overflow-hidden w-76 h-6 sm:text-white lg:text-center ">
              {" "}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default AuthorProfile;
