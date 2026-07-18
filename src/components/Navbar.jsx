import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar(){

const [menuOpen,setMenuOpen] = useState(false);


const navLinks=[
{name:"Home",href:"#home"},
{name:"About",href:"#about"},
{name:"Skills",href:"#skills"},
{name:"Projects",href:"#projects"},
{name:"Education",href:"#education"},
{name:"Experience",href:"#experience"},
{name:"Achievements",href:"#achievements"},
{name:"Contact",href:"#contact"},
];


return(

<nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-slate-800 z-50">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


<h1 className="text-2xl font-bold text-blue-500">
Krishna.dev
</h1>


<ul className="hidden md:flex gap-7 text-white">

{navLinks.map((item)=>(

<li key={item.name}>

<a
href={item.href}
className="hover:text-blue-400 transition"
>
{item.name}
</a>

</li>

))}

</ul>


<button
onClick={()=>setMenuOpen(!menuOpen)}
className="md:hidden text-white text-2xl"
>
{
menuOpen ? <FaTimes/> : <FaBars/>
}
</button>


</div>



{menuOpen && (

<div className="md:hidden bg-slate-900">

<ul className="flex flex-col text-center py-5">

{navLinks.map((item)=>(

<li key={item.name} className="py-3">

<a
href={item.href}
onClick={()=>setMenuOpen(false)}
className="text-white hover:text-blue-400"
>
{item.name}
</a>

</li>

))}

</ul>

</div>

)}

</nav>

)

}

export default Navbar;