import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-24 min-h-screen">
            <div className="max-w-4xl mx-auto space-y-16">

                <div className="text-center space-y-6">
                    <h1 className="font-display text-5xl font-bold">Our Story</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        DreamComfort was born from a simple belief: that a good night's sleep is the foundation of a happy, healthy life. We set out to create the perfect bedsheets—ethically made, incredibly soft, and designed to last.
                    </p>
                </div>

                <div className="aspect-video relative rounded-2xl overflow-hidden bg-gray-100">
                    {/* Placeholder for About Image */}
                    <Image
                        src="/images/hero_bg.png"
                        alt="Our factory"
                        fill
                        className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-lg font-medium bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm">
                            Crafted with Care
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                            To transform the way people sleep by providing high-quality, sustainable bedding that is accessible to everyone. We are committed to transparency, fair labor practices, and reducing our environmental footprint.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
                        <p className="text-gray-600">
                            We envision a world where every home is a sanctuary of comfort. We strive to be the leading brand in luxury bedding, known not just for our products, but for our positive impact on the world.
                        </p>
                    </div>
                </div>

                <div className="bg-secondary/20 p-8 rounded-xl text-center">
                    <h2 className="font-display text-2xl font-bold mb-6">Our Promise Quality</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div>
                            <span className="block text-4xl font-bold text-primary mb-2">100%</span>
                            <span className="text-sm text-gray-600">Organic Cotton</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-bold text-primary mb-2">300+</span>
                            <span className="text-sm text-gray-600">Thread Count</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-bold text-primary mb-2">10Yr</span>
                            <span className="text-sm text-gray-600">Warranty</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
