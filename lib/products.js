// Product and collection manifest. Data read from teswaybike.com on Oct 15, 2026 (prices can change).
const cdn = (file, width = 800) => `https://teswaybike.com/cdn/shop/files/${file}&width=${width}`;

export const PRODUCTS = [
  {
    id: "x7-awd",
    name: "TESWAY X7 AWD Dual Motor E-Bike",
    tag: "Long range · 200 NM torque",
    image: cdn("2_a06c81ae-d08c-4540-b152-691d79d21436.webp?v=1782380388"),
    alt: "TESWAY X7 AWD dual-motor electric bike",
    price: "From $1,799",
    regular: "$2,699",
    specs: { peak: "3600W", battery: "52V 60AH (3120Wh)", speed: "38 MPH", range: "Up to 200 miles", suspension: "Dual suspension", load: "400 lbs" },
  },
  {
    id: "x7-pro",
    name: "TESWAY X7 PRO Long-Range E-Bike",
    tag: "Lowest price in this lineup",
    image: cdn("1_e883acbd-5ba9-4ad0-b821-55487499e781.webp?v=1785229017"),
    alt: "TESWAY X7 PRO electric bike",
    price: "$1,549",
    regular: "$2,399",
    specs: { peak: "2000W", battery: "52V 60AH (3120Wh)", speed: "32 MPH", range: "Up to 200 miles", suspension: "Dual suspension", load: "350 lbs" },
  },
  {
    id: "x5-awd",
    name: "TESWAY X5 AWD Step-Thru E-Bike",
    tag: "Step-thru frame",
    image: cdn("3_35444739-fcb1-4abe-b463-5f9254d7d4de.webp?v=1782374932"),
    alt: "TESWAY X5 AWD step-thru electric bike",
    price: "$1,799",
    regular: "$2,699",
    specs: { peak: "3600W", battery: "52V 60AH (3120Wh)", speed: "38 MPH", range: "Up to 200 miles", suspension: "Dual suspension", load: "400 lbs" },
  },
  {
    id: "x9-ultra",
    name: "TESWAY X9 Ultra 60V Dual-Motor E-MTB",
    tag: "Fat tire · off-road",
    image: cdn("2_af32fe6c-b213-4b97-8973-c61569b73f5b.webp?v=1782381245"),
    alt: "TESWAY X9 Ultra fat tire dual-motor electric mountain bike",
    price: "From $1,859",
    regular: "$2,599",
    specs: { peak: "4000W", battery: "60V 25AH-30AH", speed: "43 MPH", range: "70-100 miles", suspension: "Dual suspension", load: "400 lbs" },
  },
  {
    id: "c5-awd",
    name: "TESWAY C5 AWD Cargo E-Bike",
    tag: "Cargo e-bike",
    image: cdn("TESWAYC5AWDEbike.webp?v=1787827627"),
    alt: "TESWAY C5 AWD cargo electric bike",
    price: "$2,099",
    regular: "$3,099",
    specs: { peak: "3600W", battery: "52V 60AH (3120Wh)", speed: "38 MPH", range: "Up to 200 miles", suspension: "Front fork", load: "450 lbs" },
  },
];

export const FEATURED = PRODUCTS[0];

export const COLLECTIONS = [
  {
    id: "all-ebikes",
    title: "All E-Bikes",
    description: "Browse the full TESWAY e-bike lineup on the merchant site, including the models compared below.",
    image: cdn("TESWAYC5AWDEbike.webp?v=1787827627"),
    alt: "TESWAY C5 AWD cargo e-bike",
    cta: "Browse All E-Bikes",
  },
  {
    id: "black-friday",
    title: "Early Black Friday Deals",
    description: "The merchant's Early Black Friday page lists up to $1,000 off select e-bikes, and its X7 AWD page lists code BF100 for $100 off. Offers can change or end.",
    image: "https://teswaybike.com/cdn/shop/files/tesway_x5_awd_for_camping_411fd6cc-9a60-40f1-ba05-5cea1d4868f9.webp?v=1784180752&width=800",
    alt: "TESWAY X5 AWD e-bike on a camping trip",
    cta: "See Black Friday Deals",
  },
  {
    id: "accessories",
    title: "Riding Accessories",
    description: "Cargo racks, passenger seats, shock absorbers, handlebars and replacement parts listed in the merchant's accessories collection.",
    image: cdn("1_5774630b-f086-4d53-90fb-29d96a1ea30a.webp?v=1755856146"),
    alt: "TESWAY accessories collection banner",
    cta: "View Accessories",
  },
];

export const SPEC_ROWS = [
  ["Price", "price"],
  ["Peak power", "peak"],
  ["Battery", "battery"],
  ["Max speed", "speed"],
  ["Max range", "range"],
  ["Suspension", "suspension"],
  ["Max load", "load"],
];
