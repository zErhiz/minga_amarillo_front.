import flechader from "../../../public/img/circle arrow.png";
import flechaizq from "../../../public/img/circle arrow2.png";
import messege from "../../../public/img/messege.png"
import axios from "axios";
import apiUrl from "../../../api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import save_pages_action from "../../store/actions/save_page_title"

const {save_pages} = save_pages_action 

function ReadChapter() {
    const store = useSelector(store => store.inputs )
    console.log(store);
    // console.log(pages);
    const dispatch = useDispatch()

    const { id, page  } = useParams();
  const [chapters, setChapters] = useState(null);
  const [change, setChange] = useState(Number(page));
  const navigate = useNavigate();
  const [next, setNext] = useState("");
  const [reload, setReload] = useState(false);

//   console.log(chapters);

  useEffect(() => {
    axios
      .get(apiUrl + `chapters/${id}`)
      .then((res) => {
        setChapters(res.data.all)
        setNext(res.data.next)
        capture_Date(res.data.all.title,page)
    })
      .catch((err) => console.log(err));
  }, [page]);

  const handleNext = () => {
      setChange(change + 1);
      navigate(`/chapters/${id}/${change + 1}`);
      if (change >= chapters?.pages.length - 1) {
        //   setChange(0);
          navigate(`/chapters/${next}/${0}`)
          setReload(!reload);
        }
  };

  const handleBefore = () => {
      setChange(change - 1);
      navigate(`/chapters/${id}/${change}`);
    if (change <= 0) {

      navigate(`/manga/${chapters.manga_id}:/page`);

     

     
      setReload(!reload);

    } 
  };
  function capture_Date(title, page){
    
    dispatch(save_pages({
        title,
        page
    }))
  }
  useEffect(() => {
    function reloadPage() {
      window.location.reload();
    }

    if (reload) {
      reloadPage();
    }
  }, [reload]);



  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-[12%] bg-orange-500  flex justify-center items-center max-[425px]:mt-[75px] max-[425px]:h-[8%]">
        <p className="text-white text-[25px] max-[425px]:text-[20px]">°n {store.page}{change}  Cap -   {store.title} {chapters?.title}</p>
      </div>
      <div className=" w-screen h-[80%] flex items-center justify-evenly max-[425px]:h-[70%]">
        <img
          onClick={handleBefore}
          src={flechaizq}
          alt=""
          className="w-8 h-8 flex justify-start  cursor-pointer drop-shadow-2xl"
        />
          <button onClick={handleBefore}className="w-[50%] h-[100%]  cursor-pointer z-10 " src={flechader} ></button>
        <img
          src={chapters?.pages[change]}
          alt="page"
          className="bg-gray-50 w-[80%] h-[100%] bg-contain -z-0 drop-shadow-2xl"
        />
        
        <button onClick={handleNext} className="w-[50%] h-[100%] cursor-pointer z-10  "  ></button>
        <img
          onClick={handleNext}
          src={flechader}
          alt=""
          className=" w-8 h-8   cursor-pointer drop-shadow-2xl"
        />
      </div>
      <div className="bg-slate-200 w-screen h-[8%] flex justify-center items-center gap-2">
        <img src={messege} alt="" className="w-6" />
        <p className="flex justify-center items-center text-sm text-black">
           42
        </p>
      </div>
    </div>
  );
}

export default ReadChapter;