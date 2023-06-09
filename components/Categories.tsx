import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getCategories } from 'services'

// import { Categories } from '../types/Categories'

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
            .catch((e) => {
                console.error(e)
            })
    }, [])

    //  const category = ({ categories }: categories) => {
    return (
        <div className=" mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
            <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
                Categories
            </h3>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="mb-3 block cursor-pointer pb-3">
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}
// }

export default Categories
