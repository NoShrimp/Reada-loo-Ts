import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      
      <div className="hero min-h-screen bg-neutral">
        <div className="hero-content text-center text-base-100">
        <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold ">Reada-loo</h1>
            <p className="mb-8 leading-relaxed opacity-50 text-xl ">Reada-loo เป็นมากกว่าการอ่าน เรามีนิยายมากมายให้คุณได้เลือกอ่านหรือคัดสรรค์จากทั่วไทย!</p>
            <div className="join join-vertical focus:outline-none hover:bg-opacity-80 rounded-lg lg:join-horizontal">
              <a href="/attractions " className="btn font-bold btn-primary join-item w-30 h-10">Let Start!</a>
              <a href="/attractions/login" className="btn font-bold btn-secondary join-item w-30 h-10">Signin</a>
            </div>
          </div>
          <div  id="pattern" className="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16">
            <div className="w-full flex gap-3 justify-center">

              <img className="object-cover object-center rounded-xl w-[208px] h-[145px]" alt="hero" src="https://i.ibb.co/cFSgVFn/Dimensional-Sovereign.jpg" />
              <img className="object-cover object-center rounded-xl w-[208px] h-[145px]" alt="hero" src="https://i.ibb.co/G0jfrvP/book-detail-large-gif.jpg" /> 
            </div>
            <div className="w-full h- flex gap-2 justify-center items-center my-2">

              <img className="object-cover object-center rounded-xl w-[208px] h-[145px]" alt="hero" src="https://i.ibb.co/FwwGzgw/PDF.jpg" />
              <img className="object-cover object-center rounded-xl w-[208px] h-[145px]" alt="hero" src="https://i.ibb.co/2vrkN6S/D9d0-I33aglis-IX2-Z.jpg" /> 
              <img className="object-cover object-center rounded-xl w-[208px] h-[145px]" alt="hero" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAACRBAMAAABAjiuOAAAAG1BMVEXMzMwAAAB/f38zMzMZGRlmZmaysrKZmZlMTEy3MKaDAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB8ElEQVRoge2VwW/aMBSHX6HEHFspW6/VyKodEYH1Cm2AHpFAGkdHq2iPTItGj2iDqX923/PDWQaT1pnLDr8PxS8kxh/PfrKJAAAAAAAAAAAAAAAAAAAAAHgFte75kENjEE84PA7inwddPk80zuU+TdNOkCi9ioo2h6VJicwbG80u93qYbK0x5iZfrVbfgkSWryE12VVf0ylLzNlej+RJRaczboogiWdKOfuitzrM+PeXzVFTRc/F0aKEWhJ6lEsYSWPLZkoqqvVF0jpK1KKthLlOXV/uf/AVjdWmonsrog9HibbUUZ+54fSWcl/nRbu/1Ncq6rhpm5t3y2APL4777zzQ491mV94pRTdUETXWTjS7fe4Gm7jcvOjpbnO9e9j2CamosE703pK5CBUl1osaHIu1Pk19Qk4k6+UrbhroMSPSNUr4Q+WMfelXRc3JL1EeKCqWpFU39TVBzpdWRclisUgW1n0/sUEeM6bdbGzLpSIpOSm8UrTJsmyQ6ZM8TOTK2e0MF5WMZAJ9SrudoZy6sN2h5rLgwpP9ziXWk0ZKzqe0L+oFiWZW2mho5a7Otf3VDf9dmutD0Sc+KdoHg7yC6FzgX8eDj6K97Q4P+lRFrfgPHf4Jo6fMw98OmyjsNAIAAAAAAAAAAAAAAAAAAAD/Fy/qz1FpTjHvDAAAAABJRU5ErkJggg==" /> 
            </div>
                <div className="w-full flex gap-3 justify-center">

              <img className="object-cover object-center rounded-xl w-[208px] h-[145px]" alt="hero" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAACRBAMAAABAjiuOAAAAG1BMVEXMzMwAAAB/f38zMzMZGRlmZmaysrKZmZlMTEy3MKaDAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB8ElEQVRoge2VwW/aMBSHX6HEHFspW6/VyKodEYH1Cm2AHpFAGkdHq2iPTItGj2iDqX923/PDWQaT1pnLDr8PxS8kxh/PfrKJAAAAAAAAAAAAAAAAAAAAAHgFte75kENjEE84PA7inwddPk80zuU+TdNOkCi9ioo2h6VJicwbG80u93qYbK0x5iZfrVbfgkSWryE12VVf0ylLzNlej+RJRaczboogiWdKOfuitzrM+PeXzVFTRc/F0aKEWhJ6lEsYSWPLZkoqqvVF0jpK1KKthLlOXV/uf/AVjdWmonsrog9HibbUUZ+54fSWcl/nRbu/1Ncq6rhpm5t3y2APL4777zzQ491mV94pRTdUETXWTjS7fe4Gm7jcvOjpbnO9e9j2CamosE703pK5CBUl1osaHIu1Pk19Qk4k6+UrbhroMSPSNUr4Q+WMfelXRc3JL1EeKCqWpFU39TVBzpdWRclisUgW1n0/sUEeM6bdbGzLpSIpOSm8UrTJsmyQ6ZM8TOTK2e0MF5WMZAJ9SrudoZy6sN2h5rLgwpP9ziXWk0ZKzqe0L+oFiWZW2mho5a7Otf3VDf9dmutD0Sc+KdoHg7yC6FzgX8eDj6K97Q4P+lRFrfgPHf4Jo6fMw98OmyjsNAIAAAAAAAAAAAAAAAAAAAD/Fy/qz1FpTjHvDAAAAABJRU5ErkJggg==" />
              <img className="object-cover object-center rounded-xl w-[208px] h-[145px]" alt="hero" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAACRBAMAAABAjiuOAAAAG1BMVEXMzMwAAAB/f38zMzMZGRlmZmaysrKZmZlMTEy3MKaDAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB8ElEQVRoge2VwW/aMBSHX6HEHFspW6/VyKodEYH1Cm2AHpFAGkdHq2iPTItGj2iDqX923/PDWQaT1pnLDr8PxS8kxh/PfrKJAAAAAAAAAAAAAAAAAAAAAHgFte75kENjEE84PA7inwddPk80zuU+TdNOkCi9ioo2h6VJicwbG80u93qYbK0x5iZfrVbfgkSWryE12VVf0ylLzNlej+RJRaczboogiWdKOfuitzrM+PeXzVFTRc/F0aKEWhJ6lEsYSWPLZkoqqvVF0jpK1KKthLlOXV/uf/AVjdWmonsrog9HibbUUZ+54fSWcl/nRbu/1Ncq6rhpm5t3y2APL4777zzQ491mV94pRTdUETXWTjS7fe4Gm7jcvOjpbnO9e9j2CamosE703pK5CBUl1osaHIu1Pk19Qk4k6+UrbhroMSPSNUr4Q+WMfelXRc3JL1EeKCqWpFU39TVBzpdWRclisUgW1n0/sUEeM6bdbGzLpSIpOSm8UrTJsmyQ6ZM8TOTK2e0MF5WMZAJ9SrudoZy6sN2h5rLgwpP9ziXWk0ZKzqe0L+oFiWZW2mho5a7Otf3VDf9dmutD0Sc+KdoHg7yC6FzgX8eDj6K97Q4P+lRFrfgPHf4Jo6fMw98OmyjsNAIAAAAAAAAAAAAAAAAAAAD/Fy/qz1FpTjHvDAAAAABJRU5ErkJggg==" /> 
            </div>
                <div className="w-full flex gap-3 justify-center my-2">

              <img className="object-cover object-center rounded-xl w-[208px] h-[145px]" alt="hero" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAACRBAMAAABAjiuOAAAAG1BMVEXMzMwAAAB/f38zMzMZGRlmZmaysrKZmZlMTEy3MKaDAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB8ElEQVRoge2VwW/aMBSHX6HEHFspW6/VyKodEYH1Cm2AHpFAGkdHq2iPTItGj2iDqX923/PDWQaT1pnLDr8PxS8kxh/PfrKJAAAAAAAAAAAAAAAAAAAAAHgFte75kENjEE84PA7inwddPk80zuU+TdNOkCi9ioo2h6VJicwbG80u93qYbK0x5iZfrVbfgkSWryE12VVf0ylLzNlej+RJRaczboogiWdKOfuitzrM+PeXzVFTRc/F0aKEWhJ6lEsYSWPLZkoqqvVF0jpK1KKthLlOXV/uf/AVjdWmonsrog9HibbUUZ+54fSWcl/nRbu/1Ncq6rhpm5t3y2APL4777zzQ491mV94pRTdUETXWTjS7fe4Gm7jcvOjpbnO9e9j2CamosE703pK5CBUl1osaHIu1Pk19Qk4k6+UrbhroMSPSNUr4Q+WMfelXRc3JL1EeKCqWpFU39TVBzpdWRclisUgW1n0/sUEeM6bdbGzLpSIpOSm8UrTJsmyQ6ZM8TOTK2e0MF5WMZAJ9SrudoZy6sN2h5rLgwpP9ziXWk0ZKzqe0L+oFiWZW2mho5a7Otf3VDf9dmutD0Sc+KdoHg7yC6FzgX8eDj6K97Q4P+lRFrfgPHf4Jo6fMw98OmyjsNAIAAAAAAAAAAAAAAAAAAAD/Fy/qz1FpTjHvDAAAAABJRU5ErkJggg==" />
            </div>
            </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}


