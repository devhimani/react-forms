import { useRef } from "react";
import "./App.css";

const App = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="user-form">
        <input type="text" placeholder="Name" ref={nameRef} />
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button type="submit">Submit Button</button>
      </form>
    </div>
  );
};

export default App;
