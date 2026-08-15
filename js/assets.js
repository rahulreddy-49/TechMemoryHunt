/**
 * Tech Memory Hunt - Assets and Sets Configuration
 * This file contains the 20 predefined sets (categories) of 8 technology items each.
 * It also defines high-quality, recognizable SVG vector drawings for all 160 items
 * using modern tech gradients and responsive layouts.
 */

// Category theme definitions mapping category index to colors
const CATEGORY_THEMES = {
  1: { name: "Computer Basics", primary: "#06b6d4", secondary: "#3b82f6", bg: "rgba(6, 182, 212, 0.1)" },
  2: { name: "Mobile Technology", primary: "#10b981", secondary: "#059669", bg: "rgba(16, 185, 129, 0.1)" },
  3: { name: "Computer Components", primary: "#ef4444", secondary: "#b91c1c", bg: "rgba(239, 68, 68, 0.1)" },
  4: { name: "Networking", primary: "#3b82f6", secondary: "#1d4ed8", bg: "rgba(59, 130, 246, 0.1)" },
  5: { name: "AI and Machine Learning", primary: "#8b5cf6", secondary: "#6d28d9", bg: "rgba(139, 92, 246, 0.1)" },
  6: { name: "Robotics", primary: "#f59e0b", secondary: "#d97706", bg: "rgba(245, 158, 11, 0.1)" },
  7: { name: "Programming", primary: "#ec4899", secondary: "#be185d", bg: "rgba(236, 72, 153, 0.1)" },
  8: { name: "Cybersecurity", primary: "#10b981", secondary: "#047857", bg: "rgba(16, 185, 129, 0.1)" },
  9: { name: "Electronics", primary: "#f59e0b", secondary: "#b45309", bg: "rgba(245, 158, 11, 0.1)" },
  10: { name: "Internet of Things", primary: "#06b6d4", secondary: "#0891b2", bg: "rgba(6, 182, 212, 0.1)" },
  11: { name: "Embedded Systems", primary: "#14b8a6", secondary: "#0f766e", bg: "rgba(20, 184, 166, 0.1)" },
  12: { name: "Gaming Technology", primary: "#d946ef", secondary: "#a21caf", bg: "rgba(217, 70, 239, 0.1)" },
  13: { name: "Future Technology", primary: "#8b5cf6", secondary: "#ec4899", bg: "rgba(139, 92, 246, 0.1)" },
  14: { name: "Space Technology", primary: "#3b82f6", secondary: "#8b5cf6", bg: "rgba(59, 130, 246, 0.1)" },
  15: { name: "Drones and Aviation", primary: "#eab308", secondary: "#ca8a04", bg: "rgba(234, 179, 8, 0.1)" },
  16: { name: "Data and Cloud", primary: "#2563eb", secondary: "#1d4ed8", bg: "rgba(37, 99, 235, 0.1)" },
  17: { name: "Digital Devices", primary: "#f43f5e", secondary: "#be123c", bg: "rgba(244, 63, 94, 0.1)" },
  18: { name: "Modern Transportation", primary: "#10b981", secondary: "#065f46", bg: "rgba(16, 185, 129, 0.1)" },
  19: { name: "Medical Technology", primary: "#f43f5e", secondary: "#e11d48", bg: "rgba(244, 63, 94, 0.1)" },
  20: { name: "Internet and Digital World", primary: "#06b6d4", secondary: "#2563eb", bg: "rgba(6, 182, 212, 0.1)" }
};

// 20 Predefined Sets of 8 technology items each
const GAME_SETS = [
  {
    id: 1,
    category: "Computer Basics",
    items: ["Laptop", "Desktop PC", "Computer Monitor", "Keyboard", "Computer Mouse", "Printer", "Webcam", "Computer Speaker"]
  },
  {
    id: 2,
    category: "Mobile Technology",
    items: ["Smartphone", "Tablet", "Smartwatch", "Power Bank", "Wireless Charger", "SIM Card", "Mobile Phone Tower", "Smartphone Camera"]
  },
  {
    id: 3,
    category: "Computer Components",
    items: ["CPU", "GPU", "RAM", "SSD", "Motherboard", "Power Supply", "Computer Fan", "Heat Sink"]
  },
  {
    id: 4,
    category: "Networking",
    items: ["Wi-Fi Router", "Ethernet Cable", "Network Switch", "Ethernet Connector", "Modem", "Network Server", "Wi-Fi Antenna", "Network Firewall"]
  },
  {
    id: 5,
    category: "AI and Machine Learning",
    items: ["Artificial Intelligence Brain", "Neural Network", "Machine Learning", "AI Robot", "Computer Vision", "AI Chip", "AI Chatbot", "Machine Learning Model"]
  },
  {
    id: 6,
    category: "Robotics",
    items: ["Humanoid Robot", "Robotic Arm", "Robot Dog", "Industrial Robot", "Drone Robot", "Robot Wheel", "Robot Hand", "Autonomous Robot"]
  },
  {
    id: 7,
    category: "Programming",
    items: ["Code Editor", "Python", "Java", "C++", "JavaScript", "HTML", "CSS", "GitHub"]
  },
  {
    id: 8,
    category: "Cybersecurity",
    items: ["Padlock", "Cybersecurity Shield", "Fingerprint Scanner", "Password", "Hacker Computer", "Firewall", "Encryption Key", "Two-Factor Authentication"]
  },
  {
    id: 9,
    category: "Electronics",
    items: ["Resistor", "Capacitor", "LED", "Diode", "Transistor", "Circuit Board", "Breadboard", "Microchip"]
  },
  {
    id: 10,
    category: "Internet of Things",
    items: ["Smart Home", "Smart Bulb", "Smart Thermostat", "Smart Door Lock", "IoT Sensor", "Smart Refrigerator", "Smart TV", "IoT Gateway"]
  },
  {
    id: 11,
    category: "Embedded Systems",
    items: ["Arduino", "Raspberry Pi", "ESP32", "Microcontroller", "LCD Module", "Servo Motor", "Ultrasonic Sensor", "Breadboard Circuit"]
  },
  {
    id: 12,
    category: "Gaming Technology",
    items: ["Gaming PC", "Game Controller", "Gaming Keyboard", "Gaming Mouse", "VR Headset", "Gaming Monitor", "Gaming Console", "Racing Wheel"]
  },
  {
    id: 13,
    category: "Future Technology",
    items: ["Hologram", "Quantum Computer", "Neural Interface", "AI Humanoid", "Smart Glasses", "Exoskeleton", "Autonomous Vehicle", "Flying Car"]
  },
  {
    id: 14,
    category: "Space Technology",
    items: ["Rocket", "Satellite", "Space Rover", "Space Station", "Astronaut", "Space Telescope", "Mars Rover", "Satellite Dish"]
  },
  {
    id: 15,
    category: "Drones and Aviation",
    items: ["Camera Drone", "Racing Drone", "Delivery Drone", "Military Drone", "Drone Controller", "Quadcopter", "Drone Propeller", "Autonomous Flying Drone"]
  },
  {
    id: 16,
    category: "Data and Cloud",
    items: ["Cloud Computing", "Data Center", "Database", "Server Rack", "Data Analytics", "Big Data", "Cloud Storage", "Data Visualization"]
  },
  {
    id: 17,
    category: "Digital Devices",
    items: ["Digital Camera", "Headphones", "Wireless Earbuds", "Smart Speaker", "E-Reader", "Projector", "VR Controller", "Digital Stylus"]
  },
  {
    id: 18,
    category: "Modern Transportation",
    items: ["Electric Car", "Electric Scooter", "Electric Bike", "Electric Vehicle", "EV Charging Station", "Autonomous Car", "Electric Bus", "Maglev Train"]
  },
  {
    id: 19,
    category: "Medical Technology",
    items: ["MRI Machine", "X-Ray Machine", "Robotic Surgery System", "Digital Thermometer", "Heart Monitor", "Prosthetic Arm", "Medical Robot", "Ultrasound Machine"]
  },
  {
    id: 20,
    category: "Internet and Digital World",
    items: ["Internet Globe", "Search Engine", "Social Media", "Video Streaming", "Email", "QR Code", "Blockchain", "Cryptocurrency"]
  }
];

// SVG path definitions for the 160 items
const SVG_ICONS = {
  // SET 1: COMPUTER BASICS
  "Laptop": `
    <rect x="22" y="25" width="56" height="38" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="28" y="30" width="44" height="28" fill="currentColor" fill-opacity="0.15"/>
    <path d="M12,63 L88,63 L82,71 L18,71 Z" fill="currentColor"/>
    <line x1="45" y1="63" x2="55" y2="63" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  `,
  "Desktop PC": `
    <rect x="18" y="20" width="38" height="42" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="37" y1="62" x2="37" y2="70" stroke="currentColor" stroke-width="4"/>
    <line x1="28" y1="70" x2="46" y2="70" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <rect x="62" y="16" width="20" height="54" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="72" cy="24" r="2" fill="currentColor"/>
    <line x1="66" y1="36" x2="78" y2="36" stroke="currentColor" stroke-width="2"/>
    <line x1="66" y1="42" x2="78" y2="42" stroke="currentColor" stroke-width="2"/>
  `,
  "Computer Monitor": `
    <rect x="12" y="18" width="76" height="44" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="50" y1="62" x2="50" y2="74" stroke="currentColor" stroke-width="4"/>
    <path d="M36,74 L64,74" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <circle cx="50" cy="56" r="1.5" fill="currentColor"/>
  `,
  "Keyboard": `
    <rect x="10" y="34" width="80" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="16" y="40" width="10" height="6" fill="currentColor"/>
    <rect x="30" y="40" width="10" height="6" fill="currentColor"/>
    <rect x="44" y="40" width="10" height="6" fill="currentColor"/>
    <rect x="58" y="40" width="10" height="6" fill="currentColor"/>
    <rect x="72" y="40" width="12" height="6" fill="currentColor"/>
    <rect x="16" y="52" width="12" height="6" fill="currentColor"/>
    <rect x="32" y="52" width="36" height="6" rx="2" fill="currentColor"/>
    <rect x="72" y="52" width="12" height="6" fill="currentColor"/>
  `,
  "Computer Mouse": `
    <rect x="32" y="20" width="36" height="60" rx="18" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="50" y1="20" x2="50" y2="50" stroke="currentColor" stroke-width="3"/>
    <line x1="32" y1="50" x2="68" y2="50" stroke="currentColor" stroke-width="3"/>
    <rect x="47" y="28" width="6" height="12" rx="3" fill="currentColor"/>
  `,
  "Printer": `
    <path d="M26,30 L74,30 L74,44 L26,44 Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="16" y="42" width="68" height="24" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M26,60 L74,60 L74,78 L26,78 Z" fill="currentColor" fill-opacity="0.15"/>
    <line x1="26" y1="60" x2="74" y2="60" stroke="currentColor" stroke-width="4"/>
    <line x1="34" y1="68" x2="66" y2="68" stroke="currentColor" stroke-width="2"/>
    <line x1="34" y1="72" x2="58" y2="72" stroke="currentColor" stroke-width="2"/>
  `,
  "Webcam": `
    <circle cx="50" cy="40" r="22" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="40" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="40" r="4" fill="currentColor"/>
    <circle cx="62" cy="28" r="2" fill="currentColor"/>
    <path d="M35,62 L65,62 L72,78 L28,78 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
  `,
  "Computer Speaker": `
    <rect x="15" y="16" width="28" height="68" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="57" y="16" width="28" height="68" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="29" cy="34" r="6" fill="currentColor"/>
    <circle cx="29" cy="62" r="9" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="71" cy="34" r="6" fill="currentColor"/>
    <circle cx="71" cy="62" r="9" fill="none" stroke="currentColor" stroke-width="3"/>
  `,

  // SET 2: MOBILE TECHNOLOGY
  "Smartphone": `
    <rect x="24" y="12" width="52" height="76" rx="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="44" y1="18" x2="56" y2="18" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <circle cx="50" cy="80" r="3" fill="currentColor"/>
    <rect x="30" y="24" width="40" height="48" fill="currentColor" fill-opacity="0.15"/>
  `,
  "Tablet": `
    <rect x="16" y="14" width="68" height="72" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="80" r="3" fill="currentColor"/>
    <rect x="22" y="20" width="56" height="52" fill="currentColor" fill-opacity="0.15"/>
  `,
  "Smartwatch": `
    <rect x="32" y="32" width="36" height="36" rx="10" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M42,32 L42,14 L58,14 L58,32" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M42,68 L42,86 L58,86 L58,68" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="50" y1="50" x2="50" y2="44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="50" x2="56" y2="50" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  `,
  "Power Bank": `
    <rect x="26" y="14" width="48" height="72" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="34" y1="24" x2="66" y2="24" stroke="currentColor" stroke-width="2"/>
    <circle cx="36" cy="34" r="2" fill="currentColor"/>
    <circle cx="44" cy="34" r="2" fill="currentColor"/>
    <circle cx="52" cy="34" r="2" fill="currentColor"/>
    <circle cx="60" cy="34" r="2" fill="currentColor"/>
    <path d="M42,50 L48,60 L52,60 L58,50" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  `,
  "Wireless Charger": `
    <ellipse cx="50" cy="50" rx="36" ry="24" fill="none" stroke="currentColor" stroke-width="4"/>
    <ellipse cx="50" cy="50" rx="26" ry="16" fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M44,45 L58,45 L46,58 L60,58" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
  `,
  "SIM Card": `
    <path d="M25,15 L60,15 L75,30 L75,85 L25,85 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <rect x="35" y="45" width="30" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="50" y1="45" x2="50" y2="73" stroke="currentColor" stroke-width="2"/>
    <line x1="35" y1="59" x2="65" y2="59" stroke="currentColor" stroke-width="2"/>
  `,
  "Mobile Phone Tower": `
    <line x1="50" y1="12" x2="50" y2="88" stroke="currentColor" stroke-width="4"/>
    <path d="M26,88 L50,14 L74,88" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M38,60 L62,60 M44,40 L56,40 M47,26 L53,26" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="14" r="4" fill="currentColor"/>
    <path d="M36,18 C32,24 32,32 36,38" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M64,18 C68,24 68,32 64,38" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  `,
  "Smartphone Camera": `
    <rect x="18" y="18" width="64" height="64" rx="12" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="38" cy="38" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="38" cy="38" r="5" fill="currentColor"/>
    <circle cx="62" cy="62" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="62" cy="38" r="4" fill="currentColor"/>
    <circle cx="38" cy="62" r="3" fill="currentColor"/>
  `,

  // SET 3: COMPUTER COMPONENTS
  "CPU": `
    <rect x="20" y="20" width="60" height="60" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="32" y="32" width="36" height="36" rx="2" fill="currentColor" fill-opacity="0.15"/>
    <path d="M12,30 H20 M12,40 H20 M12,50 H20 M12,60 H20 M12,70 H20" stroke="currentColor" stroke-width="3"/>
    <path d="M80,30 H88 M80,40 H88 M80,50 H88 M80,60 H88 M80,70 H88" stroke="currentColor" stroke-width="3"/>
    <path d="M30,12 V20 M40,12 V20 M50,12 V20 M60,12 V20 M70,12 V20" stroke="currentColor" stroke-width="3"/>
    <path d="M30,80 V88 M40,80 V88 M50,80 V88 M60,80 V88 M70,80 V88" stroke="currentColor" stroke-width="3"/>
    <line x1="38" y1="38" x2="62" y2="38" stroke="currentColor" stroke-width="2"/>
    <line x1="38" y1="44" x2="62" y2="44" stroke="currentColor" stroke-width="2"/>
  `,
  "GPU": `
    <rect x="12" y="25" width="76" height="50" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="38" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="38" y1="34" x2="38" y2="66" stroke="currentColor" stroke-width="3"/>
    <line x1="22" y1="50" x2="54" y2="50" stroke="currentColor" stroke-width="3"/>
    <line x1="27" y1="39" x2="49" y2="61" stroke="currentColor" stroke-width="2"/>
    <line x1="27" y1="61" x2="49" y2="39" stroke="currentColor" stroke-width="2"/>
    <path d="M66,35 H78 M66,45 H78 M66,55 H78 M66,65 H78" stroke="currentColor" stroke-width="3"/>
    <path d="M12,75 L88,75 M16,79 V82 M24,79 V82 M32,79 V82" stroke="currentColor" stroke-width="2"/>
  `,
  "RAM": `
    <rect x="10" y="32" width="80" height="32" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="18" y="38" width="10" height="14" fill="currentColor"/>
    <rect x="33" y="38" width="10" height="14" fill="currentColor"/>
    <rect x="48" y="38" width="10" height="14" fill="currentColor"/>
    <rect x="64" y="38" width="10" height="14" fill="currentColor"/>
    <path d="M15,64 L85,64 M18,64 V68 M22,64 V68 M26,64 V68 M30,64 V68 M34,64 V68 M38,64 V68 M42,64 V68 M46,64 V68 M50,64 V68 M54,64 V68 M58,64 V68 M62,64 V68 M66,64 V68 M70,64 V68 M74,64 V68 M78,64 V68 M82,64 V68" stroke="currentColor" stroke-width="2"/>
  `,
  "SSD": `
    <rect x="22" y="16" width="56" height="68" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="30" y="24" width="40" height="16" fill="currentColor" fill-opacity="0.15"/>
    <line x1="30" y1="52" x2="70" y2="52" stroke="currentColor" stroke-width="3"/>
    <line x1="30" y1="60" x2="70" y2="60" stroke="currentColor" stroke-width="3"/>
    <path d="M36,76 H44 M56,76 H64" stroke="currentColor" stroke-width="4"/>
  `,
  "Motherboard": `
    <rect x="14" y="14" width="72" height="72" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="26" y="24" width="24" height="24" rx="1" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="62" y="24" width="12" height="34" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="62" y1="32" x2="74" y2="32" stroke="currentColor" stroke-width="2"/>
    <line x1="62" y1="41" x2="74" y2="41" stroke="currentColor" stroke-width="2"/>
    <line x1="62" y1="50" x2="74" y2="50" stroke="currentColor" stroke-width="2"/>
    <rect x="26" y="60" width="34" height="12" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="34" cy="66" r="2" fill="currentColor"/>
    <circle cx="44" cy="66" r="2" fill="currentColor"/>
    <circle cx="54" cy="66" r="2" fill="currentColor"/>
    <path d="M42,48 V56 H20" stroke="currentColor" stroke-width="2" fill="none"/>
  `,
  "Power Supply": `
    <rect x="18" y="18" width="64" height="64" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="40" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M40,32 V68 M22,50 H58" stroke="currentColor" stroke-width="2"/>
    <rect x="64" y="26" width="10" height="14" fill="currentColor"/>
    <circle cx="69" cy="54" r="3" fill="currentColor"/>
    <path d="M78,68 C84,70 84,76 90,78" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M78,72 C82,76 84,80 88,84" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  `,
  "Computer Fan": `
    <rect x="15" y="15" width="70" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="50" r="10" fill="currentColor"/>
    <path d="M50,40 C50,26 62,26 60,38 C58,50 50,50 50,40 Z" fill="currentColor"/>
    <path d="M50,60 C50,74 38,74 40,62 C42,50 50,50 50,60 Z" fill="currentColor"/>
    <path d="M60,50 C74,50 74,62 62,60 C50,58 50,50 60,50 Z" fill="currentColor"/>
    <path d="M40,50 C26,50 26,38 38,40 C50,42 50,50 40,50 Z" fill="currentColor"/>
  `,
  "Heat Sink": `
    <rect x="16" y="66" width="68" height="14" rx="2" fill="currentColor"/>
    <line x1="22" y1="20" x2="22" y2="66" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="30" y1="20" x2="30" y2="66" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="38" y1="20" x2="38" y2="66" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="46" y1="20" x2="46" y2="66" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="54" y1="20" x2="54" y2="66" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="62" y1="20" x2="62" y2="66" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="70" y1="20" x2="70" y2="66" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="78" y1="20" x2="78" y2="66" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  `,

  // SET 4: NETWORKING
  "Wi-Fi Router": `
    <rect x="15" y="52" width="70" height="24" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="28" cy="64" r="2.5" fill="currentColor"/>
    <circle cx="40" cy="64" r="2.5" fill="currentColor"/>
    <circle cx="52" cy="64" r="2.5" fill="currentColor"/>
    <line x1="25" y1="52" x2="25" y2="18" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="75" y1="52" x2="75" y2="18" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M42,42 C46,38 54,38 58,42" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M37,35 C44,28 56,28 63,35" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  `,
  "Ethernet Cable": `
    <rect x="35" y="24" width="30" height="34" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="42" y="12" width="16" height="12" fill="currentColor"/>
    <path d="M50,58 L50,88" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
    <line x1="42" y1="36" x2="58" y2="36" stroke="currentColor" stroke-width="3"/>
    <line x1="42" y1="44" x2="58" y2="44" stroke="currentColor" stroke-width="3"/>
  `,
  "Network Switch": `
    <rect x="10" y="30" width="80" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="18" y="44" width="10" height="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <rect x="34" y="44" width="10" height="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <rect x="50" y="44" width="10" height="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <rect x="66" y="44" width="10" height="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <circle cx="23" cy="50" r="1.5" fill="currentColor"/>
    <circle cx="39" cy="50" r="1.5" fill="currentColor"/>
    <circle cx="55" cy="50" r="1.5" fill="currentColor"/>
    <circle cx="71" cy="50" r="1.5" fill="currentColor"/>
    <circle cx="82" cy="40" r="2" fill="currentColor"/>
    <circle cx="82" cy="48" r="2" fill="currentColor"/>
  `,
  "Ethernet Connector": `
    <path d="M26,36 L74,36 L74,72 L26,72 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M36,36 V22 H64 V36" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <rect x="42" y="14" width="16" height="8" fill="currentColor"/>
    <line x1="34" y1="48" x2="34" y2="60" stroke="currentColor" stroke-width="3"/>
    <line x1="42" y1="48" x2="42" y2="60" stroke="currentColor" stroke-width="3"/>
    <line x1="50" y1="48" x2="50" y2="60" stroke="currentColor" stroke-width="3"/>
    <line x1="58" y1="48" x2="58" y2="60" stroke="currentColor" stroke-width="3"/>
    <line x1="66" y1="48" x2="66" y2="60" stroke="currentColor" stroke-width="3"/>
  `,
  "Modem": `
    <rect x="30" y="14" width="40" height="72" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="28" r="3" fill="currentColor"/>
    <circle cx="50" cy="40" r="3" fill="currentColor"/>
    <circle cx="50" cy="52" r="3" fill="currentColor"/>
    <circle cx="50" cy="64" r="3" fill="currentColor"/>
    <path d="M50,76 L66,82" stroke="currentColor" stroke-width="3"/>
  `,
  "Network Server": `
    <rect x="18" y="12" width="64" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="18" y="38" width="64" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="18" y="64" width="64" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="28" cy="23" r="3" fill="currentColor"/>
    <circle cx="28" cy="49" r="3" fill="currentColor"/>
    <circle cx="28" cy="75" r="3" fill="currentColor"/>
    <line x1="42" y1="23" x2="70" y2="23" stroke="currentColor" stroke-width="3"/>
    <line x1="42" y1="49" x2="70" y2="49" stroke="currentColor" stroke-width="3"/>
    <line x1="42" y1="75" x2="70" y2="75" stroke="currentColor" stroke-width="3"/>
  `,
  "Wi-Fi Antenna": `
    <line x1="50" y1="40" x2="50" y2="88" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="30" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="30" r="3" fill="currentColor"/>
    <path d="M30,30 C30,19 39,10 50,10 C61,10 70,19 70,30" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M16,30 C16,11 31,-4 50,-4 C69,-4 84,11 84,30" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  `,
  "Network Firewall": `
    <rect x="12" y="16" width="76" height="56" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M12,30 H88 M12,46 H88 M12,62 H88" stroke="currentColor" stroke-width="3"/>
    <path d="M30,16 V30 M50,16 V30 M70,16 V30" stroke="currentColor" stroke-width="3"/>
    <path d="M20,30 V46 M40,30 V46 M60,30 V46 M80,30 V46" stroke="currentColor" stroke-width="3"/>
    <path d="M30,46 V62 M50,46 V62 M70,46 V62" stroke="currentColor" stroke-width="3"/>
    <path d="M20,62 V72 M40,62 V72 M60,62 V72 M80,62 V72" stroke="currentColor" stroke-width="3"/>
    <path d="M30,76 L50,86 L70,76" stroke="currentColor" stroke-width="4" fill="none" stroke-linejoin="round"/>
  `,

  // SET 5: AI AND MACHINE LEARNING
  "Artificial Intelligence Brain": `
    <path d="M35,38 C28,38 22,44 22,52 C22,64 34,68 38,76 C42,76 46,74 48,70" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M65,38 C72,38 78,44 78,52 C78,64 66,68 62,76 C58,76 54,74 52,70" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M35,38 C35,28 44,20 50,20 C56,20 65,28 65,38" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" stroke-width="3" stroke-dasharray="2 4"/>
    <circle cx="34" cy="46" r="3" fill="currentColor"/>
    <circle cx="66" cy="46" r="3" fill="currentColor"/>
    <circle cx="42" cy="62" r="3" fill="currentColor"/>
    <circle cx="58" cy="62" r="3" fill="currentColor"/>
  `,
  "Neural Network": `
    <circle cx="20" cy="50" r="6" fill="currentColor"/>
    <circle cx="50" cy="25" r="6" fill="currentColor"/>
    <circle cx="50" cy="50" r="6" fill="currentColor"/>
    <circle cx="50" cy="75" r="6" fill="currentColor"/>
    <circle cx="80" cy="35" r="6" fill="currentColor"/>
    <circle cx="80" cy="65" r="6" fill="currentColor"/>
    <line x1="26" y1="50" x2="44" y2="28" stroke="currentColor" stroke-width="2.5"/>
    <line x1="26" y1="50" x2="44" y2="50" stroke="currentColor" stroke-width="2.5"/>
    <line x1="26" y1="50" x2="44" y2="72" stroke="currentColor" stroke-width="2.5"/>
    <line x1="56" y1="25" x2="74" y2="35" stroke="currentColor" stroke-width="2.5"/>
    <line x1="56" y1="50" x2="74" y2="35" stroke="currentColor" stroke-width="2.5"/>
    <line x1="56" y1="50" x2="74" y2="65" stroke="currentColor" stroke-width="2.5"/>
    <line x1="56" y1="75" x2="74" y2="65" stroke="currentColor" stroke-width="2.5"/>
  `,
  "Machine Learning": `
    <rect x="16" y="16" width="28" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="56" y="16" width="28" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="36" y="56" width="28" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="30" y1="44" x2="30" y2="50" stroke="currentColor" stroke-width="3"/>
    <line x1="70" y1="44" x2="70" y2="50" stroke="currentColor" stroke-width="3"/>
    <path d="M30,50 L50,50 L50,56" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <path d="M70,50 L50,50" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="30" cy="30" r="3" fill="currentColor"/>
    <circle cx="70" cy="30" r="3" fill="currentColor"/>
    <circle cx="50" cy="70" r="3" fill="currentColor"/>
  `,
  "AI Robot": `
    <rect x="25" y="24" width="50" height="42" rx="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="40" cy="42" r="5" fill="currentColor"/>
    <circle cx="60" cy="42" r="5" fill="currentColor"/>
    <path d="M42,56 Q50,62 58,56" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <line x1="50" y1="24" x2="50" y2="12" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="12" r="3.5" fill="currentColor"/>
    <line x1="25" y1="45" x2="16" y2="45" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="75" y1="45" x2="84" y2="45" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  `,
  "Computer Vision": `
    <path d="M14,50 C26,28 74,28 86,50 C74,72 26,72 14,50 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <circle cx="50" cy="50" r="6" fill="currentColor"/>
    <path d="M12,18 H24 V30" stroke="currentColor" stroke-width="4" fill="none"/>
    <path d="M88,18 H76 V30" stroke="currentColor" stroke-width="4" fill="none"/>
    <path d="M12,82 H24 V70" stroke="currentColor" stroke-width="4" fill="none"/>
    <path d="M88,82 H76 V70" stroke="currentColor" stroke-width="4" fill="none"/>
  `,
  "AI Chip": `
    <rect x="20" y="20" width="60" height="60" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <path d="M42,42 L58,58 M58,42 L42,58" stroke="currentColor" stroke-width="3.5"/>
    <path d="M12,35 H20 M12,50 H20 M12,65 H20" stroke="currentColor" stroke-width="3"/>
    <path d="M80,35 H88 M80,50 H88 M80,65 H88" stroke="currentColor" stroke-width="3"/>
    <path d="M35,12 V20 M50,12 V20 M65,12 V20" stroke="currentColor" stroke-width="3"/>
    <path d="M35,80 V88 M50,80 V88 M65,80 V88" stroke="currentColor" stroke-width="3"/>
  `,
  "AI Chatbot": `
    <rect x="20" y="26" width="60" height="48" rx="10" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="38" cy="46" r="4" fill="currentColor"/>
    <circle cx="62" cy="46" r="4" fill="currentColor"/>
    <line x1="32" y1="58" x2="68" y2="58" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M40,26 V16 M30,12 H50" stroke="currentColor" stroke-width="3"/>
    <path d="M20,60 L12,72 L24,70" fill="currentColor"/>
  `,
  "Machine Learning Model": `
    <polygon points="50,15 80,35 80,65 50,85 20,65 20,35" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" stroke-width="2"/>
    <line x1="20" y1="35" x2="80" y2="65" stroke="currentColor" stroke-width="2"/>
    <line x1="20" y1="65" x2="80" y2="35" stroke="currentColor" stroke-width="2"/>
    <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="50" r="4" fill="currentColor"/>
  `,

  // SET 6: ROBOTICS
  "Humanoid Robot": `
    <circle cx="50" cy="22" r="10" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="30" y="36" width="40" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="24" y1="40" x2="24" y2="66" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="76" y1="40" x2="76" y2="66" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="40" y1="70" x2="40" y2="88" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="60" y1="70" x2="60" y2="88" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="38" y1="50" x2="62" y2="50" stroke="currentColor" stroke-width="3"/>
  `,
  "Robotic Arm": `
    <rect x="18" y="78" width="64" height="10" fill="currentColor"/>
    <path d="M26,78 L34,44 L58,34 L78,38" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="34" cy="44" r="5" fill="currentColor"/>
    <circle cx="58" cy="34" r="5" fill="currentColor"/>
    <path d="M74,28 L82,38 L74,48" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="62" y1="34" x2="66" y2="18" stroke="currentColor" stroke-width="3"/>
  `,
  "Robot Dog": `
    <rect x="22" y="32" width="38" height="24" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="68" cy="24" r="6" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M60,32 L68,24" stroke="currentColor" stroke-width="4"/>
    <path d="M12,28 L22,34" stroke="currentColor" stroke-width="3"/>
    <line x1="28" y1="56" x2="24" y2="82" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="38" y1="56" x2="38" y2="82" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="52" y1="56" x2="48" y2="82" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="58" y1="56" x2="62" y2="82" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  `,
  "Industrial Robot": `
    <rect x="25" y="80" width="50" height="8" fill="currentColor"/>
    <path d="M50,80 V50 L34,36 H18" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="50" cy="50" r="5" fill="currentColor"/>
    <circle cx="34" cy="36" r="5" fill="currentColor"/>
    <path d="M18,28 V44" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="18" y1="36" x2="10" y2="36" stroke="currentColor" stroke-width="3"/>
  `,
  "Drone Robot": `
    <rect x="36" y="44" width="28" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M22,34 L36,46 M78,34 L64,46" stroke="currentColor" stroke-width="4"/>
    <line x1="14" y1="34" x2="30" y2="34" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="70" y1="34" x2="86" y2="34" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <circle cx="50" cy="53" r="4" fill="currentColor"/>
    <path d="M30,62 L36,76 H64 L70,62" fill="none" stroke="currentColor" stroke-width="3"/>
  `,
  "Robot Wheel": `
    <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" stroke-width="5"/>
    <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="50" r="6" fill="currentColor"/>
    <line x1="50" y1="14" x2="50" y2="34" stroke="currentColor" stroke-width="4"/>
    <line x1="50" y1="66" x2="50" y2="86" stroke="currentColor" stroke-width="4"/>
    <line x1="14" y1="50" x2="34" y2="50" stroke="currentColor" stroke-width="4"/>
    <line x1="66" y1="50" x2="86" y2="50" stroke="currentColor" stroke-width="4"/>
  `,
  "Robot Hand": `
    <path d="M35,85 V62 L22,46 L24,40 L40,56 V30 L45,30 V52 L50,26 L55,26 V52 L60,28 L65,28 V54 L70,36 L75,36 V58 L65,85 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
    <line x1="45" y1="72" x2="55" y2="72" stroke="currentColor" stroke-width="3"/>
  `,
  "Autonomous Robot": `
    <rect x="22" y="32" width="56" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="38" cy="46" r="4" fill="currentColor"/>
    <circle cx="62" cy="46" r="4" fill="currentColor"/>
    <rect x="42" y="58" width="16" height="6" rx="2" fill="currentColor"/>
    <circle cx="34" cy="80" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="66" cy="80" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M50,32 V18 H62" stroke="currentColor" stroke-width="3" fill="none" stroke-linejoin="round"/>
  `,

  // SET 7: PROGRAMMING
  "Code Editor": `
    <rect x="12" y="18" width="76" height="64" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M12,30 H88" stroke="currentColor" stroke-width="3"/>
    <circle cx="20" cy="24" r="2.5" fill="currentColor"/>
    <circle cx="28" cy="24" r="2.5" fill="currentColor"/>
    <circle cx="36" cy="24" r="2.5" fill="currentColor"/>
    <path d="M22,44 L14,50 L22,56" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M46,44 L54,50 L46,56" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="38" y1="58" x2="30" y2="42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  `,
  "Python": `
    <path d="M38,12 C24,12 25,23 25,27 L25,37 H38 V42 H54 C54,42 66,42 66,28 C66,14 54,12 48,12 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M62,88 C76,88 75,77 75,73 L75,63 H62 V58 H46 C46,58 34,58 34,72 C34,86 46,88 52,88 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="32" cy="20" r="2" fill="currentColor"/>
    <circle cx="68" cy="80" r="2" fill="currentColor"/>
  `,
  "Java": `
    <path d="M35,62 C35,62 38,70 54,70 C70,70 75,60 62,56 C49,52 32,54 44,40 C56,26 72,32 72,32" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M26,76 C32,80 50,84 68,80 C78,78 84,72 84,72" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M44,20 C42,16 44,8 52,4" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M52,24 C50,20 54,14 60,10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  `,
  "C++": `
    <path d="M44,32 C38,28 22,28 22,50 C22,72 38,72 44,68" fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round"/>
    <path d="M56,44 H70 M63,37 V51" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M74,56 H88 M81,49 V63" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
  `,
  "JavaScript": `
    <rect x="14" y="14" width="72" height="72" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <text x="50" y="70" font-family="'Space Grotesk', Impact, sans-serif" font-weight="900" font-size="34" fill="currentColor">JS</text>
  `,
  "HTML": `
    <polygon points="18,12 24,74 50,88 76,74 82,12" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <text x="32" y="58" font-family="'Space Grotesk', Impact, sans-serif" font-weight="900" font-size="34" fill="currentColor">H</text>
  `,
  "CSS": `
    <polygon points="18,12 24,74 50,88 76,74 82,12" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <text x="34" y="58" font-family="'Space Grotesk', Impact, sans-serif" font-weight="900" font-size="34" fill="currentColor">C</text>
  `,
  "GitHub": `
    <path d="M50,12 C28,12 12,28 12,50 C12,68 24,82 40,86 C40,84 40,80 40,76 C28,78 26,70 26,70 C24,66 20,64 20,64 C16,62 20,62 20,62 C24,62 26,68 26,68 C30,74 36,72 40,70 C40,66 42,64 44,62 C32,60 22,56 22,40 C22,34 24,30 28,26 C28,24 26,18 28,12 C28,12 34,12 44,20 C50,18 56,18 62,20 C72,12 78,12 78,12 C80,18 78,24 78,26 C82,30 84,34 84,40 C84,56 74,60 62,62 C64,64 66,68 66,74 C66,80 66,84 66,86 C82,82 94,68 94,50 C94,28 78,12 50,12 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
  `,

  // SET 8: CYBERSECURITY
  "Padlock": `
    <rect x="22" y="42" width="56" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M34,42 V26 C34,17 40,12 50,12 C60,12 66,17 66,26 V42" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <circle cx="50" cy="58" r="4" fill="currentColor"/>
    <path d="M50,62 V72" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  `,
  "Cybersecurity Shield": `
    <path d="M18,16 L50,8 L82,16 V46 C82,68 50,86 50,86 C50,86 18,68 18,46 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M50,22 V70" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M34,40 L44,50 L66,30" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  `,
  "Fingerprint Scanner": `
    <rect x="18" y="14" width="64" height="72" rx="10" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M34,40 C34,30 42,24 50,24 C58,24 66,30 66,40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M28,50 C28,34 38,28 50,28 C62,28 72,34 72,50" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M40,50 C40,44 44,40 50,40 C56,40 60,44 60,50 C60,60 40,64 40,74" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <path d="M48,50 C48,48 49,47 50,47 C51,47 52,48 52,50 C52,54 48,56 48,60 V64" fill="none" stroke="currentColor" stroke-width="3"/>
  `,
  "Password": `
    <rect x="12" y="34" width="76" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="28" cy="50" r="4" fill="currentColor"/>
    <circle cx="50" cy="50" r="4" fill="currentColor"/>
    <circle cx="72" cy="50" r="4" fill="currentColor"/>
    <path d="M22,42 L34,58 M34,42 L22,58" stroke="currentColor" stroke-width="3"/>
    <path d="M44,42 L56,58 M56,42 L44,58" stroke="currentColor" stroke-width="3"/>
    <path d="M66,42 L78,58 M78,42 L66,58" stroke="currentColor" stroke-width="3"/>
  `,
  "Hacker Computer": `
    <rect x="18" y="16" width="64" height="42" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M10,68 H90 L82,78 H18 Z" fill="currentColor"/>
    <text x="32" y="42" font-family="monospace" font-weight="bold" font-size="20" fill="currentColor">&gt;_</text>
    <path d="M42,26 L50,10 L58,26" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
  `,
  "Firewall": `
    <rect x="14" y="24" width="72" height="52" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M14,38 H86 M14,52 H86 M14,66 H86" stroke="currentColor" stroke-width="3"/>
    <path d="M32,24 V38 M58,24 V38" stroke="currentColor" stroke-width="3"/>
    <path d="M22,38 V52 M48,38 V52 M74,38 V52" stroke="currentColor" stroke-width="3"/>
    <path d="M36,52 V66 M62,52 V66" stroke="currentColor" stroke-width="3"/>
    <path d="M24,66 V76 M50,66 V76 M76,66 V76" stroke="currentColor" stroke-width="3"/>
  `,
  "Encryption Key": `
    <circle cx="32" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M48,50 H84 V36 H72 V50" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
    <line x1="60" y1="50" x2="60" y2="60" stroke="currentColor" stroke-width="4"/>
    <circle cx="32" cy="50" r="4" fill="currentColor"/>
  `,
  "Two-Factor Authentication": `
    <rect x="16" y="22" width="34" height="56" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="33" cy="68" r="2" fill="currentColor"/>
    <rect x="56" y="22" width="28" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="3"/>
    <text x="60" y="42" font-family="'Space Grotesk', Impact, sans-serif" font-weight="900" font-size="14" fill="currentColor">2F</text>
    <path d="M40,42 H60 M52,34 L60,42 L52,50" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  `,

  // SET 9: ELECTRONICS
  "Resistor": `
    <line x1="8" y1="50" x2="92" y2="50" stroke="currentColor" stroke-width="4"/>
    <rect x="24" y="32" width="52" height="36" rx="6" fill="#1e293b" stroke="currentColor" stroke-width="4"/>
    <rect x="36" y="32" width="6" height="36" fill="#f59e0b"/>
    <rect x="48" y="32" width="6" height="36" fill="#ef4444"/>
    <rect x="60" y="32" width="6" height="36" fill="#3b82f6"/>
  `,
  "Capacitor": `
    <line x1="38" y1="12" x2="38" y2="88" stroke="currentColor" stroke-width="4"/>
    <line x1="62" y1="12" x2="62" y2="88" stroke="currentColor" stroke-width="4"/>
    <rect x="22" y="26" width="32" height="48" rx="3" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="46" y="26" width="32" height="48" rx="3" fill="none" stroke="currentColor" stroke-width="4"/>
    <text x="32" y="55" font-family="sans-serif" font-size="20" fill="currentColor">+</text>
  `,
  "LED": `
    <path d="M34,56 V32 C34,20 42,12 50,12 C58,12 66,20 66,32 V56 H34 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <line x1="30" y1="56" x2="70" y2="56" stroke="currentColor" stroke-width="4"/>
    <line x1="42" y1="56" x2="42" y2="88" stroke="currentColor" stroke-width="4"/>
    <line x1="58" y1="56" x2="58" y2="80" stroke="currentColor" stroke-width="4"/>
    <path d="M74,26 L84,16 M70,18 L80,8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  `,
  "Diode": `
    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="4"/>
    <polygon points="34,30 34,70 66,50" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <line x1="66" y1="30" x2="66" y2="70" stroke="currentColor" stroke-width="4"/>
  `,
  "Transistor": `
    <rect x="26" y="16" width="48" height="34" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="34" y1="50" x2="34" y2="84" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="50" y1="50" x2="50" y2="84" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="66" y1="50" x2="66" y2="84" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="30" y1="26" x2="70" y2="26" stroke="currentColor" stroke-width="2"/>
  `,
  "Circuit Board": `
    <rect x="14" y="14" width="72" height="72" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="30" cy="30" r="4" fill="currentColor"/>
    <circle cx="70" cy="30" r="4" fill="currentColor"/>
    <circle cx="50" cy="50" r="6" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="30" cy="70" r="4" fill="currentColor"/>
    <circle cx="70" cy="70" r="4" fill="currentColor"/>
    <path d="M34,30 H44 V50" stroke="currentColor" stroke-width="3" fill="none"/>
    <path d="M70,34 V44 L55,50" stroke="currentColor" stroke-width="3" fill="none"/>
    <path d="M30,66 V56 L44,50" stroke="currentColor" stroke-width="3" fill="none"/>
  `,
  "Breadboard": `
    <rect x="10" y="24" width="80" height="52" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M10,36 H90 M10,64 H90" stroke="currentColor" stroke-width="2"/>
    <circle cx="20" cy="30" r="1.5" fill="currentColor"/><circle cx="30" cy="30" r="1.5" fill="currentColor"/><circle cx="40" cy="30" r="1.5" fill="currentColor"/><circle cx="50" cy="30" r="1.5" fill="currentColor"/><circle cx="60" cy="30" r="1.5" fill="currentColor"/><circle cx="70" cy="30" r="1.5" fill="currentColor"/><circle cx="80" cy="30" r="1.5" fill="currentColor"/>
    <circle cx="20" cy="42" r="1.5" fill="currentColor"/><circle cx="30" cy="42" r="1.5" fill="currentColor"/><circle cx="40" cy="42" r="1.5" fill="currentColor"/><circle cx="50" cy="42" r="1.5" fill="currentColor"/><circle cx="60" cy="42" r="1.5" fill="currentColor"/><circle cx="70" cy="42" r="1.5" fill="currentColor"/><circle cx="80" cy="42" r="1.5" fill="currentColor"/>
    <circle cx="20" cy="50" r="1.5" fill="currentColor"/><circle cx="30" cy="50" r="1.5" fill="currentColor"/><circle cx="40" cy="50" r="1.5" fill="currentColor"/><circle cx="50" cy="50" r="1.5" fill="currentColor"/><circle cx="60" cy="50" r="1.5" fill="currentColor"/><circle cx="70" cy="50" r="1.5" fill="currentColor"/><circle cx="80" cy="50" r="1.5" fill="currentColor"/>
    <circle cx="20" cy="58" r="1.5" fill="currentColor"/><circle cx="30" cy="58" r="1.5" fill="currentColor"/><circle cx="40" cy="58" r="1.5" fill="currentColor"/><circle cx="50" cy="58" r="1.5" fill="currentColor"/><circle cx="60" cy="58" r="1.5" fill="currentColor"/><circle cx="70" cy="58" r="1.5" fill="currentColor"/><circle cx="80" cy="58" r="1.5" fill="currentColor"/>
    <circle cx="20" cy="70" r="1.5" fill="currentColor"/><circle cx="30" cy="70" r="1.5" fill="currentColor"/><circle cx="40" cy="70" r="1.5" fill="currentColor"/><circle cx="50" cy="70" r="1.5" fill="currentColor"/><circle cx="60" cy="70" r="1.5" fill="currentColor"/><circle cx="70" cy="70" r="1.5" fill="currentColor"/><circle cx="80" cy="70" r="1.5" fill="currentColor"/>
  `,
  "Microchip": `
    <rect x="22" y="22" width="56" height="56" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="34" y="34" width="32" height="32" rx="1" fill="currentColor" fill-opacity="0.15"/>
    <path d="M14,32 H22 M14,44 H22 M14,56 H22 M14,68 H22" stroke="currentColor" stroke-width="3"/>
    <path d="M78,32 H86 M78,44 H86 M78,56 H86 M78,68 H86" stroke="currentColor" stroke-width="3"/>
    <path d="M32,14 V22 M44,14 V22 M56,14 V22 M68,14 V22" stroke="currentColor" stroke-width="3"/>
    <path d="M32,78 V86 M44,78 V86 M56,78 V86 M68,78 V86" stroke="currentColor" stroke-width="3"/>
  `,

  // SET 10: INTERNET OF THINGS
  "Smart Home": `
    <polygon points="50,12 14,44 22,44 22,82 78,82 78,44 86,44" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="50" cy="46" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M50,41 L55,47 L45,47 Z" fill="currentColor"/>
    <circle cx="50" cy="68" r="4" fill="currentColor"/>
  `,
  "Smart Bulb": `
    <path d="M30,36 C30,22 40,14 50,14 C60,14 70,22 70,36 C70,46 62,52 60,58 H40 C38,52 30,46 30,36 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <rect x="42" y="58" width="16" height="12" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M45,70 L50,78 L55,70" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <path d="M50,30 V42 M42,36 H58" stroke="currentColor" stroke-width="3"/>
  `,
  "Smart Thermostat": `
    <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="50" r="26" fill="none" stroke="currentColor" stroke-width="2"/>
    <text x="32" y="58" font-family="'Space Grotesk', Impact, sans-serif" font-weight="900" font-size="24" fill="currentColor">22°</text>
    <path d="M46,68 Q50,65 54,68" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  `,
  "Smart Door Lock": `
    <rect x="30" y="14" width="40" height="72" rx="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="34" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="47" y="42" width="6" height="10" rx="3" fill="currentColor"/>
    <path d="M50,60 L50,72 H62" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  `,
  "IoT Sensor": `
    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="50" r="8" fill="currentColor"/>
    <path d="M50,10 V20 M50,80 V90 M10,50 H20 M80,50 H90" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="20" r="2.5" fill="currentColor"/>
    <circle cx="50" cy="80" r="2.5" fill="currentColor"/>
    <circle cx="20" cy="50" r="2.5" fill="currentColor"/>
    <circle cx="80" cy="50" r="2.5" fill="currentColor"/>
  `,
  "Smart Refrigerator": `
    <rect x="24" y="12" width="52" height="76" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="24" y1="44" x2="76" y2="44" stroke="currentColor" stroke-width="4"/>
    <line x1="32" y1="24" x2="32" y2="38" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="32" y1="50" x2="32" y2="68" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <rect x="48" y="24" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="57" cy="30" r="2" fill="currentColor"/>
  `,
  "Smart TV": `
    <rect x="10" y="20" width="80" height="46" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="14" y="24" width="72" height="38" fill="currentColor" fill-opacity="0.15"/>
    <polygon points="40,78 60,78 50,66" fill="currentColor"/>
    <path d="M8,10 H92" stroke="currentColor" stroke-width="2" stroke-dasharray="2 4"/>
  `,
  "IoT Gateway": `
    <rect x="18" y="38" width="64" height="34" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="32" y1="38" x2="32" y2="18" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="68" y1="38" x2="68" y2="18" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <circle cx="32" cy="18" r="3.5" fill="currentColor"/>
    <circle cx="68" cy="18" r="3.5" fill="currentColor"/>
    <circle cx="34" cy="55" r="2" fill="currentColor"/>
    <circle cx="44" cy="55" r="2" fill="currentColor"/>
    <circle cx="54" cy="55" r="2" fill="currentColor"/>
  `,

  // SET 11: EMBEDDED SYSTEMS
  "Arduino": `
    <rect x="14" y="22" width="72" height="56" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="22" y="34" width="22" height="14" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="62" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
    <text x="56" y="56" font-family="sans-serif" font-weight="bold" font-size="16" fill="currentColor">+</text>
    <path d="M14,28 H86 M14,72 H86" stroke="currentColor" stroke-width="2" stroke-dasharray="4 2"/>
  `,
  "Raspberry Pi": `
    <rect x="16" y="22" width="68" height="56" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M44,44 C42,40 58,40 56,44 C54,48 46,48 44,44 Z" fill="currentColor"/>
    <path d="M44,56 C42,60 58,60 56,56 C54,52 46,52 44,56 Z" fill="currentColor"/>
    <rect x="74" y="34" width="14" height="12" fill="currentColor"/>
    <rect x="74" y="52" width="14" height="12" fill="currentColor"/>
  `,
  "ESP32": `
    <rect x="26" y="16" width="48" height="68" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="34" y="24" width="32" height="24" fill="currentColor"/>
    <path d="M26,30 H20 M26,40 H20 M26,50 H20 M26,60 H20 M26,70 H20" stroke="currentColor" stroke-width="3"/>
    <path d="M74,30 H80 M74,40 H80 M74,50 H80 M74,60 H80 M74,70 H80" stroke="currentColor" stroke-width="3"/>
    <path d="M44,84 V74 H56 V84" stroke="currentColor" stroke-width="3" fill="none"/>
  `,
  "Microcontroller": `
    <rect x="22" y="22" width="56" height="56" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="34" y="34" width="32" height="32" rx="1" fill="currentColor" fill-opacity="0.15"/>
    <path d="M12,32 H22 M12,44 H22 M12,56 H22 M12,68 H22" stroke="currentColor" stroke-width="3"/>
    <path d="M78,32 H86 M78,44 H86 M78,56 H86 M78,68 H86" stroke="currentColor" stroke-width="3"/>
    <path d="M32,14 V22 M44,14 V22 M56,14 V22 M68,14 V22" stroke="currentColor" stroke-width="3"/>
    <path d="M32,78 V86 M44,78 V86 M56,78 V86 M68,78 V86" stroke="currentColor" stroke-width="3"/>
  `,
  "LCD Module": `
    <rect x="12" y="24" width="76" height="52" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="20" y="32" width="60" height="28" fill="none" stroke="currentColor" stroke-width="3"/>
    <text x="25" y="52" font-family="monospace" font-weight="bold" font-size="15" fill="currentColor">16x2 LCD</text>
    <path d="M16,76 H84" stroke="currentColor" stroke-width="3" stroke-dasharray="2 2"/>
  `,
  "Servo Motor": `
    <rect x="20" y="36" width="60" height="36" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="36" cy="54" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="36" cy="54" r="3" fill="currentColor"/>
    <path d="M36,24 V36" stroke="currentColor" stroke-width="4"/>
    <polygon points="26,24 46,24 36,12" fill="currentColor"/>
    <path d="M80,54 H92" stroke="currentColor" stroke-width="3"/>
  `,
  "Ultrasonic Sensor": `
    <rect x="14" y="32" width="72" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="32" cy="50" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="32" cy="50" r="4" fill="currentColor"/>
    <circle cx="68" cy="50" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="68" cy="50" r="4" fill="currentColor"/>
    <line x1="50" y1="68" x2="50" y2="80" stroke="currentColor" stroke-width="3"/>
  `,
  "Breadboard Circuit": `
    <rect x="14" y="26" width="72" height="48" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M26,38 H58 V62" stroke="#ef4444" stroke-width="3" fill="none" stroke-linejoin="round"/>
    <path d="M46,38 V62 H74" stroke="#3b82f6" stroke-width="3" fill="none" stroke-linejoin="round"/>
    <circle cx="26" cy="38" r="3" fill="currentColor"/>
    <circle cx="58" cy="62" r="3" fill="currentColor"/>
    <circle cx="74" cy="62" r="3" fill="currentColor"/>
  `,

  // SET 12: GAMING TECHNOLOGY
  "Gaming PC": `
    <rect x="22" y="14" width="56" height="72" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="30" y="22" width="40" height="28" fill="currentColor" fill-opacity="0.15"/>
    <circle cx="50" cy="66" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="50" y1="54" x2="50" y2="78" stroke="currentColor" stroke-width="2"/>
    <line x1="38" y1="66" x2="62" y2="66" stroke="currentColor" stroke-width="2"/>
    <path d="M22,50 H78" stroke="currentColor" stroke-width="3"/>
  `,
  "Game Controller": `
    <rect x="16" y="26" width="68" height="48" rx="24" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M34,42 V58 M26,50 H42" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <circle cx="60" cy="44" r="3.5" fill="currentColor"/>
    <circle cx="68" cy="52" r="3.5" fill="currentColor"/>
    <circle cx="60" cy="56" r="3.5" fill="currentColor"/>
    <circle cx="52" cy="48" r="3.5" fill="currentColor"/>
    <rect x="44" y="34" width="12" height="6" rx="2" fill="currentColor"/>
  `,
  "Gaming Keyboard": `
    <rect x="10" y="32" width="80" height="36" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M16,40 H84 M16,50 H84 M16,60 H84" stroke="currentColor" stroke-width="2" stroke-dasharray="2 3"/>
    <path d="M18,32 L26,18 H74 L82,32" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <rect x="26" y="42" width="8" height="8" rx="2" fill="#ec4899"/>
  `,
  "Gaming Mouse": `
    <rect x="32" y="18" width="36" height="64" rx="18" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M32,46 L68,46 M50,18 V46" stroke="currentColor" stroke-width="3"/>
    <path d="M40,70 L50,60 L60,70" stroke="#a855f7" stroke-width="3" fill="none" stroke-linejoin="round"/>
    <rect x="47" y="26" width="6" height="12" rx="3" fill="currentColor"/>
  `,
  "VR Headset": `
    <path d="M14,32 H86 V62 H14 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M42,62 C44,54 56,54 58,62" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="22" y="38" width="56" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="50" y1="38" x2="50" y2="56" stroke="currentColor" stroke-width="2"/>
    <path d="M14,47 C6,47 6,24 18,20" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <path d="M86,47 C94,47 94,24 82,20" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
  `,
  "Gaming Monitor": `
    <rect x="10" y="16" width="80" height="46" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M26,62 L18,78 H82 L74,62" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M46,62 V78 M54,62 V78" stroke="currentColor" stroke-width="3"/>
    <path d="M16,54 L28,42 L50,50 L84,24" fill="none" stroke="currentColor" stroke-width="2"/>
  `,
  "Gaming Console": `
    <rect x="18" y="18" width="64" height="64" rx="10" fill="none" stroke="currentColor" stroke-width="4"/>
    <ellipse cx="50" cy="50" rx="20" ry="20" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="36" y="44" width="28" height="12" rx="4" fill="currentColor"/>
    <circle cx="50" cy="28" r="3" fill="currentColor"/>
  `,
  "Racing Wheel": `
    <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="50" r="10" fill="currentColor"/>
    <path d="M50,50 L20,32 M50,50 L80,32 M50,50 L50,84" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
    <rect x="38" y="46" width="24" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="3"/>
  `,

  // SET 13: FUTURE TECHNOLOGY
  "Hologram": `
    <ellipse cx="50" cy="78" rx="30" ry="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <polygon points="50,14 30,68 70,68" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <line x1="50" y1="14" x2="50" y2="78" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/>
    <circle cx="50" cy="14" r="5" fill="currentColor"/>
  `,
  "Quantum Computer": `
    <rect x="22" y="14" width="56" height="72" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="50" y1="14" x2="50" y2="86" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="30" r="14" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="50" cy="70" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" stroke-width="2"/>
  `,
  "Neural Interface": `
    <circle cx="50" cy="30" r="18" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M32,30 H12 M68,30 H88" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M50,48 V86" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <circle cx="12" cy="30" r="3" fill="currentColor"/>
    <circle cx="88" cy="30" r="3" fill="currentColor"/>
    <circle cx="50" cy="86" r="3" fill="currentColor"/>
    <path d="M42,26 H58 M40,34 H60" stroke="currentColor" stroke-width="2"/>
  `,
  "AI Humanoid": `
    <circle cx="50" cy="22" r="10" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M32,36 H68 V66 H32 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <line x1="42" y1="36" x2="42" y2="66" stroke="currentColor" stroke-width="2"/>
    <line x1="58" y1="36" x2="58" y2="66" stroke="currentColor" stroke-width="2"/>
    <path d="M22,36 L28,68 L20,86" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="M78,36 L72,68 L80,86" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
  `,
  "Smart Glasses": `
    <rect x="14" y="38" width="30" height="24" rx="12" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="56" y="38" width="30" height="24" rx="12" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M44,46 H56" stroke="currentColor" stroke-width="4"/>
    <path d="M14,44 C10,34 18,22 30,22" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M86,44 C90,34 82,22 70,22" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="20" y1="50" x2="38" y2="50" stroke="currentColor" stroke-width="2"/>
  `,
  "Exoskeleton": `
    <line x1="50" y1="12" x2="50" y2="88" stroke="currentColor" stroke-width="4"/>
    <path d="M30,26 L50,16 L70,26 L62,84 L50,88 L38,84 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M22,34 L30,42 M78,34 L70,42" stroke="currentColor" stroke-width="4"/>
    <path d="M22,66 L38,72 M78,66 L62,72" stroke="currentColor" stroke-width="4"/>
  `,
  "Autonomous Vehicle": `
    <rect x="16" y="38" width="68" height="34" rx="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M24,38 L32,22 H68 L76,38" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="30" cy="72" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="70" cy="72" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="18" r="4" fill="currentColor"/>
    <path d="M50,18 V22" stroke="currentColor" stroke-width="2"/>
  `,
  "Flying Car": `
    <path d="M16,46 H84 L76,64 H24 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M26,46 L36,26 H64 L74,46" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <line x1="10" y1="64" x2="90" y2="64" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="28" cy="70" rx="10" ry="4" fill="currentColor"/>
    <ellipse cx="72" cy="70" rx="10" ry="4" fill="currentColor"/>
  `,

  // SET 14: SPACE TECHNOLOGY
  "Rocket": `
    <path d="M50,12 C50,12 62,34 62,56 L66,74 H34 L38,56 C38,34 50,12 50,12 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M34,74 L22,82 V66 L34,60" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M66,74 L78,82 V66 L66,60" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/>
    <circle cx="50" cy="38" r="6" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <path d="M44,82 L50,92 L56,82" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
  `,
  "Satellite": `
    <rect x="38" y="32" width="24" height="36" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="8" y="42" width="22" height="16" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="70" y="42" width="22" height="16" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="30" y1="50" x2="38" y2="50" stroke="currentColor" stroke-width="3"/>
    <line x1="62" y1="50" x2="70" y2="50" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="18" r="4" fill="currentColor"/>
    <path d="M50,18 L50,32" stroke="currentColor" stroke-width="3"/>
  `,
  "Space Rover": `
    <rect x="22" y="34" width="56" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="32" cy="74" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="74" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="68" cy="74" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M32,62 V74 M50,62 V74 M68,62 V74" stroke="currentColor" stroke-width="4"/>
    <path d="M66,34 L74,18 H84" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="84" cy="18" r="3" fill="currentColor"/>
  `,
  "Space Station": `
    <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M12,50 H88 M50,12 V88" stroke="currentColor" stroke-width="4"/>
    <rect x="6" y="38" width="12" height="24" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="82" y="38" width="12" height="24" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="38" y="6" width="24" height="12" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="38" y="82" width="24" height="12" fill="none" stroke="currentColor" stroke-width="3"/>
  `,
  "Astronaut": `
    <circle cx="50" cy="30" r="18" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="36" y="24" width="28" height="12" rx="4" fill="currentColor"/>
    <rect x="26" y="52" width="48" height="34" rx="10" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="42" y="60" width="16" height="10" rx="1" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="34" cy="18" r="2" fill="currentColor"/>
  `,
  "Space Telescope": `
    <polygon points="26,44 74,26 80,42 32,60" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M50,42 L34,76 H66 L50,42" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="77" cy="34" r="4" fill="currentColor"/>
    <line x1="26" y1="44" x2="16" y2="48" stroke="currentColor" stroke-width="3"/>
  `,
  "Mars Rover": `
    <rect x="24" y="36" width="52" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="34" cy="72" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="66" cy="72" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M34,60 V72 M66,60 V72" stroke="currentColor" stroke-width="3"/>
    <path d="M36,36 L24,20 H12" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="12" cy="20" r="4" fill="currentColor"/>
  `,
  "Satellite Dish": `
    <path d="M16,46 C16,22 36,12 50,12 C64,12 84,22 84,46 C84,54 74,62 50,62 C26,62 16,54 16,46 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M50,62 L38,88 H62 L50,62" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <line x1="50" y1="42" x2="50" y2="8" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <polygon points="46,8 54,8 50,2" fill="currentColor"/>
  `,

  // SET 15: DRONES AND AVIATION
  "Camera Drone": `
    <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="50" r="4" fill="currentColor"/>
    <path d="M38,38 L18,18 M62,38 L82,18 M38,62 L18,82 M62,62 L82,82" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <circle cx="18" cy="18" r="6" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="82" cy="18" r="6" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="18" cy="82" r="6" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="82" cy="82" r="6" fill="none" stroke="currentColor" stroke-width="3"/>
  `,
  "Racing Drone": `
    <rect x="36" y="36" width="28" height="28" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M22,22 L36,36 M78,22 L64,36 M22,78 L36,64 M78,78 L64,64" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="12" y1="22" x2="32" y2="22" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="68" y1="22" x2="88" y2="22" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="12" y1="78" x2="32" y2="78" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="68" y1="78" x2="88" y2="78" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  `,
  "Delivery Drone": `
    <circle cx="50" cy="38" r="12" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M26,26 L38,34 M74,26 L62,34" stroke="currentColor" stroke-width="4"/>
    <circle cx="26" cy="26" r="5" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="74" cy="26" r="5" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="38" y="58" width="24" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M44,50 V58 M56,50 V58" stroke="currentColor" stroke-width="3"/>
  `,
  "Military Drone": `
    <polygon points="50,16 12,34 32,46 50,38 68,46 88,34" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M50,38 V82 L34,86 M50,82 L66,86" stroke="currentColor" stroke-width="3" fill="none" stroke-linejoin="round"/>
    <circle cx="50" cy="54" r="5" fill="none" stroke="currentColor" stroke-width="3"/>
  `,
  "Drone Controller": `
    <rect x="18" y="32" width="64" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="34" cy="55" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="34" cy="55" r="2" fill="currentColor"/>
    <circle cx="66" cy="55" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="66" cy="55" r="2" fill="currentColor"/>
    <rect x="42" y="16" width="16" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="50" y1="32" x2="50" y2="16" stroke="currentColor" stroke-width="3"/>
  `,
  "Quadcopter": `
    <rect x="42" y="42" width="16" height="16" rx="4" fill="currentColor"/>
    <path d="M26,26 L42,42 M74,26 L58,42 M26,74 L42,58 M74,74 L58,58" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="26" cy="26" rx="12" ry="4" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <ellipse cx="74" cy="26" rx="12" ry="4" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <ellipse cx="26" cy="74" rx="12" ry="4" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <ellipse cx="74" cy="74" rx="12" ry="4" fill="none" stroke="currentColor" stroke-width="2.5"/>
  `,
  "Drone Propeller": `
    <circle cx="50" cy="50" r="10" fill="currentColor"/>
    <path d="M50,45 C50,20 65,12 60,35 C55,50 50,50 50,45 Z" fill="currentColor"/>
    <path d="M50,55 C50,80 35,88 40,65 C45,50 50,50 50,55 Z" fill="currentColor"/>
    <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 8"/>
  `,
  "Autonomous Flying Drone": `
    <ellipse cx="50" cy="46" rx="36" ry="16" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="38" y="46" width="24" height="24" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="58" r="3" fill="currentColor"/>
    <path d="M30,38 L16,24 M70,38 L84,24" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <line x1="8" y1="24" x2="24" y2="24" stroke="currentColor" stroke-width="3"/>
    <line x1="76" y1="24" x2="92" y2="24" stroke="currentColor" stroke-width="3"/>
  `,

  // SET 16: DATA AND CLOUD
  "Cloud Computing": `
    <path d="M26,66 C18,66 12,60 12,52 C12,45 18,38 26,38 C28,26 40,18 52,18 C64,18 74,28 76,40 C84,42 90,48 90,56 C90,64 84,70 76,70 H26 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M40,54 L50,44 L60,54 M50,44 V64" stroke="currentColor" stroke-width="3" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
  `,
  "Data Center": `
    <rect x="14" y="14" width="32" height="72" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="54" y="14" width="32" height="72" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="20" y1="28" x2="40" y2="28" stroke="currentColor" stroke-width="3"/>
    <line x1="20" y1="42" x2="40" y2="42" stroke="currentColor" stroke-width="3"/>
    <line x1="20" y1="56" x2="40" y2="56" stroke="currentColor" stroke-width="3"/>
    <line x1="60" y1="28" x2="80" y2="28" stroke="currentColor" stroke-width="3"/>
    <line x1="60" y1="42" x2="80" y2="42" stroke="currentColor" stroke-width="3"/>
    <line x1="60" y1="56" x2="80" y2="56" stroke="currentColor" stroke-width="3"/>
    <circle cx="24" cy="74" r="2" fill="currentColor"/><circle cx="34" cy="74" r="2" fill="currentColor"/>
    <circle cx="64" cy="74" r="2" fill="currentColor"/><circle cx="74" cy="74" r="2" fill="currentColor"/>
  `,
  "Database": `
    <ellipse cx="50" cy="24" rx="30" ry="12" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M20,24 V46 C20,53 34,58 50,58 C66,58 80,53 80,46 V24" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M20,46 V68 C20,75 34,80 50,80 C66,80 80,75 80,68 V46" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <ellipse cx="50" cy="46" rx="30" ry="10" fill="none" stroke="currentColor" stroke-dasharray="4 4" stroke-width="2"/>
    <ellipse cx="50" cy="68" rx="30" ry="10" fill="none" stroke="currentColor" stroke-dasharray="4 4" stroke-width="2"/>
  `,
  "Server Rack": `
    <rect x="18" y="14" width="64" height="72" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="18" y1="38" x2="82" y2="38" stroke="currentColor" stroke-width="3"/>
    <line x1="18" y1="62" x2="82" y2="62" stroke="currentColor" stroke-width="3"/>
    <circle cx="28" cy="26" r="3" fill="currentColor"/><circle cx="38" cy="26" r="3" fill="currentColor"/>
    <circle cx="28" cy="50" r="3" fill="currentColor"/><circle cx="38" cy="50" r="3" fill="currentColor"/>
    <circle cx="28" cy="74" r="3" fill="currentColor"/><circle cx="38" cy="74" r="3" fill="currentColor"/>
    <rect x="52" y="22" width="22" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="2"/>
    <rect x="52" y="46" width="22" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="2"/>
    <rect x="52" y="70" width="22" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="2"/>
  `,
  "Data Analytics": `
    <rect x="12" y="18" width="76" height="52" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M12,78 H88" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M22,60 L38,40 L54,48 L76,28" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="22" cy="60" r="3" fill="currentColor"/>
    <circle cx="38" cy="40" r="3" fill="currentColor"/>
    <circle cx="54" cy="48" r="3" fill="currentColor"/>
    <circle cx="76" cy="28" r="4" fill="currentColor"/>
  `,
  "Big Data": `
    <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="18" cy="26" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="82" cy="26" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="18" cy="74" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="82" cy="74" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="30" y1="36" x2="40" y2="42" stroke="currentColor" stroke-width="3"/>
    <line x1="70" y1="36" x2="60" y2="42" stroke="currentColor" stroke-width="3"/>
    <line x1="30" y1="64" x2="40" y2="58" stroke="currentColor" stroke-width="3"/>
    <line x1="70" y1="64" x2="60" y2="58" stroke="currentColor" stroke-width="3"/>
  `,
  "Cloud Storage": `
    <path d="M26,52 C18,52 12,46 12,38 C12,31 18,24 26,24 C28,12 40,4 52,4 C64,4 74,14 76,26 C84,28 90,34 90,42 C90,50 84,56 76,56 H26 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <rect x="32" y="62" width="36" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="42" cy="74" r="2" fill="currentColor"/><circle cx="50" cy="74" r="2" fill="currentColor"/><circle cx="58" cy="74" r="2" fill="currentColor"/>
    <line x1="50" y1="56" x2="50" y2="62" stroke="currentColor" stroke-width="3"/>
  `,
  "Data Visualization": `
    <rect x="14" y="14" width="72" height="72" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="24" y="54" width="10" height="22" fill="currentColor"/>
    <rect x="40" y="34" width="10" height="42" fill="currentColor"/>
    <rect x="56" y="44" width="10" height="32" fill="currentColor"/>
    <rect x="72" y="24" width="10" height="52" fill="currentColor"/>
    <path d="M24,76 H82" stroke="currentColor" stroke-width="3"/>
  `,

  // SET 17: DIGITAL DEVICES
  "Digital Camera": `
    <rect x="14" y="26" width="72" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M34,26 V18 H66 V26" stroke="currentColor" stroke-width="4" fill="none" stroke-linejoin="round"/>
    <circle cx="50" cy="51" r="18" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="51" r="8" fill="currentColor"/>
    <circle cx="74" cy="38" r="3" fill="currentColor"/>
  `,
  "Headphones": `
    <path d="M16,54 V46 C16,27 31,12 50,12 C69,12 84,27 84,46 V54" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <rect x="10" y="54" width="16" height="24" rx="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="74" y="54" width="16" height="24" rx="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M18,78 C18,84 26,84 30,78" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M82,78 C82,84 74,84 70,78" fill="none" stroke="currentColor" stroke-width="3"/>
  `,
  "Wireless Earbuds": `
    <rect x="22" y="16" width="56" height="48" rx="14" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M22,36 H78" stroke="currentColor" stroke-width="3"/>
    <rect x="32" y="48" width="10" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <rect x="58" y="48" width="10" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <circle cx="37" cy="56" r="3" fill="currentColor"/>
    <circle cx="63" cy="56" r="3" fill="currentColor"/>
  `,
  "Smart Speaker": `
    <rect x="28" y="16" width="44" height="68" rx="22" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M28,46 H72 M28,54 H72 M28,62 H72" stroke="currentColor" stroke-width="2" stroke-dasharray="1 3"/>
    <path d="M42,28 C46,24 54,24 58,28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <circle cx="50" cy="74" r="3" fill="currentColor"/>
  `,
  "E-Reader": `
    <rect x="20" y="12" width="60" height="76" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="26" y="18" width="48" height="52" fill="currentColor" fill-opacity="0.15"/>
    <line x1="32" y1="28" x2="68" y2="28" stroke="currentColor" stroke-width="3"/>
    <line x1="32" y1="38" x2="68" y2="38" stroke="currentColor" stroke-width="3"/>
    <line x1="32" y1="48" x2="56" y2="48" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="78" r="3.5" fill="currentColor"/>
  `,
  "Projector": `
    <rect x="12" y="32" width="76" height="36" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="70" cy="50" r="12" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="70" cy="50" r="5" fill="currentColor"/>
    <line x1="20" y1="42" x2="48" y2="42" stroke="currentColor" stroke-width="3"/>
    <line x1="20" y1="50" x2="40" y2="50" stroke="currentColor" stroke-width="3"/>
    <line x1="20" y1="58" x2="48" y2="58" stroke="currentColor" stroke-width="3"/>
    <path d="M22,68 L16,80 M78,68 L84,80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  `,
  "VR Controller": `
    <rect x="42" y="42" width="16" height="42" rx="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="24" r="16" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="24" r="6" fill="currentColor"/>
    <circle cx="50" cy="52" r="3" fill="currentColor"/>
  `,
  "Digital Stylus": `
    <path d="M78,16 L84,22 L36,70 L22,78 L30,64 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <line x1="68" y1="26" x2="74" y2="32" stroke="currentColor" stroke-width="3"/>
    <path d="M22,78 L26,74" stroke="currentColor" stroke-width="4"/>
    <line x1="66" y1="12" x2="88" y2="34" stroke="currentColor" stroke-width="2" stroke-dasharray="2 2"/>
  `,

  // SET 18: MODERN TRANSPORTATION
  "Electric Car": `
    <rect x="18" y="38" width="64" height="32" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M26,38 L34,22 H66 L74,38" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="32" cy="70" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="68" cy="70" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M44,48 L56,48 L46,60 L58,60" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
  `,
  "Electric Scooter": `
    <path d="M22,22 H32 L44,74 H78" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="44" cy="78" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="78" cy="78" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="52" y="64" width="16" height="8" rx="2" fill="currentColor"/>
    <path d="M22,22 V14 M22,14 H16" stroke="currentColor" stroke-width="3"/>
  `,
  "Electric Bike": `
    <circle cx="28" cy="66" r="14" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="72" cy="66" r="14" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M28,66 L46,42 H70 L72,66 M46,42 L52,66 M28,66 H52 M60,30 H70" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>
    <rect x="42" y="52" width="14" height="10" fill="currentColor"/>
  `,
  "Electric Vehicle": `
    <rect x="14" y="36" width="54" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M22,36 L30,20 H52 L60,36" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="28" cy="70" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="54" cy="70" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M74,42 C82,42 86,52 86,52 L74,62" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="86" cy="52" r="2" fill="currentColor"/>
  `,
  "EV Charging Station": `
    <rect x="22" y="16" width="36" height="68" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M30,34 L46,34 L34,50 L50,50" fill="none" stroke="#eab308" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="M58,40 C68,40 70,50 70,58 V72 L78,76" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="74" y="74" width="10" height="12" fill="currentColor"/>
  `,
  "Autonomous Car": `
    <rect x="16" y="40" width="68" height="32" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M24,40 L32,24 H68 L76,40" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="28" cy="72" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="72" cy="72" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="16" r="6" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="50" y1="22" x2="50" y2="28" stroke="currentColor" stroke-width="3"/>
  `,
  "Electric Bus": `
    <rect x="14" y="20" width="72" height="54" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <line x1="14" y1="50" x2="86" y2="50" stroke="currentColor" stroke-width="4"/>
    <rect x="22" y="28" width="16" height="14" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="46" y="28" width="16" height="14" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="70" y="28" width="16" height="14" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="30" cy="74" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="70" cy="74" r="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M42,12 L50,20 L58,12" stroke="currentColor" stroke-width="3" fill="none"/>
  `,
  "Maglev Train": `
    <path d="M12,50 C12,30 30,24 64,24 H88 V58 H24 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <rect x="36" y="32" width="16" height="12" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="60" y="32" width="16" height="12" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="8" y1="68" x2="92" y2="68" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="18" y1="62" x2="82" y2="62" stroke="currentColor" stroke-width="3" stroke-dasharray="6 4"/>
  `,

  // SET 19: MEDICAL TECHNOLOGY
  "MRI Machine": `
    <rect x="14" y="14" width="72" height="72" rx="36" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="3"/>
    <rect x="22" y="44" width="56" height="12" rx="2" fill="currentColor"/>
    <line x1="22" y1="56" x2="78" y2="56" stroke="currentColor" stroke-width="2"/>
  `,
  "X-Ray Machine": `
    <rect x="20" y="14" width="60" height="72" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M30,34 L70,58 M70,34 L30,58" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="50" y1="24" x2="50" y2="68" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="30" y1="46" x2="70" y2="46" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  `,
  "Robotic Surgery System": `
    <rect x="20" y="76" width="60" height="10" fill="currentColor"/>
    <path d="M38,76 V42 L24,24 L34,16" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="M62,76 V42 L76,24 L66,16" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="50" cy="30" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="50" cy="30" r="2" fill="currentColor"/>
  `,
  "Digital Thermometer": `
    <path d="M36,78 L68,46 C74,40 74,30 68,24 C62,18 52,18 46,24 L14,56 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <rect x="42" y="44" width="14" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="2" transform="rotate(45 49 48)"/>
    <text x="36" y="66" font-family="monospace" font-size="8" fill="currentColor">36.6</text>
    <path d="M14,56 L10,64 L18,60 Z" fill="currentColor"/>
  `,
  "Heart Monitor": `
    <rect x="12" y="20" width="76" height="52" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M12,48 H28 L36,26 L46,66 L56,42 L62,48 H88" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="76" cy="32" r="3" fill="currentColor"/>
  `,
  "Prosthetic Arm": `
    <path d="M16,74 L26,44 L56,36 L84,38" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="26" cy="44" r="5" fill="currentColor"/>
    <circle cx="56" cy="36" r="5" fill="currentColor"/>
    <path d="M84,32 C88,32 88,44 84,44 Z" fill="currentColor"/>
    <line x1="40" y1="40" x2="48" y2="40" stroke="currentColor" stroke-width="2"/>
    <line x1="68" y1="37" x2="76" y2="37" stroke="currentColor" stroke-width="2"/>
  `,
  "Medical Robot": `
    <rect x="26" y="28" width="48" height="42" rx="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="40" cy="42" r="4" fill="currentColor"/>
    <circle cx="60" cy="42" r="4" fill="currentColor"/>
    <path d="M42,58 H58" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <circle cx="50" cy="80" r="10" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="80" r="3" fill="currentColor"/>
    <path d="M50,14 V28" stroke="currentColor" stroke-width="3"/>
    <path d="M42,14 H58" stroke="currentColor" stroke-width="3"/>
  `,
  "Ultrasound Machine": `
    <rect x="22" y="16" width="56" height="44" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="50" cy="38" r="14" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M38,38 Q50,48 62,38" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <rect x="22" y="68" width="56" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="32" cy="76" r="2.5" fill="currentColor"/><circle cx="44" cy="76" r="2.5" fill="currentColor"/><circle cx="56" cy="76" r="2.5" fill="currentColor"/>
  `,

  // SET 20: INTERNET AND DIGITAL WORLD
  "Internet Globe": `
    <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" stroke-width="4"/>
    <ellipse cx="50" cy="50" rx="36" ry="14" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <ellipse cx="50" cy="50" rx="14" ry="36" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <line x1="14" y1="50" x2="86" y2="50" stroke="currentColor" stroke-width="3.5"/>
    <line x1="50" y1="14" x2="50" y2="86" stroke="currentColor" stroke-width="3.5"/>
  `,
  "Search Engine": `
    <rect x="10" y="22" width="80" height="56" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="18" y="32" width="64" height="12" rx="4" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="26" cy="38" r="3" fill="currentColor"/>
    <circle cx="46" cy="58" r="10" fill="none" stroke="currentColor" stroke-width="4.5"/>
    <line x1="53" y1="65" x2="66" y2="78" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
  `,
  "Social Media": `
    <path d="M32,38 C32,28 42,28 50,28 C58,28 68,28 68,38 C68,48 50,52 50,62" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="50" cy="74" r="5" fill="currentColor"/>
    <circle cx="18" cy="22" r="6" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="82" cy="22" r="6" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="18" cy="78" r="6" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="82" cy="78" r="6" fill="none" stroke="currentColor" stroke-width="3"/>
    <line x1="24" y1="26" x2="42" y2="38" stroke="currentColor" stroke-width="2"/>
    <line x1="76" y1="26" x2="58" y2="38" stroke="currentColor" stroke-width="2"/>
  `,
  "Video Streaming": `
    <rect x="12" y="20" width="76" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="4"/>
    <polygon points="40,36 68,50 40,64" fill="currentColor"/>
    <path d="M12,30 H88" stroke="currentColor" stroke-width="2" stroke-dasharray="2 3"/>
  `,
  "Email": `
    <rect x="14" y="24" width="72" height="52" rx="6" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M14,28 L50,56 L86,28" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="M14,72 L38,50 M86,72 L62,50" stroke="currentColor" stroke-width="3"/>
  `,
  "QR Code": `
    <rect x="14" y="14" width="72" height="72" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="22" y="22" width="20" height="20" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="28" y="28" width="8" height="8" fill="currentColor"/>
    <rect x="58" y="22" width="20" height="20" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="64" y="28" width="8" height="8" fill="currentColor"/>
    <rect x="22" y="58" width="20" height="20" fill="none" stroke="currentColor" stroke-width="4"/>
    <rect x="28" y="64" width="8" height="8" fill="currentColor"/>
    <rect x="58" y="58" width="8" height="8" fill="currentColor"/>
    <rect x="70" y="70" width="8" height="8" fill="currentColor"/>
    <rect x="58" y="70" width="8" height="8" fill="currentColor"/>
    <rect x="70" y="58" width="8" height="8" fill="currentColor"/>
  `,
  "Blockchain": `
    <rect x="12" y="12" width="22" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <rect x="66" y="12" width="22" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <rect x="39" y="39" width="22" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <rect x="12" y="66" width="22" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <rect x="66" y="66" width="22" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="3.5"/>
    <line x1="34" y1="23" x2="39" y2="40" stroke="currentColor" stroke-width="2.5"/>
    <line x1="66" y1="23" x2="61" y2="40" stroke="currentColor" stroke-width="2.5"/>
    <line x1="34" y1="77" x2="39" y2="60" stroke="currentColor" stroke-width="2.5"/>
    <line x1="66" y1="77" x2="61" y2="60" stroke="currentColor" stroke-width="2.5"/>
  `,
  "Cryptocurrency": `
    <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" stroke-width="4"/>
    <text x="38" y="61" font-family="'Space Grotesk', Impact, sans-serif" font-weight="900" font-size="34" fill="currentColor">B</text>
    <line x1="44" y1="10" x2="44" y2="20" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="54" y1="10" x2="54" y2="20" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="44" y1="80" x2="44" y2="90" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <line x1="54" y1="80" x2="54" y2="90" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  `
};

/**
 * Returns a complete responsive SVG markup string with styled gradients, glow,
 * and high-tech aesthetics for a given technology item.
 * @param {string} itemName The name of the technology item (e.g., "Laptop")
 * @param {number} roundIndex The current round number (1-20) to determine the color theme
 * @returns {string} The HTML string representing the SVG
 */
function getTechIconSvg(itemName, roundIndex) {
  const innerPaths = SVG_ICONS[itemName];
  if (!innerPaths) {
    // Fallback if icon is missing or typo occurs (displays a placeholder gear)
    return `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="color: #6b7280;">
        <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" stroke-width="4"/>
        <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" stroke-width="4"/>
        <path d="M50,14 V26 M50,74 V86 M14,50 H26 M74,50 H86" stroke="currentColor" stroke-width="4"/>
      </svg>
    `;
  }

  const theme = CATEGORY_THEMES[roundIndex] || CATEGORY_THEMES[1];
  const gradId = `grad_${itemName.replace(/\s+/g, '_')}_${roundIndex}`;

  return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" class="tech-icon-svg" style="color: ${theme.primary}; filter: drop-shadow(0 0 8px ${theme.bg});">
      <defs>
        <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${theme.primary}" />
          <stop offset="100%" stop-color="${theme.secondary}" />
        </linearGradient>
      </defs>
      <!-- Icon body -->
      <g stroke="url(#${gradId})">
        ${innerPaths}
      </g>
    </svg>
  `;
}
