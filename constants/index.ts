import facebookIcon from "../public/facebook.svg";
import instaIcon from "../public/instagram.svg";
import twitterIcon from "../public/twitter.svg";
import youtubeIcon from "../public/youtube.svg";
import mapIcon from "../public/map.svg";
import calendarIcon from "../public/calendar.svg";
import techIcon from "../public/tech.svg";
import locationIcon from "../public/location.svg";


// NAVIGATION
export const NAV_LINKS = [
    { href: '#', key: 'home', label: 'Home' },
    { href: '#boat', key: 'services', label: 'Services' },
    { href: '#app', key: 'app ', label: 'Get Our App ' },
    { href: '#footer', key: 'contact_us', label: 'Contact Us' },
  ];
  
  // CAMP SECTION
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];
  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Real maps can be offline',
      icon: mapIcon,
      variant: 'green',
      description:
        'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
    },
    {
      title: 'Set an adventure schedule',
      icon: calendarIcon,
      variant: 'green',
      description:
        "Schedule an adventure with friends. On holidays, there are many interesting offers from TraVerse. That way, there's no more discussion",
    },
    {
      title: 'Technology using augment reality',
      icon: techIcon,
      variant: 'green',
      description:
        'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
    },
    {
      title: 'Many new locations every month',
      icon: locationIcon,
      variant: 'orange',
      description:
        'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        {title: 'About Us', id: '#features'},
        {title: 'Explore', id: '#camp'},
        {title: 'Our Features', id: '#features'},
        {title: 'Get Our App', id: '#app'},
      ],
    },
    {
      title: 'Our Community',
      links: [
        {title: 'ClimbVerse', id: '#climb'},
        {title: 'CampVerse', id: '#camp'},
        {title: 'KayakVerse', id: '#boat'},
      ],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890', link: "tel:123-456-7890"},
      { label: 'Email Officer', value: 'support@traverse.com', link: "mailto:support@traverse.com" },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      {icon : facebookIcon, link: 'https://www.facebook.com/'},
      {icon: instaIcon, link: 'https://www.instagram.com/'},
      {icon: twitterIcon, link: 'https://www.twitter.com/'},
      {icon: youtubeIcon, link: 'https://www.youtube.com/'},
    ],
  };