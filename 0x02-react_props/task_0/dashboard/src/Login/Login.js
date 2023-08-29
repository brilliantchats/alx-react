import React from "react";
import "./Login.css";

export default function Login() {
    return (
        <>
              <div className="App-body">
                <p>Login to access the full dashboard</p>
                <label htmlFor="email">Email</label>
                <input name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input name="password" id="password"/>
                <button>OK</button>
              </div>
        </>
    );
}