import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import PainPoints from "@/components/PainPoints";
import Collections from "@/components/Collections";
import ProductGrid from "@/components/ProductGrid";
import VideoShowcase from "@/components/VideoShowcase";
import CompareTable from "@/components/CompareTable";
import PhotoGallery from "@/components/PhotoGallery";
import RatingSchema from "@/components/RatingSchema";
import Disclosure from "@/components/Disclosure";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ExitPopup from "@/components/ExitPopup"; // <--- Đã bổ sung import ExitPopup

export default function Home() {
  return (
    <>
      <RatingSchema />
      <Header />
      <main>
        <Hero />
        <PromoBanner />
        <PainPoints />
        <Collections />
        <ProductGrid />
        <VideoShowcase />
        <CompareTable />
        <PhotoGallery />
        <Disclosure />
        <FAQ />
        <FinalCTA />
      </main>
      {/* pb-24 on mobile keeps the newsletter form and footer clear of the fixed sticky CTA bar */}
      <div className="pb-24 md:pb-0">
        <Footer />
      </div>
      <StickyMobileCTA />
      <ExitPopup /> {/* <--- Đã tích hợp popup thoát trang hiển thị mã PRIME100 */}
    </>
  );
}
