import { Link, Outlet } from 'react-router-dom'

import NumberCounter from '../Components/Visitors'


function Login() {
    return (
        <>
            <div className="relative flex flex-row-reverse w-full h-screen pr-14 pb-10">
                <div className="z-10 flex h-[75%] rounded-3xl self-center flex-col items-center justify-center bg-white lg:w-1/2">
                    <div className="flex w-full flex-col items-center justify-center">
                        {<Outlet />}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 p-4">
                    <div className="flex gap-1 lg:gap-2">
                            <p>New user?</p>
                            <Link
                                className="font-bold text-primary-500 no-underline"
                                to="/signup"
                            >
                                Create an account!
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
                <div className="hidden lg:w-1/2 lg:flex">
                <div className='z-20 rounded-3xl flex flex-col items-center self-center ml-[5rem] h-2/3 w-2/3 pt-10 bg-[#d1cfcfbc]'>
                    <h2 className='p-10 self-start md:self-center md:pt-0 md:text-[1.4rem] text-#333 font-bold '>
                    Sign in and start enjoying the exclusive benefits for travelers! Customize your travel itineraries, receive expert recommendations and access discounts on accommodation and activities. Join our community of travelers and discover a world full of adventures!
                    </h2>
                    <NumberCounter />
                </div>
                    <img
                        src={"../public/loginBG.jpg"}
                        alt=""
                        className="absolute h-full w-full object-fill"
                    />
                </div>
            </div>
        </>
    )
}

export default Login