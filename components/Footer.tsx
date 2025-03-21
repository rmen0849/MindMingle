import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          {/* <Link href="/" className="mb-10">
            <Image src="hilink-logo.svg" alt="logo" width={74} height={29}/>
          </Link> */}

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-neutral-100">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="regular-14 flex gap-4 md:flex-col lg:flex-row text-neutral-100"
                  >
                    <p className="regular-14 whitespace-nowrap ">
                      {link.label}:
                    </p>
                    <p className="regular-14 whitespace-nowrap text-neutral-100">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            {/* <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-emerald-50">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div> */}
          </div>
        </div>

        <div className="border text-neutral-100" />
        <p className="regular-14 w-full text-center text-neutral-100">2025 Mind Mingle | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="text-neutral-100 flex flex-col gap-5">
      <h4 className="text-neutral-100 bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer