import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../../api";
import Switch from "./switch";
import { useSelector, useDispatch } from "react-redux";
import inputs_filter_actions from "../../store/actions/inputs_filter_switch" //es un objeto con todas las accions que se configuraron
import { useParams } from "react-router-dom";
function AuthorCards() {

  const {inputs_filter_switch} = inputs_filter_actions
  const {switches} = useSelector(store => store.inputs)
  const dispatch = useDispatch()
  console.log(switches)
  
  //con useselector yo selecciono los estados que necesito
  const {id} = useParams()
  console.log(id)
  const [isNew, setIsNew] = useState(true);
  

  useEffect(
    () => {
      axios(apiUrl + `mangas/author/${id}` + `?new=${isNew}`)
        .then((res) => setMangas(res.data.mangas))
        .catch((err) => console.log(err));
    },
     [isNew] //el efecto se ejecuta cada vez que el isnew cambia
  );

  const [mangas, setMangas] = useState(null);
  console.log(mangas);

  return (
    <>
      
      {mangas && (
        <div className="flex flex-col  h-fit sm:min-h-[70vh] items-center">
          <div className="flex justify-center gap-8">
            
            <Switch
            
              checked={!isNew}
              onChange={(e) => setIsNew(!e.target.checked)}
            />
            
          </div>
          <div className=" w-[100%] flex flex-row flex-wrap gap-4   justify-center py-2 lg:border border-black lg:w-5/6 "> 
          {mangas.map((each ) => (
          
            <div key={each?.title} className="flex flex-col  w-[45%] h-[40vh]  pb-2 sm:w-[30%] 2xl:w-[20%] 2xl:h-[50vh]  border border-black 2xl:bg-white" >
             
                <img className="rounded-2xl object-cover object-top h-[80%] w-[100%] shadow-2xl" src={each?.cover_photo} alt="" />
                <h2 className="text-[#424242] text-1xl text-center lg:text-3xl xl:text-4xl">{each?.title}</h2>
             
            </div>
          ))}
          </div>
        </div>
      )}
    </>
  );
}

export default AuthorCards;
