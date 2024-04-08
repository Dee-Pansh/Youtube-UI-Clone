import React from 'react'

const commentsData=[
    {
        name:"Deepansh",
        text:"mmmmmmmmmmmmmsd svs vsdfvskvsv h is hfshdfk",
        replies:[
            {
                name:"Akash",
                text:"i am akash",
                replies:[
                    {
                        name:"Chandrachud",
                        text:"i am chandra",
                        replies:[
                            {
                                name:"Manas",
                                text:"Teri maaki chu",
                            },
                            {
                                name:"Pranav",
                                text:"Teri maaki chu",
                                replies:[] 
                            },
                            {
                                name:"Abhinandan",
                                text:"Teri maaki chu",
                            }
                        ]
                    }
                ]
            },
            {
                name:"Junglie",
                text:"I am junglie",
                replies:[
                    {
                        name:"Bhangie",
                        text:"I am bhangie"
                    },
                    {
                        name:"Vivek",
                        text:"I am Vivek"
                    }
                ]
            }
        ]
    },
    {
        name:"Ansh",
        text:"mmmmmmmmmmmmmsd svs vsdfvskvsv h is hfshdfk",
        replies:[
            {
                name:"Akash",
                text:"i am akash",
                replies:[
                    {
                        name:"Chandrachud",
                        text:"i am chandra",
                    }
                ]
            },
            {
                name:"Junglie",
                text:"I am junglie",
                replies:[
                    {
                        name:"Bhangie",
                        text:"I am bhangie"
                    },
                    {
                        name:"Vivek",
                        text:"I am Vivek"
                    }
                ]
            }
        ]
    },
]

const Comment=({data})=>{
    const {name,text,replies}=data
    return (
        <div className='flex bg-gray-200 rounded-lg w-[50vw] m-2'>
            <img className='w-12 h-12' alt='user' src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'/>
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    ) 
}

const CommentsList=({comment})=>{
    return comment.map((comment,index)=><Comment key={index} data={comment}/>)
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comment={commentsData}/>
    </div>
  )
}

export default CommentsContainer