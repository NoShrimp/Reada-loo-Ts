export default function DashboardLayout({children} : { children: React.ReactNode}) {
    return (
        <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                </div> 
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                        <li><a><h1 className="font-semibold text-3xl justify-center">Reada-loo</h1></a></li>
                            <div className="collapse collapse-arrow">
                                <input type="checkbox" /> 
                                <div className="collapse-title text-lg font-medium">
                                    Category
                                </div>
                                <div className="collapse-content"> 
                                    <ul className="menu rounded-box">
                                        <li><a href="/attractions/myreading">
                                            Romance
                                        </a></li>
                                        <li><a href="/attractions/myreading">
                                            Action
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        <li><a href="/attractions/favorite">
                            <div className="text-lg font-medium">My Favorite</div>
                        </a></li>
                        <li><a href="/attractions/about">
                            <div className="text-lg font-medium">About us</div>
                        </a></li>
                    </ul>
                </div>
            </div>
            </div>
        <div className="navbar-center">
            <a href="/attractions" className="btn btn-ghost normal-case text-xl font-sans">Reada-loo</a>
        </div>
        <div className="navbar-end">
            
            <label className="cursor-pointer grid place-items-center">
                <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
            <div className="join rounded-2xl p-2">
            <a href="/attractions/login" className='btn w-17 btn-primary join-item'>Sign In</a>
                <button className="btn w-17 btn-secondary join-item">Sign Up</button>
            </div>
            <div className="avatar">
                <div className="w-10 m-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://img.freepik.com/premium-photo/3d-character-male-cartoon-with-eye-glasses-yellow-orange-polo-shirt-good-profile-picture_477250-8.jpg?w=1380" />
                </div>
            </div>
        </div>
        </div>
        </nav>
        {children}
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
            <aside>
                <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="inline-block fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                <p className="font-bold">
                    Reada-loo Company <br/> more than read!
                </p> 
                <p>Copyright © 2023</p>
            </aside> 
        </footer>
    </section>
    )
}