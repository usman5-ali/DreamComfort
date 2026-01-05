import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-24 min-h-screen">
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-16">
                    <h1 className="font-display text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-gray-600">We'd love to hear from you. Here's how you can reach us.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Email</h3>
                                <p className="text-gray-600">Our friendly team is here to help.</p>
                                <a href="mailto:hello@dreamcomfort.com" className="text-primary font-medium">hello@dreamcomfort.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Phone</h3>
                                <p className="text-gray-600">Mon-Fri from 8am to 5pm.</p>
                                <a href="tel:+15550000000" className="text-primary font-medium">+1 (555) 000-0000</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Office</h3>
                                <p className="text-gray-600">Come say hello.</p>
                                <p className="text-gray-900 font-medium">123 Bedding Lane, Sleepy Hollow, NY 10591</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">First name</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">Last name</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="jane@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help you?" />
                            </div>

                            <Button type="submit" size="lg" className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
