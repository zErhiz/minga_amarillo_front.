import { useState } from "react";
import imagenmenu from "../../../public/img/Menu.png";
import ultima from "../../../public/img/ultimaimage.png";
import userImage from "../../../public/img/killua.png";
import closeImage from "../../../public/img/close.png";
import apiUrl from "../../../api";
import { Link as Anchor } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let [menu, setMenu] = useState(false);

  let user = localStorage.getItem("user");

  let role = JSON.parse(localStorage.getItem("user"))?.role;
  let token = localStorage.getItem("token");
  let email = JSON.parse(localStorage.getItem("user"))?.email;
  let userPhoto = JSON.parse(localStorage.getItem("user"))?.photo;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  const navigate = useNavigate();
  function backHome() {
    axios
      .post(apiUrl + "auth/signout", null, headers)

      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((err) => alert(err));
  }

  return (
    <>
      <header className="">
        <nav className="flex justify-center  ">
          <div className=" absolute top-[0rem] sm:top-[-2rem] flex items-center mt-4 justify-between w-5/6  xl:mt-10">
            <img
              onClick={() => setMenu(!menu)}
              className="sm:h-8 sm:mt-9 lg:mt-7 xl:h-12 cursor-pointer"
              src={imagenmenu}
              alt=""
            />
            <div className="sm:flex  sm:items-center sm:mt-9 sm:gap-4  sm:flex-row">
              <h2 className="hidden sm:block text-orange-500 text-2xl xl:text-4xl">
                Minga
              </h2>
              <img className="sm:h-6 xl:h-8" src={ultima} alt="" />
            </div>
          </div>
        </nav>
        {menu ? (
          <div className="bg-orange-500 fixed top-0 left-0 right-0 bottom-0 z-50 sm:right-[170px] 2xl:right-[1200px] xl:right-[1000px] md:right-[450px] lg:right-[700px]">
            <div className="  flex p-4 justify-between items-center">
              <div className="flex   gap-2">
                <img
                  className="rounded-full object-cover object-center h-16 w-16"
                  src={userPhoto}
                  alt=""
                />
                <div className="text-sm text-white">
                  <h2>{email}</h2>
                </div>
              </div>
              <img
                className="cursor-pointer h-4 "
                onClick={() => setMenu(!menu)}
                src={closeImage}
                alt=""
              />
            </div>
            <div>
              <ul className=" flex flex-col  items-center 2xl:mt-20 xl:mt-20 ">
                <li
                  onClick={() => setMenu(!menu)}
                  className="bg-white w-[80%] 2xl:w-[30%] p-4 text-center rounded-lg h-auto text-orange-500 font-bold"
                >
                  <Anchor to="/">Home</Anchor>
                </li>
                <li className="p-4 text-white font-semibold">
                  <a href="#">Comics</a>
                </li>
                <li className="p-4 text-white font-semibold">
                  My Comics
                </li>

                {role === 1 || role === 2 ? (
                  <li
                    onClick={() => setMenu(!menu)}
                    className="p-4 text-white font-semibold"
                  >
                    {" "}
                    <Anchor to="/mangas-form"> New Manga</Anchor>
                  </li>
                ) : null}
                <li className="p-4 text-white font-semibold">
                  {" "}
                  <a href="#">Favorites</a>
                </li>
                {token ? (
                  <li
                    onClick={() => setMenu(!menu)}
                    className="p-4 text-white font-semibold"
                  >
                    {" "}
                    <a onClick= {backHome} href="#">
                      Logout
                    </a>
                  </li>
                ) : null}
                {!token ? (
                  <li
                    onClick={() => setMenu(!menu)}
                    className="p-4 text-white font-semibold"
                  >
                    <Anchor to="/register">Register</Anchor>
                  </li>
                ) : null}
                {!token ? (
                  <li
                    onClick={() => setMenu(!menu)}
                    className="p-4 text-white font-semibold"
                  >
                    <Anchor to="/login">Sign in</Anchor>
                  </li>
                ) : null}
                {role === 0 ? (
                  <li
                    onClick={() => setMenu(!menu)}
                    className="p-4 text-white font-semibold"
                  >
                    {" "}
                    <Anchor to="/author-form"> New Author </Anchor>
                  </li>
                ) : null}
                 {role === 0 ? (
                  <li
                    onClick={() => setMenu(!menu)}
                    className="p-4 text-white font-semibold"
                  >
                    {" "}
                    <Anchor to="/cia-form"> New Company </Anchor>
                  </li>
                ) : null}
                {role === 1 || role === 2 ? (
                  <li
                    onClick={() => setMenu(!menu)}
                    className="p-4 text-white font-semibold"
                  >
                    {" "}
                    <Anchor to="/chapters-form">New Chapter</Anchor>
                  </li>
                  
                ) : null}
                        <li onClick={() => setMenu(!menu)} className="p-4 text-white font-semibold">
                        <Anchor to="/author/645521404883c503d5e51549"> PRUEBA autor</Anchor>  
                </li>
              </ul>
              
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}

