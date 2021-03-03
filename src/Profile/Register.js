import React from 'react';
import '../styles/main.css';
import Logo from '../images/logo.png';
import Cover from '../images/cover.png';
import { Link } from "react-router-dom";

function Register() {
    return (

        <main class="w-full h-screen flex items-center px-1 lg:px-32 bg-gradient-to-r from-purple-400 to-blue-500">

            <div class="w-full md:w-12/12 xl:w-8/12 ">
                {/* <h1 class="text-5xl lg:text-6xl font-bold text-red-500">FunstaGram</h1> */}
                <img src={Cover} class="transform h-40 w-99 rounded"></img>
                <span class="font-medium uppercase tracking-wideset text-white">You're never fully dressed without a smile!</span>
            </div>

            <div class="container mx-auto px-4 h-full">
                <div class="flex content-center items-center justify-center h-full">
                    <div class="w-full lg:w-4/12 px-4">
                        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                            <div class="rounded-t mb-0 px-6 py-6">
                            
                                <form>
                                <div class="mb-4 font-bold text-2xl text-purple-900 text-center">Register Now</div>
                                    <div class="relative w-full mb-3">
                                        <label
                                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password">Given Name</label>
                                        <input
                                            type="text"
                                            class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            placeholder="First Name" />
                                    </div>

                                    <div class="relative w-full mb-3">
                                        <label
                                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password">Surname</label>
                                        <input
                                            type="text"
                                            class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            placeholder="Last Name" />
                                    </div>

                                    <div class="relative w-full mb-3">
                                        <label
                                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password">Email</label>
                                        <input
                                            type="email"
                                            class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            placeholder="Email" />
                                    </div>

                                    <div class="relative w-full mb-3">
                                        <label
                                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password">Password</label>
                                        <input
                                            type="password"
                                            class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            placeholder="Password" />
                                    </div>

                                    <div class="relative w-full mb-3">
                                        <label
                                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password">Confirm Password</label>
                                        <input
                                            type="password"
                                            class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            placeholder="Confirm Password" />
                                    </div>

                                    <div class="text-center mt-6">
                                        <Link to="/home"><button
                                            class="bg-purple-900 text-white active:bg-purple-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                            type="button">Register</button></Link>

                                        <Link to="/login"><label
                                            class="text-grey-500 text-sm font-bold uppercase"
                                            type="button"></label>Already have an account?<strong class="ml-2 text-sm text-pink-500">Login Now.</strong></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;
