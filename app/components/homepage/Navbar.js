import React, { useState } from 'react';
import Link from 'next/link';

function RegisterForm({ closeModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    alert('Account created');
    closeModal();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-500 text-xl"
      >
        ×
      </button>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">UrbHaven</h2>
      <h2 className="text-2xl font-semibold text-black mb-5">Create Account</h2>
      <form onSubmit={handleRegister}>
        <div className="text-left mb-2">
        <label className="text-left mb-2 text-black">Full Name:</label>
        </div>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 mb-3 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="text-left mb-2">
        <label className="text-left mb-2 text-black">Email:</label>
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="text-left mb-2">
        <label className="text-left mb-2 text-black">Password:</label>
        </div>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          Sign Up
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <button
            onClick={(e) => {
              e.preventDefault();
              closeModal(); // close register
              document.getElementById('open-login')?.click(); // open login
            }}
            className="text-blue-600 hover:underline"
          >
            Sign In
          </button>
        </p>
      </form>
    </div>
  );
}

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-md z-50">
        <div className="flex items-center space-x-2">
          <span className="text-white text-xl font-bold">UrbHaven</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-lg font-medium text-white">
          <Link href="/">Home</Link>
          <Link href="/Properties">Properties</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            id="open-login"
            onClick={() => {
              setIsLoginOpen(true);
              setIsRegisterOpen(false);
            }}
            className="text-sm text-white hover:underline"
          >
            Sign in
          </button>
          <button
            onClick={() => {
              setIsRegisterOpen(true);
              setIsLoginOpen(false);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
          >
            Get started
          </button>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center text-center text-gray-300">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-2 right-2 text-gray-500 text-xl"
            >
              ×
            </button>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">UrbHaven</h2>
            <h2 className="text-2xl font-semibold text-black mb-5">Sign In</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Welcome back!<br /> Please Sign in to your account.
            </p>
            <form>
              <div className="text-left mb-2">
                <label className="text-black">Email:</label>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 px-4 py-2 border rounded"
              />
              <div className="text-left mb-2 ">
                <label className="text-black">Password:</label>
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
              >
                Sign In
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Don't have an account?{' '}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLoginOpen(false);
                    setIsRegisterOpen(true);
                  }}
                  className="text-blue-600 hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center text-center text-gray-300">
          <RegisterForm closeModal={() => setIsRegisterOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default Navbar;

