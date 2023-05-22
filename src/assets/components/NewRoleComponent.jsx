import React from "react";
import newroleimage from "../../../public/img/newroleimage.png";
import logo from "../../../public/img/ultimaimage.png";
import imageauthor from "../../../public/img/groupauthor.png";
import imagecompany from "../../../public/img/groupcompany.png";
import { useState } from "react";
import Buttons from "./Buttons.jsx";
import { Link as Anchor } from "react-router-dom";
function NewRoleComponent() {
   
    const [checkboxCheckedAuthors, setCheckboxCheckedAuthors] = useState(false)
const handleAuthorsDivClick = () =>{
    setCheckboxCheckedAuthors(true)
    setCheckboxCheckedCompany(false)
}
    const [checkboxCheckedCompany, setCheckboxCheckedCompany] = useState(false);
    const handleCompanyDivClick = () => {
        setCheckboxCheckedCompany(true);
        setCheckboxCheckedAuthors(false)
      };



  return (
    <>
      <div className="h-screen w-full  flex justify-center items-center">
        <div className="w-[100%] sm:w-1/2 h-[100%] flex flex-col justify-center p-2  gap-2">
          <div className="flex flex-col  items-center p-2 xl:-mb-40 xl:gap-2 lg:-mb-52">
            <h2 className="text-orange-500 xl:text-2xl ">Change role to</h2>
            <div className="flex flex-row items-center gap-2">
              <h1 className="text-orange-500 text-3xl xl:text-4xl">Minga</h1>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="h-[70%] flex flex-col gap-2 -mb-20   sm:justify-center md:p-4 xl:p-12 xl:items-center">
            <div onClick={handleAuthorsDivClick} className={`border-2 rounded-2xl h-[30%] relative xl:h-[15%] xl:w-5/6 lg:h-[10%] ${
          checkboxCheckedAuthors ? 'border-orange-500' : null
        }`}>
              <div className="flex justify-evenly p-4 gap-2 items-center content-center   h-[100%] xl:justify-normal xl:gap-8  lg:justify-normal lg:gap-4">
                <img className="object-contain" src={imageauthor} alt="" />
                <div className="flex flex-col ">
                  <h2 className="font-bold text-orange-500 sm:text-xs md:text-base xl:text-2xl lg:text-lg">
                    Join as an Author!
                  </h2>
                  <h3 className="text-orange-500 sm:text-xs md:text-base xl:text-xl">
                    I'm a reader writting a manga
                  </h3>
                </div>
              <input type="checkbox"  className=" cursor-pointer absolute top-2 right-2 rounded-full"
                checked={checkboxCheckedAuthors}
                onChange={() => {}} />
              </div>
            </div>
            <div   onClick={handleCompanyDivClick} className={`border-2 rounded-2xl h-[30%] relative xl:h-[15%] xl:w-5/6 lg:h-[10%] ${
          checkboxCheckedCompany ? 'border-orange-500' : null
        }`}>
              <div className="flex justify-evenly p-4 gap-2 items-center content-center   h-[100%] xl:justify-normal xl:gap-8 lg:justify-normal lg:gap-4">
                <img className="object-contain" src={imagecompany} alt="" />
                <div className="flex flex-col">
                  <h2 className="font-bold text-orange-500 sm:text-xs md:text-base xl:text-2xl lg:text-lg">
                    Join as a Company!
                  </h2>
                  <h3 className="text-orange-500  sm:text-xs md:text-base xl:text-xl">
                    I’m a company and I want to publish my comics
                  </h3>
                </div>
              </div>
              <input type="checkbox"  className=" cursor-pointer absolute top-2 right-2 rounded-full" 
                checked={checkboxCheckedCompany}
                onChange={() => {}}
                />
            </div>
            { checkboxCheckedAuthors?
            <Anchor to="/author-form"> 
            <Buttons
           
              type="submit"
              className="bg-orange-500 w-[100%] h-12 rounded-[5000px] font-bold text-white lg:w-[40%] lg:justify-start xl:w-[10vw]"
            >
               Join as Author
            </Buttons>
            </Anchor>
        :null}
            { checkboxCheckedCompany ? 
            <Anchor to="/cia-form">
            <Buttons
              type="submit"
              className="bg-orange-500 w-[100%] h-12 rounded-[5000px] font-bold text-white lg:w-[40%] lg:justify-start xl:w-[10vw]"
            >
             Join as Company
            </Buttons>
            </Anchor>
            :null }
          </div>
        </div>

        <div className="sm:bg-bgnewrole  sm:bg-cover 2xl:bg-cover 2xl:bg-bottom  sm:bg-no-repeat sm:w-1/2 sm:h-[100%] hidden sm:block ">
            <div className=" h-1/2 flex flex-col justify-center content-center items-center"> 
         <h2 className="text-white font-bold w-1/2 xl:text-2xl sm:text-sm md:text-base lg:text-lg">Minga.com is the best place to find manga reviews. We’ve been super impress by the quality of applicants.   </h2>
         </div>
         <div className=" flex justify-center w-1/2 xl:-mt-20 sm:-mt-10 lg:-mt-20"> 
         <h3 className="text-white font-bold xl:text-xl sm:text-xs md:text-sm lg:text-base">Ignacio Borraz</h3>
         </div>
        </div>
      </div>
    </>
  );
}

export default NewRoleComponent;
