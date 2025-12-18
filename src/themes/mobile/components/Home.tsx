import dayjs from "dayjs";

function Home() {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1170&q=80')] w-screen h-dvh text-white overflow-hidden flex flex-col justify-end pb-40 p-6">
      <div className="leading-tight text-[12vw]">
        <time className="block font-light -tracking-light">
          {dayjs().format("h:mm")}
        </time>
        <time className="block font-light -mt-1">{dayjs().format("dddd")}</time>
        <time className="block font-light -mt-1">
          {dayjs().format("MMMM D")}
        </time>
      </div>
      <div className="absolute -mb-35 left-1/2 -translate-x-1/2 opacity-50 animate-pulse">
        <svg width="24" height="24" fill="none" stroke="white">
          <path d="M6 15l6-6 6 6" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

export default Home;
