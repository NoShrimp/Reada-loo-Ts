'use client'
import React from 'react'
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function login() {
    return (
        <div className="hero min-h-screen bg-neutral">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-right">
            <h1 className="text-6xl font-bold text-base-100"><span className="text-secondary-focus">Login</span> now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <button onClick={() => signIn('google')} className="btn btn-info">Login with Google</button>
                <button onClick={() => signIn('line')} className="btn btn-success">Login with Line</button>
                {/* <div className="form-control">
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
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div> */}
            </div>
            </div>
        </div>
        </div>
    )
}