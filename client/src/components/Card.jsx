// render data prettily
// handle votes

const Card = ({ title, href }) => {
  console.log(title, href)

  return (
    <div className=" flex flex-col justify-center items-center gap-10 p-8">
      <h1 className="font-light text-2xl md:text-3xl lg:text-5xl bg-gradient-to-b from-white to-[#38495a] bg-clip-text text-transparent">{title}</h1>
      <div className="aspect-w-5 aspect-h-4 md:aspect-w-4 md:aspect-h-5 lg:aspect-w-1 lg:aspect-h-1 xl:aspect-w-5 xl:aspect-h-4 overflow-hidden rounded-lg bg-gray-200 hover:scale-[0.95] duration-1000 ease-out">
        <img src={href} alt={title} />
      </div>
      <div className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-tilt"></div>
        <button className="relative px-10 py-4 bg-black rounded-xl leading-none text-indigo-400 group-hover:text-gray-100 group-hover:scale-105 duration-500">
          Cooler!
        </button>

      </div>
    </div >
  )
}

export default Card
