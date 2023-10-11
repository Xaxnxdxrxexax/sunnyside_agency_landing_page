import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <header className="relative flex items-center">
        <picture className="">
          <source
            srcSet="/images/desktop/image-header.jpg"
            media="(min-width: 376px)"
          />
          <Image
            src={"/images/mobile/image-header.jpg"}
            alt="header"
            width={375}
            height={375}
            className="w-full"
          />
        </picture>
        <div className="absolute left-0 top-0 flex w-full items-center px-[5%] py-5">
          <Image
            src={"/images/logo.svg"}
            width={100}
            height={100}
            alt="logo"
            className="relative left-0 top-0 z-10"
          />
          <nav className="Fm:hidden ml-auto">
            <Image
              src={"/images/icon-hamburger.svg"}
              width="24"
              height="18"
              alt="menu"
              className=""
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div className="Fm:hidden pt-1- absolute left-0 z-10 mx-[5%] mt-[10%] flex w-[90%] flex-col bg-white p-8 text-center">
                <div className="absolute -top-5 right-0 h-0 w-0 border-b-[50px] border-r-[75px] border-t-[50px] border-white border-b-transparent border-t-transparent"></div>
                {["About", "Services", "Projects"].map((item) => (
                  <p
                    key={item}
                    className="font-Fm-barlow text-Fm-Grayish-blue py-6 font-bold tracking-wider"
                  >
                    {item}
                  </p>
                ))}
                <button className="font-Fm-fraunces bg-Fm-Yellow mb-8 self-center rounded-full px-6 py-4">
                  CONTACT
                </button>
              </div>
            )}
          </nav>
          <nav className="Fm:visible Fm:static invisible absolute ml-auto flex gap-8">
            {["About", "Services", "Projects"].map((item) => (
              <p
                key={item}
                className="text-Fm-White font-Fm-barlow py-6 font-bold tracking-wider"
              >
                {item}
              </p>
            ))}
            <button className="font-Fm-fraunces bg-Fm-White hover:text-Fm-White Fm:visible Fm:static invisible absolute rounded-full px-7 py-2 hover:cursor-pointer hover:bg-[#6dcffe]">
              CONTACT
            </button>
          </nav>
        </div>
        <p className="font-Fm-fraunces absolute top-[18%] w-full text-center text-4xl font-black tracking-[0.2em] text-white">
          WE ARE CREATIVES
          <Image
            src={"/images/icon-arrow-down.svg"}
            width="36"
            height="114"
            alt="arrow"
            className={`mx-auto pt-10`}
          />
        </p>
      </header>
      <section className="">
        <article className="Fm:flex Fm:items-center Fm:justify-stretch">
          <picture className="Fm:order-2 Fm:w-1/2">
            <source
              srcSet="/images/desktop/image-transform.jpg"
              media="(min-width: 376px)"
            />
            <Image
              src={"/images/mobile/image-transform.jpg"}
              alt={"transform"}
              width={100}
              height={100}
              className="w-full"
            />
          </picture>
          <div className="Fm:grow Fm:w-1/2 Fm:py-16 Fm:flex Fm:flex-col Fm:justify-center Fm:items-center Fm:px-36 px-6 py-10 text-center">
            <h2 className="font-Fm-fraunces Fm:self-start Fm:text-5xl Fm:text-left text-4xl font-bold">
              Transform your brand
            </h2>
            <p className="font-Fm-barlow text-Fm-Very-dark-grayish-blue Fm:text-sm Fm:text-left py-6">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <button className="font-Fm-fraunces Fm:self-start group relative font-bold">
              LEARN MORE
              <div className="bg-Fm-Yellow bottom absolute bottom-0 -z-10 h-3 w-full rounded-full opacity-30 group-hover:opacity-100"></div>
            </button>
          </div>
        </article>
        <article className="Fm:flex Fm:items-center Fm:justify-stretch">
          <picture className="Fm:w-1/2">
            <source
              srcSet="/images/desktop/image-stand-out.jpg"
              media="(min-width: 376px)"
            />
            <Image
              src={"/images/mobile/image-stand-out.jpg"}
              alt={"stand-out"}
              width={100}
              height={100}
              className="w-full"
            />
          </picture>
          <div className="Fm:grow Fm:w-1/2 Fm:py-16 Fm:flex Fm:flex-col Fm:justify-center Fm:items-center Fm:px-36 px-6 py-10 text-center">
            <h2 className="font-Fm-fraunces Fm:self-start Fm:text-5xl Fm:text-left text-4xl font-bold">
              Stand out to the right audience
            </h2>
            <p className="font-Fm-barlow text-Fm-Very-dark-grayish-blue Fm:text-sm Fm:text-left py-6">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <button className="font-Fm-fraunces Fm:self-start group relative font-bold">
              LEARN MORE
              <div className="bg-Fm-Soft-red bottom absolute bottom-0 -z-10 h-3 w-full rounded-full opacity-30 group-hover:opacity-100"></div>
            </button>
          </div>
        </article>
      </section>
      <div className="Fm:flex">
        <section className="Fm:w-1/2 relative">
          <picture>
            <source
              srcSet="/images/desktop/image-graphic-design.jpg"
              media="(min-width: 376px)"
            />
            <Image
              src={"/images/mobile/image-graphic-design.jpg"}
              alt={"graphic"}
              width={100}
              height={100}
              className="w-full"
            />
          </picture>
          <div className="Fm:left-[20%] absolute bottom-0 px-5 pb-12 text-center">
            <h2 className="font-Fm-fraunces text-Fm-Dark-desaturated-cyan py-8 text-4xl font-bold">
              Graphic Design
            </h2>
            <p className="font-Fm-barlow text-Fm-Dark-desaturated-cyan Fm:max-w-[380px] text-sm font-bold">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients
              &apos; attention.
            </p>
          </div>
        </section>
        <section className="Fm:w-1/2 relative">
          <picture>
            <source
              srcSet="/images/desktop/image-photography.jpg"
              media="(min-width: 376px)"
            />
            <Image
              src={"/images/mobile/image-photography.jpg"}
              alt={"photography"}
              width={100}
              height={100}
              className="w-full"
            />
          </picture>
          <div className="Fm:left-[20%] absolute bottom-0 px-5 pb-12 text-center">
            <h2 className="font-Fm-fraunces text-Fm-Dark-desaturated-cyan py-8 text-4xl font-bold">
              Photography
            </h2>
            <p className="font-Fm-barlow text-Fm-Dark-desaturated-cyan Fm:max-w-[380px] Fm:mb-6 text-sm font-bold">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </section>
      </div>
      <aside className="px-6 py-20 text-center">
        <h2 className="font-Fm-fraunces text-Fm-Grayish-blue pb-4 text-xl tracking-widest">
          CLIENT TESTIMONIALS
        </h2>
        <div className="Fm:flex Fm:mx-9 Fm:gap-5">
          {[
            {
              name: "Emily R.",
              job: "Marketing Director",
              image: "/images/image-emily.jpg",
              comment:
                "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
            },
            {
              name: "Thomas S.",
              job: "Chief Operating Officer",
              image: "/images/image-thomas.jpg",
              comment:
                "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
            },
            {
              name: "Jennie F.",
              job: "Business Owner",
              image: "/images/image-jennie.jpg",
              comment:
                "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
            },
          ].map(({ name, job, image, comment }) => (
            <div key={name}>
              <Image
                src={image}
                alt={name}
                width={100}
                height={100}
                className="mx-auto mb-8 mt-12 h-[100px] w-[100px] rounded-full"
              />
              <p className="font-Fm-barlow text-Fm-Very-dark-grayish-blue mb-8 font-bold">
                {comment}
              </p>
              <h3 className="font-Fm-fraunces text-xl">{name}</h3>
              <h4 className="font-Fm-barlow text-Fm-Dark-grayish-blue mt-2">
                {job}
              </h4>
            </div>
          ))}
        </div>
      </aside>
      <footer className="bg-[#90d4c5]">
        <div className="Fm:grid-cols-4 grid grid-cols-2">
          {["milkbottles", "orange", "cone", "sugarcubes"].map((item) => (
            <picture key={item}>
              <source
                srcSet={`/images/desktop/image-gallery-${item}.jpg`}
                media="(min-width: 376px)"
              />
              <Image
                src={`/images/mobile/image-gallery-${item}.jpg`}
                alt={item}
                width={100}
                height={100}
                className="mx-auto w-full"
              />
            </picture>
          ))}
        </div>
        <div>
          <Image
            src={"/images/logo_copy.svg"}
            width={100}
            height={100}
            alt="logo"
            className="Fm:max-w-180 mx-auto py-10"
          />
          <div className="flex justify-center gap-7 py-4">
            {["About", "Services", "Projects"].map((item) => (
              <p
                key={item}
                className="font-Fm-barlow text-Fm-Dark-moderate-cyan text-center hover:cursor-pointer hover:text-white"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="text-Fm-Dark-moderate-cyan flex justify-center gap-7 fill-current px-12 py-4">
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-6 hover:cursor-pointer hover:text-white"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-6 hover:cursor-pointer hover:text-white"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-6 hover:cursor-pointer hover:text-white"
            />
            <FontAwesomeIcon
              icon={faPinterest}
              className="w-6 hover:cursor-pointer hover:text-white"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
