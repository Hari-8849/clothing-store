
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Outerwear',
    slug: 'outerwear',
    image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '2',
    name: 'Essential Tees',
    slug: 'tees',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    name: 'Footwear',
    slug: 'footwear',
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Obsidian Bomber',
    price: 895,
    category: 'Outerwear',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1551028919-383718603bd5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&q=80&w=1200',
    ],
    description: 'Crafted from premium Japanese nylon with hand-finished hardware. The Obsidian Bomber defines modern luxury utility. Oversized fit with dropped shoulders.',
    sizes: ['S', 'M', 'L', 'XL'],
    newArrival: true,
  },
  {
    id: 'p2',
    name: 'Silk Flow Trousers',
    price: 450,
    category: 'Bottoms',
    images: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa00272?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=1200',
    ],
    description: '100% Mulberry silk trousers tailored for a fluid, relaxed silhouette. Features an elasticated waistband and hidden side pockets.',
    sizes: ['28', '30', '32', '34'],
    newArrival: true,
  },
  {
    id: 'p3',
    name: 'Structure Hoodie',
    price: 320,
    category: 'Tops',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=1200',
    ],
    description: 'Heavyweight 480gsm organic cotton. Boxy fit, cropped hem, and our signature minimal branding at the nape.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'p4',
    name: 'Leather Mule',
    price: 650,
    category: 'Footwear',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?auto=format&fit=crop&q=80&w=1200',
    ],
    description: 'Italian calfskin mules with a chunky Vibram sole. The perfect balance of comfort and avant-garde aesthetic.',
    sizes: ['39', '40', '41', '42', '43', '44'],
  },
  {
    id: 'p5',
    name: 'Oversized Knit',
    price: 550,
    category: 'Tops',
    images: [
      'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1200',
    ],
    description: 'Distressed wool blend knitwear with elongated sleeves.',
    sizes: ['S', 'M', 'L'],
    newArrival: true
  },
  {
    id: 'p6',
    name: 'Tactical Vest',
    price: 700,
    category: 'Outerwear',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=1200',
    ],
    description: 'Multi-pocket utility vest.',
    sizes: ['S', 'M', 'L'],
  }
];
