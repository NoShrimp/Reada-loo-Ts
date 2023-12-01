import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCrown } from 'react-icons/fa';

export default function Attractions() {
    return (
        <div className="bg-base-100">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/j8KppsP/64f057b4uxipw-Bl-O.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/bKzzS7j/6020f77ad7-THamw3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/bFDjnVt/t95-Cx-Ovamvn7v-CR4-Uz-IQuuj-T.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <section className="flex container content-center p-6 max-w-5xl">
                <h2 className="font-sans font-semibold text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl p-4 m-5 grid-cols-6">Lastest reading</h2>
                <div className="carousel carousel-center rounded-box">
                    <div className="carousel-item">
                        <div className="card w-48 xl:w-60 bg-secondary shadow-xl m-1">
                            <figure><img className='w-full h-[180px]' src="https://i.ibb.co/cFSgVFn/Dimensional-Sovereign.jpg" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    มิติราชัน ตอนที่ 3 !!!
                                    <div className="badge badge-warning text-md sm:text-sm">Update</div>
                                </h2>
                                <h3>오렌</h3>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline text-md sm:text-sm">Action</div>
                                    <div className="badge badge-outline text-md sm:text-sm">Fantasy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card w-48 xl:w-60 bg-secondary shadow-xl m-1">
                            <figure><img className='w-full h-[180px]' src="https://i.ibb.co/G0jfrvP/book-detail-large-gif.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                ชายาแพทย์ขั้นหนึ่ง ตอนที่ 2!!
                                    <div className="badge badge-warning">Update</div>
                                </h2>
                                <h3>Name Writer</h3>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Romance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card w-48 xl:w-60 bg-secondary shadow-xl m-1">
                            <figure><img className='w-full h-[180px]' src="https://i.ibb.co/FwwGzgw/PDF.jpg" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                มายทิชเชอร์คุณครูสุดสวย ตอนที่ 2 !!!
                                    <div className="badge badge-warning">Update</div>
                                </h2>
                                <h3>Name Writer</h3>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Romance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card w-48 xl:w-60 bg-secondary shadow-xl m-1">
                            <figure><img className='w-full h-[180px]' src="https://i.ibb.co/0cWjwsr/6000073717-front-XXXL.webp" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    หมาป่าแทนคุณ
                                    <div className="badge badge-warning">Update</div>
                                </h2>
                                <h3>Name Writer</h3>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Sci-Fi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card w-48 xl:w-60 bg-secondary shadow-xl m-1">
                            <figure><img className='w-full h-[180px]' src="https://i.ibb.co/CH6My69/626917e2-JIx-GIr6-T-1.jpg"/></figure>
                            <div className="card-body">
                                <h2 className="card-title text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                ตำนานสุยอวิ๋นยอดกุนซือ
                                    <div className="badge badge-warning">Update</div>
                                </h2>
                                <h3>Name Writer</h3>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Sci-Fi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container p-6 max-w-5xl">
                <h1 className="font-sans font-semibold text-xl xl:text-4xl lg:text-3xl md:text=2xl sm:text-xl">Category </h1>
                <div className="flex">
                    <h2 className="font-sans font-semibold text-base xl:text-3xl lg:text-2xl md:text=xl sm:text-base p-7">Love Novel </h2>
                </div>
                <div className="grid grid-col-3 sm:grid-col-3 md:grid-col-3 lg:grid-col-4 xl:grid-cols-5 gap-3 p-2">
                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="https://i.ibb.co/G0jfrvP/book-detail-large-gif.jpg" className="w-full" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">ชายาแพทย์ขั้นหนึ่ง</h2>
                            <p>ผู้แต่ง ชิงอวิ๋นเช่อ  <br />
                            </p>
                            <div className="card-actions justify-end">
                                <a href="attractions/Novel/doctor" className="btn btn-primary">read</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="https://i.ibb.co/VJZj9Cx/2-1-13.jpg" className="w-full" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">มหามรรคาเทียบเทียมฟ้า ภาค 2</h2>
                            <p>ผู้แต่ง มาวนี่ <br />
                            </p>
                            <div className="card-actions justify-end">
                            <a href="attractions/Novel/doctor" className="btn btn-primary">read</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="https://i.ibb.co/2vrkN6S/D9d0-I33aglis-IX2-Z.jpg" className="w-full"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">คุณหนูสี่สตรีเปื้อนเลือด</h2>
                            <p>ผู้แต่ง Yukuai xiao fei rou <br />
                            </p>
                            <div className="card-actions justify-end">
                            <a href="attractions/Novel/doctor" className="btn btn-primary">read</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="https://i.ibb.co/0cWjwsr/6000073717-front-XXXL.webp" className="w-full" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">หมาป่าแทนคุณ</h2>
                            <p>ผู้แต่ง Gong Xin Wen <br />
                            </p>
                            <div className="card-actions justify-end">
                            <a href="attractions/Novel/doctor" className="btn btn-primary">read</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="https://i.ibb.co/5vy8GH4/1000226624-back-XXXL.jpg" className="w-full" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">เล่ห์รัก</h2>
                            <p>ผู้แต่ง ซูเสี่ยวหน่วน <br />
                            </p>
                            <div className="card-actions justify-end">
                            <a href="attractions/Novel/love" className="btn btn-primary">read</a>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="font-sans font-semibold text-3xl p-7">Action</h2>
                <div className="grid grid-col-2 sm:grid-col-2 md:grid-col-3 lg:grid-col-4 xl:grid-cols-5 gap-3 p-2">
                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="https://i.ibb.co/cFSgVFn/Dimensional-Sovereign.jpg" className="w-full" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Dimension Sorvereign ภาค 1</h2>
                            <p>ผู้แต่ง 오렌
                            </p>
                            <div className="card-actions justify-end">
                                <a className='btn btn-primary' href="/attractions/Novel/dimension">Read</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="https://i.ibb.co/CH6My69/626917e2-JIx-GIr6-T-1.jpg" className="w-full" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">ตำนานสุยอวิ๋นยอดกุนซือ</h2>
                            <p>ผู้แต่ง สุยปัวจู๋หลิว</p>
                            <div className="card-actions justify-end">
                            <a className='btn btn-primary' href="/attractions/Novel/Kunsue">Read</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure><img src="https://i.ibb.co/cFSgVFn/Dimensional-Sovereign.jpg" className="w-full" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Dimension Sorvereign ภาค 2</h2>
                            <p>ผู้แต่ง 오렌</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-50 h-50 bg-base-100 shadow-xl image-full">
                        <figure><img src="https://images.unsplash.com/photo-1594380643296-81144c8c90c4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center mt-20">Coming soon</h2>
                        </div>
                    </div>
                    <div className="card w-50 h-50 bg-base-100 shadow-xl image-full">
                        <figure><img src="https://images.unsplash.com/photo-1594380643296-81144c8c90c4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center mt-20">Coming soon</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container p-6 max-w-5xl">
                <h1 className="font-sans font-semibold text-4xl">You may also like</h1>
                <div className="grid grid-col-1 sm:grid-col-1 md:grid-col-2 lg:grid-col-3 xl:grid-cols-3 gap-4">
                    <div className="card card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Dimension มิติราชัน</h2>
                            <p>Top 1 reading Action</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">ชายาแพทย์ขั้นหนึ่ง</h2>
                            <p>Top 1 reading Romance</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Title!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Title!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Title!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
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
                    <FaCrown className="text-accent-focus text-4xl" />
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

                                                <div>
                                                    <div className="font-bold">ชายาแพทย์ขั้นหนึ่ง</div>
                                                    <div className="text-sm opacity-50">เม่ยอวี๋เจ่อ (Mei Yu Zhe) </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            จากแม่ทัพสู่การเป็นฮ่องเต้ผู้รักเดียวใจเดียว...
                                            <br />
                                        </td>
                                        <td>Romantic</td>
                                        <th>
                                            <a href="/attractions/Novel/doctor">
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

                                                <div>
                                                    <div className="font-bold">เล่ห์รัก</div>
                                                    <div className="text-sm opacity-50"> ซูเสี่ยวหน่วน</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            ซูอิ่ง สายลับสาวจากโลกปัจจุบันเสียชีวิตจากการปฏิบัติงาน...
                                            <br />
                                        </td>
                                        <td>Romantic</td>
                                        <th>
                                            <a href="/attractions/Novel/love">
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

                                                <div>
                                                    <div className="font-bold">มิติราชัน</div>
                                                    <div className="text-sm opacity-50">오렌</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            วันหนึ่งพระเอกได้รับพลังอันลึกลับจากมิติแห่งความฝัน...
                                            <br />
                                        </td>
                                        <td>Fantasy</td>
                                        <th>
                                            <a href="/attractions/Novel/dimension">
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

                                                <div>
                                                    <div className="font-bold">ตำนานสุยอวิ๋นยอดกุนซือ</div>
                                                    <div className="text-sm opacity-50">สุยปัวจู๋หลิว</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            ในยุคที่มีสงครามระหว่างแคว้น &quot;สุยอวิ๋น&quot; ผู้เกิดมาในครอบครัวยากจน...
                                            <br />
                                        </td>
                                        <td>Action</td>
                                        <th>
                                            <a href="/attractions/Novel/Kunsue">
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