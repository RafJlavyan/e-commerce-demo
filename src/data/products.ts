import { Product } from "@/types";
import { SELLERS } from "./reviews";

export const PRODUCTS: Product[] = [
  // 1. Electronics
  {
    id: "prod-1",
    name: "AURA Horizon Studio ANC Headphones",
    slug: "aura-horizon-studio-anc-headphones",
    description: "Engineered with beryllium acoustic drivers, active noise cancellation up to 42dB, and supple lambskin ear cushions. Delivers an expansive spatial soundstage with 40-hour continuous playback.",
    shortDescription: "Beryllium driver spatial audio with 42dB hybrid noise cancellation.",
    price: 349.00,
    originalPrice: 420.00,
    discountPercentage: 17,
    rating: 4.9,
    reviewCount: 384,
    category: "Electronics",
    categorySlug: "electronics",
    subcategory: "Headphones",
    brand: "Aethel Labs",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 24,
    seller: SELLERS.aethel,
    tags: ["wireless", "audio", "anc", "bluetooth5.3", "studio"],
    specifications: {
      "Driver": "40mm Custom Beryllium Diaphragm",
      "Battery Life": "40 Hours (ANC On)",
      "Connectivity": "Bluetooth 5.3 & 3.5mm Lossless",
      "Weight": "248g",
      "Charging": "USB-C Fast Charge (10m = 5hrs)"
    },
    colors: [
      { name: "Matte Obsidian", hex: "#1A1A1A" },
      { name: "Lunar Silver", hex: "#D4D4D8" },
      { name: "Sandstone Beige", hex: "#E7E5E4" }
    ],
    isFeatured: true,
    isBestseller: true,
    isDeal: true,
    dealEndsAt: "2026-10-31T23:59:59Z",
    features: [
      "Hybrid Active Noise Cancellation with Transparency Mode",
      "Custom tuned 40mm Beryllium acoustic transducers",
      "Multipoint pairing across two simultaneous devices",
      "Precision aluminum swivel joints with magnetic memory foam cushions"
    ]
  },
  {
    id: "prod-2",
    name: "Linear Minimalist Mechanical Keyboard",
    slug: "linear-minimalist-mechanical-keyboard",
    description: "CNC machined solid 6063 anodized aluminum chassis, hot-swappable lubricated silent linear switches, and dye-sub PBT keycaps. Wireless tri-mode connectivity for seamless desk integration.",
    shortDescription: "CNC aluminum hot-swap 75% mechanical keyboard with wireless tri-mode.",
    price: 189.00,
    originalPrice: 220.00,
    discountPercentage: 14,
    rating: 4.8,
    reviewCount: 215,
    category: "Gaming & Tech",
    categorySlug: "gaming",
    subcategory: "Mechanical Keyboards",
    brand: "Monochrome Craft",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 18,
    seller: SELLERS.mono,
    tags: ["keyboard", "gaming", "desksetup", "mechanical"],
    specifications: {
      "Layout": "75% Compact (82 Keys)",
      "Case Material": "Anodized CNC Aluminum",
      "Switch Type": "Factory Lubed Gateron Silent Linear",
      "Battery": "4000mAh Lithium Ion",
      "Connection": "2.4GHz / BT 5.1 / USB-C"
    },
    colors: [
      { name: "Space Grey", hex: "#3F3F46" },
      { name: "Chalk White", hex: "#F4F4F5" }
    ],
    isFeatured: true,
    isBestseller: true,
    features: [
      "Gasket mounted internal structure for acoustic dampening",
      "South-facing warm white LED ambient backlighting",
      "Custom VIA/QMK key remapping support",
      "Machined brass internal weight bar"
    ]
  },
  {
    id: "prod-3",
    name: "Onyx Minimalist Ceramic Coffee Dripper & Carafe",
    slug: "onyx-minimalist-ceramic-coffee-dripper",
    description: "Hand-thrown Japanese matte black ceramic pour-over dripper paired with a borosilicate heat-resistant glass carafe. Designed for precise flow-rate extraction and thermal stability.",
    shortDescription: "Hand-thrown matte ceramic pour-over set with borosilicate glass carafe.",
    price: 68.00,
    rating: 4.95,
    reviewCount: 420,
    category: "Gourmet & Pantry",
    categorySlug: "grocery",
    subcategory: "Specialty Coffee",
    brand: "Kanso Goods",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 35,
    seller: SELLERS.kanso,
    tags: ["coffee", "ceramic", "kitchen", "pourover"],
    specifications: {
      "Material": "Mino-ware Ceramic & Borosilicate Glass",
      "Capacity": "600ml (2-4 Cups)",
      "Origin": "Gifu Prefecture, Japan",
      "Filter Compatibility": "Standard Cone 02 Filters"
    },
    colors: [
      { name: "Matte Black", hex: "#18181B" },
      { name: "Raw Terracotta", hex: "#D97706" },
      { name: "Celadon Green", hex: "#A7F3D0" }
    ],
    isFeatured: true,
    isNewArrival: true,
    features: [
      "Internal spiral ribbing engineered for optimal saturation",
      "Heat-insulating natural cork base collar",
      "Non-drip precision pouring spout"
    ]
  },
  {
    id: "prod-4",
    name: "Architectural Solid Ash Dining Chair",
    slug: "architectural-solid-ash-dining-chair",
    description: "Sculpted from sustainably harvested European White Ash with traditional mortise-and-tenon joinery. An elegant, minimalist profile with curved ergonomic back support.",
    shortDescription: "Sculptural solid European white ash chair with matte lacquer finish.",
    price: 290.00,
    originalPrice: 340.00,
    discountPercentage: 15,
    rating: 4.88,
    reviewCount: 92,
    category: "Home & Living",
    categorySlug: "home-living",
    subcategory: "Furniture",
    brand: "Nordic Atelier",
    images: [
      "https://images.unsplash.com/photo-1580481077190-7361346d1808?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 12,
    seller: SELLERS.nordic,
    tags: ["furniture", "scandinavian", "minimalist", "chair"],
    specifications: {
      "Dimensions": "W 52cm x D 49cm x H 78cm",
      "Seat Height": "45cm",
      "Wood Species": "European White Ash (FSC Certified)",
      "Finish": "Low-VOC UV Matte Lacquer",
      "Max Weight Load": "150 kg"
    },
    colors: [
      { name: "Natural Ash", hex: "#E5E5E5" },
      { name: "Smoked Oak", hex: "#52525B" },
      { name: "Ebony Black", hex: "#18181B" }
    ],
    isFeatured: true,
    features: [
      "Ergonomically steam-bent backrest contour",
      "Zero exposed metal hardware",
      "Includes non-marking felt glide floor pads"
    ]
  },
  {
    id: "prod-5",
    name: "Voyager Titanium Automatic Field Watch",
    slug: "voyager-titanium-automatic-field-watch",
    description: "Grade 2 titanium casing with scratch-proof sapphire crystal and Japanese 24-jewel automatic movement. 100m water resistance and interchangeable ballistic nylon strap.",
    shortDescription: "Grade 2 titanium automatic movement watch with sapphire crystal.",
    price: 495.00,
    originalPrice: 580.00,
    discountPercentage: 15,
    rating: 4.92,
    reviewCount: 168,
    category: "Watches & Accessories",
    categorySlug: "accessories",
    subcategory: "Automatic Watches",
    brand: "Lumina Studio",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 15,
    seller: SELLERS.lumina,
    tags: ["watch", "titanium", "automatic", "luxury"],
    specifications: {
      "Case Diameter": "39mm",
      "Case Thickness": "11.2mm",
      "Movement": "Miyota 9039 High-Beat Automatic",
      "Crystal": "Double-domed Sapphire with Anti-Reflective Coating",
      "Water Resistance": "10 ATM / 100 Meters"
    },
    colors: [
      { name: "Titanium Matte", hex: "#71717A" },
      { name: "DLC Stealth Black", hex: "#27272A" }
    ],
    isFeatured: true,
    isBestseller: true,
    features: [
      "Swiss Super-LumiNova BGW9 luminous indices",
      "Screw-down crown with engraved geometric insignia",
      "42-hour power reserve"
    ]
  },
  {
    id: "prod-6",
    name: "Merino Wool Relaxed Overshirt",
    slug: "merino-wool-relaxed-overshirt",
    description: "Tailored from 100% extra-fine 380gsm Australian Merino wool with corozo nut buttons. Naturally temperature regulating, odor resistant, and impeccably structured for layering.",
    shortDescription: "100% extrafine 380gsm Merino wool overshirt with corozo buttons.",
    price: 165.00,
    rating: 4.8,
    reviewCount: 142,
    category: "Fashion & Apparel",
    categorySlug: "fashion",
    subcategory: "Men's Outerwear",
    brand: "Nordic Atelier",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 28,
    seller: SELLERS.nordic,
    tags: ["apparel", "wool", "menswear", "overshirt"],
    specifications: {
      "Material": "100% Extra-fine Merino Wool",
      "Weight": "380 GSM Heavyweight Weave",
      "Buttons": "Natural Matte Corozo Nut",
      "Care": "Dry Clean or Gentle Wool Cycle"
    },
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Charcoal Heather", hex: "#374151" },
      { name: "Oatmeal Melange", hex: "#D6D3D1" },
      { name: "Deep Navy", hex: "#1E293B" }
    ],
    isFeatured: true,
    isNewArrival: true,
    features: [
      "Double-stitched patch chest pockets",
      "Curved hemline with reinforced side gussets",
      "Pre-shrunk and treated for soft hand-feel"
    ]
  },
  {
    id: "prod-7",
    name: "Botanical Ceramide Hydration Nectar (50ml)",
    slug: "botanical-ceramide-hydration-nectar",
    description: "A potent biocompatible lipid serum infused with five key ceramides, fermented squalane, and wild alpine edelweiss extract to repair skin moisture barrier and promote radiance.",
    shortDescription: "Barrier repair serum with 5 essential ceramides and fermented squalane.",
    price: 54.00,
    originalPrice: 68.00,
    discountPercentage: 20,
    rating: 4.94,
    reviewCount: 512,
    category: "Beauty & Wellness",
    categorySlug: "beauty",
    subcategory: "Skincare",
    brand: "Aethel Labs",
    images: [
      "https://images.unsplash.com/photo-1608248597359-00918c50406d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 50,
    seller: SELLERS.aethel,
    tags: ["skincare", "serum", "botanical", "cleanbeauty"],
    specifications: {
      "Volume": "50ml / 1.7 fl. oz.",
      "Skin Type": "All types, including sensitive",
      "Key Actives": "Ceramides NP/AP/EOP, Squalane, Hyaluronic Complex",
      "Packaging": "UV-filtering Recycled Violet Glass Dropper"
    },
    isFeatured: true,
    isBestseller: true,
    isDeal: true,
    dealEndsAt: "2026-10-31T23:59:59Z",
    features: [
      "Formulated without parabens, synthetic fragrances, or silicones",
      "Dermatologically tested and certified cruelty-free",
      "Silky non-greasy absorption in under 30 seconds"
    ]
  },
  {
    id: "prod-8",
    name: "Modular Matte Polycarbonate Carry-On (38L)",
    slug: "modular-matte-polycarbonate-carry-on",
    description: "German Makrolon polycarbonate aerospace-grade hardshell with 360-degree silent Japanese Hinomoto ball-bearing spinner wheels and an integrated TSA combination lock.",
    shortDescription: "Aerospace polycarbonate carry-on luggage with Hinomoto silent wheels.",
    price: 245.00,
    rating: 4.9,
    reviewCount: 280,
    category: "Luggage & Travel",
    categorySlug: "travel",
    subcategory: "Carry-On Luggage",
    brand: "Lumina Studio",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 20,
    seller: SELLERS.lumina,
    tags: ["travel", "luggage", "carryon", "minimal"],
    specifications: {
      "Dimensions": "55cm x 36cm x 23cm (IATA Approved)",
      "Volume": "38 Liters",
      "Weight": "3.2 kg",
      "Shell": "Covestro Makrolon 100% Polycarbonate",
      "Wheels": "4x Double Hinomoto Lisof Silent Wheels"
    },
    colors: [
      { name: "Basalt Grey", hex: "#4B5563" },
      { name: "Bone White", hex: "#F3F4F6" },
      { name: "Forest Olive", hex: "#3F4E4F" }
    ],
    isFeatured: true,
    features: [
      "Internal compression divider system with water-resistant laundry bag",
      "Telescopic handle with 4 ergonomic height lock stages",
      "Water-repellent YKK reverse coil zippers"
    ]
  },
  {
    id: "prod-9",
    name: "Solid Brass & Walnut Task Desk Lamp",
    slug: "solid-brass-walnut-task-desk-lamp",
    description: "Precision-balanced desk lamp crafted from solid unlacquered brass and oiled American walnut. Warm 2700K flicker-free LED with stepless touch dimming.",
    shortDescription: "Solid brass and walnut articulated desk lamp with touch dimming.",
    price: 195.00,
    originalPrice: 230.00,
    discountPercentage: 15,
    rating: 4.87,
    reviewCount: 94,
    category: "Office & Workspace",
    categorySlug: "office",
    subcategory: "Task Lighting",
    brand: "Monochrome Craft",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 14,
    seller: SELLERS.mono,
    tags: ["lamp", "brass", "lighting", "office", "walnut"],
    specifications: {
      "Material": "Solid Brass & American Walnut Base",
      "Color Temp": "2700K Warm Ambient (95+ CRI)",
      "Luminous Output": "600 Lumens (Max)",
      "Cable": "2.0m Braided Charcoal Textile Cord"
    },
    isFeatured: true,
    features: [
      "Stepless capacitive touch dimming on brass arm",
      "Full 180-degree swivel articulation",
      "Heavy weighted non-slip silicone base"
    ]
  },
  {
    id: "prod-10",
    name: "Minimalist Italian Vachetta Leather Backpack",
    slug: "minimalist-italian-vachetta-leather-backpack",
    description: "Full-grain vegetable-tanned Tuscan Vachetta leather that develops a gorgeous honey patina over time. Fits up to a 16-inch laptop in a microfiber padded sleeve.",
    shortDescription: "Full-grain Tuscan vegetable-tanned leather backpack with 16in laptop compartment.",
    price: 320.00,
    rating: 4.91,
    reviewCount: 156,
    category: "Fashion & Apparel",
    categorySlug: "fashion",
    subcategory: "Leather Goods",
    brand: "Lumina Studio",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 16,
    seller: SELLERS.lumina,
    tags: ["leather", "backpack", "fashion", "bag"],
    specifications: {
      "Dimensions": "42cm x 30cm x 13cm",
      "Leather": "Full Grain Tuscan Vegetable-Tanned Vachetta",
      "Hardware": "Matte Nickel-Plated Solid Brass",
      "Capacity": "18 Liters"
    },
    colors: [
      { name: "Natural Cognac", hex: "#9A3412" },
      { name: "Pitch Black", hex: "#18181B" },
      { name: "Espresso Brown", hex: "#451A03" }
    ],
    isFeatured: true,
    isBestseller: true,
    features: [
      "Hidden quick-access passport and phone pocket along back panel",
      "Ergonomic padded leather shoulder straps",
      "Interior organizer panel with key leash"
    ]
  },
  {
    id: "prod-11",
    name: "Precision CNC Aluminum Ergonomic Wireless Mouse",
    slug: "precision-cnc-aluminum-ergonomic-wireless-mouse",
    description: "Machined from a single billet of aluminum with a precision 26,000 DPI optical sensor, silent magnetic switches, and dual tactile scroll wheels.",
    shortDescription: "Billet aluminum wireless mouse with dual scroll wheels & 26k DPI sensor.",
    price: 119.00,
    originalPrice: 145.00,
    discountPercentage: 18,
    rating: 4.79,
    reviewCount: 178,
    category: "Gaming & Tech",
    categorySlug: "gaming",
    subcategory: "Precision Mice",
    brand: "Monochrome Craft",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 22,
    seller: SELLERS.mono,
    tags: ["mouse", "tech", "gaming", "desksetup"],
    specifications: {
      "Sensor": "PixArt PAW3395 (26,000 DPI / 650 IPS)",
      "Battery": "Up to 80 Hours continuous use",
      "Switches": "Optical Silent Tactile (100M click rating)",
      "Weight": "72g"
    },
    colors: [
      { name: "Silver Beadblast", hex: "#E4E4E7" },
      { name: "Matte Anthracite", hex: "#27272A" }
    ],
    isFeatured: true,
    isDeal: true,
    dealEndsAt: "2026-10-31T23:59:59Z",
    features: [
      "Dual infinity scroll wheel with magnetic click toggle",
      "Low-latency 1000Hz 2.4G wireless transmitter",
      "Pure PTFE glide feet"
    ]
  },
  {
    id: "prod-12",
    name: "Architectural Hardcover Monograph: Form & Space",
    slug: "architectural-hardcover-monograph-form-space",
    description: "A 360-page luxury cloth-bound survey of modern brutalist and minimalist residential architecture across 14 countries. Printed on 170gsm heavyweight archival art paper.",
    shortDescription: "Luxury 360-page clothbound architectural monograph on archival paper.",
    price: 75.00,
    rating: 4.96,
    reviewCount: 88,
    category: "Books & Stationery",
    categorySlug: "books",
    subcategory: "Art & Architecture",
    brand: "Kanso Goods",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 40,
    seller: SELLERS.kanso,
    tags: ["book", "architecture", "design", "art"],
    specifications: {
      "Pages": "360 Full Color",
      "Binding": "Linen Cloth Hardcover with Blind Embossing",
      "Dimensions": "25cm x 32cm x 3.5cm",
      "Language": "English"
    },
    isFeatured: false,
    isNewArrival: true,
    features: [
      "Features unreleased photography and architectural blueprints",
      "FSC-certified sustainable chlorine-free paper",
      "Includes protective custom slipcase"
    ]
  },
  {
    id: "prod-13",
    name: "Ultralight Carbon Fiber Road Bike Bottle Cage & Tool",
    slug: "ultralight-carbon-fiber-road-bike-cage",
    description: "Toray T800 unidirectional carbon fiber cage weighing just 18 grams, engineered to firmly grip cycling bottles over rough tarmac and gravel trails.",
    shortDescription: "18g Toray T800 carbon fiber bicycle cage with integrated tire lever.",
    price: 42.00,
    rating: 4.82,
    reviewCount: 64,
    category: "Sports & Outdoors",
    categorySlug: "sports",
    subcategory: "Cycling",
    brand: "Aethel Labs",
    images: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 30,
    seller: SELLERS.aethel,
    tags: ["cycling", "carbon", "sports", "bike"],
    specifications: {
      "Weight": "18 grams",
      "Material": "Toray T800 3K Carbon Fiber",
      "Compatibility": "Standard 74mm Cycling Bottles",
      "Bolts": "Anodized Black Titanium M5 Included"
    },
    colors: [
      { name: "Matte 3K Carbon", hex: "#1F2937" },
      { name: "Gloss Raw Carbon", hex: "#111827" }
    ],
    isFeatured: false,
    features: [
      "Vibration dampening geometry prevents bottle ejection",
      "Ultralight aerospace construction",
      "Non-marring inner coating"
    ]
  },
  {
    id: "prod-14",
    name: "Nootropic Organic Ceremonial Matcha (40g)",
    slug: "nootropic-organic-ceremonial-matcha",
    description: "First-harvest ceremonial grade single-cultivar (Okumidori) Uji matcha. Stone-milled slowly in Kyoto for an ultra-vibrant emerald hue and velvety umami sweetness with zero bitterness.",
    shortDescription: "First-harvest single cultivar Uji matcha stone-ground in Kyoto.",
    price: 38.00,
    originalPrice: 45.00,
    discountPercentage: 15,
    rating: 4.97,
    reviewCount: 630,
    category: "Gourmet & Pantry",
    categorySlug: "grocery",
    subcategory: "Rare Teas",
    brand: "Kanso Goods",
    images: [
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 65,
    seller: SELLERS.kanso,
    tags: ["tea", "matcha", "organic", "superfood", "japan"],
    specifications: {
      "Weight": "40g (Approx. 20-25 Servings)",
      "Cultivar": "100% Okumidori Single Origin",
      "Origin": "Wazuka, Uji, Kyoto Prefecture",
      "Harvest": "Spring First Flush (Ichibancha)"
    },
    isFeatured: true,
    isBestseller: true,
    features: [
      "Rich in L-Theanine and EGCG catechins for calm sustained focus",
      "Vacuum-sealed in inert nitrogen lined tin",
      "JAS Organic and Pesticide-Free Certified"
    ]
  },
  {
    id: "prod-15",
    name: "Handcrafted Ceramic Elevated Pet Feeder Bowl",
    slug: "handcrafted-ceramic-elevated-pet-feeder",
    description: "Heavyweight stoneware pet bowl on a water-sealed solid oak riser. Elevated at an optimal 15-degree incline to support healthy digestion and spinal alignment in dogs and cats.",
    shortDescription: "Elevated ceramic and solid oak ergonomic pet feeding bowl.",
    price: 58.00,
    rating: 4.86,
    reviewCount: 110,
    category: "Pet Supplies",
    categorySlug: "pet-supplies",
    subcategory: "Ceramic Bowls",
    brand: "Nordic Atelier",
    images: [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 25,
    seller: SELLERS.nordic,
    tags: ["pet", "dog", "cat", "ceramic", "bowl"],
    specifications: {
      "Material": "Food-grade Glazed Ceramic & Oak Stand",
      "Capacity": "850ml",
      "Care": "Dishwasher Safe Bowl / Wipe clean stand"
    },
    colors: [
      { name: "Chalk Matte", hex: "#F3F4F6" },
      { name: "Slate Grey", hex: "#4B5563" }
    ],
    isFeatured: false,
    features: [
      "Whisker-friendly shallow wide dish design",
      "Non-skid silicone pads underneath wood base",
      "Lead-free, cadmium-free ceramic glaze"
    ]
  },
  {
    id: "prod-16",
    name: "Heirloom Solid Beechwood Wooden Toy Building Blocks",
    slug: "heirloom-solid-beechwood-toy-building-blocks",
    description: "A set of 54 precision cut architectural geometry blocks crafted from sustainably forested European beechwood. Finished with food-safe non-toxic organic beeswax.",
    shortDescription: "54-piece architectural beechwood block set with beeswax finish.",
    price: 64.00,
    rating: 4.93,
    reviewCount: 95,
    category: "Kids & Nursery",
    categorySlug: "kids",
    subcategory: "Wooden Toys",
    brand: "Nordic Atelier",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 22,
    seller: SELLERS.nordic,
    tags: ["kids", "toys", "wooden", "montessori", "nursery"],
    specifications: {
      "Pieces": "54 Solid Beech Blocks",
      "Wood": "Sustainably Forested German Beechwood",
      "Finish": "Organic Linseed Oil & Natural Beeswax",
      "Storage": "Organic Heavy Cotton Drawstring Sack Included"
    },
    isFeatured: false,
    isNewArrival: true,
    features: [
      "Rounded chamfered edges safe for small hands",
      "Encourages spatial reasoning and tactile motor skills",
      "Zero plastics, varnishes, or chemical dyes"
    ]
  },
  {
    id: "prod-17",
    name: "Precision Aluminum Magsafe Desktop Phone Stand",
    slug: "precision-aluminum-magsafe-desktop-stand",
    description: "CNC milled solid aluminum desktop dock with an embedded MagSafe compatible magnetic disc and integrated internal cable routing for a clutter-free desk.",
    shortDescription: "Weighted aluminum MagSafe compatible charging desk stand.",
    price: 48.00,
    originalPrice: 60.00,
    discountPercentage: 20,
    rating: 4.84,
    reviewCount: 204,
    category: "Electronics",
    categorySlug: "electronics",
    subcategory: "Accessories",
    brand: "Monochrome Craft",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 45,
    seller: SELLERS.mono,
    tags: ["accessories", "tech", "magsafe", "iphone", "stand"],
    specifications: {
      "Material": "Anodized Aerospace 6063 Aluminum",
      "Weight": "310g (Heavy Weighted Anti-Tip)",
      "Angle": "Fixed 45° Ergonomic Standby Viewing Angle",
      "Compatibility": "All MagSafe iPhones & Cases"
    },
    colors: [
      { name: "Space Grey", hex: "#374151" },
      { name: "Silver", hex: "#E5E7EB" },
      { name: "Midnight", hex: "#111827" }
    ],
    isFeatured: true,
    isDeal: true,
    dealEndsAt: "2026-10-31T23:59:59Z",
    features: [
      "Solid one-piece aluminum frame that won't flex or wobble",
      "Micro-suction nano grip base keeps stand planted during one-hand removal",
      "Protective soft silicone ring prevents phone scuffing"
    ]
  },
  {
    id: "prod-18",
    name: "Japanese Santoku 67-Layer Damascus Chef Knife",
    slug: "japanese-santoku-67-layer-damascus-knife",
    description: "Forged from VG-10 high carbon steel core clad in 67 layers of patterned Damascus stainless steel with an octagonal ebony and stabilized burl wood handle.",
    shortDescription: "VG-10 core 67-layer Damascus 7-inch Santoku chef knife.",
    price: 155.00,
    rating: 4.95,
    reviewCount: 310,
    category: "Home & Living",
    categorySlug: "home-living",
    subcategory: "Kitchenware",
    brand: "Kanso Goods",
    images: [
      "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 19,
    seller: SELLERS.kanso,
    tags: ["knife", "kitchen", "damascus", "cooking", "japan"],
    specifications: {
      "Blade Length": "7.0 inches (180mm)",
      "Core Steel": "VG-10 High Carbon Stainless (HRC 60-62)",
      "Cladding": "33 Layers Damascus per side (67 Total)",
      "Edge Angle": "15° Double Bevel Razor Edge",
      "Handle": "Octagonal Natural Ebony & Burl Wood"
    },
    isFeatured: true,
    isBestseller: true,
    features: [
      "Exceptional edge retention and corrosion resistance",
      "Traditional Japanese WA octagonal grip provides fatigue-free balance",
      "Comes in a magnetic pine wooden presentation saya case"
    ]
  },
  {
    id: "prod-19",
    name: "AURA Hydro-Shield Technical Commuter Parka",
    slug: "aura-hydro-shield-technical-commuter-parka",
    description: "3-layer seam-taped waterproof shell with 20,000mm hydrostatic head rating. Minimalist silhouette with concealed magnetic storm flaps and water-repellent zippers.",
    shortDescription: "3-layer 20k waterproof technical commuter shell parka.",
    price: 275.00,
    originalPrice: 325.00,
    discountPercentage: 15,
    rating: 4.88,
    reviewCount: 145,
    category: "Fashion & Apparel",
    categorySlug: "fashion",
    subcategory: "Men's Outerwear",
    brand: "Aethel Labs",
    images: [
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 14,
    seller: SELLERS.aethel,
    tags: ["jacket", "parka", "waterproof", "techwear", "fashion"],
    specifications: {
      "Waterproofing": "20,000mm H2O / 15,000g/m2 Breathability",
      "Fabric": "Recycled 3-Layer Polyamide Ripstop",
      "Zippers": "Aquaguard YKK Matte Zippers",
      "Pockets": "6 Ergonomic Weatherproof Pockets"
    },
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Stealth Black", hex: "#18181B" },
      { name: "Glacier Grey", hex: "#9CA3AF" },
      { name: "Deep Sage", hex: "#3B4D3C" }
    ],
    isFeatured: false,
    isDeal: true,
    dealEndsAt: "2026-10-31T23:59:59Z",
    features: [
      "Fully taped micro-seams throughout interior",
      "Articulated sleeves with adjustable velcro storm cuffs",
      "Internal carry harness straps for hands-free transport"
    ]
  },
  {
    id: "prod-20",
    name: "Solid Brass Heavyweight Hexagonal Fountain Pen",
    slug: "solid-brass-heavyweight-hexagonal-fountain-pen",
    description: "Precision lathe-turned solid raw brass fountain pen with a stainless steel German Bock nib. Develops an organic, one-of-a-kind antique patina through daily writing.",
    shortDescription: "Lathe-turned solid raw brass fountain pen with German Bock nib.",
    price: 85.00,
    rating: 4.92,
    reviewCount: 175,
    category: "Books & Stationery",
    categorySlug: "books",
    subcategory: "Fountain Pens",
    brand: "Monochrome Craft",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585336261026-7f5ae69cb480?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 35,
    seller: SELLERS.mono,
    tags: ["stationery", "pen", "brass", "fountainpen", "gift"],
    specifications: {
      "Weight": "48g (Balanced Unposted)",
      "Nib": "Bock 076 Stainless Steel (Fine / Medium)",
      "Filling System": "Standard International Cartridge & Converter Included",
      "Material": "Solid C3604 Eco-Brass"
    },
    isFeatured: false,
    isBestseller: true,
    features: [
      "Anti-roll hexagonal geometric body prevents desk roll-off",
      "Tight threaded cap ensures nib never dries out",
      "Hand-polished mirror finish that patinas naturally"
    ]
  },
  {
    id: "prod-21",
    name: "Botanical Restorative Night Cream (60ml)",
    slug: "botanical-restorative-night-cream",
    description: "Rich ultra-nourishing lipid cream formulated with bakuchiol (plant retinol), niacinamide, and blue tansy oil to soothe redness and accelerate cell regeneration while you sleep.",
    shortDescription: "Bakuchiol and blue tansy lipid night cream for overnight renewal.",
    price: 62.00,
    rating: 4.89,
    reviewCount: 230,
    category: "Beauty & Wellness",
    categorySlug: "beauty",
    subcategory: "Skincare",
    brand: "Aethel Labs",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 40,
    seller: SELLERS.aethel,
    tags: ["beauty", "nightcream", "bakuchiol", "skincare"],
    specifications: {
      "Volume": "60ml / 2.0 fl. oz.",
      "Key Actives": "1% Bakuchiol, 4% Niacinamide, Blue Tansy Essential Oil",
      "Texture": "Velvety Cushion Balm-Cream"
    },
    isFeatured: false,
    features: [
      "Plant alternative to retinol with zero irritation or peeling",
      "Deep moisture infusion for waking up with plump supple skin",
      "Infused with calming lavender and chamomile hydrosols"
    ]
  },
  {
    id: "prod-22",
    name: "Minimalist Italian Vegetable-Tanned Cardholder",
    slug: "minimalist-italian-vegetable-tanned-cardholder",
    description: "Sleek 4-slot cardholder crafted with hand-beveled edges and French waxed linen stitching. Holds up to 8 cards plus folded cash in the central pocket.",
    shortDescription: "Ultra-slim 4-slot Italian vegetable-tanned leather cardholder.",
    price: 45.00,
    originalPrice: 55.00,
    discountPercentage: 18,
    rating: 4.93,
    reviewCount: 390,
    category: "Watches & Accessories",
    categorySlug: "accessories",
    subcategory: "Cardholders & Wallets",
    brand: "Lumina Studio",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 55,
    seller: SELLERS.lumina,
    tags: ["wallet", "leather", "cardholder", "accessories"],
    specifications: {
      "Dimensions": "10.2cm x 7.4cm x 0.4cm",
      "Capacity": "4 Outer Slots + 1 Center Cash Pocket (6-8 Cards)",
      "Leather": "Badalassi Carlo Pueblo Full Grain Cowhide",
      "Stitch": "Saddle Stitched with Waxed Linen"
    },
    colors: [
      { name: "Whiskey Tan", hex: "#B45309" },
      { name: "Olive Drab", hex: "#4D7C0F" },
      { name: "Raven Black", hex: "#18181B" }
    ],
    isFeatured: true,
    isBestseller: true,
    features: [
      "Hand-burnished edges with organic beeswax",
      "Thinned leather lining prevents pocket bulk",
      "RFID protective central pocket layer"
    ]
  },
  {
    id: "prod-23",
    name: "Minimalist Ceramic Scented Candle: Hinoki & Moss",
    slug: "minimalist-ceramic-scented-candle-hinoki-moss",
    description: "Poured in an artisanal reusable textured stoneware vessel with 100% natural soy wax and a crackling FSC-certified wood wick. Scent notes: Japanese Hinoki wood, damp moss, cedar, and smoked amber.",
    shortDescription: "Hand-poured soy wax candle with wood wick in textured stoneware vessel.",
    price: 36.00,
    rating: 4.88,
    reviewCount: 260,
    category: "Home & Living",
    categorySlug: "home-living",
    subcategory: "Decor & Vases",
    brand: "Kanso Goods",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 45,
    seller: SELLERS.kanso,
    tags: ["candle", "home", "aromatherapy", "ceramic", "fragrance"],
    specifications: {
      "Burn Time": "65-70 Hours",
      "Wax Weight": "320g / 11.3 oz.",
      "Vessel": "Wheel-Thrown Unglazed Ceramic",
      "Wick": "Eco Natural Softwood Wick"
    },
    isFeatured: false,
    features: [
      "Cruelty-free, phthalate-free, non-toxic clean burning fragrance",
      "Vessel can be repurposed as an espresso cup or succulent planter after use",
      "Soothing ambient fire crackle sound while lit"
    ]
  },
  {
    id: "prod-24",
    name: "Modular Matte MagSafe Power Bank (10,000mAh)",
    slug: "modular-matte-magsafe-power-bank",
    description: "Ultra-slim 14mm profile power bank with 15W fast wireless MagSafe output, 20W PD USB-C fast charging, and a soft-touch matte finish that feels seamless on the back of your phone.",
    shortDescription: "Ultra-slim 15W wireless MagSafe 10,000mAh portable charger.",
    price: 52.00,
    originalPrice: 65.00,
    discountPercentage: 20,
    rating: 4.81,
    reviewCount: 190,
    category: "Electronics",
    categorySlug: "electronics",
    subcategory: "Accessories",
    brand: "Aethel Labs",
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 38,
    seller: SELLERS.aethel,
    tags: ["powerbank", "magsafe", "electronics", "charging"],
    specifications: {
      "Capacity": "10,000mAh / 38.5Wh",
      "Wireless Output": "15W Max Qi2 / MagSafe",
      "USB-C In/Out": "20W Power Delivery 3.0",
      "Thickness": "14.2mm (Pocket Friendly)"
    },
    colors: [
      { name: "Graphite Matte", hex: "#1F2937" },
      { name: "Cream Stone", hex: "#F3F4F6" }
    ],
    isFeatured: true,
    isDeal: true,
    dealEndsAt: "2026-10-31T23:59:59Z",
    features: [
      "N52 neodymium strong magnetic lock",
      "Pass-through charging allows phone and power bank to charge together",
      "Intelligent temperature protection prevents phone battery degradation"
    ]
  },
  {
    id: "prod-25",
    name: "Architectural Linen Weave Lounge Cushion",
    slug: "architectural-linen-weave-lounge-cushion",
    description: "Woven in Belgium from 100% Belgian flax with heavy slub texture and filled with cruelty-free hypoallergenic down alternative. Hidden zipper closure.",
    shortDescription: "100% Belgian flax linen lounge cushion with plush insert.",
    price: 49.00,
    rating: 4.85,
    reviewCount: 115,
    category: "Home & Living",
    categorySlug: "home-living",
    subcategory: "Textiles",
    brand: "Nordic Atelier",
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 32,
    seller: SELLERS.nordic,
    tags: ["cushion", "linen", "home", "decor", "scandinavian"],
    specifications: {
      "Dimensions": "50cm x 50cm (20in x 20in)",
      "Fabric": "100% Belgian Flax Heavyweight Linen",
      "Insert": "Hypoallergenic Microfiber Down Alternative",
      "Closure": "Concealed YKK Zipper"
    },
    colors: [
      { name: "Natural Flax", hex: "#D6D3D1" },
      { name: "Muted Olive", hex: "#656D4A" },
      { name: "Charcoal Slub", hex: "#3F3F46" }
    ],
    isFeatured: false,
    features: [
      "Pre-washed for instant softness and effortless relaxed drape",
      "Machine washable removable cover",
      "OEKO-TEX Standard 100 certified non-toxic"
    ]
  },
  // 26. Automotive & Mobility - Electric Commuter Scooter
  {
    id: "prod-26",
    name: "Veloce Stealth Carbon E-Scooter",
    slug: "veloce-stealth-carbon-e-scooter",
    description: "Aerospace-grade unidirectional carbon fiber frame weighing just 11.8kg with 500W silent hub motor, integrated OLED stem display, regenerative regenerative braking, and 45km range.",
    shortDescription: "Ultra-lightweight 11.8kg carbon fiber urban e-scooter with 45km range.",
    price: 890.00,
    originalPrice: 1050.00,
    discountPercentage: 15,
    rating: 4.88,
    reviewCount: 94,
    category: "Automotive & Mobility",
    categorySlug: "automotive",
    subcategory: "E-Bikes & Scooters",
    brand: "Veloce Lab",
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 8,
    seller: SELLERS.aethel,
    tags: ["mobility", "escooter", "carbonfiber", "urban", "electric"],
    specifications: {
      "Motor": "500W Peak Silent Hub",
      "Top Speed": "32 km/h",
      "Range": "45 km per charge",
      "Weight": "11.8 kg",
      "Max Payload": "120 kg"
    },
    colors: [
      { name: "Raw Carbon Matte", hex: "#1F1F1F" },
      { name: "Titanium Grey", hex: "#4B5563" }
    ],
    isFeatured: true,
    isDeal: true,
    features: [
      "One-click folding mechanism in under 3 seconds",
      "Integrated 600-lumen matrix headlight and brake sensor tail",
      "App-connected biometric electronic wheel lock"
    ]
  },
  // 27. Automotive & Mobility - Precision Vehicle Detailing Kit
  {
    id: "prod-27",
    name: "Atelier Car Care Ceramic Infusion Suite",
    slug: "atelier-car-care-ceramic-infusion-suite",
    description: "Complete 7-piece vehicle preservation set featuring 9H hardness ceramic coating spray, pH-neutral citrus foam shampoo, boar bristle detail brushes, and 1200GSM edgeless microfiber towels.",
    shortDescription: "Professional 7-piece ceramic detailing suite with 9H coating & accessories.",
    price: 135.00,
    originalPrice: 160.00,
    discountPercentage: 15,
    rating: 4.92,
    reviewCount: 156,
    category: "Automotive & Mobility",
    categorySlug: "automotive",
    subcategory: "Detailing & Care",
    brand: "Atelier Care",
    images: [
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 28,
    seller: SELLERS.mono,
    tags: ["automotive", "carcare", "detailing", "ceramic"],
    specifications: {
      "Coating Hardness": "9H SiO2 Hybrid",
      "Protection Durability": "Up to 12 Months",
      "Towels": "3x 1200 GSM Microfiber",
      "Formulation": "Biodegradable, Solvent-Free"
    },
    isFeatured: false,
    features: [
      "Hydrophobic contact angle greater than 110 degrees",
      "Ultra-slick mirror gloss reflection enhancement",
      "Safe on all clear coats, matte finishes, and PPF films"
    ]
  },
  // 28. Books & Stationery - Minimalist Brass Fountain Pen
  {
    id: "prod-28",
    name: "Kanso Solid Brass Hexagonal Fountain Pen",
    slug: "kanso-solid-brass-hexagonal-fountain-pen",
    description: "Machined from a single rod of raw lead-free brass with a Schmidt stainless-steel fine nib. Ages naturally with unique handling patina over decades of dedicated journaling.",
    shortDescription: "Precision-machined raw brass fountain pen with German Schmidt nib.",
    price: 88.00,
    originalPrice: 98.00,
    discountPercentage: 10,
    rating: 4.96,
    reviewCount: 312,
    category: "Books & Stationery",
    categorySlug: "books",
    subcategory: "Fountain Pens",
    brand: "Kanso Goods",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585336261026-77894d754716?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 42,
    seller: SELLERS.kanso,
    tags: ["stationery", "brass", "pen", "handcrafted", "japan"],
    specifications: {
      "Material": "Solid Lead-Free Brass",
      "Nib": "Schmidt Stainless Steel Fine (0.5mm)",
      "Ink System": "Standard International Cartridge / Converter Included",
      "Weight": "44g"
    },
    colors: [
      { name: "Raw Brushed Brass", hex: "#D4AF37" },
      { name: "Matte Black PVD", hex: "#18181B" }
    ],
    isFeatured: true,
    features: [
      "Non-roll hexagonal barrel balance",
      "Airtight screw cap prevents nib drying up to 90 days",
      "Comes packaged in cedar gift box with 5 ink cartridges"
    ]
  },
  // 29. Books & Stationery - Hardcover Architecture Monograph
  {
    id: "prod-29",
    name: "Form & Void: Brutalist Architecture 1955-1980",
    slug: "form-and-void-brutalist-architecture",
    description: "Cloth-bound oversized coffee table monograph featuring 420 pages of high-contrast duotone photography documenting brutalist civic monuments across 18 countries.",
    shortDescription: "420-page cloth-bound architectural monograph with duotone plates.",
    price: 75.00,
    originalPrice: 85.00,
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 184,
    category: "Books & Stationery",
    categorySlug: "books",
    subcategory: "Art & Architecture",
    brand: "Atelier Press",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 19,
    seller: SELLERS.nordic,
    tags: ["books", "architecture", "monograph", "photography", "design"],
    specifications: {
      "Binding": "Heavyweight Buckram Cloth with Foil Emboss",
      "Pages": "420 Pages",
      "Paper": "170gsm Munken Kristall Rough FSC",
      "Dimensions": "28 x 34 cm"
    },
    isFeatured: false,
    features: [
      "Features previously unpublished archival drawings & site essays",
      "Thread-sewn open flat lay binding for full panoramic spreads",
      "Limited first edition printing of 2,500 numbered copies"
    ]
  },
  // 30. Kids & Nursery - Handcrafted Wooden Animal Noah Ark Set
  {
    id: "prod-30",
    name: "Nordic Heirloom Beechwood Toy Menagerie",
    slug: "nordic-heirloom-beechwood-toy-menagerie",
    description: "Set of 12 hand-carved solid European beechwood animals finished with cold-pressed organic walnut oil. Designed for generational imaginative play without batteries or microplastics.",
    shortDescription: "12-piece hand-carved beechwood heirloom toy animal collection.",
    price: 110.00,
    originalPrice: 130.00,
    discountPercentage: 15,
    rating: 4.95,
    reviewCount: 78,
    category: "Kids & Nursery",
    categorySlug: "kids",
    subcategory: "Wooden Toys",
    brand: "Nordic Atelier",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 15,
    seller: SELLERS.nordic,
    tags: ["kids", "woodentoys", "organic", "montessori", "sustainable"],
    specifications: {
      "Material": "FSC-Certified Solid European Beech",
      "Finish": "Food-grade Cold Pressed Organic Walnut Oil",
      "Age Range": "18 Months and above",
      "Care": "Wipe with damp cloth"
    },
    isFeatured: false,
    features: [
      "Smooth contoured tactile edges designed for small hands",
      "Meets EN71 and ASTM F963 stringent infant safety standards",
      "Includes natural linen drawstring keepsake storage bag"
    ]
  },
  // 31. Pet Supplies - Ergonomic Ceramic Raised Pet Bowl
  {
    id: "prod-31",
    name: "Lumina Elevated Ceramic Feeder Stand",
    slug: "lumina-elevated-ceramic-feeder-stand",
    description: "Stoneware matte ceramic bowl seated in a steam-bent walnut wood cradle at a 15-degree ergonomic angle, reducing spinal neck strain and promoting digestive comfort in pets.",
    shortDescription: "Ergonomic 15-degree angled ceramic pet bowl with steam-bent walnut stand.",
    price: 68.00,
    originalPrice: 80.00,
    discountPercentage: 15,
    rating: 4.89,
    reviewCount: 220,
    category: "Pet Supplies",
    categorySlug: "pets",
    subcategory: "Feeders & Bowls",
    brand: "Lumina Studio",
    images: [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 35,
    seller: SELLERS.lumina,
    tags: ["pets", "dog", "cat", "feeder", "ceramic", "minimalist"],
    specifications: {
      "Bowl Capacity": "850 ml (Water or Dry Kibble)",
      "Bowl Material": "High-fire Lead-Free Stoneware (Dishwasher Safe)",
      "Stand Material": "FSC Solid Walnut with Waterproof Seal",
      "Anti-Slip": "Silicone padded base feet"
    },
    colors: [
      { name: "Matte Chalk / Walnut", hex: "#F5F5F4" },
      { name: "Basalt Slate / Walnut", hex: "#334155" }
    ],
    isFeatured: true,
    features: [
      "Whisker-fatigue friendly shallow wide curvature",
      "Heavyweight non-tip non-slide stabilization",
      "Dishwasher and microwave safe food-grade bowl"
    ]
  },
  // 32. Art & Collectibles - Minimalist Cold Cast Bronze Sculptural Object
  {
    id: "prod-32",
    name: "Monochrome 'Equilibrium' Bronze Abstract Totem",
    slug: "monochrome-equilibrium-bronze-abstract-totem",
    description: "Limited edition of 300 signed cold-cast bronze sculpture exploring balance, gravity, and positive-negative spatial composition on a matte Belgian bluestone plinth.",
    shortDescription: "Numbered limited edition (300) cold-cast bronze minimalist desktop sculpture.",
    price: 320.00,
    originalPrice: 380.00,
    discountPercentage: 15,
    rating: 4.98,
    reviewCount: 42,
    category: "Art & Collectibles",
    categorySlug: "art",
    subcategory: "Sculptures",
    brand: "Monochrome Craft",
    images: [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 6,
    seller: SELLERS.mono,
    tags: ["art", "sculpture", "bronze", "collectible", "limitededition"],
    specifications: {
      "Edition": "Limited to 300 units worldwide",
      "Medium": "Cold Cast Bronze on Belgian Bluestone",
      "Dimensions": "14 x 10 x 29 cm",
      "Weight": "3.4 kg"
    },
    isFeatured: true,
    features: [
      "Individually hand-patinated by master artisans in Berlin",
      "Includes signed certificate of authenticity and archival provenance card",
      "Felt lined stone underside protects tabletop surfaces"
    ]
  },
  // 33. Gourmet & Pantry - Small Batch Barrel Aged Shoyu
  {
    id: "prod-33",
    name: "Kanso Reserve 10-Year Cedar Barrel Shoyu (250ml)",
    slug: "kanso-reserve-10-year-cedar-barrel-shoyu",
    description: "Crafted in Gunma prefecture using heirloom non-GMO whole Japanese soybeans, spring water, and natural sea salt. Aged continuously for a decade in 150-year-old Yoshino cedar kioke vats.",
    shortDescription: "Decade-aged Japanese artisanal soy sauce brewed in antique cedar kioke barrels.",
    price: 48.00,
    originalPrice: 55.00,
    discountPercentage: 12,
    rating: 4.97,
    reviewCount: 440,
    category: "Gourmet & Pantry",
    categorySlug: "grocery",
    subcategory: "Oils, Vinegars & Condiments",
    brand: "Kanso Goods",
    images: [
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 50,
    seller: SELLERS.kanso,
    tags: ["gourmet", "shoyu", "japan", "artisanal", "pantry"],
    specifications: {
      "Aging Period": "10 Years Continuous Micro-Fermentation",
      "Volume": "250 ml (8.45 fl oz)",
      "Ingredients": "Whole Soybeans, Wheat, Sea Salt, Spring Water",
      "Origin": "Gunma Prefecture, Japan"
    },
    isFeatured: true,
    features: [
      "Incredible umami depth with zero artificial additives or caramel coloring",
      "Handmade washi label stamped with batch vintage registration",
      "Ideal for premium sashimi, wagyu finishes, and slow reductions"
    ]
  },
  // 34. Health & Personal Care - Ionic Ultrasonic Sonic Toothbrush
  {
    id: "prod-34",
    name: "Aethel Bio-Sonic Ultrasonic Toothbrush",
    slug: "aethel-bio-sonic-ultrasonic-toothbrush",
    description: "Aerodynamic matte titanium body delivering 48,000 magnetic levitation micro-vibrations per minute. Features inductive wireless charging base, 60-day battery life, and charcoal-infused tapered bristles.",
    shortDescription: "48,000 VPM magnetic levitation sonic toothbrush with 60-day battery.",
    price: 119.00,
    originalPrice: 145.00,
    discountPercentage: 18,
    rating: 4.86,
    reviewCount: 290,
    category: "Health & Personal Care",
    categorySlug: "health",
    subcategory: "Personal Care",
    brand: "Aethel Labs",
    images: [
      "https://images.unsplash.com/photo-1559591937-e1032b4a11f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 31,
    seller: SELLERS.aethel,
    tags: ["health", "toothbrush", "dental", "tech", "minimalist"],
    specifications: {
      "Oscillations": "48,000 Micro-Vibrations / min",
      "Battery": "60 Days on Single Charge",
      "Waterproof": "IPX8 Fully Submersible",
      "Timer": "Quad-Pacer 2-Minute Smart Interval"
    },
    colors: [
      { name: "Space Slate", hex: "#1E293B" },
      { name: "Silver Quartz", hex: "#E2E8F0" }
    ],
    isFeatured: false,
    isDeal: true,
    features: [
      "Magnetic wall mount doubles as contact charger",
      "Includes 3 biodegradable replaceable bamboo brush heads",
      "5 tailored cleaning modes including Sensitive and Polish"
    ]
  },
  // 35. Electronics - 4K Portable Creator Monitor
  {
    id: "prod-35",
    name: "AURA Prism 16” 4K OLED Portable Display",
    slug: "aura-prism-16-4k-oled-portable-display",
    description: "16-inch UHD 3840x2400 OLED panel boasting 100% DCI-P3 gamut, 500 nits HDR peak brightness, and dual USB-C single-cable connectivity in a 6mm ultra-slim magnesium housing.",
    shortDescription: "16” 4K OLED 100% DCI-P3 portable display with magnesium chassis.",
    price: 499.00,
    originalPrice: 580.00,
    discountPercentage: 14,
    rating: 4.91,
    reviewCount: 160,
    category: "Electronics",
    categorySlug: "electronics",
    subcategory: "Laptops & Tablets",
    brand: "AURA Labs",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 14,
    seller: SELLERS.aethel,
    tags: ["display", "monitor", "oled", "creator", "electronics"],
    specifications: {
      "Resolution": "3840 x 2400 (16:10 4K UHD+)",
      "Color Accuracy": "100% DCI-P3, Delta E < 1.0",
      "Ports": "2x Thunderbolt 4 / USB-C, 1x Mini-HDMI",
      "Weight": "690g"
    },
    isFeatured: true,
    features: [
      "Magnetic origami stand cover for multi-angle orientation",
      "Auto-rotating orientation sensor for horizontal and vertical coding",
      "Pass-through charging up to 65W to host laptop"
    ]
  },
  // 36. Fashion & Apparel - Merino Wool Oversized Turtleneck
  {
    id: "prod-36",
    name: "Nordic Atelier 100% Extra-Fine Merino Knit",
    slug: "nordic-atelier-extra-fine-merino-knit",
    description: "Seamless circular knit 19.5 micron Australian extra-fine merino wool sweater. Naturally thermoregulating, odor resistant, and tailored with dropped shoulders and relaxed ribbed cuffs.",
    shortDescription: "Seamless 19.5 micron pure Australian merino wool architectural knit.",
    price: 195.00,
    originalPrice: 230.00,
    discountPercentage: 15,
    rating: 4.87,
    reviewCount: 175,
    category: "Fashion & Apparel",
    categorySlug: "fashion",
    subcategory: "Men's Outerwear",
    brand: "Nordic Atelier",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 22,
    seller: SELLERS.nordic,
    tags: ["merinowool", "knitwear", "sustainable", "menswear", "fashion"],
    specifications: {
      "Fiber": "100% Extra-Fine Merino (19.5 Micron)",
      "Knit Gauge": "7-Gauge Heavyweight Fisherman Rib",
      "Origin": "Biella, Northern Italy Yarn Mill",
      "Care": "Hand wash cold or eco dry clean"
    },
    colors: [
      { name: "Oatmeal Melange", hex: "#E5E0D8" },
      { name: "Dark Moss", hex: "#3B4A3F" },
      { name: "Ink Navy", hex: "#1E293B" }
    ],
    isFeatured: false,
    features: [
      "Seamless 3D-knitted construction eliminates pressure points",
      "Non-itch hypoallergenic comfort directly against bare skin",
      "Zero plastic microfibers or synthetic blending"
    ]
  },
  // 37. Fashion & Apparel - Vegetable-Tanned Minimalist Cardholder
  {
    id: "prod-37",
    name: "Monochrome Vachetta Leather Slim Wallet",
    slug: "monochrome-vachetta-leather-slim-wallet",
    description: "Hand-stitched in Berlin using full-grain Italian Tuscan vegetable-tanned leather. Holds 8 cards plus folded cash notes with an RFID blocking core and polished beveled wax edges.",
    shortDescription: "Hand-stitched Tuscan veg-tan leather cardholder with RFID protection.",
    price: 65.00,
    originalPrice: 75.00,
    discountPercentage: 13,
    rating: 4.93,
    reviewCount: 380,
    category: "Fashion & Apparel",
    categorySlug: "fashion",
    subcategory: "Leather Goods",
    brand: "Monochrome Craft",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 45,
    seller: SELLERS.mono,
    tags: ["wallet", "leather", "edc", "handcrafted", "accessories"],
    specifications: {
      "Leather": "Ponte a Egola Tuscan Full-Grain Buttero",
      "Capacity": "6-8 Cards + Currency Bill Pocket",
      "Thickness": "Only 5.5mm Loaded",
      "Thread": "Japanese Fil Au Chinois Waxed Linen"
    },
    colors: [
      { name: "Caramel Chestnut", hex: "#8D4E27" },
      { name: "Pitch Black", hex: "#171717" },
      { name: "Olive Green", hex: "#475237" }
    ],
    isFeatured: true,
    features: [
      "Ages into a deep golden patina with unique character",
      "Central pull-tab for effortless quick access to primary cards",
      "Lifetime stitching warranty"
    ]
  },
  // 38. Home & Living - Smoked Oak Bedside Pendant Lamp
  {
    id: "prod-38",
    name: "Lumina Halo Turned Oak & Opal Glass Pendant",
    slug: "lumina-halo-turned-oak-and-opal-glass-pendant",
    description: "Mouth-blown frosted opal glass shade suspended from a lathe-turned smoked white oak canopy. Creates warm diffused ambient luminance reminiscent of dusk sunlight.",
    shortDescription: "Mouth-blown frosted glass and lathe-turned solid oak ceiling pendant.",
    price: 215.00,
    originalPrice: 260.00,
    discountPercentage: 17,
    rating: 4.92,
    reviewCount: 110,
    category: "Home & Living",
    categorySlug: "home-living",
    subcategory: "Lighting",
    brand: "Lumina Studio",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 18,
    seller: SELLERS.lumina,
    tags: ["lighting", "pendant", "interior", "scandinavian", "wood"],
    specifications: {
      "Shade Diameter": "24 cm",
      "Cord Length": "3.0m Braided Linen Fabric Cord",
      "Socket": "Standard E26/E27 (Dimmable Warm 2700K LED Bulb Included)",
      "Materials": "Smoked Oak, Opal Cased Glass, Solid Brass"
    },
    isFeatured: false,
    features: [
      "Glare-free 360-degree soft illumination",
      "Adjustable drop height for kitchen islands or bedside settings",
      "Includes matching wooden ceiling rose escutcheon plate"
    ]
  },
  // 39. Home & Living - Sculptural Cast Iron Dutch Oven
  {
    id: "prod-39",
    name: "Atelier 5.5-Qt Matte Enameled Cast Iron Dutch Oven",
    slug: "atelier-5-5-qt-matte-enameled-dutch-oven",
    description: "Heavy-gauge virgin grey cast iron coated in satin black matte enamel inside and out. Features engineered condensation-basting spikes underside the lid for sublime sourdough crusts and tender braises.",
    shortDescription: "Heavy-gauge 5.5-quart satin matte black enameled cast iron braiser.",
    price: 185.00,
    originalPrice: 220.00,
    discountPercentage: 16,
    rating: 4.96,
    reviewCount: 340,
    category: "Home & Living",
    categorySlug: "home-living",
    subcategory: "Kitchenware",
    brand: "Atelier Cookware",
    images: [
      "https://images.unsplash.com/photo-1584990347449-39b5b9e59972?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 26,
    seller: SELLERS.nordic,
    tags: ["cookware", "castiron", "dutchoven", "baking", "culinary"],
    specifications: {
      "Volume": "5.5 Quarts (5.2 Liters)",
      "Weight": "6.2 kg with Lid",
      "Heat Tolerance": "Oven safe up to 500°F (260°C)",
      "Compatibility": "Induction, Gas, Electric, Ceramic"
    },
    colors: [
      { name: "Matte Cast Obsidian", hex: "#1C1917" },
      { name: "Sage Mist", hex: "#78866B" }
    ],
    isFeatured: true,
    isDeal: true,
    features: [
      "Self-basting interior micro-pyramid condensation droplets",
      "Satin black enameled interior resists staining and acidic deglazing",
      "Ergonomic dual loop handles easily gripped with thick oven mitts"
    ]
  },
  // 40. Beauty & Wellness - Cold-Pressed Botanical Face Elixir
  {
    id: "prod-40",
    name: "Kanso Bakuchiol & Blue Tansy Restorative Oil (30ml)",
    slug: "kanso-bakuchiol-blue-tansy-restorative-oil",
    description: "Potent natural retinol alternative formulation uniting 2% active bakuchiol, organic Moroccan blue tansy, and cold-pressed cold-filtered squalane. Calms redness while refining cellular turnover.",
    shortDescription: "2% botanical Bakuchiol & organic Blue Tansy anti-aging night nectar.",
    price: 74.00,
    originalPrice: 88.00,
    discountPercentage: 16,
    rating: 4.94,
    reviewCount: 512,
    category: "Beauty & Wellness",
    categorySlug: "beauty",
    subcategory: "Skincare",
    brand: "Kanso Goods",
    images: [
      "https://images.unsplash.com/photo-1608248597359-301292fa0a94?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 60,
    seller: SELLERS.kanso,
    tags: ["skincare", "serum", "cleanbeauty", "organic", "wellness"],
    specifications: {
      "Volume": "30 ml (1.0 fl oz)",
      "Certifications": "Cruelty-Free, Leaping Bunny Certified, 100% Vegan",
      "Key Actives": "2% Bakuchiol, Tanacetum Annuum (Blue Tansy), Rosehip Co2",
      "Skin Type": "Sensitive, Blemish-Prone, Normal to Dry"
    },
    isFeatured: true,
    features: [
      "Zero phototoxicity — safe for daily morning or evening use",
      "Deep azure natural hue derived purely from wild chamazulene",
      "UV-protective violet biophotonic Miron glass dropper bottle"
    ]
  },
  // 41. Sports & Outdoors - Ultra-Quiet Magnetic Water Rowing Machine
  {
    id: "prod-41",
    name: "Aethel Flow Solid Walnut Dual-Resistance Rower",
    slug: "aethel-flow-solid-walnut-dual-resistance-rower",
    description: "Precision engineered from sustainably sourced Appalachian black walnut. Merges natural water resistance with 16-level magnetic eddy-current resistance for an authentic hydrodynamic sensation.",
    shortDescription: "Solid American walnut water-magnetic hybrid rower with Bluetooth monitor.",
    price: 1290.00,
    originalPrice: 1450.00,
    discountPercentage: 11,
    rating: 4.96,
    reviewCount: 65,
    category: "Sports & Outdoors",
    categorySlug: "sports",
    subcategory: "Fitness & Yoga",
    brand: "Aethel Labs",
    images: [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 5,
    seller: SELLERS.aethel,
    tags: ["fitness", "rower", "luxurygym", "walnut", "workout"],
    specifications: {
      "Frame Material": "Solid Sourced American Black Walnut",
      "Resistance": "Dual Water Hydro-Wheel + 16-Level Eddy Current",
      "Monitor": "OLED Bluetooth FTMS (Zwift, Kinomap, Strava)",
      "Storage": "Stands upright vertically (0.2 sq. meters footprint)"
    },
    isFeatured: true,
    features: [
      "Silent smooth dual-rail glide system with sealed precision bearings",
      "Soothing rhythmic hydro acoustic soundscape while exercising",
      "Stores vertically against any wall effortlessly on integrated wheels"
    ]
  },
  // 42. Gaming & Tech - Ultra-Lightweight Wireless Gaming Mouse
  {
    id: "prod-42",
    name: "AURA Phantom 48g Carbon Composite Wireless Mouse",
    slug: "aura-phantom-48g-carbon-composite-wireless-mouse",
    description: "Featherlight 48-gram unperforated monocoque forged carbon fiber shell. Armed with PixArt PAW3395 26,000 DPI sensor, 4000Hz polling rate wireless dongle, and optical microswitches.",
    shortDescription: "48g carbon fiber 4000Hz wireless esports mouse with PAW3395 sensor.",
    price: 149.00,
    originalPrice: 175.00,
    discountPercentage: 15,
    rating: 4.9,
    reviewCount: 280,
    category: "Gaming & Tech",
    categorySlug: "gaming",
    subcategory: "Precision Mice",
    brand: "AURA Labs",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 29,
    seller: SELLERS.aethel,
    tags: ["gaming", "mouse", "esports", "carbonfiber", "tech"],
    specifications: {
      "Weight": "48 Grams (Without Holes)",
      "Sensor": "PixArt PAW3395 (26,000 DPI, 650 IPS)",
      "Polling Rate": "4,000Hz Wireless True Response",
      "Battery Life": "80 Hours Continuous Play"
    },
    colors: [
      { name: "Forged Carbon Dark", hex: "#1C1917" },
      { name: "Ghost White Carbon", hex: "#F1F5F9" }
    ],
    isFeatured: false,
    isDeal: true,
    features: [
      "Zero-flex rigid structural carbon fiber unibody",
      "Pure virgin grade 100% PTFE rounded glides",
      "Optical micro-switches immune to double-click degradation"
    ]
  },
  // 43. Travel & Luggage - Modular Waterproof Tech Backpack
  {
    id: "prod-43",
    name: "Monochrome Vektor 26L X-Pac Waterproof Commuter",
    slug: "monochrome-vektor-26l-xpac-waterproof-commuter",
    description: "Constructed with sailcloth VX21 X-Pac weatherproof laminate, Fidlock V-buckles, and YKK AquaGuard zips. Suspended laptop cradle holds up to 16-inch MacBooks with hidden passport and AirTag pockets.",
    shortDescription: "Weatherproof VX21 sailcloth 26L backpack with Fidlock magnetic closures.",
    price: 240.00,
    originalPrice: 280.00,
    discountPercentage: 14,
    rating: 4.94,
    reviewCount: 210,
    category: "Travel & Luggage",
    categorySlug: "travel",
    subcategory: "Backpacks",
    brand: "Monochrome Craft",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 20,
    seller: SELLERS.mono,
    tags: ["backpack", "travel", "xpac", "edc", "waterproof"],
    specifications: {
      "Capacity": "26 Liters",
      "Fabric": "Dimension-Polyant VX21 Waterproof Sailcloth",
      "Hardware": "German Fidlock V-Buckles & YKK AquaGuard",
      "Laptop Sleeve": "Suspended Padded Compartment up to 16”"
    },
    colors: [
      { name: "Stealth Black X-Pac", hex: "#0F172A" },
      { name: "Slate Coyote", hex: "#57534E" }
    ],
    isFeatured: true,
    features: [
      "Clamshell 180-degree luggage-style opening for effortless packing",
      "Luggage handle pass-through strap for seamless airport transit",
      "Ergonomic dual-density EVA foam harness with removable magnetic sternum strap"
    ]
  },
  // 44. Office & Workspace - Solid Oak Articulated Desk Lamp
  {
    id: "prod-44",
    name: "Nordic Atelier Crane Balanced Desk Task Light",
    slug: "nordic-atelier-crane-balanced-desk-light",
    description: "Counterbalanced task light with friction hinges in solid European white oak and spun raw aluminum. Emits 98 CRI museum-grade warm light with touch-slider brightness dimming.",
    shortDescription: "Counterbalanced solid white oak desk lamp with 98 CRI natural daylight LED.",
    price: 210.00,
    originalPrice: 245.00,
    discountPercentage: 14,
    rating: 4.91,
    reviewCount: 130,
    category: "Office & Workspace",
    categorySlug: "office",
    subcategory: "Desk Accessories",
    brand: "Nordic Atelier",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 16,
    seller: SELLERS.nordic,
    tags: ["workspace", "lamp", "desk", "interiors", "nordic"],
    specifications: {
      "Light Quality": "98 CRI (True Color Reproduction), 3000K-4500K Tunable",
      "Arm Reach": "Max 78 cm reach with 3-axis rotation",
      "Materials": "FSC White Oak, Anodized Spun Aluminum, Cast Iron Weighted Base",
      "Power": "USB-C Powered (Adapter Included)"
    },
    isFeatured: false,
    features: [
      "Flicker-free circadian eye-protection driver minimizes screen glare",
      "Integrated linear capacitive touch-strip dimmer with memory",
      "Weighted base stays completely stable during single-hand angle adjustment"
    ]
  },
  // 45. Electronics - Noise-Canceling True Wireless Earbuds
  {
    id: "prod-45",
    name: "AURA Pods Pro Lossless Ceramic Earbuds",
    slug: "aura-pods-pro-lossless-ceramic-earbuds",
    description: "Ultra-compact wireless in-ear monitors featuring polished zirconia ceramic sound chambers, Snapdragon Sound 24-bit 96kHz lossless streaming, and 6-mic beamforming noise cancellation.",
    shortDescription: "Lossless 24-bit audio earbuds with polished zirconia ceramic bodies.",
    price: 229.00,
    originalPrice: 269.00,
    discountPercentage: 15,
    rating: 4.88,
    reviewCount: 360,
    category: "Electronics",
    categorySlug: "electronics",
    subcategory: "Headphones",
    brand: "AURA Labs",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 38,
    seller: SELLERS.aethel,
    tags: ["earbuds", "audio", "anc", "lossless", "tech"],
    specifications: {
      "Codec Support": "aptX Lossless, LDAC, AAC, LC3",
      "Battery Life": "9 Hours (36 Hours total with Qi wireless charging case)",
      "Water Resistance": "IP54 Dust and Splash Proof",
      "Weight": "4.6g per earbud"
    },
    colors: [
      { name: "Glaze White Ceramic", hex: "#F8FAFC" },
      { name: "Onyx Black Ceramic", hex: "#0F172A" }
    ],
    isFeatured: false,
    isDeal: true,
    features: [
      "Acoustically inert high-gloss ceramic reduces resonance distortion",
      "Seamless multi-device connection switching across phone and laptop",
      "Ultra-low latency 38ms gaming & cinema mode"
    ]
  },
  // 46. Fashion & Apparel - Minimalist Waterproof Trench Coat
  {
    id: "prod-46",
    name: "Nordic Atelier Elements Storm Shell Trench",
    slug: "nordic-atelier-elements-storm-shell-trench",
    description: "A modern architectural reinterpretation of the classic trench. Tailored from a 3-layer 20,000mm waterproof breathable Japanese technical twill with magnetic storm flap and internal sling.",
    shortDescription: "Architectural 3-layer waterproof 20K technical twill storm trench.",
    price: 360.00,
    originalPrice: 420.00,
    discountPercentage: 14,
    rating: 4.93,
    reviewCount: 92,
    category: "Fashion & Apparel",
    categorySlug: "fashion",
    subcategory: "Men's Outerwear",
    brand: "Nordic Atelier",
    images: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 14,
    seller: SELLERS.nordic,
    tags: ["outerwear", "trenchcoat", "waterproof", "fashion", "techwear"],
    specifications: {
      "Waterproof Rating": "20,000 mm Hydrostatic Head",
      "Breathability": "15,000 g/m²/24hr MVTR",
      "Seams": "100% Fully Taped Micro-Seams",
      "Closures": "German Magnetic Fidlock Storm Panel"
    },
    colors: [
      { name: "Deep Lichen", hex: "#4A5243" },
      { name: "Midnight Raven", hex: "#111827" }
    ],
    isFeatured: false,
    features: [
      "Integrated interior hands-free carry jacket sling strap",
      "Laser-cut underarm ventilation eyelets",
      "Water-repellent PFC-free durable eco coating"
    ]
  },
  // 47. Home & Living - Handblown Fluted Glass Carafe Set
  {
    id: "prod-47",
    name: "Lumina Ripple Crystal Water Carafe & Tumbler",
    slug: "lumina-ripple-crystal-water-carafe-and-tumbler",
    description: "Mouth-blown lead-free crystal carafe featuring delicate vertical optic fluting. The matching tumbler nests securely atop the neck to keep nightstand bedside water clean and dust-free.",
    shortDescription: "Mouth-blown optic fluted crystal carafe with nested drinking tumbler.",
    price: 58.00,
    originalPrice: 68.00,
    discountPercentage: 14,
    rating: 4.95,
    reviewCount: 260,
    category: "Home & Living",
    categorySlug: "home-living",
    subcategory: "Kitchenware",
    brand: "Lumina Studio",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 40,
    seller: SELLERS.lumina,
    tags: ["glassware", "carafe", "crystal", "dining", "tableware"],
    specifications: {
      "Carafe Volume": "1,000 ml (34 oz)",
      "Glass Volume": "300 ml (10 oz)",
      "Material": "Ultra-Clear Lead-Free Borosilicate Glass",
      "Care": "Dishwasher Safe (Top Rack)"
    },
    colors: [
      { name: "Clear Optic", hex: "#E2E8F0" },
      { name: "Smoked Grey", hex: "#64748B" }
    ],
    isFeatured: false,
    features: [
      "Tumbler acts as sanitary lid when placed over carafe opening",
      "Thermal shock resistant: safe for both iced spritzers and boiling infusions",
      "Drip-less spout pour geometry"
    ]
  },
  // 48. Beauty & Wellness - Hinoki Wood Bath Caddy
  {
    id: "prod-48",
    name: "Kanso Aromatic Japanese Hinoki Cypress Bath Bridge",
    slug: "kanso-aromatic-japanese-hinoki-bath-bridge",
    description: "Handcrafted from ancient wild Japanese Hinoki cypress wood harvested in Kiso Valley. Releases an intoxicating therapeutic evergreen aroma when in contact with warm bath steam.",
    shortDescription: "Artisanal wild Kiso Hinoki cypress wood bathtub caddy tray.",
    price: 145.00,
    originalPrice: 170.00,
    discountPercentage: 15,
    rating: 4.97,
    reviewCount: 118,
    category: "Beauty & Wellness",
    categorySlug: "beauty",
    subcategory: "Body Care",
    brand: "Kanso Goods",
    images: [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 12,
    seller: SELLERS.kanso,
    tags: ["bath", "hinoki", "spa", "wellness", "japan"],
    specifications: {
      "Wood Origin": "Kiso Valley, Nagano Prefecture",
      "Dimensions": "78 x 20 x 4 cm (Fits standard tubs)",
      "Natural Properties": "Inherent phytoncide antifungal & moisture resistance",
      "Finish": "Completely Unvarnished Raw Silky Sanded Wood"
    },
    isFeatured: true,
    features: [
      "Natural antibacterial phytoncides released with warm water moisture",
      "Recessed groove for tablet, phone, or reading book stability",
      "Includes slot for wine or herbal tea stemware"
    ]
  },
  // 49. Sports & Outdoors - Lightweight Packable Titanium Camp Stove
  {
    id: "prod-49",
    name: "AURA Ultralight Foldable Titanium Wood Stove",
    slug: "aura-ultralight-foldable-titanium-wood-stove",
    description: "Engineered for alpine explorers from 0.8mm Grade 1 titanium sheet. Folds completely flat to 2mm thickness, weighs only 165 grams, and burns twigs, pinecones, or solid fuel tablets.",
    shortDescription: "165g flat-folding Grade 1 titanium alpine expedition wood stove.",
    price: 79.00,
    originalPrice: 95.00,
    discountPercentage: 16,
    rating: 4.91,
    reviewCount: 142,
    category: "Sports & Outdoors",
    categorySlug: "sports",
    subcategory: "Hiking & Camp",
    brand: "AURA Labs",
    images: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 30,
    seller: SELLERS.aethel,
    tags: ["camping", "outdoor", "titanium", "ultralight", "hiking"],
    specifications: {
      "Weight": "165 Grams (5.8 oz)",
      "Material": "TA1 High-Purity Commercial Titanium",
      "Packed Dimensions": "15 x 12 x 0.5 cm",
      "Boil Time": "500ml water in approx. 4.5 minutes"
    },
    isFeatured: false,
    features: [
      "Secondary airflow burn vents ensure nearly smoke-free combustion",
      "Immune to rust, corrosion, and heat warping up to 1,600°C",
      "Supplied in tear-proof Dyneema storage pouch"
    ]
  },
  // 50. Gaming & Tech - Studio Monitor Isolation Audio Stands
  {
    id: "prod-50",
    name: "Monochrome Hex-Isolate Studio Monitor Risers (Pair)",
    slug: "monochrome-hex-isolate-studio-monitor-risers",
    description: "Heavyweight solid cast zinc and acoustic damping silicone desktop risers for 5-inch to 8-inch audio monitors. Elevates tweeters to ear level while decoupling bass vibration from desk surfaces.",
    shortDescription: "Cast zinc and acoustic silicone decoupled studio monitor stands (Pair).",
    price: 110.00,
    originalPrice: 130.00,
    discountPercentage: 15,
    rating: 4.94,
    reviewCount: 180,
    category: "Gaming & Tech",
    categorySlug: "gaming",
    subcategory: "Audio Gear",
    brand: "Monochrome Craft",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 24,
    seller: SELLERS.mono,
    tags: ["audio", "studiomonitor", "desksetup", "speakers", "minimalist"],
    specifications: {
      "Quantity": "Pair (2 Stands)",
      "Material": "Cast Zinc Alloy with 60 Durometer Silicone Pads",
      "Tilt Angle": "16 Degrees Optimal Listening Angle",
      "Weight Capacity": "Up to 15kg per stand"
    },
    colors: [
      { name: "Matte Anthracite", hex: "#27272A" },
      { name: "Brushed Aluminum", hex: "#E4E4E7" }
    ],
    isFeatured: false,
    features: [
      "Eliminates muddy desk surface resonance for crisp, transparent stereo imaging",
      "Cables route cleanly beneath the cantilevered base",
      "Compatible with Yamaha HS, Genelec, KRK, and Kali audio monitors"
    ]
  },
  // 51. Gourmet & Pantry - Ceremonial Single-Estate Uji Matcha
  {
    id: "prod-51",
    name: "Kanso 'Sei' Heritage Ceremonial Grade Matcha (30g)",
    slug: "kanso-sei-heritage-ceremonial-grade-matcha",
    description: "Stone-ground first-flush tencha leaves shaded for 30 days in Wazuka, Uji. Vibrant electric jade color with velvety umami sweetness, zero bitterness, and a rich, creamy froth.",
    shortDescription: "Single-estate 30-day shaded ceremonial first-flush Uji matcha (30g).",
    price: 42.00,
    originalPrice: 48.00,
    discountPercentage: 12,
    rating: 4.99,
    reviewCount: 680,
    category: "Gourmet & Pantry",
    categorySlug: "grocery",
    subcategory: "Pantry & Spices",
    brand: "Kanso Goods",
    images: [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80"
    ],
    stock: 55,
    seller: SELLERS.kanso,
    tags: ["matcha", "tea", "japan", "ceremonial", "superfood"],
    specifications: {
      "Origin": "Wazuka, Uji, Kyoto Prefecture",
      "Cultivar": "Samidori & Okumidori Blend",
      "Shading": "30-Day Tana Rice-Straw Canopy",
      "Net Weight": "30 Grams (Approx. 15-20 Servings)"
    },
    isFeatured: true,
    features: [
      "Granite stone ground at 40g per hour to preserve delicate aroma and chlorophyll",
      "Vacuum-sealed in nitrogen-flushed pull-tab gold lacquer tin",
      "Awarded Ministry of Agriculture Gold Prize in Kyoto tea competition"
    ]
  }
];

// Helper to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

// Helper to get products by category slug
export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === "deals") {
    return PRODUCTS.filter((p) => p.isDeal || (p.discountPercentage && p.discountPercentage > 0));
  }
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

// Helper to search products using startsWith
export function searchProducts(query: string): Product[] {
  if (!query.trim()) return PRODUCTS;
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter((p) => {
    const nameLower = p.name.toLowerCase();
    const brandLower = p.brand.toLowerCase();
    const categoryLower = p.category.toLowerCase();

    // Check if the name, brand, or category starts with query
    if (
      nameLower.startsWith(q) ||
      brandLower.startsWith(q) ||
      categoryLower.startsWith(q)
    ) {
      return true;
    }

    // Check if any individual word in the product name starts with query (e.g. "Studio" in "AURA Horizon Studio")
    const words = nameLower.split(/\s+/);
    if (words.some((word) => word.startsWith(q))) {
      return true;
    }

    // Check if any tag starts with query
    return p.tags.some((tag) => tag.toLowerCase().startsWith(q));
  });
}
