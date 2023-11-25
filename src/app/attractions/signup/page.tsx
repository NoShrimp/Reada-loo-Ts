import React from 'react'
import { LuLogIn } from 'react-icons/lu';


export default function signup() {
    return (
        <div className="hero min-h-screen bg-neutral">
        <div className="hero-content flex flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-right p-10">
            <h1 className="text-6xl font-bold text-secondary-focus">Sign Up</h1>
            <h1 className="text-6xl font-bold text-base-100">now!</h1>
            <LuLogIn className="w-12 h-12 text-base-100 ml-48"/>
            </div>
            <div className="card flex-shrink-0 w-max max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
                <button className="btn btn-info">Signup with Twitter</button>
                <button className="btn btn-success">Signup with Line</button>
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-white">Or</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Surname</span>
                    </label>
                    <input type="surname" placeholder="surname" className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Re-Password</span>
                    </label>
                    <input type="repassword" placeholder="re-password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary w-full">Signup</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}