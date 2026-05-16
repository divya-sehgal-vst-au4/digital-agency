import HomeTestimonial from "@/components/testimonial/HomeTestimonial";
import TextSliderArea from "@/components/text-slider/TextSliderArea";
import HomePortfolio from "@/components/portfolio/HomePortfolio";
import HomeFunfact from "@/components/funfact/HomeFunfact";
import HomeService from "@/components/service/HomeService";
import HomeBlogArea from "@/components/blog/HomeBlogArea";
import HomeTeamArea from "@/components/team/HomeTeamArea";
import HomeCtaArea from "@/components/cta/HomeCtaArea";
import HomeAbout from "@/components/about/HomeAbout";
import HomeHero from "@/components/hero/HomeHero";
import HomeFaq from "@/components/faq/HomeFaq";
import AboutStepArea from "@/components/step/AboutStepArea";

/** Single place for Digital Agency home sections (used by `/` and `/digital-agency`). */
export default function DigitalAgencyHomeMain() {
  return (
    <main>
      <HomeHero />
      <TextSliderArea />
      <AboutStepArea />
      <HomeService />
      <HomeAbout />
      {/* <HomePortfolio /> */}
      <HomeTestimonial />
      {/* <HomeTeamArea /> */}
      <HomeFaq />

      <HomeFunfact />
      <HomeBlogArea />
      <HomeCtaArea />
    </main>
  );
}
