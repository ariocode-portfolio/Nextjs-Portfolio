
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen firstpage relative">

      <div
        className=" flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5  max-w-[750px]">
          <h1 className="text-[50px] text-white mr-20 md:mr-0 text-center md:text-right font-semibold  font-vazirmatn z-[10] md:pb-40 lg:pb-0">
           با توسعه وب همه چیز{" "}
           <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              ممکن است
            </span>
          </h1>
          <p className="text-gray-200 text-center hidden md:block font-vazirmatn md:z-50">
            پورتفولیو تکصفحه ای با قابلیت نویگیشن بین صفحات درونی
          </p>

          {/* links md & lg screens */}
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group md:z-50 relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
             اطلاعات بیشتر
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] md:z-50 group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px]  bg-white inset-0 opacity-0 group-hover:opacity-20" />
              پروژه های من
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] md:z-50 group relative bg-transparent border border-white  px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px]  bg-white inset-0 opacity-0 group-hover:opacity-20" />
              تماس با من
            </Link>
          </div>
        </div>
      </div>
      {/* links mobile screens */}
      <div className=" absolute flex bottom-20 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] font-vazirmatn group bg-blue-500  px-5 py-3 text-lg text-white max-w-[200px]"
        >
       اطلاعات بیشتر
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] font-vazirmatn group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          پروژه های من
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] font-vazirmatn group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          تماس با من
        </Link>
      </div>

      {/* horse & cliff image */}
      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>
      {/* trees image */}
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
