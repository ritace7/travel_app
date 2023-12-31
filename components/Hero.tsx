import Image from 'next/image'
import Button from './Button'
import campLogo from "../public/camp.svg"
import starImg from "../public/star.svg"
import playIcon from "../public/play.svg"
import bgImg from "../public/pattern-bg.png"
import HeroInfo from './HeroInfo'

const Hero = () => {
  const backgroundImage = {
    backgroundImage: `url(${bgImg.src})`
  }

  return (
    <section id='climb' className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div
        style={backgroundImage}
        className='hero-map'
      />

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image 
          src={campLogo}
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px]  w-10 lg:w-[-50-px]"
        />
        <h1 className="bold-52 lg:bold-72">Everest Base Camp</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] text-justify">
          Are you ready to conquer the world's highest peak and witness breathtaking landscapes like never before? 
          Join our exclusive Everest Base Camp trek and make your dreams of standing at the foot of Mount Everest a reality!
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_,index) => (
              <Image
                key={index}
                src={starImg}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className='bold-16 lg:bold-20 text-blue-70'>
            100K+
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex w-full gap-3 sm:flex-row">
            <Button 
              type="button"
              title="Download App"
              variant="btn_green"
              onClickId='app'
            />
            <Button 
              type="button"
              title="Learn More"
              icon={playIcon}
              variant="btn_white_text"
              onClickId='boat'
            />
        </div>
      </div>

      <HeroInfo />    
    </section>
  )
}

export default Hero