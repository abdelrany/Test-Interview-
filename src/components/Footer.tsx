import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full min-h-32 bg-dark text-light flex flex-col-reverse md:flex-row justify-between items-center p-4'>
        <div className='flex-[.5] flex flex-col sm:flex-row gap-8 justify-center '>
            <ul className='flex flex-col items-center gap-2 mb-4'>
                <li className=''><a href="">ACCEUIL</a></li>
                <li className=''><a href="">A PROPOS</a></li>
                <li className=''><a href="">NOS SERVICES</a></li>
                <li className=''><a href="">ACUALITES</a></li>
            </ul>
            <ul className='flex flex-col items-center gap-2'>
                <li className=''><a href="">ACCEUIL</a></li>
                <li className=''><a href="">A PROPOS</a></li>
                <li className=''><a href="">NOS SERVICES</a></li>
            </ul>
        </div>
        <div className='flex-[.5] flex flex-col-reverse md:flex-col justify-between gap-4 mb-8 md:mb-0'>
            <ul className='flex items-center'>
                <li className=''><a href="">NOS SERVICES</a></li>
                <li className=''><a href="">NOS SERVICES</a></li>
                <li className=''><a href="">NOS SERVICES</a></li>
                <li className=''><a href="">NOS SERVICES</a></li>
            </ul>
            <div className='bg-black rounded-lg h-24 w-full text-light flex items-center justify-center'>logo</div>
        </div>
    </footer>
  )
}

export default Footer