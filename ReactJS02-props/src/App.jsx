import Mycomponent from "./components/Mycomponent";

function App() {
  return (
    <>
      <div>
        <Mycomponent
          title="đây là props title thứ nhất"
          src="https://plus.unsplash.com/premium_photo-1705091981893-15c9a7d33a31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <Mycomponent
      title = "đây là props title thứ hai"
      src = "https://plus.unsplash.com/premium_photo-1705091981942-7bf89aa73655?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </>
  );
}

export default App;
