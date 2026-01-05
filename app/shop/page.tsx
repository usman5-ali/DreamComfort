import Link from "next/link";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

// Mock Data
const products = [
    { id: "1", name: "Misty Grey Organic Cotton Set", price: 129.00, category: "Cotton", image: "/images/hero_bg.png" },
    { id: "2", name: "Pure Ivory Silk Pillowcase", price: 45.00, category: "Silk", image: "/images/hero_bg.png" },
    { id: "3", name: "Sage Green Percale Sheet", price: 89.00, category: "Percale", image: "/images/hero_bg.png" },
    { id: "4", name: "Navy Blue Sateen Duvet", price: 159.00, category: "Sateen", image: "/images/hero_bg.png" },
    { id: "5", name: "Blush Pink Linen Bundle", price: 199.00, category: "Linen", image: "/images/hero_bg.png" },
    { id: "6", name: "Charcoal Bamboo Sheet Set", price: 139.00, category: "Bamboo", image: "/images/hero_bg.png" },
    { id: "7", name: "White Hotel Collection", price: 110.00, category: "Cotton", image: "/images/hero_bg.png" },
    { id: "8", name: "Striped Oxford Pillowcase", price: 35.00, category: "Cotton", image: "/images/hero_bg.png" },
];

const categories = ["All", "Cotton", "Silk", "Linen", "Bamboo", "Percale", "Sateen"];
const colors = ["White", "Ivory", "Grey", "Blue", "Green", "Pink"];

export default function ShopPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-24 min-h-screen">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div>
                    <h1 className="font-display text-4xl font-bold mb-2">Shop All</h1>
                    <p className="text-gray-600">Discover our premium collection of bedding essentials.</p>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="outline" className="gap-2">
                        <SlidersHorizontal className="h-4 w-4" /> Filters
                    </Button>
                    <div className="relative inline-block text-left">
                        <Button variant="outline" className="gap-2 min-w-[140px] justify-between">
                            Sort by <ChevronDown className="h-4 w-4" />
                        </Button>
                        {/* Dropdown would go here */}
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar (Desktop) */}
                <aside className="hidden lg:block w-64 space-y-8 flex-shrink-0">

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Categories</h3>
                        <ul className="space-y-2">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <Link href="#" className="text-gray-600 hover:text-primary transition-colors block py-1">
                                        {cat}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Colors</h3>
                        <div className="grid grid-cols-4 gap-2">
                            {colors.map((color) => (
                                <button
                                    key={color}
                                    className="w-8 h-8 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    style={{ backgroundColor: color.toLowerCase() === 'ivory' ? '#F5F5DC' : color.toLowerCase() }}
                                    title={color}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Price Range</h3>
                        <div className="flex items-center gap-4">
                            {/* Simple range slider placeholder */}
                            <input type="range" min="0" max="500" className="w-full accent-primary" />
                        </div>
                        <div className="flex justify-between text-sm text-gray-500 mt-2">
                            <span>$0</span>
                            <span>$500+</span>
                        </div>
                    </div>

                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {products.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-16 text-center">
                        <Button variant="outline" size="lg" className="min-w-[200px]">Load More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
