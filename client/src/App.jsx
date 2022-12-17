import CardsContainer from './components/CardsContainer'

const App = () => {
  /*  return (
      <div className="relative">
        <div className="opacity-100">
          <CardsContainer />
        </div>
        <div className="absolute top-0 left-32 w-[700px] h-[700px] bg-purple-700 rounded-full  blur-2xl opacity-50 animate-blob"></div>
        <div className="absolute top-10 right-96 w-[600px] h-[600px] bg-indigo-700 rounded-full  blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute right-[50%] top-[50%] w-[500px] h-[500px] bg-red-600 rounded-full  blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
    ) */

  return (
    <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <CardsContainer />
    </div>
  )
}

export default App

// render cardscontainer
