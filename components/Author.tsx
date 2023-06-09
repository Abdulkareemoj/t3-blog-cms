import Image from 'next/image'

const Author = ({ author }) => {
    return (
        <div className="relative mt-20 mb-8 rounded-lg bg-opacity-20 p-12 text-center">
            <div className="absolute left-0 right-2 top-14">
                <Image
                    alt={author.name}
                    unoptimized
                    height={100}
                    width={100}
                    src={author.photo.url}
                    className="rounded-full align-middle"
                />
            </div>
            <h3 className="my-4 text-xl font-bold text-white">{author.name}</h3>
            <p className="text-lg text-white">{author.bio}</p>
        </div>
    )
}

export default Author
