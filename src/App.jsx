import React, { useState } from 'react';
import './App.css';
import MainContent from './main';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '123' && password === '123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Nieprawidłowa nazwa użytkownika lub hasło');
    }
  };

  if (isLoggedIn) {
    return <MainContent />; // Render MainContent as a component
  }

  return (
    <div className="flex h-screen" >
    <div className="w-1/2 bg-gray-200 flex items-center justify-center">
      <img src="/api/placeholder/400/300" alt="Login visual" className="max-w-full h-auto" />
    </div>
    <div className="w-1/2 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/api/placeholder/100/50" alt="Company logo" className="mx-auto" />
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
          <p className="text-gray-600 mb-6">Please enter your login and password</p>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-6 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            <div className="flex flex-col space-y-4">
              <center><button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Log In
              </button></center>
              
            </div>
          </form>
          {error && <div className="mt-4 text-red-500">{error}</div>}
        </div>

        
      </div>
    </div>
  </div>





    // <div className="flex items-center justify-center min-h-screen bg-gray-100">
    //   <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
    //     <h2 className="text-2xl font-bold mb-4">Logowanie</h2>
    //     <form onSubmit={handleLogin}>
    //       <div className="mb-4">
    //         <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nazwa użytkownika</label>
    //         <input
    //           type="text"
    //           id="username"
    //           value={username}
    //           onChange={(e) => setUsername(e.target.value)}
    //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label htmlFor="password" className="block text-sm font-medium text-gray-700">Hasło</label>
    //         <input
    //           type="password"
    //           id="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    //           required
    //         />
    //       </div>
    //       <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
    //         Zaloguj się
    //       </button>
    //     </form>
    //     {error && (
    //       <div className="mt-4 text-red-500">
    //         {error}
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
}

export default App;
