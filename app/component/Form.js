import Link from 'next/link';
import React from 'react';

const Form = ({ submiting, post, setPost, type, handleSubmit }) => {
    return (
        <div>
            <section className='w-full max-w-full felx-start flex-col'>
                <h1 className='head_text text-left'>
                    <span className='blue_gradient'>{type} Post </span>
                </h1>
                <p className='desc text-left mx-w-md'>{type} and Share amazing Prompts with the world, and let your imagination run wild withe any Ai-powered platform. </p>
                <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
                    <label >
                        <span className='font-satoshi  font-semibold text-base text-gray-700'>
                            Your Ai Prompt
                        </span>

                    </label>
                    <textarea onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        placeholder='write your pormpt here....'
                        className='form_textarea'
                        value={post.prompt} required />
                    <textarea onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        placeholder='write your pormpt here....'
                        className='form_textarea'
                        value={post.prompt} required />
                    <label >
                        <span className='font-satoshi  font-semibold text-base text-gray-700'>
                            Tag {` `} <span className='font-normal'> (#product,# webdevelopment, #idea)</span>
                        </span>

                    </label>
                    <textarea onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        placeholder='write your pormpt here....'
                        className='form_textarea'
                        value={post.prompt} required />
                    <input onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        placeholder='write your pormpt here....'
                        className='form_input'
                        value={post.tag} required />

                </form>
                <div className='flex-end mx-3 mb-5 gap-4'>
        <Link href={'/'} className='text-gray-500 text-sm'>Cancel </Link>
        <button type='submit' className='px-5 py-1.5 text-sm bg-orange-600 rounded-full text-white' disabled={submiting}>
            {submiting ? `${type}...`:type}
        </button>
                </div>
            </section>
        </div>
    );
};

export default Form;