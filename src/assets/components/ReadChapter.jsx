import flechader from "../../../public/img/circle arrow.png";
import flechaizq from "../../../public/img/circle arrow2.png";
import axios from "axios";
import apiUrl from "../../../api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ReadChapter() {
  const { id, page  } = useParams();
  const [chapters, setChapters] = useState(null);
  const [change, setChange] = useState(Number(page));
  const navigate = useNavigate();

  console.log(chapters);

  useEffect(() => {
    axios
      .get(apiUrl + `chapters/${id}`)
      .then((res) => setChapters(res.data.all))
      .catch((err) => console.log(err));
  }, []);

  const next = () => {
    if (change === chapters?.pages.length - 1) {
      setChange(0);
    } else {
      setChange(change + 1);
    }
    navigate(`/chapters/${id}/${change + 1}`);
  };

  const before = () => {
    if (change === 0) {
      setChange(chapters?.pages.length - 1);
    } else {
      setChange(change - 1);
    }
    navigate(`/chapters/${id}/${change}`);
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-[15%] bg-orange-500  flex justify-center items-center">
        <p className="text-white">{chapters?.title}</p>
      </div>
      <div className=" w-screen h-[75%] flex items-center justify-evenly">
        <img
          onClick={before}
          src={flechaizq}
          alt=""
          className="w-8 h-8 flex justify-start  cursor-pointer"
        />
        <img
          src={chapters?.pages[change]}
          alt="page"
          className="bg-gray-50 w-[80%] h-[100%] bg-contain"
        />
        <img
          onClick={next}
          src={flechader}
          alt=""
          className="w-8 h-8  cursor-pointer"
        />
      </div>
      <div className="bg-slate-200 w-screen h-[10%] flex justify-center items-center">
        <p className="flex justify-center items-center text-sm text-black">
          Chapter # {change}
        </p>
      </div>
    </div>
  );
}

export default ReadChapter;