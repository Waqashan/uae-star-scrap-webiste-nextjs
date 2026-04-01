import { HomeHero } from "@/components/home-components/HomeHero";
import { HomeTrustBadges } from "@/components/home-components/HomeTrustBadges";
import { HomeServices } from "@/components/home-components/HomeServices";
import { HomeStats } from "@/components/home-components/HomeStats";
import { HomePartners } from "@/components/home-components/HomePartners";
import { HomeWhyChooseUs } from "@/components/home-components/HomeWhyChooseUs";
import { HomeHowItWorks } from "@/components/home-components/HomeHowItWorks";
import { HomePricing } from "@/components/home-components/HomePricing";
import { HomeGallery } from "@/components/home-components/HomeGallery";
import { HomeMaterials } from "@/components/home-components/HomeMaterials";
import { HomeProducts } from "@/components/home-components/HomeProducts";
import { HomeFeaturedBlogs } from "@/components/home-components/HomeFeaturedBlogs";
import { HomeTestimonials } from "@/components/home-components/HomeTestimonials";
import { HomeCTA } from "@/components/home-components/HomeCTA";

export default function Home() {
  return (
    <div className="bg-white">
      <HomeHero />
      <HomeTrustBadges />
      <HomeServices />
      <HomeProducts />

      <HomeHowItWorks />
      <HomeFeaturedBlogs />

      <HomeStats />
      {/* <HomePartners /> */}
      {/* <HomeWhyChooseUs /> */}
      <HomePricing />
      {/* <HomeGallery /> */}
      <HomeMaterials />
      <HomeTestimonials />
      <HomeCTA />
    </div>
  );
}