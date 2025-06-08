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
          <label className="text-black">Full Name:</label>
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
          <label className="text-black">Email:</label>
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
          <label className="text-black">Password:</label>
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
              closeModal();
              document.getElementById('open-login')?.click();
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-black/40 backdrop-blur-md z-50">
        <div className="flex items-center space-x-2">
          <span className="text-white text-xl font-bold">UrbHaven</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6 text-lg font-medium text-white">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
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

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 w-full bg-black/90 backdrop-blur-md z-40 text-white px-6 py-4 space-y-4 space-x-10">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <div className="flex flex-col space-y-2 pt-4 border-t border-gray-600">
            <button
              onClick={() => {
                setIsLoginOpen(true);
                setIsRegisterOpen(false);
                setMobileMenuOpen(false);
              }}
              className="text-sm hover:underline"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                setIsRegisterOpen(true);
                setIsLoginOpen(false);
                setMobileMenuOpen(false);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
            >
              Get started
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 text-gray-300 overflow-auto">
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
              <div className="text-left mb-2">
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
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 text-gray-300 overflow-auto">
          <RegisterForm closeModal={() => setIsRegisterOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
