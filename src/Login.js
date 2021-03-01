import React from 'react';
import './styles/main.css';
import Logo from './images/logo.png';
import Cover from './images/cover.png';

function Login() {
    return (
        <main class="w-full h-screen flex items-center px-1 lg:px-32 bg-gradient-to-r from-purple-400 to-blue-500">
            {/* <header class="left-0 top-0 p-6 lg:p-32">
            <img src={Logo} class="transform scale-75 rounded"></img>
          </header> */}
            {/* <header class="w-full absolute left-0 top-0 p-3 lg:p-3">
                <div class="flex justify-between">
                    <div>
                    <img src={Logo} class="transform h-20 w-20 rounded"></img>
                    </div>
                </div>
            </header> */}

            <div class="w-full md:w-12/12 xl:w-8/12 ">
                {/* <h1 class="text-5xl lg:text-6xl font-bold text-red-500">FunstaGram</h1> */}
                <img src={Cover} class="transform h-40 w-99 rounded"></img>
                <span class="font-medium uppercase tracking-wideset text-white">You're never fully dressed without a smile!</span>
            </div>

            <div class="container mx-auto flex flex-col items-center">
                <form class="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
                    <input type="text" placeholder="Email" class="mt-8 mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-purple-500" />
                    <input type="text" placeholder="Pasword" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-purple-500" />
                    <button class="w-full bg-purple-700 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
                    <a class="text-purple-400 text-center my-2">Forgot Pasword?</a>
                    <br />
                    <hr />
                    <button class="w-full bg-red-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Create New Account</button>
                </form>
            </div>
        </main>
    );
}

export default Login;
