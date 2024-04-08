import React from 'react'

const CommentsContainer = () => {
    const comments=[
        {
            name:"Deepansh",
            msg:"mmmmmmmmmmmmmsd svs vsdfvskvsv h is hfshdfk",
            replies:[
                {
                    name:"Akash",
                    msg:"i am akash",
                    replies:[
                        {
                            name:"Chandrachud",
                            msg:"i am chandra",
                            replies:[
                                {
                                    name:"Manas",
                                    msg:"Teri maaki chu",
                                },
                                {
                                    name:"Pranav",
                                    msg:"Teri maaki chu",
                                    replies:[] 
                                },
                                {
                                    name:"Abhinandan",
                                    msg:"Teri maaki chu",
                                }
                            ]
                        }
                    ]
                },
                {
                    name:"Junglie",
                    msg:"I am junglie",
                    replies:[
                        {
                            name:"Bhangie",
                            msg:"I am bhangie"
                        },
                        {
                            name:"Vivek",
                            msg:"I am Vivek"
                        }
                    ]
                }
            ]
        }
    ]
  return (
    <div>CommentsContainer</div>
  )
}

export default CommentsContainer