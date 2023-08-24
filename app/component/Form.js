import React from 'react';

const Form = ({submiting, post, setPost, type,handleSubmit}) => {
    return (
        <div>
           <section className='w-full max-w-full felx-start flex-col'> 
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{type} Post </span>
            </h1>
            <p className='desc text-left mx-w-md'>{type} and Share amazing Prompts with the world, and let your imagination run wild withe any Ai-powered platform. </p>
            <form onSubmit={handleSubmit}  className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
                <label >
                    <span className='font-satoshi  font-semibold text-base text-gray-700'>
                        Your Ai Prompt
                    </span>
                    
                </label>
                <textarea  onChange={(e)=> setPost({...post, prompt:e.target.value})}
                    placeholder='write your pormpt here....'
                    className='form_textarea'
                    value={post.prompt}></textarea>
              
            </form>
           </section>
        </div>
    );
};

export default Form;