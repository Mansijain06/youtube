import React from 'react'
import Comment, { CommentsList } from './Comment'

const CommentsContainer = () => {
    const commentsData = [
        {
            name: 'Mansi',
            text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
            replies: []
        },
        {
            name: 'Mansi',
            text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
            replies: [
                {
                    name: 'Mansi',
                    text: " but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
                    replies: [
                        {
                            name: 'Mansi',
                            text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
                            replies: [
                                {
                                    name: 'Mansi',
                                    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
                                    replies: [
                                        {
                                            name: 'Mansi',
                                            text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
                                            replies: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'Mansi',
                            text: "into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
                            replies: []
                        }
                    ]
                }
            ]
        },
        {
            name: 'Mansi',
            text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
            replies: [{
                name: 'Mansi',
                text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
                replies: []
            }, {
                name: 'Mansi',
                text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
                replies: []
            }]
        },
        {
            name: 'Mansi',
            text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
            replies: [{
                name: 'Mansi',
                text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
                replies: [{
                    name: 'Mansi',
                    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
                    replies: []
                }]
            }]
        },
        {
            name: 'Mansi',
            text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
            replies: []
        }
    ]

    return (
        <div className='m-3 p-2 '>
            <h2 className='font-bold text-2xl'>Comments </h2>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer