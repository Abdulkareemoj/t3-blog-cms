import moment from 'moment'
import parse from 'html-react-parser'
import { useState, useEffect } from 'react'
import { getComments } from 'services'

const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        getComments(slug).then((result) => setComments(result))
    }, [])

    return (
        <div>
            {comment.length > 0 && (
                <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
                    <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
                        {comments.length}{' '}
                    </h3>
                    {comments.map((comment) => (
                        <div
                            key={comment.createdAt}
                            className="mb-4 border-b border-gray-100 pb-4"
                        >
                            <p className="mb-4">
                                <span className="font-semibold">
                                    {comment.name}
                                </span>{' '}
                                on{' '}
                                {moment(comment.createdAt).format('MM DD,YYYY')}
                            </p>
                            <p className="w-full whitespace-pre-line text-gray-100">
                                {parse(comment.comment)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Comments
