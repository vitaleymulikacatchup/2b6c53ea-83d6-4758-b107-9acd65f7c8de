"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TagMediaSplitAbout from '@/components/sections/about/TagMediaSplitAbout';
import TestimonialCardEight from '@/components/sections/testimonial/TestimonialCardEight';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Heart, Mail, Smartphone, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="animatedGrid"
      cardStyle="inset"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Allo"
          navItems={[
            { name: "Shop", id: "products" },
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Find Your Phone",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Experience Next-Generation Phones"
          description="Discover the latest smartphone technology with premium features, stunning displays, and exceptional performance"
          tag="Latest Collection"
          tagIcon={Zap}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000811090-71erymlx.jpg"
          imageAlt="Latest flagship smartphone"
          buttons={[
            { text: "Shop Now", href: "products" },
            { text: "Learn More", href: "features" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Featured Phones"
          description="Browse our selection of premium smartphones with cutting-edge technology"
          tag="Available Now"
          tagIcon={Smartphone}
          products={[
            {
              id: "phone-1",
              name: "ProMax 15",
              price: "$1,299",
              variant: "Black, Silver, Gold - 4 Options",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000812322-yn6fvpn3.jpg",
              imageAlt: "ProMax 15 smartphone"
            },
            {
              id: "phone-2",
              name: "Elite Series X",
              price: "$899",
              variant: "Silver, Blue, Purple - 3 Options",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000813455-39q4ujdq.jpg",
              imageAlt: "Elite Series X smartphone"
            },
            {
              id: "phone-3",
              name: "Essential Pro",
              price: "$599",
              variant: "Black, White, Blue - 5 Options",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000814472-hcohmt4u.jpg",
              imageAlt: "Essential Pro smartphone"
            },
            {
              id: "phone-4",
              name: "BudgetMax",
              price: "$399",
              variant: "Black, White - 2 Options",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000812322-yn6fvpn3.jpg",
              imageAlt: "BudgetMax smartphone"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNineteen
          title="Phone Technology Overview"
          description="Explore the key features that make Allo phones stand out in the market"
          tag="Tech Specs"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          features={[
            {
              id: 1,
              tag: "Camera",
              title: "Advanced Camera System",
              subtitle: "Professional-grade photography",
              description: "Capture stunning photos and 8K videos with advanced computational photography and night mode capabilities",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000815476-r1ktubfn.jpg",
              imageAlt: "Advanced camera system"
            },
            {
              id: 2,
              tag: "Battery",
              title: "All-Day Battery Life",
              subtitle: "Up to 24 hours of usage",
              description: "Fast charging technology combined with optimized power management keeps you connected all day long",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000816493-k8fntcsb.jpg",
              imageAlt: "Long battery life"
            },
            {
              id: 3,
              tag: "Display",
              title: "Crystal Clear Display",
              subtitle: "120Hz AMOLED screen",
              description: "Experience fluid scrolling and vibrant colors with our premium AMOLED display technology",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000817655-eeinyrpg.jpg",
              imageAlt: "Premium display technology"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagMediaSplitAbout
          variant="card"
          title="About Allo"
          description="Your trusted partner for premium smartphone technology"
          tag="Our Story"
          textboxLayout="default"
          contentTag="MISSION"
          contentTagIcon={Heart}
          contentTitle="Quality Phones for Everyone"
          contentDescription="Founded on the principle of making cutting-edge technology accessible to all, Allo has been serving customers with the latest smartphones, expert advice, and exceptional service for over a decade"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000818666-rijgqfrf.jpg"
          imageAlt="Allo phone store"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEight
          title="What Our Customers Say"
          description="Real feedback from satisfied Allo phone store customers"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Tech Enthusiast",
              company: "Verified Buyer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000819518-ej7yk4q7.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Owner",
              company: "Verified Buyer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000820549-qzffzii6.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Creative Professional",
              company: "Verified Buyer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000821595-ctsqq5mz.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Williams",
              role: "Student",
              company: "Verified Buyer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000822687-hekelew0.jpg",
              imageAlt: "David Williams"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated on Latest Releases"
          description="Subscribe to our newsletter for exclusive deals, new phone launches, and special promotions"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000823649-vb2u2xyn.jpg"
          imageAlt="Allo phone store"
          logoText="Allo"
          copyrightText="© 2025 Allo Phone Store. All rights reserved."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "All Phones", href: "#products" },
                { label: "Accessories", href: "#" },
                { label: "Trade-In", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "#" },
                { label: "Warranty", href: "#" },
                { label: "Contact Us", href: "#contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Careers", href: "#" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}