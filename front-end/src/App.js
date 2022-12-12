import "./App.css";

const App = () => {
  return (
    <div className>
      <div className="text-5xl font-bold text-center pt-10 -mb-10">
        <h1> HENRY'S BARBERSHOP</h1>
      </div>

      <div className="text-3xl flex justify-center">
        <p className="m-16 relative group cursor-pointer">
          <span>CALENDAR</span>
          <span className="absolute -bottom-0 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"></span>
        </p>
        <p className="m-16 relative group cursor-pointer">
          <span>GALLERY</span>
          <span className="absolute -bottom-0 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"></span>
        </p>
        <p className="m-16 relative group cursor-pointer">
          <span>REVIEWS</span>
          <span className="absolute -bottom-0 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"></span>
        </p>
      </div>
    </div>
  );
};

export default App;
