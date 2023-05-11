import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../../api";
import Switch from "./switch";
import { useSelector, useDispatch } from "react-redux";
import inputs_filter_actions from "../../store/actions/inputs_filter_switch"; //es un objeto con todas las accions que se configuraron
import { useParams } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";
function AuthorCards() {
 
  const [contador, setContador] = useState();
  const [mangas, setMangas] = useState(null);
  let params = useParams();
  console.log(params);
  const { inputs_filter_switch } = inputs_filter_actions;
  const { switches, isNew } = useSelector((store) => store.inputs);
  console.log(switches);
  const dispatch = useDispatch();

  console.log(mangas);
  /*   let sad = switches.length >= 1 ? false : true */

  /*   console.log(sad) */

  console.log(isNew);
  //con useselector yo selecciono los estados que necesito
  const { id } = useParams();

  useEffect(
    () => {
      axios(apiUrl + `mangas/author/${id}` + `?new=${isNew}`)
        .then((res) => {
          setMangas(res.data.mangas);
          setContador(res.data.contador);
        })
        .catch((err) => console.log(err));
    },
    [isNew] //el efecto se ejecuta cada vez que el isnew cambia
  );
  console.log(contador);
  function handleChangeSwitch() {
    dispatch(
      inputs_filter_switch({
        switches: mangas,
        isNew: isNew,
      })
    );
  }

  return (
    <>
      {mangas ? (
        <div className="flex flex-col  h-fit sm:min-h-[70vh] items-center ">
          {contador > 4 ? (
            <div className="flex justify-center gap-8 mt-10 border shadow-2xl lg:p-4">
              <Switch checked={!isNew} onChange={handleChangeSwitch} />
            </div>
          ) : null}
          <div className=" w-[100%] flex flex-row flex-wrap gap-4   justify-center py-2  lg:w-5/6 ">
            {mangas.map((each) => (
              <div
                key={each?.title}
                className="flex flex-col  w-[45%] h-[40vh]  pb-2 sm:w-[30%] 2xl:w-[20%] 2xl:h-[50vh]  shadow-2xl 2xl:bg-white"
              >
                <Anchor
                  to={`/manga/${each?._id}`}
                  className={`h-[82%] ${
                    each?._id
                      ? "hover:scale-110 transform transition-transform duration-300"
                      : ""
                  }`}
                >
                  <img
                    className="rounded-2xl object-cover object-top h-[80%] w-[100%] shadow-2xl"
                    src={each?.cover_photo}
                    alt=""
                  />
                </Anchor>
                <h2 className="text-[#424242] text-1xl text-center lg:text-3xl xl:text-4xl -mt-4">
                  {each?.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-3xl font-bold text-orange-600 text-center lg:mt-40 mt-24 ">
          {" "}
          This author has no published article yet <br /> maybe you want to
          continue exploring other authors
        </div>
      )}
    </>
  );
}

export default AuthorCards;
