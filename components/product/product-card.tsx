import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
    return (
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            {/* Image */}
            <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="rounded-full shadow-sm bg-white hover:bg-white text-gray-500 hover:text-red-500">
                        <Heart className="h-4 w-4" />
                    </Button>
                </div>
                {/* Quick Add Overlay (Optional) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button className="w-full shadow-lg">Quick Add</Button>
                </div>
            </div>

            {/* Details */}
            <div className="p-4 space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{category}</p>
                <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
                    <Link href={`/product/${id}`} className="hover:underline decoration-1 underline-offset-4">
                        {name}
                    </Link>
                </h3>
                <p className="text-primary font-medium">${price.toFixed(2)}</p>
            </div>
        </div>
    );
}
