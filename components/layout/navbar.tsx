"use client";

import Link from "next/link";
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/shop", label: "Shop" },
        { href: "/about", label: "About Us" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-gray-100"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    {/* Placeholder for Logo if needed, or just text */}
                    <h1 className={cn("font-display text-2xl font-bold tracking-tight transition-colors", isScrolled ? "text-primary" : "text-primary-foreground drop-shadow-md lg:text-primary")}>
                        DreamComfort
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary/80",
                                isScrolled ? "text-gray-800" : "text-white lg:text-gray-800"
                                // Note: On hero image (transparent header), text is white. 
                                // But wait, if the hero is light, white text is bad. Ideally hero has overlay. 
                                // Let's assume hero has dark overlay or use adaptive colors.
                                // For safety, I'll force dark text if solid background, else white text? 
                                // Actually, simpler to just have a subtle background or always dark text if design allows.
                                // Let's go with "isScrolled ? dark : white (with shadow)" for now, but on white pages this might break.
                                // Better approach: Solid header always? No, user wanted "modern".
                                // Let's stick to: transparent header works best on Hero. 
                                // I will fix text color logic to be safer: 
                                // Assuming Hero section is the only place it's transparent.
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-gray-800" : "text-white lg:text-gray-800")}>
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className={cn("hidden md:flex", isScrolled ? "text-gray-800" : "text-white lg:text-gray-800")}>
                        <User className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className={cn("relative", isScrolled ? "text-gray-800" : "text-white lg:text-gray-800")}>
                        <ShoppingCart className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-white text-[10px] grid place-items-center rounded-full">
                            0
                        </span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn("md:hidden", isScrolled ? "text-gray-800" : "text-white")}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-base font-medium text-gray-800 hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
