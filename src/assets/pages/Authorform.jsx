import React, { useRef, useState } from 'react';
import profileImage from '../../../public/img/imageprofile.png';
import axios from 'axios';
import Swal from 'sweetalert2';
export default function AuthorForm() {
  const name = useRef();
  const last_name = useRef();
const city_and_country = useRef();
  const photo = useRef();
  const date = useRef();
function handleForm(e) {
  e.preventDefault();
  
  const [city, country] = city_and_country.current.value.split(',');
if (!city || !country) {
  setInvalidCityCountry(true);
} else {
  setInvalidCityCountry(false);
}
if (InvalidCityCountry) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'There is an error with the city or country entered Here is an example of how "Caseros, Argentina" should be worn. Please try again.',
  });
}
    const data = { 
      name: name.current.value,
      last_name: last_name.current.value,
      country: country.trim(),
      city: city.trim(),
      date: date.current.value,
      photo: photo.current.value,
    };
    axios.post('http://localhost:8000/authors',data)
    .then(res => {
      setHasError(false); 
      console.log(res);
    })
    .catch(err => {
      if (err.response && err.response.status === 400) {
        setHasError(true);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'there is already an author with this name!',
          
        })
      } else {
        
        console.log(err);
      }
    });
    console.log(data);
  }
  function handleChange(event) {
    setProfileImage(event.target.value); 
  }

  const [profileImage1, setProfileImage] = useState(); 
  const [hasError, setHasError] = useState(false);
  const [InvalidCityCountry,setInvalidCityCountry] = useState(false)
  return (
    <div className='bg-[#EBEBEB] h-screen'> 
    <div className='hidden sm:block border border-black bg-bgauthors h-[60vh] bg-cover bg-no-repeat'>
      <h1 className='sm:text-center text-4xl font-bold text-white mt-[4rem] lg:mt-[10rem] xl:text-5xl xl:mt-[15rem]'>New Author</h1>
    </div>
      <div className='border border-black h-screen flex flex-col justify-center content-center items-center '> 
        <h2 className='text-2xl mt-12 lg:text-4xl sm:hidden'>New Author</h2>
        <div className='flex flex-col justify-evenly h-4/6 items-center  sm:absolute sm:w-5/6 sm:z-10 sm:rounded-[10px] sm:top-[10.5rem] lg:top-[21.5rem] lg:w-5/6 sm:bg-white sm:flex-row-reverse xl:top-[27rem] lg:h-[50vh]'>
          <img className='h-40 w-24 mt-4 sm:w-40 lg:w-40 rounded-[500px] lg:h-40' src={profileImage1 || profileImage}  alt='' />
          <form onSubmit={(e) => handleForm(e)} className='h-[100%] flex flex-col justify-evenly lg:w-[40%] 2xl:w-[20%]' action=''>
            <input className={`bg-[#EBEBEB] border border-b-black w-[100%] sm:bg-white ${hasError ? 'border-red-500 border-b-red-500 border-[5px]' : ''}`}  type='text' placeholder='Name'  ref={name} />
            <input className='bg-[#EBEBEB] border border-b-black w-[100%] sm:bg-white' type='text' placeholder='Last Name' ref={last_name} />
            <input className={`bg-[#EBEBEB] border border-b-black w-[100%] sm:bg-white ${ InvalidCityCountry ? 'border-red-500 border-b-red-500 border-[5px]'  : ''}`} type='text' placeholder='City, Country' ref={city_and_country} />

            <input className='bg-[#EBEBEB] border border-b-black w-[100%] sm:bg-white' type='date' placeholder='Birthday' ref={date} />
            <input className='bg-[#EBEBEB] border border-b-black w-[100%] sm:bg-white' type='text' placeholder='URL Profile Image' onChange={handleChange} ref={photo} />
            <button type='submit' className='bg-orange-500 w-[100%] h-12 rounded-[5000px] font-bold text-white lg:w-[40%] lg:justify-start'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}