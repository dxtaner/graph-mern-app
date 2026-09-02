import Tasks from "./pages/Tasks";

function App() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>MERN + GraphQL Task App</h1>
      <hr style={{ margin: "20px 0" }} />
      <Tasks />
    </div>
  );
}

export default App;
