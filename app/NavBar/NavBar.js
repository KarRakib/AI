'use client'
import Image from 'next/image';
import Link from 'next/link';
import {  signIn, getProviders, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Navbar = () => {
    // const isUserLogin = true
    const{data:session} = useSession()
    console.log(session?.user);
    const [providers, setProviders] = useState(null)
    const [toggleDrop, setToggleDrop] = useState(false)
    // useEffect(() => {
    //     const setProviders = async () => {
    //         const response = await getProviders();
    //         setProviders(response)
    //     }
    //     setProviders();
    // }, [])
    return (
        <div className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex--center'>
                <Image src={'https://i.ibb.co/jZrPF8p/kar-rakib-1.jpg'}
                    width={30} height={30} className='object-contain' />
                <p className='logo_text'>Kar-Rakib</p>
            </Link>
            {/* navigation */}
            <div className='sm:flex hidden'>
                {session?.user ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/create-prompt'>
                            Create Post
                        </Link>
                        <button type='button' onClick={()=>signOut()} className='outline_btn'>
                            Sign Out
                        </button>
                        <Link href='/profile'>
                            <Image
                                src={session?.user?.image}
                                height={30}
                                width={30}
                                alt='too'
                                className='rounded-full'
                            />
                        </Link>
                    </div>
                ) : <>
                    {
                       
                            <button type='button' 
                                onClick={() => signIn()}
                                className='black_btn'
                            >
                                Sign In
                            </button>
                       

                    }
                </>
                }
            </div>

            {/* {Mobile Navigation} */}
            <div className='sm:hidden flex relative'>
                {session?.user? (
                    <div className='flex'>
                        <Image
                            src='https://i.ibb.co/jZrPF8p/kar-rakib-1.jpg'
                            width={37}
                            height={37}
                            className='rounded full'
                            alt='profile'
                            onClick={() => setToggleDrop((prev) => !prev)}
                        />
                        {toggleDrop && (
                            <div className='dropdown'>
                                <Link
                                    href='/profile'
                                    className='dropdown_link'
                                    onClick={() => setToggleDrop(false)}
                                >
                                    MY Profile
                                </Link>
                                <Link
                                    href='/create-prompt'
                                    className='dropdown_link'
                                    onClick={() => setToggleDrop(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                type='button'
                                className='mt-5 w-full black_btn'
                                onClick={()=> {setToggleDrop(false);
                                signOut()}}>
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) :
                    <>
                        {
                           
                            
                                <button type='button' 
                                    onClick={() => signIn()}
                                    className='black_btn'
                                >
                                    Sign In
                                </button>
                           

                        }

                    </>
                }
            </div>
           
        </div>
    );
}

export default Navbar;