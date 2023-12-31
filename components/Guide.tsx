import Image from "next/image"
import campImg from "../public/camp.svg"
import boatImg from "../public/boat.png"
import meterImg from "../public/meter.svg"

const Guide = () => {
  return (
    <section className="flexCenter flex-col" id="boat">
      <div className="padding-container max-container w-full pb-24">
        <Image 
          src={campImg}
          alt="camp"
          width={50}
          height={50}
        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you.
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px] text-justify">
            Embark on your journey with TraVerse, the ultimate travel companion designed for explorers like you! 
            TraVerse allows you to wander off the beaten path with confidence, 
            offering offline maps that work seamlessly in even the most remote areas, 
            where internet connections are scarce. No need to worry about getting lost – 
            Traverse ensures you have your maps at your fingertips, ready for your next adventure. 
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full ">
        <Image 
          src={boatImg}
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src={meterImg}
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50 ">5 hours</p>
              </div>
              <p className="bold-20 mt-2">Milford Sound</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start Track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Queenstown Airport</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide