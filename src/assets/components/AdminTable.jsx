import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import active_inactive_actions from "../../store/actions/active_inactive";
import active_inactive_companie_actions from "../../store/actions/active_inactive_company";
import action_button from "../../store/actions/state_admin_panel"
import SwitchAdminPanel from "./SwitchAdminPanel";
import ButtonAdmin from "./ButtonAdmin";
import { useState } from "react";
function AdminTable() {
  const [isActiveAuthors, setIsActiveAuthors] = useState(false);
  const [isActiveCompany, setIsActiveCompany] = useState(true);
  if (isActiveAuthors === false && isActiveCompany === false) {
    setIsActiveCompany(true);
  }
  const handleClickButtonAuthors = () => {
    setIsActiveAuthors(!isActiveAuthors);
    setIsActiveCompany(false);
    dispatch(state_admin_button({button:false}))
  };
  const handleClickButtonCompany = () => {
    setIsActiveCompany(!isActiveCompany);
    setIsActiveAuthors(false);
    dispatch(state_admin_button({button:true}))
  };
  const dispatch = useDispatch();
  const { read_active_inactive, upd_author } = active_inactive_actions;
  const { state_admin_button} = action_button
  const storebutton = useSelector((store)=>store?.stateButton)

  const store = useSelector((store) => store?.activeOrInactive);
  const { read_active_inactive_company, upd_company } =
    active_inactive_companie_actions;
  const storeCompanies = useSelector(
    (store) => store?.activeOrInactiveCompanies
  );
  
  useEffect(() => {
    if (!store?.activeOrInactive) {
      dispatch(read_active_inactive());
    }
    if (!storeCompanies?.activeOrInactiveCompanies) {
      dispatch(read_active_inactive_company());
    }
    if(storebutton.button === true){
      setIsActiveCompany(true)
      setIsActiveAuthors(false)
    }
    if(storebutton.button === false){
      setIsActiveAuthors(true)
      setIsActiveCompany(false)
    }
  }, []);

  const handleSwitchChange = (iddelauthorpasadoabajo) => {
    try {
      const updatedData = { active: true };
      dispatch(upd_author({ id: iddelauthorpasadoabajo, data: updatedData }));
      console.log(`Author ${iddelauthorpasadoabajo} updated successfully.`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSwitchChangeCompany = (iddelacompania) => {
    try {
      const updatedData = { active: true };
      dispatch(upd_company({ id: iddelacompania, data: updatedData }));
      console.log(`Company ${iddelacompania} updated successfully.`);
    } catch (error) {
      console.log(error);
    }
  };
  // verificamos si es undefined si no tira error por que no llega a ejecutarse el effect
  //authors
  const authors = store?.inactive_active || [];
  const authorsWithActiveTrue = authors?.filter(
    (author) => author.active === true
  );
  const authorsWithActiveFalse = authors?.filter(
    (author) => author.active === false
  );

  //companias
  const activeCompanies = storeCompanies?.inactive_active_company || [];
  const companyWithActiveTrue = activeCompanies?.filter(
    (activeCompanies) => activeCompanies.active === true
  );
  const companyWithActiveFalse = activeCompanies?.filter(
    (activeCompanies) => activeCompanies.active === false
  );


  return (
    <div className=" w-[100%] sm:w-[80%] md:w-[50%]">
      <div className="w-[100%] border flex flex-row border-b-orange-500">
        <div className="w-1/2 border bg-white h-[7vh] md:h-[5.5vh]   flex justify-center items-center content-center">
          <ButtonAdmin
            active={isActiveCompany}
            onClick={handleClickButtonCompany}
          >
            Companies
          </ButtonAdmin>
        </div>
        <div className="w-1/2 bg-white h-[7vh] md:h-[5.5vh] flex justify-center items-center content-center">
          <ButtonAdmin
            active={isActiveAuthors}
            onClick={handleClickButtonAuthors}
          >
            Authors
          </ButtonAdmin>
        </div>
      </div>
      <div className="overflow-y-scroll h-[20vh] overflow-x-scroll w-[100vw] sm:overflow-x-hidden sm:w-[100%]">
        {isActiveAuthors
          ? [...authorsWithActiveFalse, ...authorsWithActiveTrue].map(
              (author) => (
                <table
                  key={author.id}
                  className="  w-[100%] border border-black "
                >
                  <tbody className="w-[100%] sm:w-[100%]  ">
                    <tr className="border border-slate-300">
                      <td className=" w-[1%] sm:w-[2%] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="black"
                          className="w-6 h-6 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </td>
                      <td className="  min-w-[30%] max-w-[30%] sm:w-[20%] sm:text-left">
                        {author.name && author.name.toUpperCase()}{" "}
                        {author.last_name && author.last_name.toUpperCase()}
                      </td>

                      <td className="border border-slate-300 sm:border-none  min-w-[20%] max-w-[20%] sm:w-[20%] sm:text-center">
                        {" "}
                        {author.date &&
                          `${author.date
                            .split("-")
                            .reverse()
                            .join("-")
                            .slice(0, 2)}${author.date
                            .split("-")
                            .reverse()
                            .join("-")
                            .slice(-8)}`}
                      </td>

                      <td className=" border border-slate-300 sm:border-none  min-w-[20%] max-w-[20%] sm:w-[20%] sm:text-center">
                        {author.city && author.city.toUpperCase()}
                      </td>

                      <td className=" border border-slate-300 sm:border-none  min-w-[10%] max-w-[10%] sm:w-[7%] md:w-[10%] 2xl:w-[3.5%] ">
                        <img
                          className="2xl:h-8 2xl:w-8 h-12 w-12  rounded-[50%] "
                          src={author.photo}
                          alt=""
                        />
                      </td>

                      <td className=" border border-slate-300 sm:border-none   sm:w-[10%] sm:text-center">
                        <SwitchAdminPanel
                          checked={author.active}
                          onChange={() => handleSwitchChange(author.user_id)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )
            )
          : [...companyWithActiveFalse, ...companyWithActiveTrue].map(
              (companies) => (
                <table
                  key={companies.id}
                  className=" border border-orange-500 w-[100%]"
                >
                  <tbody className="w-[100%]">
                    <tr className="border border-slate-300">
                      <td className="w-[2%]  border border-slate-300 sm:border-none ">
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
                            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                          />
                        </svg>
                      </td>
                      <td className=" border border-slate-300 sm:border-none  min-w-[20%] max-w-[20%] w-[20%] text-left ">
                        {companies.name && companies.name.toUpperCase()}
                      </td>

                      <td className=" border border-slate-300 sm:border-none  min-w-[20%] max-w-[20%] w-[20%] text-center">
                        {" "}
                        {companies.website}
                      </td>

                      <td className=" border border-slate-300 sm:border-none  min-w-[20%] max-w-[20%]  w-[20%] ">
                        <img
                          className="h-8 w-8 rounded-[50%]  sm:ml-4 lg:ml-12 xl:ml-16 2xl:ml-24 "
                          src={companies.logo}
                          alt=""
                        />
                      </td>

                      <td className=" border border-slate-300 sm:border-none  w-[10%] text-center">
                        <SwitchAdminPanel
                          checked={companies.active}
                          onChange={() =>
                            handleSwitchChangeCompany(companies.user_id)
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )
            )}{" "}
      </div>
    </div>
  );
}

export default AdminTable;
