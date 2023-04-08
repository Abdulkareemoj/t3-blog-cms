import Link from "next/link";
import Categories from './Categories';
import { useState, useEffect } from "react"
import { getCategories } from "services"
  
const Navbar = () => {
    
    useEffect(()=>{
    getCategories()
    .then((newCategories)=> setCategories(newCategories))
  }, []
  )
  return (
    <div className='container mx-auto px-10 mb-8'>Navbar
   <div className='border-b w-full inline-block border-blue-400 py-8 '>
    <div className='md:float-left block'>
        <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
                BlogCMS 
            </span>
   </Link>
    </div>
<div className='hidden md:float-left md:contents'>
    {categories.map((category) => (
        <Link key={category.slug}  href={`/category/${category.slug}`}>
            <span className='cursor-pointer md:float-right text-white text-xl font-bold ml-4'>
                {category.name}
            </span>

        </Link>
   ) )}
</div>
   </div>
    </div>
  )
}

export default Navbar