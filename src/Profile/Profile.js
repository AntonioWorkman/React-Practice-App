import React from "react";
import Cover from '..//images/cover.png';
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";


function Profile() {
    return (
        <>
        <Navbar/>
            <main>
                <section class="relative block" style={{ height: "500px" }}>
                    <div
                        class="absolute top-0 w-full h-full bg-center bg-cover">
                        <span
                            id="blackOverlay"
                            class="w-full h-full absolute bg-gradient-to-r from-purple-400 to-blue-500"
                        ><img src={Cover} /></span>
                    </div>
                    <div
                        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px", transform: "translateZ(0)" }}>
                    </div>
                </section>
                <section class="relative py-16 bg-gradient-to-r from-purple-400 to-blue-500">
                    <div class="container mx-auto px-4">
                        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div class="px-6">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div class="relative">
                                            <img
                                                alt="Profile Photo"
                                                src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                                                style={{ maxWidth: "150px" }}
                                            />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div class="py-6 px-3 mt-32 sm:mt-0">
                                            <Link to="/login"><button
                                                class="bg-purple-600 active:bg-purple-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                            >Logout</button></Link>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div class="mr-4 p-3 text-center">
                                                <span class="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    22</span>
                                                <span class="text-sm text-gray-500">Posts</span>
                                            </div>
                                            <div class="mr-4 p-3 text-center">
                                                <span class="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    10</span>
                                                <span class="text-sm text-gray-500">Followers</span>
                                            </div>
                                            <div class="lg:mr-4 p-3 text-center">
                                                <span class="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    89</span>
                                                <span class="text-sm text-gray-500">Following</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center mt-12">
                                    <h3 class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                        Jack Frost</h3>
                                    <div class="mb-2 text-gray-700 mt-5">
                                        <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i>Front-End Developer</div>
                                    <div class="mb-2 text-gray-700">
                                        <i class="fas fa-university mr-2 text-lg text-gray-500"></i>University of Computer Science</div>
                                </div>
                                <div class="mt-10 py-10 border-t border-gray-300 text-center">
                                    <div class="flex flex-wrap justify-center">
                                        <div class="w-full lg:w-9/12 px-4">
                                            <p class="mb-4 text-lg leading-relaxed text-gray-800">
                                                An artist of considerable range, Jenna the name taken by
                                                Melbourne-raised, Brooklyn-based Nick Murphy writes,
                                                performs and records all of his own music, giving it a
                                                warm, intimate feel with a solid groove structure. An
                                                artist of considerable range.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}


export default Profile
