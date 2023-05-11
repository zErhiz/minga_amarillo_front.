import React, { useRef } from "react";
import axios from "axios";
import apiUrl from "../../../api";
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
  }

  function prev() {
    if (mangas) setPage(page - 1);
    setReload(!reload);
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-200 ">
        <div className="bg-bgmanga bg-no-repeat bg-cover bg-[39%] sm:bg-cover   h-[100vh]  w-[100%] sm:h-[60vh]">
          <div className="flex flex-col justify-center items-center p-52">
            <h1 className="text-6xl text-white p-9">Mangas</h1>
            <label htmlFor=""></label>
            <input
              className="text-2xl w-[100%] p-1 rounded-md"
              defaultValue={title2}
              type="search"
              name="Find Your Manga here"
              placeholder="Find your manga here"
              ref={title}
              onKeyUp={capture_text}
            />
          </div>
        </div>
        <div className="flex gap-4 p-6 w-[70%] justify-center items-center">
          <form ref={category_id}>
            {categories &&
              categories.map((category) => (
                <label
                  htmlFor={category._id}
                  key={category._id}
                  style={{
                    backgroundColor: category.hover,
                    padding: "0.3rem",
                    borderRadius: "20px",
                  }}
                >
                  {category.name}
                  <input
                    defaultChecked={ categories2.includes(category._id)}
                    name="category_id"
                     onChange={checkbox}
                    type="checkbox"
                    value={category._id}
                    id={category._id}
                  />
                </label>
              ))}
          </form>
        </div>

        <div className="bg-white flex flex-wrap p-9 flex justify-center items-center sm:w-[60vw] w-[100vw]  ">
          {newMangas}
        </div>
        <div className="flex gap-96 p-9 w-screen justify-between">
          {page != 1 && (
            <button
              className="border border-black p-4 w-[20%] rounded-md"
              onClick={prev}
            >
              PREV
            </button>
          )}
          <button
            className="border border-black p-4 w-[20%] rounded-md rounded-md"
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
