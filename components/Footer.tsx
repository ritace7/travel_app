import Image from "next/image"
import Link from "next/link"
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants"
import logo from "../public/traverse_logo.png"

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({title, children}: FooterColumnProps) =>{
  return(
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="flexCenter mb-24" id="footer">
      <div className="padding-container max-container w-full flex flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              src={logo}
              alt="logo"
              width={74}
              height={29}
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, index) => (
                    <Link 
                      href={link.id}
                      key={index}
                    >
                      {link.title}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link, index) => (
                    <Link
                      href={link.link}
                      key={index}
                      target="_blank"
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <p className="whitespace-nowrap">
                        {link.label}: 
                      </p>
                      <p className="medium-14 whitespace-nowrap text-blue-70">
                        {link.value}
                      </p>
                    </Link>
                  ))}
                </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn 
                title={SOCIALS.title}
              >
                <ul className="regular-14 flex gap-4 text-gray-30">
                    {SOCIALS.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.link}
                        target="_blank"
                      >
                        <Image src={link.icon} alt="logo" width={24} height={24} />
                      </Link>
                    ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div  className="border bg-gray-20"/>
        
        <div className="flex justify-end items-center text-white-400 mt-1">
          &copy; Created By
          <a 
            href="https://www.linkedin.com/in/hritesh7/" 
            target="_blank" 
            rel="noreferrer"
            className="ml-1 font-pixelify text-2xl text-green-500"
          >
            RITACE
          </a>
      </div>
      </div>
    </footer>
  )
}

export default Footer