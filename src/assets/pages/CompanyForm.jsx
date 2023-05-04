import React from 'react'
import WelcomeCompany from '../components/WelcomeCompany';
import CompanyFormComponent from '../components/CompanyFormComponent';
import Error from '../components/Error';

export default function CompanyForm() {
    let user = localStorage.getItem("user");
    
    let role = JSON.parse(localStorage.getItem('user'))?.role
    let token = localStorage.getItem("token");


  return (
    <>
      { role=== 0 ? <div className='bg-[#EBEBEB] h-screen'>
    <WelcomeCompany/>
    <CompanyFormComponent/>
    </div> :<Error/>}
    </>
  )
}
