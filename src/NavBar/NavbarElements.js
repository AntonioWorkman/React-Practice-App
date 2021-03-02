import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
 
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;












// function Navbar() {

//     // handleClick() {
//     //     this.setState({
//     //         open: !this.state.open
//     //     });
//     // }

//     return (
//         // <nav class="bg-gradient-to-r from-purple-400 to-blue-500">
//         //     <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         //         <div class="flex items-center justify-between h-16">
//         //             <div class="flex items-center">
//         //                 <div class="flex-shrink-0">
//         //                     <img class="h-12 w-12 rounded" src={Logo} alt="Logo" />
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </nav>

//         <nav class="flex flex-wrap items-center justify-between p-5 bg-gradient-to-r from-purple-400 to-blue-500">
//             <img class="h-12 w-12 rounded" src={Logo} alt="Logo" />
//             <div class="flex md:hidden">
//                 {/* <button id="hamburger">
//                     <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
//                     <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
//                 </button> */}
//                 {/* <HamburgerMenu
//                     open={this.state.open}
//                     onClick={this.handleClick.bind(this)}
//                     width={18}
//                     height={15}
//                     strokeWidth={1}
//                     color='black'
//                     animationDuration={0.5}
//                 /> */}
//             </div>
//             <div class="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
//                 <a href="#" class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home</a>
//                 <a href="#" class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Products</a>
//                 <a href="#" class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Pricing</a>
//                 <a href="#" class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Contact</a>
//             </div>
//             <a href="#" class="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">Create Account</a>
//         </nav>
//     )
// }

