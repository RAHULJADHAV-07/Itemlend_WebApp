export const dummyUsers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    role: "lender",
    phone: "+1 (555) 123-4567",
    location: "New York, NY"
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike.chen@email.com",
    role: "lender",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    role: "lender",
    phone: "+1 (555) 345-6789",
    location: "Austin, TX"
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.kim@email.com",
    role: "lender",
    phone: "+1 (555) 456-7890",
    location: "Seattle, WA"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.thompson@email.com",
    role: "borrower",
    phone: "+1 (555) 567-8901",
    location: "Boston, MA"
  }
];

export const categories = [
  "Electronics",
  "Tools",
  "Sports Equipment",
  "Home & Garden",
  "Vehicles",
  "Photography",
  "Music Instruments",
  "Books & Education",
  "Clothing",
  "Furniture",
  "Kitchen & Dining",
  "Toys & Games"
];

export const conditions = [
  "New",
  "Like New",
  "Good",
  "Fair",
  "Poor"
];

export const dummyProducts = [
  {
    "id": 1,
    "title": "Ladder",
    "description": "Multi-purpose 12ft aluminum ladder for home and industrial use.",
    "category": "Tools",
    "condition": "New",
    "lendPricePerDay": 38,
    "salePrice": 1444,
    "availableFrom": "2025-08-09",
    "availableTo": "2025-11-01",
    "location": "Port Gregory, OH",
    "lenderId": 8,
    "images": [
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 2,
    "title": "Electric Drill",
    "description": "Bosch cordless electric drill with 2 batteries and charger.",
    "category": "Tools",
    "condition": "Like New",
    "lendPricePerDay": 67,
    "salePrice": 2144,
    "availableFrom": "2025-08-11",
    "availableTo": "2026-02-02",
    "location": "Washingtonland, AK",
    "lenderId": 3,
    "images": [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 3,
    "title": "Camera Drone",
    "description": "DJI Mavic Air 2 with 4K camera and 34-minute flight time.",
    "category": "Photography",
    "condition": "New",
    "lendPricePerDay": 13,
    "salePrice": 741,
    "availableFrom": "2025-08-08",
    "availableTo": "2025-10-28",
    "location": "Sarahport, AK",
    "lenderId": 9,
    "images": [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 4,
    "title": "Electric Drill",
    "description": "Bosch cordless electric drill with 2 batteries and charger.",
    "category": "Tools",
    "condition": "Like New",
    "lendPricePerDay": 31,
    "salePrice": 1085,
    "availableFrom": "2025-08-07",
    "availableTo": "2025-11-20",
    "location": "East Andrew, NY",
    "lenderId": 8,
    "images": [
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 5,
    "title": "Noise Cancelling Headphones",
    "description": "Sony WH-1000XM4 wireless headphones with 30hr battery.",
    "category": "Electronics",
    "condition": "New",
    "lendPricePerDay": 85,
    "salePrice": 2380,
    "availableFrom": "2025-08-11",
    "availableTo": "2025-10-03",
    "location": "Jacobport, MS",
    "lenderId": 3,
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 6,
    "title": "Fiction Novel",
    "description": "The Midnight Library by Matt Haig.",
    "category": "Books",
    "condition": "Used",
    "lendPricePerDay": 53,
    "salePrice": 3021,
    "availableFrom": "2025-08-07",
    "availableTo": "2025-11-20",
    "location": "Port Bryanfort, WV",
    "lenderId": 10,
    "images": [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 7,
    "title": "Tool Kit",
    "description": "Comprehensive 148-piece home tool set with carry case.",
    "category": "Tools",
    "condition": "Used",
    "lendPricePerDay": 46,
    "salePrice": 2392,
    "availableFrom": "2025-08-09",
    "availableTo": "2025-12-10",
    "location": "Medinaside, KS",
    "lenderId": 6,
    "images": [
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 8,
    "title": "Bluetooth Speaker",
    "description": "JBL Flip 5 waterproof portable speaker with deep bass.",
    "category": "Electronics",
    "condition": "Like New",
    "lendPricePerDay": 38,
    "salePrice": 1102,
    "availableFrom": "2025-08-12",
    "availableTo": "2025-09-20",
    "location": "Deanfurt, UT",
    "lenderId": 1,
    "images": [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 9,
    "title": "Ladder",
    "description": "Multi-purpose 12ft aluminum ladder for home and industrial use.",
    "category": "Tools",
    "condition": "New",
    "lendPricePerDay": 68,
    "salePrice": 3128,
    "availableFrom": "2025-08-14",
    "availableTo": "2025-12-10",
    "location": "Vaughanport, KS",
    "lenderId": 9,
    "images": [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 10,
    "title": "Gaming Chair",
    "description": "Ergonomic gaming chair with lumbar support and headrest.",
    "category": "Gaming",
    "condition": "New",
    "lendPricePerDay": 55,
    "salePrice": 1925,
    "availableFrom": "2025-08-13",
    "availableTo": "2026-02-09",
    "location": "Austinville, MN",
    "lenderId": 7,
    "images": [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 11,
    "title": "Tripod Stand",
    "description": "Heavy-duty aluminum tripod for stable photography and video shoots.",
    "category": "Photography",
    "condition": "New",
    "lendPricePerDay": 79,
    "salePrice": 3397,
    "availableFrom": "2025-08-06",
    "availableTo": "2025-11-22",
    "location": "West Drewtown, KY",
    "lenderId": 6,
    "images": [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 12,
    "title": "Smartwatch",
    "description": "Apple Watch Series 8 with GPS and heart-rate monitor.",
    "category": "Electronics",
    "condition": "Like New",
    "lendPricePerDay": 21,
    "salePrice": 441,
    "availableFrom": "2025-08-10",
    "availableTo": "2025-10-20",
    "location": "Nguyenbury, TX",
    "lenderId": 5,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 13,
    "title": "Self-help Guide",
    "description": "Atomic Habits by James Clear.",
    "category": "Books",
    "condition": "Like New",
    "lendPricePerDay": 42,
    "salePrice": 1764,
    "availableFrom": "2025-08-14",
    "availableTo": "2025-09-22",
    "location": "Lake George, NM",
    "lenderId": 5,
    "images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 14,
    "title": "Self-help Guide",
    "description": "Atomic Habits by James Clear.",
    "category": "Books",
    "condition": "New",
    "lendPricePerDay": 87,
    "salePrice": 2436,
    "availableFrom": "2025-08-12",
    "availableTo": "2025-09-14",
    "location": "Jeffville, WY",
    "lenderId": 8,
    "images": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 15,
    "title": "Noise Cancelling Headphones",
    "description": "Sony WH-1000XM4 wireless headphones with 30hr battery.",
    "category": "Electronics",
    "condition": "Like New",
    "lendPricePerDay": 64,
    "salePrice": 1920,
    "availableFrom": "2025-08-07",
    "availableTo": "2025-11-29",
    "location": "Johnsonland, MS",
    "lenderId": 8,
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 16,
    "title": "DSLR Camera",
    "description": "Canon EOS 90D DSLR with 18-135mm lens and accessories.",
    "category": "Photography",
    "condition": "Like New",
    "lendPricePerDay": 89,
    "salePrice": 2848,
    "availableFrom": "2025-08-14",
    "availableTo": "2026-01-15",
    "location": "South Matthew, IA",
    "lenderId": 6,
    "images": [
      "https://images.unsplash.com/photo-1606983340077-7b59e31c0b5b?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 17,
    "title": "Ladder",
    "description": "Multi-purpose 12ft aluminum ladder for home and industrial use.",
    "category": "Tools",
    "condition": "Used",
    "lendPricePerDay": 29,
    "salePrice": 1595,
    "availableFrom": "2025-08-12",
    "availableTo": "2025-10-29",
    "location": "Mariaburgh, MT",
    "lenderId": 4,
    "images": [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 18,
    "title": "Bluetooth Speaker",
    "description": "JBL Flip 5 waterproof portable speaker with deep bass.",
    "category": "Electronics",
    "condition": "Like New",
    "lendPricePerDay": 49,
    "salePrice": 1715,
    "availableFrom": "2025-08-14",
    "availableTo": "2025-10-06",
    "location": "Port Ashleyfort, MN",
    "lenderId": 5,
    "images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 19,
    "title": "Noise Cancelling Headphones",
    "description": "Sony WH-1000XM4 wireless headphones with 30hr battery.",
    "category": "Electronics",
    "condition": "New",
    "lendPricePerDay": 67,
    "salePrice": 2948,
    "availableFrom": "2025-08-06",
    "availableTo": "2025-12-21",
    "location": "Jesuschester, AL",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 20,
    "title": "Bluetooth Speaker",
    "description": "JBL Flip 5 waterproof portable speaker with deep bass.",
    "category": "Electronics",
    "condition": "New",
    "lendPricePerDay": 75,
    "salePrice": 3900,
    "availableFrom": "2025-08-10",
    "availableTo": "2025-11-17",
    "location": "Lake Sarahburgh, CT",
    "lenderId": 7,
    "images": [
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 21,
    "title": "Bluetooth Speaker",
    "description": "JBL Flip 5 waterproof portable speaker with deep bass.",
    "category": "Electronics",
    "condition": "Used",
    "lendPricePerDay": 13,
    "salePrice": 728,
    "availableFrom": "2025-08-06",
    "availableTo": "2026-02-01",
    "location": "North Reginaldshire, DC",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 22,
    "title": "Data Structures Book",
    "description": "Cracking the Coding Interview – 6th Edition.",
    "category": "Books",
    "condition": "Like New",
    "lendPricePerDay": 23,
    "salePrice": 506,
    "availableFrom": "2025-08-10",
    "availableTo": "2026-01-22",
    "location": "Lake Toddshire, OK",
    "lenderId": 1,
    "images": [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 23,
    "title": "Bluetooth Speaker",
    "description": "JBL Flip 5 waterproof portable speaker with deep bass.",
    "category": "Electronics",
    "condition": "Like New",
    "lendPricePerDay": 23,
    "salePrice": 1173,
    "availableFrom": "2025-08-06",
    "availableTo": "2025-09-15",
    "location": "East Eric, IN",
    "lenderId": 8,
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 24,
    "title": "Noise Cancelling Headphones",
    "description": "Sony WH-1000XM4 wireless headphones with 30hr battery.",
    "category": "Electronics",
    "condition": "Used",
    "lendPricePerDay": 40,
    "salePrice": 2120,
    "availableFrom": "2025-08-11",
    "availableTo": "2025-12-15",
    "location": "Gordonberg, MO",
    "lenderId": 9,
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 25,
    "title": "Tool Kit",
    "description": "Comprehensive 148-piece home tool set with carry case.",
    "category": "Tools",
    "condition": "New",
    "lendPricePerDay": 77,
    "salePrice": 1925,
    "availableFrom": "2025-08-06",
    "availableTo": "2026-01-24",
    "location": "Mitchellmouth, CO",
    "lenderId": 10,
    "images": [
      "https://images.unsplash.com/photo-1609778691925-0ba2de29fca8?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 26,
    "title": "DSLR Camera",
    "description": "Canon EOS 90D DSLR with 18-135mm lens and accessories.",
    "category": "Photography",
    "condition": "New",
    "lendPricePerDay": 80,
    "salePrice": 2960,
    "availableFrom": "2025-08-05",
    "availableTo": "2025-12-23",
    "location": "Port Francisco, CT",
    "lenderId": 6,
    "images": [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 27,
    "title": "Smartwatch",
    "description": "Apple Watch Series 8 with GPS and heart-rate monitor.",
    "category": "Electronics",
    "condition": "New",
    "lendPricePerDay": 88,
    "salePrice": 4576,
    "availableFrom": "2025-08-14",
    "availableTo": "2026-01-02",
    "location": "Jackieville, NM",
    "lenderId": 9,
    "images": [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 28,
    "title": "Bluetooth Speaker",
    "description": "JBL Flip 5 waterproof portable speaker with deep bass.",
    "category": "Electronics",
    "condition": "Used",
    "lendPricePerDay": 76,
    "salePrice": 3040,
    "availableFrom": "2025-08-04",
    "availableTo": "2025-12-09",
    "location": "West Patrickborough, UT",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 29,
    "title": "Noise Cancelling Headphones",
    "description": "Sony WH-1000XM4 wireless headphones with 30hr battery.",
    "category": "Electronics",
    "condition": "New",
    "lendPricePerDay": 18,
    "salePrice": 846,
    "availableFrom": "2025-08-14",
    "availableTo": "2026-01-28",
    "location": "East Chad, OH",
    "lenderId": 10,
    "images": [
      "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 30,
    "title": "Gaming Console",
    "description": "PlayStation 5 with 2 controllers and God of War Ragnarok.",
    "category": "Gaming",
    "condition": "Used",
    "lendPricePerDay": 98,
    "salePrice": 4214,
    "availableFrom": "2025-08-12",
    "availableTo": "2026-01-28",
    "location": "Garciaberg, NE",
    "lenderId": 8,
    "images": [
      "https://images.unsplash.com/photo-1606144042614-b2917915d655?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 31,
    "title": "Noise Cancelling Headphones",
    "description": "Sony WH-1000XM4 wireless headphones with 30hr battery.",
    "category": "Electronics",
    "condition": "New",
    "lendPricePerDay": 18,
    "salePrice": 684,
    "availableFrom": "2025-08-04",
    "availableTo": "2025-10-21",
    "location": "Port Joe, ID",
    "lenderId": 10,
    "images": [
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 32,
    "title": "Self-help Guide",
    "description": "Atomic Habits by James Clear.",
    "category": "Books",
    "condition": "Used",
    "lendPricePerDay": 97,
    "salePrice": 5335,
    "availableFrom": "2025-08-12",
    "availableTo": "2025-11-14",
    "location": "New Jeffreymouth, SC",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 33,
    "title": "Tripod Stand",
    "description": "Heavy-duty aluminum tripod for stable photography and video shoots.",
    "category": "Photography",
    "condition": "New",
    "lendPricePerDay": 53,
    "salePrice": 1484,
    "availableFrom": "2025-08-12",
    "availableTo": "2025-11-24",
    "location": "North Jamesberg, RI",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 34,
    "title": "Data Structures Book",
    "description": "Cracking the Coding Interview – 6th Edition.",
    "category": "Books",
    "condition": "New",
    "lendPricePerDay": 8,
    "salePrice": 432,
    "availableFrom": "2025-08-04",
    "availableTo": "2025-12-25",
    "location": "Kristenshire, ME",
    "lenderId": 3,
    "images": [
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 35,
    "title": "Tool Kit",
    "description": "Comprehensive 148-piece home tool set with carry case.",
    "category": "Tools",
    "condition": "New",
    "lendPricePerDay": 5,
    "salePrice": 195,
    "availableFrom": "2025-08-09",
    "availableTo": "2025-12-18",
    "location": "West Jennifer, OR",
    "lenderId": 8,
    "images": [
      "https://images.unsplash.com/photo-1609205264780-bb958a651831?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 36,
    "title": "Fiction Novel",
    "description": "The Midnight Library by Matt Haig.",
    "category": "Books",
    "condition": "Like New",
    "lendPricePerDay": 54,
    "salePrice": 2160,
    "availableFrom": "2025-08-07",
    "availableTo": "2025-10-19",
    "location": "South Melissafort, LA",
    "lenderId": 8,
    "images": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 37,
    "title": "DSLR Camera",
    "description": "Canon EOS 90D DSLR with 18-135mm lens and accessories.",
    "category": "Photography",
    "condition": "Used",
    "lendPricePerDay": 98,
    "salePrice": 5096,
    "availableFrom": "2025-08-13",
    "availableTo": "2025-11-14",
    "location": "Lake Alison, CT",
    "lenderId": 6,
    "images": [
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 38,
    "title": "Smartwatch",
    "description": "Apple Watch Series 8 with GPS and heart-rate monitor.",
    "category": "Electronics",
    "condition": "Like New",
    "lendPricePerDay": 98,
    "salePrice": 3332,
    "availableFrom": "2025-08-09",
    "availableTo": "2025-09-28",
    "location": "Millsside, WA",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1578319439955-dcaa5f3a87c5?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 39,
    "title": "Camera Drone",
    "description": "DJI Mavic Air 2 with 4K camera and 34-minute flight time.",
    "category": "Photography",
    "condition": "New",
    "lendPricePerDay": 98,
    "salePrice": 3136,
    "availableFrom": "2025-08-14",
    "availableTo": "2025-11-06",
    "location": "West Sarastad, AZ",
    "lenderId": 1,
    "images": [
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 40,
    "title": "Fiction Novel",
    "description": "The Midnight Library by Matt Haig.",
    "category": "Books",
    "condition": "New",
    "lendPricePerDay": 61,
    "salePrice": 2501,
    "availableFrom": "2025-08-10",
    "availableTo": "2026-01-08",
    "location": "Jacobsonside, KS",
    "lenderId": 8,
    "images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 41,
    "title": "Ladder",
    "description": "Multi-purpose 12ft aluminum ladder for home and industrial use.",
    "category": "Tools",
    "condition": "Used",
    "lendPricePerDay": 64,
    "salePrice": 3200,
    "availableFrom": "2025-08-11",
    "availableTo": "2025-11-28",
    "location": "Port Sabrinastad, TN",
    "lenderId": 1,
    "images": [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 42,
    "title": "DSLR Camera",
    "description": "Canon EOS 90D DSLR with 18-135mm lens and accessories.",
    "category": "Photography",
    "condition": "Like New",
    "lendPricePerDay": 34,
    "salePrice": 1632,
    "availableFrom": "2025-08-10",
    "availableTo": "2025-11-29",
    "location": "Jerryview, UT",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 43,
    "title": "Self-help Guide",
    "description": "Atomic Habits by James Clear.",
    "category": "Books",
    "condition": "Like New",
    "lendPricePerDay": 92,
    "salePrice": 2852,
    "availableFrom": "2025-08-08",
    "availableTo": "2025-12-02",
    "location": "West Jenniferside, RI",
    "lenderId": 7,
    "images": [
      "https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 44,
    "title": "Noise Cancelling Headphones",
    "description": "Sony WH-1000XM4 wireless headphones with 30hr battery.",
    "category": "Electronics",
    "condition": "Used",
    "lendPricePerDay": 60,
    "salePrice": 1680,
    "availableFrom": "2025-08-11",
    "availableTo": "2025-11-19",
    "location": "Zacharyfurt, OH",
    "lenderId": 6,
    "images": [
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 45,
    "title": "Smartwatch",
    "description": "Apple Watch Series 8 with GPS and heart-rate monitor.",
    "category": "Electronics",
    "condition": "New",
    "lendPricePerDay": 9,
    "salePrice": 486,
    "availableFrom": "2025-08-11",
    "availableTo": "2025-09-22",
    "location": "Stefaniehaven, NE",
    "lenderId": 7,
    "images": [
      "https://images.unsplash.com/photo-1434493651957-4fe1229c0d34?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 46,
    "title": "Bluetooth Speaker",
    "description": "JBL Flip 5 waterproof portable speaker with deep bass.",
    "category": "Electronics",
    "condition": "Used",
    "lendPricePerDay": 23,
    "salePrice": 575,
    "availableFrom": "2025-08-08",
    "availableTo": "2026-01-27",
    "location": "Amandafort, FL",
    "lenderId": 4,
    "images": [
      "https://images.unsplash.com/photo-1494819108133-8396b31f6a6c?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 47,
    "title": "Bluetooth Speaker",
    "description": "JBL Flip 5 waterproof portable speaker with deep bass.",
    "category": "Electronics",
    "condition": "Like New",
    "lendPricePerDay": 96,
    "salePrice": 5760,
    "availableFrom": "2025-08-13",
    "availableTo": "2025-09-15",
    "location": "New Curtismouth, IN",
    "lenderId": 10,
    "images": [
      "https://images.unsplash.com/photo-1574920162584-ad4fa6712204?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 48,
    "title": "Noise Cancelling Headphones",
    "description": "Sony WH-1000XM4 wireless headphones with 30hr battery.",
    "category": "Electronics",
    "condition": "New",
    "lendPricePerDay": 69,
    "salePrice": 1587,
    "availableFrom": "2025-08-10",
    "availableTo": "2026-02-02",
    "location": "Barnesville, GA",
    "lenderId": 7,
    "images": [
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 49,
    "title": "DSLR Camera",
    "description": "Canon EOS 90D DSLR with 18-135mm lens and accessories.",
    "category": "Photography",
    "condition": "Like New",
    "lendPricePerDay": 21,
    "salePrice": 588,
    "availableFrom": "2025-08-06",
    "availableTo": "2025-11-19",
    "location": "East Richard, TX",
    "lenderId": 4,
    "images": [
      "https://images.unsplash.com/photo-1522312847882-9d83cb0e4174?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 50,
    "title": "DSLR Camera",
    "description": "Canon EOS 90D DSLR with 18-135mm lens and accessories.",
    "category": "Photography",
    "condition": "New",
    "lendPricePerDay": 46,
    "salePrice": 2162,
    "availableFrom": "2025-08-06",
    "availableTo": "2025-09-10",
    "location": "Port Ashleyhaven, MN",
    "lenderId": 1,
    "images": [
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 51,
    "title": "DSLR Camera",
    "description": "Canon EOS 90D DSLR with 18-135mm lens and accessories.",
    "category": "Photography",
    "condition": "New",
    "lendPricePerDay": 12,
    "salePrice": 708,
    "availableFrom": "2025-08-14",
    "availableTo": "2026-01-31",
    "location": "Ashleyfort, RI",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 52,
    "title": "Tripod Stand",
    "description": "Heavy-duty aluminum tripod for stable photography and video shoots.",
    "category": "Photography",
    "condition": "Like New",
    "lendPricePerDay": 91,
    "salePrice": 3367,
    "availableFrom": "2025-08-13",
    "availableTo": "2025-12-06",
    "location": "Smithchester, MN",
    "lenderId": 7,
    "images": [
      "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 53,
    "title": "Tool Kit",
    "description": "Comprehensive 148-piece home tool set with carry case.",
    "category": "Tools",
    "condition": "New",
    "lendPricePerDay": 24,
    "salePrice": 744,
    "availableFrom": "2025-08-13",
    "availableTo": "2025-12-06",
    "location": "Port Christopher, PA",
    "lenderId": 7,
    "images": [
      "https://images.unsplash.com/photo-1609205263690-64f0ff3b8ac5?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 54,
    "title": "VR Headset",
    "description": "Meta Quest 2 – 128 GB all-in-one virtual reality system.",
    "category": "Gaming",
    "condition": "Like New",
    "lendPricePerDay": 80,
    "salePrice": 3120,
    "availableFrom": "2025-08-11",
    "availableTo": "2025-10-12",
    "location": "Christinefort, HI",
    "lenderId": 4,
    "images": [
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 55,
    "title": "Tripod Stand",
    "description": "Heavy-duty aluminum tripod for stable photography and video shoots.",
    "category": "Photography",
    "condition": "New",
    "lendPricePerDay": 13,
    "salePrice": 377,
    "availableFrom": "2025-08-09",
    "availableTo": "2026-01-20",
    "location": "East Cheryl, NE",
    "lenderId": 1,
    "images": [
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 56,
    "title": "Noise Cancelling Headphones",
    "description": "Sony WH-1000XM4 wireless headphones with 30hr battery.",
    "category": "Electronics",
    "condition": "Like New",
    "lendPricePerDay": 95,
    "salePrice": 3610,
    "availableFrom": "2025-08-09",
    "availableTo": "2025-12-07",
    "location": "Lesliefort, AL",
    "lenderId": 9,
    "images": [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 57,
    "title": "Tripod Stand",
    "description": "Heavy-duty aluminum tripod for stable photography and video shoots.",
    "category": "Photography",
    "condition": "Used",
    "lendPricePerDay": 80,
    "salePrice": 4080,
    "availableFrom": "2025-08-06",
    "availableTo": "2025-10-25",
    "location": "West Rachelberg, KY",
    "lenderId": 7,
    "images": [
      "https://images.unsplash.com/photo-1567450077879-37e13e2b4b5b?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 58,
    "title": "Tripod Stand",
    "description": "Heavy-duty aluminum tripod for stable photography and video shoots.",
    "category": "Photography",
    "condition": "New",
    "lendPricePerDay": 46,
    "salePrice": 1518,
    "availableFrom": "2025-08-09",
    "availableTo": "2026-01-22",
    "location": "Lake Ashley, NJ",
    "lenderId": 1,
    "images": [
      "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 59,
    "title": "Camera Drone",
    "description": "DJI Mavic Air 2 with 4K camera and 34-minute flight time.",
    "category": "Photography",
    "condition": "Like New",
    "lendPricePerDay": 32,
    "salePrice": 1824,
    "availableFrom": "2025-08-10",
    "availableTo": "2026-01-14",
    "location": "Port Jack, KY",
    "lenderId": 5,
    "images": [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 60,
    "title": "Smartwatch",
    "description": "Apple Watch Series 8 with GPS and heart-rate monitor.",
    "category": "Electronics",
    "condition": "Like New",
    "lendPricePerDay": 22,
    "salePrice": 1166,
    "availableFrom": "2025-08-05",
    "availableTo": "2025-09-23",
    "location": "New Rodneyberg, IA",
    "lenderId": 1,
    "images": [
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 61,
    "title": "Gaming Chair",
    "description": "Ergonomic gaming chair with lumbar support and headrest.",
    "category": "Gaming",
    "condition": "New",
    "lendPricePerDay": 88,
    "salePrice": 3520,
    "availableFrom": "2025-08-09",
    "availableTo": "2025-10-10",
    "location": "Scottfort, UT",
    "lenderId": 6,
    "images": [
      "https://images.unsplash.com/photo-1592300375729-9a85b2faf6cb?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 62,
    "title": "Data Structures Book",
    "description": "Cracking the Coding Interview – 6th Edition.",
    "category": "Books",
    "condition": "New",
    "lendPricePerDay": 39,
    "salePrice": 1950,
    "availableFrom": "2025-08-05",
    "availableTo": "2025-09-05",
    "location": "North Mary, WA",
    "lenderId": 3,
    "images": [
      "https://images.unsplash.com/photo-1587095951604-c449f3025c1c?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 63,
    "title": "Self-help Guide",
    "description": "Atomic Habits by James Clear.",
    "category": "Books",
    "condition": "New",
    "lendPricePerDay": 20,
    "salePrice": 860,
    "availableFrom": "2025-08-10",
    "availableTo": "2025-10-11",
    "location": "Port Nicole, AL",
    "lenderId": 10,
    "images": [
      "https://images.unsplash.com/photo-1489486501123-d1f4d31e35eb?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 64,
    "title": "Gaming Chair",
    "description": "Ergonomic gaming chair with lumbar support and headrest.",
    "category": "Gaming",
    "condition": "Used",
    "lendPricePerDay": 47,
    "salePrice": 1880,
    "availableFrom": "2025-08-11",
    "availableTo": "2025-10-27",
    "location": "Randallhaven, OR",
    "lenderId": 10,
    "images": [
      "https://images.unsplash.com/photo-1592300304968-d5c73fab9e99?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 65,
    "title": "Noise Cancelling Headphones",
    "description": "Sony WH-1000XM4 wireless headphones with 30hr battery.",
    "category": "Electronics",
    "condition": "Used",
    "lendPricePerDay": 65,
    "salePrice": 1365,
    "availableFrom": "2025-08-11",
    "availableTo": "2025-09-10",
    "location": "Jenniferstad, IA",
    "lenderId": 1,
    "images": [
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 66,
    "title": "DSLR Camera",
    "description": "Canon EOS 90D DSLR with 18-135mm lens and accessories.",
    "category": "Photography",
    "condition": "Like New",
    "lendPricePerDay": 99,
    "salePrice": 2376,
    "availableFrom": "2025-08-14",
    "availableTo": "2025-09-23",
    "location": "Lake Amanda, NV",
    "lenderId": 1,
    "images": [
      "https://images.unsplash.com/photo-1518135714426-c2f2e2e0ee10?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 67,
    "title": "VR Headset",
    "description": "Meta Quest 2 – 128 GB all-in-one virtual reality system.",
    "category": "Gaming",
    "condition": "Used",
    "lendPricePerDay": 11,
    "salePrice": 407,
    "availableFrom": "2025-08-14",
    "availableTo": "2026-01-07",
    "location": "Lake Robertville, CT",
    "lenderId": 8,
    "images": [
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 68,
    "title": "Gaming Console",
    "description": "PlayStation 5 with 2 controllers and God of War Ragnarok.",
    "category": "Gaming",
    "condition": "Used",
    "lendPricePerDay": 86,
    "salePrice": 4300,
    "availableFrom": "2025-08-05",
    "availableTo": "2026-01-04",
    "location": "Lake Steventon, IN",
    "lenderId": 5,
    "images": [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 69,
    "title": "Camera Drone",
    "description": "DJI Mavic Air 2 with 4K camera and 34-minute flight time.",
    "category": "Photography",
    "condition": "Used",
    "lendPricePerDay": 84,
    "salePrice": 2100,
    "availableFrom": "2025-08-10",
    "availableTo": "2025-12-03",
    "location": "Sharpport, IN",
    "lenderId": 10,
    "images": [
      "https://images.unsplash.com/photo-1548887264-48f26bef5d6c?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 70,
    "title": "Tool Kit",
    "description": "Comprehensive 148-piece home tool set with carry case.",
    "category": "Tools",
    "condition": "Used",
    "lendPricePerDay": 72,
    "salePrice": 4104,
    "availableFrom": "2025-08-13",
    "availableTo": "2025-10-03",
    "location": "Douglasland, TX",
    "lenderId": 9,
    "images": [
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 71,
    "title": "Fiction Novel",
    "description": "The Midnight Library by Matt Haig.",
    "category": "Books",
    "condition": "New",
    "lendPricePerDay": 91,
    "salePrice": 2548,
    "availableFrom": "2025-08-07",
    "availableTo": "2026-01-02",
    "location": "Vincenttown, GA",
    "lenderId": 3,
    "images": [
      "https://images.unsplash.com/photo-1518582298755-7d9dce3d959c?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 72,
    "title": "Smartwatch",
    "description": "Apple Watch Series 8 with GPS and heart-rate monitor.",
    "category": "Electronics",
    "condition": "Used",
    "lendPricePerDay": 39,
    "salePrice": 1638,
    "availableFrom": "2025-08-10",
    "availableTo": "2025-10-21",
    "location": "Smithberg, IA",
    "lenderId": 4,
    "images": [
      "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 73,
    "title": "Tool Kit",
    "description": "Comprehensive 148-piece home tool set with carry case.",
    "category": "Tools",
    "condition": "Used",
    "lendPricePerDay": 52,
    "salePrice": 1456,
    "availableFrom": "2025-08-10",
    "availableTo": "2026-02-06",
    "location": "East Jessica, NV",
    "lenderId": 4,
    "images": [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 74,
    "title": "Smartwatch",
    "description": "Apple Watch Series 8 with GPS and heart-rate monitor.",
    "category": "Electronics",
    "condition": "Used",
    "lendPricePerDay": 88,
    "salePrice": 4136,
    "availableFrom": "2025-08-07",
    "availableTo": "2025-10-05",
    "location": "South Jonathan, NH",
    "lenderId": 6,
    "images": [
      "https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 75,
    "title": "Fiction Novel",
    "description": "The Midnight Library by Matt Haig.",
    "category": "Books",
    "condition": "Used",
    "lendPricePerDay": 97,
    "salePrice": 4171,
    "availableFrom": "2025-08-04",
    "availableTo": "2025-11-18",
    "location": "Rickyburgh, VA",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 76,
    "title": "Electric Drill",
    "description": "Bosch cordless electric drill with 2 batteries and charger.",
    "category": "Tools",
    "condition": "Used",
    "lendPricePerDay": 69,
    "salePrice": 2139,
    "availableFrom": "2025-08-09",
    "availableTo": "2025-10-06",
    "location": "North Russellton, OK",
    "lenderId": 1,
    "images": [
      "https://images.unsplash.com/photo-1609778691925-0ba2de29fca8?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 77,
    "title": "VR Headset",
    "description": "Meta Quest 2 – 128 GB all-in-one virtual reality system.",
    "category": "Gaming",
    "condition": "Like New",
    "lendPricePerDay": 45,
    "salePrice": 2610,
    "availableFrom": "2025-08-13",
    "availableTo": "2025-10-22",
    "location": "Lake Alyssa, NC",
    "lenderId": 4,
    "images": [
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 78,
    "title": "Smartwatch",
    "description": "Apple Watch Series 8 with GPS and heart-rate monitor.",
    "category": "Electronics",
    "condition": "Like New",
    "lendPricePerDay": 91,
    "salePrice": 4914,
    "availableFrom": "2025-08-05",
    "availableTo": "2025-10-22",
    "location": "North Carlatown, IN",
    "lenderId": 10,
    "images": [
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 79,
    "title": "Smartwatch",
    "description": "Apple Watch Series 8 with GPS and heart-rate monitor.",
    "category": "Electronics",
    "condition": "Used",
    "lendPricePerDay": 15,
    "salePrice": 540,
    "availableFrom": "2025-08-12",
    "availableTo": "2025-10-11",
    "location": "West Brittanyburgh, NC",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 80,
    "title": "Camera Drone",
    "description": "DJI Mavic Air 2 with 4K camera and 34-minute flight time.",
    "category": "Photography",
    "condition": "Used",
    "lendPricePerDay": 23,
    "salePrice": 759,
    "availableFrom": "2025-08-07",
    "availableTo": "2025-10-17",
    "location": "Erichaven, MI",
    "lenderId": 10,
    "images": [
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 81,
    "title": "Tool Kit",
    "description": "Comprehensive 148-piece home tool set with carry case.",
    "category": "Tools",
    "condition": "Like New",
    "lendPricePerDay": 70,
    "salePrice": 3570,
    "availableFrom": "2025-08-05",
    "availableTo": "2025-11-29",
    "location": "Andreafurt, CT",
    "lenderId": 7,
    "images": [
      "https://images.unsplash.com/photo-1609205263957-f8b2c25f8569?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 82,
    "title": "Gaming Console",
    "description": "PlayStation 5 with 2 controllers and God of War Ragnarok.",
    "category": "Gaming",
    "condition": "Used",
    "lendPricePerDay": 79,
    "salePrice": 3081,
    "availableFrom": "2025-08-14",
    "availableTo": "2025-12-05",
    "location": "Melissatown, CO",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 83,
    "title": "Tripod Stand",
    "description": "Heavy-duty aluminum tripod for stable photography and video shoots.",
    "category": "Photography",
    "condition": "Used",
    "lendPricePerDay": 100,
    "salePrice": 2200,
    "availableFrom": "2025-08-12",
    "availableTo": "2025-09-15",
    "location": "Phillipsshire, OH",
    "lenderId": 9,
    "images": [
      "https://images.unsplash.com/photo-1567662725592-1be65e45c0e3?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 84,
    "title": "Camera Drone",
    "description": "DJI Mavic Air 2 with 4K camera and 34-minute flight time.",
    "category": "Photography",
    "condition": "Like New",
    "lendPricePerDay": 38,
    "salePrice": 988,
    "availableFrom": "2025-08-13",
    "availableTo": "2025-11-10",
    "location": "New William, NM",
    "lenderId": 9,
    "images": [
      "https://images.unsplash.com/photo-1508614565429-4c61d4dc0e4a?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 85,
    "title": "Data Structures Book",
    "description": "Cracking the Coding Interview – 6th Edition.",
    "category": "Books",
    "condition": "New",
    "lendPricePerDay": 75,
    "salePrice": 3750,
    "availableFrom": "2025-08-05",
    "availableTo": "2026-01-02",
    "location": "Kelseymouth, KY",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 86,
    "title": "Data Structures Book",
    "description": "Cracking the Coding Interview – 6th Edition.",
    "category": "Books",
    "condition": "Used",
    "lendPricePerDay": 52,
    "salePrice": 1300,
    "availableFrom": "2025-08-05",
    "availableTo": "2026-01-17",
    "location": "New Cathy, PA",
    "lenderId": 10,
    "images": [
      "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 87,
    "title": "Tripod Stand",
    "description": "Heavy-duty aluminum tripod for stable photography and video shoots.",
    "category": "Photography",
    "condition": "New",
    "lendPricePerDay": 61,
    "salePrice": 2623,
    "availableFrom": "2025-08-13",
    "availableTo": "2025-10-22",
    "location": "New Austinfurt, CT",
    "lenderId": 6,
    "images": [
      "https://images.unsplash.com/photo-1606936235345-b9d57b3f6c66?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 88,
    "title": "Gaming Console",
    "description": "PlayStation 5 with 2 controllers and God of War Ragnarok.",
    "category": "Gaming",
    "condition": "Used",
    "lendPricePerDay": 91,
    "salePrice": 4186,
    "availableFrom": "2025-08-12",
    "availableTo": "2025-12-07",
    "location": "East Stephanie, OR",
    "lenderId": 7,
    "images": [
      "https://images.unsplash.com/photo-1631603803683-23e5dcd5a124?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 89,
    "title": "VR Headset",
    "description": "Meta Quest 2 – 128 GB all-in-one virtual reality system.",
    "category": "Gaming",
    "condition": "Used",
    "lendPricePerDay": 45,
    "salePrice": 1485,
    "availableFrom": "2025-08-14",
    "availableTo": "2025-10-14",
    "location": "North Manuelhaven, SD",
    "lenderId": 4,
    "images": [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 90,
    "title": "Self-help Guide",
    "description": "Atomic Habits by James Clear.",
    "category": "Books",
    "condition": "Used",
    "lendPricePerDay": 53,
    "salePrice": 2809,
    "availableFrom": "2025-08-05",
    "availableTo": "2025-09-23",
    "location": "Terrimouth, KY",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 91,
    "title": "Self-help Guide",
    "description": "Atomic Habits by James Clear.",
    "category": "Books",
    "condition": "Used",
    "lendPricePerDay": 50,
    "salePrice": 1350,
    "availableFrom": "2025-08-05",
    "availableTo": "2025-09-09",
    "location": "East Ethan, MN",
    "lenderId": 8,
    "images": [
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 92,
    "title": "Gaming Chair",
    "description": "Ergonomic gaming chair with lumbar support and headrest.",
    "category": "Gaming",
    "condition": "New",
    "lendPricePerDay": 70,
    "salePrice": 1680,
    "availableFrom": "2025-08-06",
    "availableTo": "2025-12-17",
    "location": "Tylerborough, CO",
    "lenderId": 8,
    "images": [
      "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 93,
    "title": "Ladder",
    "description": "Multi-purpose 12ft aluminum ladder for home and industrial use.",
    "category": "Tools",
    "condition": "New",
    "lendPricePerDay": 13,
    "salePrice": 663,
    "availableFrom": "2025-08-13",
    "availableTo": "2025-09-17",
    "location": "New Wendymouth, VT",
    "lenderId": 7,
    "images": [
      "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 94,
    "title": "Bluetooth Speaker",
    "description": "JBL Flip 5 waterproof portable speaker with deep bass.",
    "category": "Electronics",
    "condition": "New",
    "lendPricePerDay": 30,
    "salePrice": 1620,
    "availableFrom": "2025-08-14",
    "availableTo": "2026-01-16",
    "location": "Bentleyside, WV",
    "lenderId": 3,
    "images": [
      "https://images.unsplash.com/photo-1619558618663-1e5c83c6d11c?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 95,
    "title": "Tripod Stand",
    "description": "Heavy-duty aluminum tripod for stable photography and video shoots.",
    "category": "Photography",
    "condition": "New",
    "lendPricePerDay": 84,
    "salePrice": 3528,
    "availableFrom": "2025-08-11",
    "availableTo": "2025-12-01",
    "location": "Patriciaside, ID",
    "lenderId": 10,
    "images": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 96,
    "title": "Bluetooth Speaker",
    "description": "JBL Flip 5 waterproof portable speaker with deep bass.",
    "category": "Electronics",
    "condition": "Used",
    "lendPricePerDay": 53,
    "salePrice": 1908,
    "availableFrom": "2025-08-13",
    "availableTo": "2025-12-11",
    "location": "New Paul, VA",
    "lenderId": 8,
    "images": [
      "https://images.unsplash.com/photo-1542992015-4a0b729b1385?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 97,
    "title": "Camera Drone",
    "description": "DJI Mavic Air 2 with 4K camera and 34-minute flight time.",
    "category": "Photography",
    "condition": "New",
    "lendPricePerDay": 20,
    "salePrice": 1140,
    "availableFrom": "2025-08-06",
    "availableTo": "2025-10-11",
    "location": "West Christopherfort, NC",
    "lenderId": 3,
    "images": [
      "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 98,
    "title": "Gaming Chair",
    "description": "Ergonomic gaming chair with lumbar support and headrest.",
    "category": "Gaming",
    "condition": "New",
    "lendPricePerDay": 92,
    "salePrice": 3220,
    "availableFrom": "2025-08-14",
    "availableTo": "2026-01-18",
    "location": "South Jamesshire, FL",
    "lenderId": 2,
    "images": [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 99,
    "title": "Tool Kit",
    "description": "Comprehensive 148-piece home tool set with carry case.",
    "category": "Tools",
    "condition": "Like New",
    "lendPricePerDay": 68,
    "salePrice": 1360,
    "availableFrom": "2025-08-11",
    "availableTo": "2025-10-14",
    "location": "West Lisa, NE",
    "lenderId": 5,
    "images": [
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  },
  {
    "id": 100,
    "title": "Ladder",
    "description": "Multi-purpose 12ft aluminum ladder for home and industrial use.",
    "category": "Tools",
    "condition": "New",
    "lendPricePerDay": 91,
    "salePrice": 5187,
    "availableFrom": "2025-08-12",
    "availableTo": "2025-10-13",
    "location": "Toddchester, KS",
    "lenderId": 5,
    "images": [
      "https://images.unsplash.com/photo-1580909462917-94fb0b769a0c?w=400&h=300&fit=crop"
    ],
    "isAvailable": true
  }
];

export const getUserById = (id) => {
  return dummyUsers.find(user => user.id === id);
};

export const getProductsByLender = (lenderId) => {
  return dummyProducts.filter(product => product.lenderId === lenderId);
};

export const getAvailableProducts = () => {
  return dummyProducts.filter(product => product.isAvailable);
};

export const searchProducts = (query, category = '', location = '', maxPrice = '') => {
  let filtered = getAvailableProducts();
  
  if (query) {
    const searchTerm = query.toLowerCase();
    filtered = filtered.filter(product => 
      product.title.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  }
  
  if (category) {
    filtered = filtered.filter(product => product.category === category);
  }
  
  if (location) {
    filtered = filtered.filter(product => 
      product.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  
  if (maxPrice) {
    const price = parseFloat(maxPrice);
    filtered = filtered.filter(product => product.lendPricePerDay <= price);
  }
  
  return filtered;
};
