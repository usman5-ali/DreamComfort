import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
    imageSrc?: string;
}

export function Hero({ imageSrc = "/images/hero_bg.png" }: HeroProps) {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageSrc}
                    alt="Luxury Bedding"
                    fill
                    className="object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,..." // Optional: Add a real blur hash later
                />
                <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-6">
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    Sleep in <span className="text-secondary italic">Luxury</span>
                </h1>
                <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    Discover the softest, most sustainable bedsheets made from 100% organic cotton. Transform your bedroom into a sanctuary.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <Button size="lg" className="text-base px-8 py-6 rounded-full" asChild>
                        <Link href="/shop">
                            Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-full bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900" asChild>
                        <Link href="/about">
                            Our Story
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
