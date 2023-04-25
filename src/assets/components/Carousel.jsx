import imagennami from '../../../public/img/imagen1.png'
import imagenluffy from '../../../public/img/luffy.png'
import flechader from '../../../public/img/circle arrow.png'
import flechaizq from '../../../public/img/circle arrow2.png'
export default function Carousel() {
  return (
    <>  <main className="hidden bg-white sm:block sm:p-10 lg:p-28 xl:p-12"> 
  
    <div className="bg-bgnaranja bg-cover flex sm:flex-row justify-between items-center gap-4 lg:gap-20">
  <div className="flex sm:w-1/4 items-center justify-center">
    <img src={flechaizq} alt="" className="w-8 h-8 flex justify-start" />
  </div>
  <div className="flex sm:w-1/2 items-center justify-center lg:gap-20 xl:gap-40">
    <img src={imagennami} alt="nami" className=" sm:h-50 sm:ml-4 sm:mt-[-1rem] lg:mt-[-5rem]  xl:h-60 xl:ml-[-9rem] xl:mt-[-2rem]" />
    <img src={imagenluffy} alt="luffy" className="sm:h-50 sm:mt-[-2rem] xl:h-60  xl:ml-[-2rem] xl:mt-[-4rem]" />
  </div>
  <div className="flex sm:w-1/4 items-center justify-center xl:w-0"></div>
  <div className="w-full sm:w-1/2  xl:mt-[4rem]">
    <h3 className="text-white sm:text-2xl font-semibold">Shonen</h3>
    <p className="text-white sm:text-1xl sm:overflow-auto sm:h-20  xl:h-40">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
  </div>
  <div className="flex sm:w-1/4 items-center justify-center">
    <img src={flechader} alt="" className="w-8 h-8" />
  </div>
</div>
</main></>
  )
}
