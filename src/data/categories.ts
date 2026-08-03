export type FurnitureCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  summary: string;
  introduction: string;
  highlights: string[];
};

export const categories: FurnitureCategory[] = [
  {
    slug: "living-room",
    title: "Living Room Furniture",
    eyebrow: "Comfort for everyday living",
    image: "/images/Marley.jpg",
    imageAlt: "Coordinating living room furniture",
    summary:
      "Explore sofas, loveseats, sectionals, and accent seating for the heart of your home.",
    introduction:
      "Premier Furniture offers comfortable living room options across a range of styles, sizes, and budgets. Visit either showroom for current availability and help finding pieces that work together.",
    highlights: [
      "Sofas and loveseats",
      "Sectionals and accent chairs",
      "Coordinating living room collections",
    ],
  },
  {
    slug: "bedroom",
    title: "Bedroom Furniture",
    eyebrow: "A more comfortable retreat",
    image: "/images/bedset.png",
    imageAlt: "Coordinating bedroom furniture set",
    summary:
      "Find beds, dressers, nightstands, and coordinating pieces for a complete bedroom.",
    introduction:
      "From individual pieces to matching collections, our showroom team can help you plan a bedroom that fits your space, storage needs, and personal style.",
    highlights: [
      "Beds and headboards",
      "Dressers, chests, and mirrors",
      "Nightstands and matching collections",
    ],
  },
  {
    slug: "mattresses",
    title: "Mattresses",
    eyebrow: "Better rest starts here",
    image: "/images/beautyrestbase.png",
    imageAlt: "Premium mattress and adjustable base",
    summary:
      "Compare trusted mattress brands, comfort levels, and sleep solutions in person.",
    introduction:
      "Choosing a mattress is personal. Our team can help you compare comfort, construction, and support options from trusted brands available in our showrooms and by special order.",
    highlights: [
      "Multiple comfort and support options",
      "Trusted national mattress brands",
      "Foundations and adjustable bases",
    ],
  },
  {
    slug: "recliners",
    title: "Recliners",
    eyebrow: "Settle into real comfort",
    image: "/images/bestrecliner.jpg",
    imageAlt: "Upholstered reclining chair",
    summary:
      "Shop comfortable reclining seating designed for relaxation and everyday use.",
    introduction:
      "Visit Premier Furniture to compare recliner sizes, upholstery choices, comfort features, and trusted brands with help from our local showroom team.",
    highlights: [
      "Manual and power options",
      "Multiple sizes and upholstery choices",
      "Coordinating reclining seating",
    ],
  },
  {
    slug: "dining",
    title: "Dining Room Furniture",
    eyebrow: "Made for gathering",
    image: "/images/dining.jpg",
    imageAlt: "Dining table with coordinating chairs",
    summary:
      "Bring everyone together with dining tables, chairs, and coordinating sets.",
    introduction:
      "Whether you need a compact everyday table or a complete dining collection, our team can help you compare sizes, finishes, seating, and matching pieces.",
    highlights: [
      "Dining tables and chairs",
      "Standard and counter-height options",
      "Coordinating dining collections",
    ],
  },
  {
    slug: "coffee-tables",
    title: "Coffee & End Tables",
    eyebrow: "The finishing pieces",
    image: "/images/coffee.png",
    imageAlt: "Coordinating coffee table and end tables",
    summary:
      "Complete your room with coffee tables, end tables, and coordinating occasional pieces.",
    introduction:
      "The right occasional tables add function and help tie a room together. Browse coordinating shapes, finishes, storage features, and table sets in our showrooms.",
    highlights: [
      "Coffee and cocktail tables",
      "End and chairside tables",
      "Coordinating occasional table sets",
    ],
  },
];

export function getCategory(slug: string) {
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    throw new Error(`Unknown furniture category: ${slug}`);
  }

  return category;
}