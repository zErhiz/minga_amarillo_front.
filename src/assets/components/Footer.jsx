import imagenfooter from '../../../public/img/Youtube.png'
import imagenfooter2 from '../../../public/img/Vimeo.png'
import imagenfooter3 from '../../../public/img/Twitter.png'
import imagenfooter4 from '../../../public/img/Facebook.jpg'
import imagenfooterbakugo from '../../../public/img/footerimage.png'
import ultima from '../../../public/img/ultimaimage.png'
import corazon from '../../../public/img/Union.png'
export default function Footer() {
  return (
    <><img className='rounded-[50%_50%_48%52%/_0%_0%_100%_100%] h-[30vh] object-cover object-right sm:object-top sm:w-screen lg:h-[30vh]' src={imagenfooterbakugo} alt="" />
    <div className='lg:w-[100%]  justify-center flex'> 
    <footer className=' flex flex-col items-center justify-around xl:gap-80 h-72 lg:flex-row lg:w-[60%] lg:justify-between  border-b-4 border-neutral-400'>
      <div className='flex flex-row gap-4 w-5/6 justify-evenly lg:gap-4'>
        <h5 className="font-poppins text-2xl">Home</h5>
        <h5 className="font-poppins text-2xl">Mangas</h5>
      </div>
      <div className="flex flex-row justify-evenly w-1/2 lg:mr-10 xl:justify-normal xl:gap-2">
        <h2 className="font-poppins text-3xl text-orange-500 font-bold">Minga</h2>
        <img src={ultima} alt="" />
      </div>
      <div className=" lg:float-right">
        <div className="flex flex-row gap-7 mb-2">
          <img src={imagenfooter4} alt="" className="w-5 h-auto" />
          <img src={imagenfooter3} alt="" className="w-5 h-auto" />
          <img src={imagenfooter2} alt="" className="w-5 h-auto" />
          <img src={imagenfooter} alt="" className="w-5 h-auto" />
        </div>
        <button className=" font-poppins flex rounded items-center gap-2 text-right bg-orange-500 text-white px-10 lg:px-14 py-3 font-bold hover:bg-orange-600">Donate <img src={corazon} alt="" /></button>
      </div>
    </footer>
    </div></>
  )
}
