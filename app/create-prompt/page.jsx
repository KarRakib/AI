"use client"

import { useState } from "react";
import Form from "../component/Form";

const createPromt = () => {
    const [submiting, setSubmiting] = useState(false)
    const [post, setPost] = useState({
        promp:"",
        tag:""
    })
    const handleSubmit = e=>{

    }
    return (
        <div>
            <Form submiting={submiting} post={post} setPost={setPost} type='Create' handleSubmit={handleSubmit} />
        </div>
    );
};

export default createPromt;