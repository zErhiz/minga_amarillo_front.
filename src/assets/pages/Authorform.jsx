import React, { useRef, useState } from 'react';
import profileImage from '../../../public/img/imageprofile.png';
import axios from 'axios';
import Swal from 'sweetalert2';
import Error from '../components/Error';
import { Link as Anchor, useNavigate } from 'react-router-dom'
import AuthorFormComponent from '../components/AuthorFormComponent';
import WelcomeAuthorForm from '../components/WelcomeAuthorForm';
let token = localStorage.getItem('token')
let headers = {headers:{'Authorization':`Bearer ${token}`}}
let role = JSON.parse(localStorage.getItem('user'))?.role
export default function AuthorForm() {
 
  return (
    <>
   { role=== 0 ?  <div className='bg-[#EBEBEB] h-screen'> 
    <WelcomeAuthorForm/>
    <AuthorFormComponent/>
    </div> :<Error/>}
    </>
  );
}