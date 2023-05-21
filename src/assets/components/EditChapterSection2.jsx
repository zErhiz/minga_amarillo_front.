import naruto from "../../../public/img/naruto.png"

export default function EditChapterSection2() {
  return (
    <>
        <div className="w-[50vw] h-[100vh] flex flex-col justify-center items-center gap-2 max-md:hidden">
          <p className="text-black"> Chapter #1 - Discover the word </p>
          <img src={naruto} alt="" className="bg-cover h-[70vh]" />
        </div>
    </>
  )
}
