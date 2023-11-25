import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCrown } from 'react-icons/fa';

export default function Attractions() {
    return (
        <div className="bg-base-100">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1568226714013-7d634448a476?auto=format&fit=crop&q=80&w=2931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1568226714013-7d634448a476?auto=format&fit=crop&q=80&w=2931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1568226714013-7d634448a476?auto=format&fit=crop&q=80&w=2931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1568226714013-7d634448a476?auto=format&fit=crop&q=80&w=2931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <section className="flex container content-center p-6 max-w-5xl">
            <h2 className="font-sans font-semibold text-3xl p-4 m-5 grid-cols-6">Lastest reading</h2>
            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                <div className="card w-60 bg-secondary shadow-xl m-1">
                    <figure><img src="https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Title
                            <div className="badge badge-warning">Update</div>
                        </h2>
                        <h3>Name Writer</h3>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Comedy</div> 
                        <div className="badge badge-outline">Romantic</div>
                        </div>
                    </div>
                </div>
                </div> 
                <div className="carousel-item">
                <div className="card w-60 bg-secondary shadow-xl m-1">
                    <figure><img src="https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Title
                            <div className="badge badge-warning">Update</div>
                        </h2>
                        <h3>Name Writer</h3>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Horror</div> 
                        <div className="badge badge-outline">Thriller</div>
                        </div>
                    </div>
                </div>
                </div> 
                <div className="carousel-item">
                <div className="card w-60 bg-secondary shadow-xl m-1">
                    <figure><img src="https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Title
                            <div className="badge badge-warning">Update</div>
                        </h2>
                        <h3>Name Writer</h3>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Sci-Fi</div> 
                        <div className="badge badge-outline">Rom-Com</div>
                        </div>
                    </div>
                </div>
                </div> 
                <div className="carousel-item">
                <div className="card w-60 bg-secondary shadow-xl m-1">
                    <figure><img src="https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Title
                            <div className="badge badge-warning">Update</div>
                        </h2>
                        <h3>Name Writer</h3>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Sci-Fi</div> 
                        <div className="badge badge-outline">Rom-Com</div>
                        </div>
                    </div>
                </div>
                </div> 
                <div className="carousel-item">
                <div className="card w-60 bg-secondary shadow-xl m-1">
                    <figure><img src="https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Title
                            <div className="badge badge-warning">Update</div>
                        </h2>
                        <h3>Name Writer</h3>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Sci-Fi</div> 
                        <div className="badge badge-outline">Rom-Com</div>
                        </div>
                    </div>
                </div>
                </div> 
            </div>
            </section>

            <section className="container p-6 max-w-5xl">
                <h1 className="font-sans font-semibold text-4xl">Category </h1>
                <div className="flex">
                    <h2 className="font-sans font-semibold text-3xl p-7">Love Novel <span><a href='' className="link font-sans text-lg text-secondary-focus">View all</a></span></h2>
                </div>
                <div className="grid grid-cols-5 gap-4 p-3">
                <div className="card w-50 h-50 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1594380643296-81144c8c90c4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1594380643296-81144c8c90c4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1594380643296-81144c8c90c4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1594380643296-81144c8c90c4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1594380643296-81144c8c90c4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                </div>

                <h2 className="font-sans font-semibold text-3xl p-7">Boy Love <span><a href='' className="link font-sans text-lg text-secondary-focus">View all</a></span></h2>
                <div className="grid grid-cols-5 gap-4 p-3">
                <div className="card w-50 h-50 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1594380643296-81144c8c90c4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1594380643296-81144c8c90c4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1594380643296-81144c8c90c4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1594380643296-81144c8c90c4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1594380643296-81144c8c90c4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Title!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="container p-6 max-w-5xl">
                <h1 className="font-sans font-semibold text-4xl">You may also like</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Title!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Title!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Title!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Title!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Title!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Title!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Title!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Title!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Title!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container p-6">
                <div className="flex flex-col-5 space-x-6 justify-center">
                    <h1 className="font-sans font-semibold text-accent-focus text-4xl pb-5">All Top Chart</h1>
                    <FaCrown className="text-accent-focus text-4xl"/>
                </div>
                <div className="card w-95 bg-base-100 opacity-95 shadow-xl">
                    <div className="card-body bg-accent items-center text-center rounded-xl">
                    <div className="overflow-x-auto">
                        <table className="table text-base-100">
                            {/* head */}
                            <thead>
                            <tr>
                                <th>
                                </th>
                                <th className="text-base-100">Name</th>
                                <th className="text-base-100">Description</th>
                                <th className="text-base-100">Category</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                </th>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">Title</div>
                                    <div className="text-sm opacity-50">Name Writer</div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                <br/>
                                </td>
                                <td>Romantic</td>
                                <th>
                                    <a href="#">
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </a>
                                </th>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>
                                </th>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">Title</div>
                                    <div className="text-sm opacity-50">Name Writer</div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                <br/>
                                </td>
                                <td>Horror</td>
                                <th>
                                    <a href="#">
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </a>
                                </th>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>
                                </th>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">Title</div>
                                    <div className="text-sm opacity-50">Name Writer</div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                <br/>
                                </td>
                                <td>Sci-Fi</td>
                                <th>
                                    <a href="#">
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </a>
                                </th>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>
                                </th>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">Title</div>
                                    <div className="text-sm opacity-50">Name Writer</div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                <br/>
                                </td>
                                <td>Mystery</td>
                                <th>
                                    <a href="#">
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </a>
                                </th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}