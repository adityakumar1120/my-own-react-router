import React from 'react'
import MyLink from '../react-router/MyLink'
import useNavigate from '../react-router/hooks/useNavigate';
import { replace } from 'react-router';

export default function Navbar() {
    const navigate  = useNavigate()
return (
    <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-6 list-none m-0 p-0">
            <li>
                <MyLink   style={({ isActive }) => {
 return isActive ? { color: "plum" } : {};
 }}
                 state='I am Home' to='/'>home</ MyLink>
                {/* <a href="/" className="text-white hover:text-gray-300">Home</a> */}
            </li>
            <li>
                <MyLink   style={({ isActive }) => {
 return isActive ? { color: "plum" } : {};
 }}
                 state='I am About' to='/about'>About</MyLink>

                {/* <a href="/about" className="text-white hover:text-gray-300">About</a> */}
            </li>
            <li>
                <MyLink   style={({ isActive }) => {
 return isActive ? { color: "plum" } : {};
 }}y
                 state='I am contact' to='/contact'>contact</MyLink>

                {/* <a href="/contact" className="text-white hover:text-gray-300">Contact</a> */}
            </li>
            <li>
            <MyLink   style={({ isActive }) => {
 return isActive ? { color: "plum" } : {};
 }}y
                 state='I am explore' to='/explore'>Explore</MyLink>
            </li>
        </ul>
    </nav>
)
}
