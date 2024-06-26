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
                                text:"Hello Chandrachud",
                            },
                            {
                                name:"Pranav",
                                text:"Hi Chandu Sir",
                                replies:[] 
                            },
                            {
                                name:"Abhinandan",
                                text:"Hey",
                            }
                        ]
                    }
                ]
            },
            {
                name:"Jungle",
                text:"I am new to youtube",
                replies:[
                    {
                        name:"Bhargav",
                        text:"Hi Jungle, welcome to youtube"
                    },
                    {
                        name:"Vivek",
                        text:"Round of appluase to Vivek and Jungle Bro"
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
    console.log("replies: ",replies);
    return (
        <div className='flex border border-l-2 rounded-lg w-[50vw] m-2'>
            <img className='w-12 h-12' alt='user' src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'/>
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
                {replies && <CommentsList comment={replies}/>}
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