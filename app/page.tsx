import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { Truck, ShieldCheck, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredProducts = [
  {
    id: "1",
    name: "Misty Grey Organic Cotton Set",
    price: 129.00,
    category: "Cotton",
    image: "/images/hero_bg.png", // Using hero image as placeholder for now, since I only have one generated image.
  },
  {
    id: "2",
    name: "Pure Ivory Silk Pillowcase",
    price: 45.00,
    category: "Silk",
    image: "/images/hero_bg.png",
  },
  {
    id: "3",
    name: "Sage Green Percale Sheet",
    price: 89.00,
    category: "Percale",
    image: "/images/hero_bg.png",
  },
  {
    id: "4",
    name: "Navy Blue Sateen Duvet",
    price: 159.00,
    category: "Sateen",
    image: "/images/hero_bg.png",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <Hero />

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">Best Sellers</h2>
              <p className="text-gray-600 max-w-lg">Our most loved bedding essentials, crafted for the perfect night's sleep.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex group" asChild>
              <Link href="/shop">
                View All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features/Trust Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100/50">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg">Free Shipping & Returns</h3>
              <p className="text-sm text-gray-600">On all orders over $200. We want you to love your sleep.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100/50">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg">10 Year Warranty</h3>
              <p className="text-sm text-gray-600">Quality craftsmanship that stands the test of time.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100/50">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg">100% Organic Material</h3>
              <p className="text-sm text-gray-600">GOTS certified organic cotton, better for you and the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Story Section */}
      <section className="py-20 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative min-h-[400px]">
              {/* Ideally a different image here */}
              <div className="aspect-[4/5] md:aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder */}
                {/* <Image ... /> */}
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary rounded-full -z-10 blur-3xl opacity-50" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Promise</span>
              <h2 className="font-display text-4xl font-bold leading-tight">Crafted for the Modern Home</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                We believe that a good night's sleep is the foundation of a happy life. That's why we've spent years perfecting our fabric blends to create bedding that feels like a hug.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Ethically sourced materials
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Generously sized for deep mattresses
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Plastic-free packaging
                </li>
              </ul>
              <div className="pt-4">
                <Button size="lg">Read Our Story</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
