import { PEOPLE_URL } from "@/constants";
import Image, { StaticImageData } from "next/image";
import foldedMapIcon from "../public/folded-map.svg"
import quoteIcon from "../public/quote.svg"
import cardImage1 from "../public/img-1.png"
import cardImage2 from "../public/img-2.png"

interface CampSiteProps {
  bgImage: StaticImageData;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({bgImage, title, subtitle, peopleJoined}: CampSiteProps) => {
  const backgroundImage = {
    backgroundImage: `url(${bgImage.src})`
  }

  return (
    <div style={backgroundImage} className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src={foldedMapIcon}
              alt="map"
              width={28}
              height={28}
            />
          </div>
        
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image 
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section 
      id="camp"
      className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20"
    >
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          bgImage = {cardImage1}
          title = "Lake District"
          subtitle = "England"
          peopleJoined = "50 + Joined"
        />
        
        <CampSite 
          bgImage = {cardImage2}
          title = "Yosemite National Park"
          subtitle = "California, USA"
          peopleJoined = "50 + Joined"
        />
       
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            Discover<strong> Hidden Gems </strong>
            and <strong> Iconic Landscapes</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white text-justify">
            Unearth hidden gems, immerse yourself in diverse cultures, and witness breathtaking landscapes that will leave you in awe. 
            Whether you're seeking serene beaches, vibrant cityscapes, or remote wilderness, 
            TraVerse is your passport to unforgettable adventures. 
          </p>
          <Image 
            src={quoteIcon}
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>  
    </section>
  )
}

export default Camp