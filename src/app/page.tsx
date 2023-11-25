import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      
      <div className="hero min-h-screen bg-neutral">
        <div className="hero-content text-center text-base-100">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold p-2 font-sans">Reada-loo</h1>
            <h2 className="text-2xl font-semibold">[is more than read!]</h2>
            <p className="py-6">
            เป็นไงพาสเจอร์ไรส์ชาร์ปเอาต์ หมายปองโมเดิร์นมาร์กโบ้ยระโงก ลิมูซีน ไอเดียโอเลี้ยงพรีเมียมเทรด ฮ็อตพ่อค้าเรซิ่น แฟร์สมิติเวชแพ็ค 
            รูบิกเปียโนภูมิทัศน์ ซาตานสเตชั่นจิตพิสัย มาร์คแต๋วโกะแอนด์ไตรมาส หล่อฮังก้วยดัมพ์วอล์กรีวิว เวิร์ก คันถธุระสี่แยกซิมโฟนี่ เซฟตี้ อิกัวนา 
            มายองเนสฮอตดอกบลอนด์แพทเทิร์น โพลารอยด์อัลมอนด์
            </p>
            <div className="join">
              <button className="btn btn-primary join-item" >Get Started</button>
              <button className="btn btn-secondary join-item">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}


