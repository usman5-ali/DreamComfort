import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="font-display text-2xl font-bold">DreamComfort</h2>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Experience the ultimate comfort with our premium, sustainable bedsheets. Crafted for your best sleep.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Shop</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/shop" className="hover:text-primary">All Products</Link></li>
                            <li><Link href="/shop?category=cotton" className="hover:text-primary">Cotton Sheets</Link></li>
                            <li><Link href="/shop?category=silk" className="hover:text-primary">Silk Collections</Link></li>
                            <li><Link href="/shop?category=printed" className="hover:text-primary">Printed Sets</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Support</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                            <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
                            <li><Link href="/shipping" className="hover:text-primary">Shipping & Returns</Link></li>
                            <li><Link href="/care" className="hover:text-primary">Care Guide</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Stay in the Loop</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} DreamComfort. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
