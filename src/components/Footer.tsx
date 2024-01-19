import { IconFacebook } from '@/svgs/IconFacebook'
import { IconInstagram } from '@/svgs/IconInstagram'
import React from 'react'

export const Footer = () => {
  return (
    <div className={Wrapper}>
      <ul className={RedesBox}>
        <li className={Rede}>
          <a
            href="https://www.facebook.com/shoppingidoficial?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconFacebook className={RedeIcon} />
          </a>
        </li>
        <li className={Rede}>
          <a
            className={RedeLink}
            href="https://www.instagram.com/shoppingidoficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram className={RedeIcon} />
          </a>
        </li>
      </ul>
    </div>
  )
}

const Wrapper = `
  p-4
  bg-white
`
const RedesBox = `
  w-full
  flex
  justify-center
  content-center
  gap-2
`
const Rede = `
`
const RedeLink = ``
const RedeIcon = `
  w-8
  text-green-500
`
