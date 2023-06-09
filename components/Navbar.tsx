import Link from 'next/link'
import Categories from './Categories'
import { useState, useEffect } from 'react'
import { getCategories } from 'services'

const Navbar = () => {
    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, [])
    return (
        <div className="container mx-auto mb-8 px-10">
            Navbar
            <div className="inline-block w-full border-b border-blue-400 py-8 ">
                <div className="block md:float-left">
                    <Link href="/">
                        <span className="cursor-pointer text-4xl font-bold text-white">
                            BlogCMS
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/category/${category.slug}`}
                        >
                            <span className="ml-4 cursor-pointer text-xl font-bold text-white md:float-right">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar
