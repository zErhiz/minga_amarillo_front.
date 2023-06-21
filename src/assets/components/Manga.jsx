import React, { useRef } from "react";
import axios from "axios";
import apiUrl from "../../../api";
import Frame27 from '../../../public/img/Frame27.png'
import Frame26 from '../../../public/img/Frame26.png'
import Frame28 from '../../../public/img/Frame28.png'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import inputs_filter_actions from "../../store/actions/inputs_filter";
import Cards from "./Cards.jsx";
import { Navigate, useNavigate } from "react-router-dom";
const { inputs_filter } = inputs_filter_actions;
const Manga = () => {
  const { title2, categories2 } = useSelector((store) => store.inputsMangas);
  console.log(categories2);
  //con useSelector selecciono los estados que necesito
  const dispatch = useDispatch();
  console.log(dispatch);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [reload, setReload] = useState(false);
  const [page, setPage] = useState(1);
  const [categoriesChecked, setCategoriesChecked] = useState([])
  useEffect(
    () => {
      axios(apiUrl + "categories")
        .then((res) => setCategories(res.data.categories))
        .catch((err) => console.log(err));
    },
    [] //array de dependencias vacio ya que necesitamos fetchear una unica vez al montarse el componente (ydespues los datos no van a cambiar)
  );


  const [mangas, setMangas] = useState([]);
  useEffect(
    () => {
      let categories = Object.values(category_id.current);

      let values = [];
      categories.forEach((each) => {
        if (each.checked) {
          values.push(each.value);
        }
      });

 
      axios(
        apiUrl +
          `mangas?title=${title.current.value}&category_id=${values.join(
            ","
          )}&page=${page}&limit=6&order=1`
      )
        .then((res) => {setMangas(res.data.response);
                setCategoriesChecked(values)})
        .catch((err) => console.log(err));
    },
    [reload] //array de dependencias vacio ya que necesitamos fetchear una unica vez al montarse el componente (ydespues los datos no van a cambiar)
    );
    const checkbox = (event) => {
    
      const array = categories.map((category) => ({
        id: category._id,
        name: category.name,
      }));
      
      console.log(event.target.value)
    dispatch(
      inputs_filter({
        title2: title.current.value,
        categories2: event.target.value,
      })
      );
    setReload(!reload);
    if (checkbox) {
      setPage(1);
    }
    if (!checkbox) {
      setPage(2)
    }
  };

  let newMangas = mangas.map((m) => {
    return (
      <Cards
        title={m.title}
        img={m.cover_photo}
        props={() => navigate(`/manga/${m._id}/:page`)}
      />
    );
  });

  console.log(mangas);

  const title = useRef("");

  const category_id = useRef();

  function capture_text() {
    dispatch(
      inputs_filter({
        title2: title.current.value,
        categories2: categoriesChecked,
        
      })
      );
    setReload(!reload);
  }

  function next() {
    setPage(page + 1);
    setReload(!reload);
    //usar useNavigate
  }

  function prev() {
    if (mangas) setPage(page - 1);
    setReload(!reload); //para que refresque los componentes o la página cuando realizo un accion 
     //usar useNavigate
  }
console.log(categories)
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-200  sm:bg-white">
        <div className="bg-bgmanga bg-no-repeat bg-cover bg-[39%] sm:bg-cover   h-[100vh]  w-full sm:h-[60vh]  flex flex-col justify-center sm:justify-normal md:justify-center">
          <div className="flex flex-col justify-center items-center  ">
            <h1 className="text-6xl text-white p-9">Mangas</h1>
            <label htmlFor=""></label>
            <input
              className="text-2xl sm:w-[50%] p-1 rounded-md"
              defaultValue={title2}
              type="search"
              name="Find Your Manga here"
              placeholder="Find your manga here"
              ref={title}
              onKeyUp={capture_text}
            />
          </div>
        </div>
      
      
        <div className=" mt-[-5rem] gap-4 p-6 w-[100%] sm:w-[90%] rounded-3xl sm:rounded-2xl border bg-slater-200 sm:bg-white justify-center items-center">
        <h2 className="font-semibold sm:hidden text-white text-left">Explore</h2>
        <div className=" gap-6 flex sm:hidden p-6 w-[40%]">
            
            <img src={Frame26} alt="" />
            <img src={Frame27} alt="" />
            <img src={Frame28} alt="" />
          </div>
          <form ref={category_id}>
            {categories &&
              categories.map((category) => (
                <label
                  className="cursor-pointer"
                  htmlFor={category._id}
                  key={category._id}
                  style={{
                    backgroundColor: category.color,
                    padding: "0.3rem",
                    borderRadius: "20px",
                  }}
                >
                  {category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase()}
                  <input
                    className="sr-only"
                    defaultChecked={categories2.includes(category._id)}
                    name="category_id"
                    onChange={checkbox}
                    type="checkbox"
                    value={category._id}
                    id={category._id}
                  />
                </label>
              ))}
            
               <div className="rounded-2xl flex flex-wrap   justify-center items-center  w-full">
                  
          {newMangas}
          
        </div>
          </form>
        </div>

     
        <div className="flex sm:gap-96 p-9 w-[85%] justify-center">
          {page != 1 && (
            <button
              className="border  text-white font-semibold bg-orange-500 p-4 sm:w-[20%] lg:w-[10%] rounded-md"
              onClick={prev}
            >
              PREV
            </button>
          )}
          <button
            className="border  p-4 sm:w-[20%] lg:w-[10%] bg-orange-500 text-white font-semibold  rounded-md"
            onClick={next}
          >
            NEXT
          </button>
        </div>
      </div>
    </>
  );
};

export default Manga;
