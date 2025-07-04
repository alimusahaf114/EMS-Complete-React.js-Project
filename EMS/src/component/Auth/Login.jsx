import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2  border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center "
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5  rounded-full"
            type="email"
            placeholder="Enter your email..."
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5  rounded-full mt-4"
            type="password"
            placeholder="Enter your Password..."
          />
          <button className="outline-none mt-4  bg-emerald-600 text-xl py-4 px-5  rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
