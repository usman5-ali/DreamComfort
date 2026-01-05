import { Button } from "@/components/ui/button";
import { Star, Truck, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Helper to disable type checking for params in this dynamic route to avoid async params build errors in Next.js 15/16 if strict.
// In Next.js 15+, params is a Promise.
// We will simply cast it or use `use` from React if client component, but this is server component.
// We'll define it correctly.

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params;

    // Mock Data Fetching based on ID (realistically would be an API call)
    const product = {
        id,
        name: "Misty Grey Organic Cotton Set",
        price: 129.00,
        description: "Experience the unparalleled luxury of our Misty Grey Organic Cotton Set. Woven from 100% long-staple organic cotton, these sheets offer a crisp, cool feel that softens with every wash. Perfect for hot sleepers and those who value sustainability without compromising on comfort.",
        rating: 4.8,
        reviews: 124,
        features: [
            "100% GOTS Certified Organic Cotton",
            "300 Thread Count Percale Weave",
            "Includes 1 Flat Sheet, 1 Fitted Sheet, 2 Pillowcases",
            "Fits mattresses up to 16 inches deep"
        ],
        image: "/images/hero_bg.png"
    };

    return (
        <div className="container mx-auto px-4 md:px-6 py-24 min-h-screen">

            <div className="mb-8">
                <Link href="/shop" className="text-gray-500 hover:text-gray-900 inline-flex items-center text-sm">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                {/* Images */}
                <div className="space-y-4">
                    <div className="aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden relative">
                        <Image src={product.image} alt={product.name} fill className="object-cover" />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                                <Image src={product.image} alt="Thumbnail" fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="flex text-yellow-500">
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                            </div>
                            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                        </div>
                        <h1 className="font-display text-4xl font-bold text-gray-900">{product.name}</h1>
                        <p className="text-2xl text-primary font-medium mt-2">${product.price.toFixed(2)}</p>
                    </div>

                    <div className="prose prose-sm text-gray-600">
                        <p>{product.description}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-4">Select Size</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {['Twin', 'Queen', 'King'].map((size) => (
                                <button key={size} className="py-3 px-4 rounded-md border border-gray-200 text-sm font-medium hover:border-primary hover:text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-4">Select Color</h3>
                        <div className="flex gap-3">
                            {['#F5F5DC', '#A9B5DF', '#5F6F52', '#333333'].map((color) => (
                                <button
                                    key={color}
                                    className="w-10 h-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 space-y-4">
                        <Button size="lg" className="w-full text-base py-6">Add to Cart - ${product.price.toFixed(2)}</Button>
                        <p className="text-xs text-center text-gray-500">Free shipping on orders over $200</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-6">
                        <div className="flex items-start gap-3">
                            <Truck className="h-5 w-5 text-primary" />
                            <div>
                                <h4 className="text-sm font-bold">Free Shipping</h4>
                                <p className="text-xs text-gray-500">Within 3-5 business days</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-primary" />
                            <div>
                                <h4 className="text-sm font-bold">Warranty</h4>
                                <p className="text-xs text-gray-500">10 year guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
