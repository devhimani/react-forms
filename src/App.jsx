import "./App.css";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({ name, email, password });
  };

  console.log(name); // but we can use this variable outside.. so thats why we use UseState .

  return (
    <div>
      <form onSubmit={handleSubmit} className="user-form">
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
