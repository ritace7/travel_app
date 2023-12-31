import Image from "next/image"
import Button from "./Button"
import appleIcon from "../public/apple.svg"
import androidIcon from "../public/android.svg"
import phonesIcon from "../public/phones.png"
import pattern from "../public/pattern.png"

const GetApp = () => {
  return (
    <section id="app" className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
      <Image 
        src={pattern}
        alt="background"
        className="w-full z-0 absolute top-0 left-0 h-full"
      />
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40  lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10 ">Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="App Store"
              icon={appleIcon}
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title="Play Store"
              icon={androidIcon}
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image
            src={phonesIcon}
            alt="phones"
            width={550}
            height={970}
            className="z-10"
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp