import "./App.css";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="user-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button type="submit">Button</button>
      </form>
    </div>
  );
};

export default App;
