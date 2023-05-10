import { Link, Outlet } from 'react-router-dom'

import React from 'react'

function Signup() {
    return (
        <>
            <div className="relative flex h-screen">
                <div className="flex h-full w-full flex-col items-center justify-center bg-white lg:w-1/2">
                    <div className="flex w-full flex-col items-center justify-center">
                        <Outlet />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 p-4">
                        <div className="flex gap-2">
                            <p>Already a user? </p>
                            <Link
                                className="font-bold text-primary-500 no-underline"
                                to="/login"
                            >
                                Sign in!
                            </Link>
                        </div>
                        <div className="flex gap-2">
                            <p>Back to</p>
                            <Link
                                className="font-bold text-primary-500 no-underline"
                                to="/"
                            >
                                home
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden w-1/2 lg:flex">
                    <img
                        src={'../public/signupBG.jpg'}
                        alt=""
                        className="absolute h-full w-1/2 object-cover"
                    />
                </div>
            </div>
        </>
    )
}

export default Signup