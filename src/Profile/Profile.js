// import React from 'react'
// import { Link } from "react-router-dom";
// import Cover from '..//images/cover.png';

// const Profile = () => {
//     return (

//         // <main class="container mx-auto flex-col h-screen flex flex-wrap content-center">
//         //     <h1>Profile</h1>

//         //     <Link to="/login"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button></Link>
//         // </main>
//         <div class="w-auto mx-auto flex-col flex items-center">
//             <div class="rounded rounded-t-lg overflow-hidden shadow max-w-3xl my-3">
//                 <img src={Cover} class="w-full" />
//                 <div class="flex justify-center -mt-8">
//                     <img src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" class="rounded-full border-solid border-white border-2 -mt-3 w-20 h-20" />
//                 </div>
//                 <div class="text-center px-3 pb-6 pt-2">
//                     <h3 class="text-black text-sm bold font-sans">Jack_Frost</h3>
//                     <p class="mt-2 font-sans font-light text-grey-dark">Hi there, I'm a FunstaGram Developer!</p>
//                 </div>
//                 <div class="flex justify-center pb-3 text-grey-dark">
//                     <div class="text-center mr-3 border-r pr-3">
//                         <h2>34</h2>
//                         <span>Photos</span>
//                     </div>
//                     <div class="text-center">
//                         <h2>42</h2>
//                         <span>Friends</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }




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
