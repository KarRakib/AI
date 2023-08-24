"use client"

import { useState } from "react";
import Form from "../component/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const createPromt = () => {
    const session = useSession()
    const router = useRouter ()
    const [submiting, setSubmiting] = useState(false)
    const [post, setPost] = useState({
        prompt:"",
        tag:""
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setSubmiting(true);
        try {
            const res = await fetch('api/promt/new',{
                method: "POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify({
                    prompt:post.prompt,
                    userId: session?.user.id,
                    tag:post.tag
                })
            })
            if(res.ok){
                router.push('/')
            }
        } catch (error) {
            console.log(error);
        }finally{
            setSubmiting(false)
        }
    }
    return (
        <div>
            <Form submiting={submiting} post={post} setPost={setPost} type='Create' handleSubmit={handleSubmit} />
        </div>
    );
};

export default createPromt;