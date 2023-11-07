import emily from './images/image-emily.jpg';
import jennie from './images/image-jennie.jpg';
import thomas from './images/image-thomas.jpg';

import facebookIcon from './images/icon-facebook.svg';
import instagramIcon from './images/icon-instagram.svg';
import twitterIcon from './images/icon-twitter.svg';
import pinterestIcon from './images/icon-pinterest.svg';

import deskMilk from './images/desktop/image-gallery-milkbottles.jpg';
import deskCone from './images/desktop/image-gallery-cone.jpg';
import deskCubes from './images/desktop/image-gallery-sugarcubes.jpg';
import deskOrange from './images/desktop/image-gallery-orange.jpg';

import mobileMilk from './images/mobile/image-gallery-milkbottles.jpg';
import mobileCone from './images/mobile/image-gallery-cone.jpg';
import mobileCubes from './images/mobile/image-gallery-sugar-cubes.jpg';
import mobileOrange from './images/mobile/image-gallery-orange.jpg';

export const testimonials = [
    {
        id: 1,
        name: "Emily R.",
        comment: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        image: emily,
        role: "Marketing Director"
    },
    {
        id: 2,
        name: "Thomas S.",
        comment: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        image: thomas,
        role: "Chief Operating Officer"
    },
    {
        id: 3,
        name: "Jennie F.",
        comment: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        image: jennie,
        role: "Business Owner"
    },
]

export const navItems = [
    {
        id: 1,
        title: "About",
        link: "#/about-us"
    },
    {
        id: 2,
        title: "Services",
        link: "#/services"
    },
    {
        id: 3,
        title: "Projects",
        link: "#/projects"
    },
    {
        id: 4,
        title: "Contact",
        link: "#/contact-us"
    },
]

export const footerLinks = [
    {
        id: 1,
        title: "About",
        link: "#/about-us"
    },
    {
        id: 2,
        title: "Services",
        link: "#/services"
    },
    {
        id: 3,
        title: "Projects",
        link: "#/about-us"
    },
]

export const socialLinks = [
    {
        id: 11,
        icon: facebookIcon,
        link: "#facebook.com/sunnyside"
    },
    {
        id: 12,
        icon: instagramIcon,
        link: "#instagram.com/sunnyside"
    },
    {
        id: 13,
        icon: twitterIcon,
        link: "#x.com/sunnyside"
    },
    {
        id: 14,
        icon: pinterestIcon,
        link: "#pintrest.com/sunnyside"
    },
]

export const products = [
    {
        id: 1,
        name: "milk bottles",
        image: {
            desktop: deskMilk,
            mobile: mobileMilk
        }
    },
    {
        id: 2,
        name: "orange",
        image: {
            desktop: deskOrange,
            mobile: mobileOrange
        }
    },
    {
        id: 3,
        name: "cone",
        image: {
            desktop: deskCone,
            mobile: mobileCone
        }
    },
    {
        id: 4,
        name: "sugar cubes",
        image: {
            desktop: deskCubes,
            mobile: mobileCubes
        }
    },
]