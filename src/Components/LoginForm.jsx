import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'

function LoginForm() {
    return (
        <>
            <div className="w-full flex flex-col p-8">
                <h1 className="max-w-md flex-wrap text-left text-2xl text-gray-500 pl-[6rem]">
                    Sign in
                </h1>
            </div>
            <div className="flex w-full max-w-lg flex-col items-center justify-center">
                <form className="w-full p-4">
                    <div className="w-full">
                        <label className="text-primary-400 " htmlFor="mail">
                            E-Mail
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="mb-4 flex w-full flex-col items-center justify-center rounded-sm p-2 shadow-sm transition-all duration-100 ease-in-out focus:outline-0"
                            id="mail"
                        />
                    </div>
                    <div className="w-full pb-10">
                        <label className="text-primary-400 " htmlFor="password">
                            Password
                        </label>
                        <input
                            autoComplete="false"
                            type="password"
                            className="mb-4 flex w-full flex-col items-center justify-center rounded-sm border-none p-2 no-underline shadow-sm transition-all duration-100 ease-in-out focus:outline-0"
                            id="password"
                        />
                    </div>
                    <div className="flex flex-row-reverse items-center w-full">
                        <button
                            className="flex w-2/5 cursor-pointer justify-center rounded-lg border-none bg-tertiary-300 p-2 text-lg font-bold text-white no-underline transition-all duration-100 ease-in-out"
                            type="submit"
                            /*                             to={'/'} */
                        >
                            Sign in!
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm