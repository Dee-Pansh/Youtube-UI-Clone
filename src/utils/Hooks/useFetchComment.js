import { useEffect, useState } from 'react'
import { COMMENT_API } from '../constants';

const useFetchComment = (id) => {
    const [comment, setComment] = useState({});
    useEffect(()=>{fetchComment()},[]);
    const fetchComment=async()=>{
        const data=await fetch(COMMENT_API+id);
        const json=await data.json();
        console.log(json.items[0]["snippet"]["topLevelComment"]["snippet"]);
        setComment(json.items[0]["snippet"]["topLevelComment"]["snippet"]);
    }
   return comment;
}

export default useFetchComment