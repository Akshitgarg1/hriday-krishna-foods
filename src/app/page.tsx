import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductHighlight } from "@/components/home/ProductHighlight";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BrandStory } from "@/components/home/BrandStory";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { HomeFaq } from "@/components/home/HomeFaq";
import { CallToAction } from "@/components/home/CallToAction";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Storefront Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Product Highlight (Raw Makhana 5+ Sut) */}
        <ProductHighlight />

        {/* 3. Why Choose Us (Quality, Freshness, Packaging, Delivery) */}
        <WhyChooseUs />

        {/* 4. Brand Heritage & Wetland Harvest Story */}
        <BrandStory />

        {/* 5. Customer Reviews */}
        <CustomerReviews />

        {/* 6. Frequently Asked Questions */}
        <HomeFaq />

        {/* 7. Final Call To Action */}
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
