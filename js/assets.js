/**
 * Restructured Memory Game - Assets and Sets Configuration
 * Supports 5 rounds: Emojis/Emotions, Animals, Transport, Food, and Mixed Challenge.
 */

// Category theme definitions mapping category index to colors
const CATEGORY_THEMES = {
  1: { name: "Emojis & Emotions", primary: "#f43f5e", secondary: "#f59e0b", bg: "rgba(244, 63, 94, 0.1)" },
  2: { name: "Animals", primary: "#10b981", secondary: "#059669", bg: "rgba(16, 185, 129, 0.1)" },
  3: { name: "Modes of Transport", primary: "#06b6d4", secondary: "#3b82f6", bg: "rgba(6, 182, 212, 0.1)" },
  4: { name: "Food Items", primary: "#ec4899", secondary: "#f43f5e", bg: "rgba(236, 72, 153, 0.1)" },
  5: { name: "Mixed Challenge", primary: "#8b5cf6", secondary: "#d946ef", bg: "rgba(139, 92, 246, 0.1)" }
};

// 5 Predefined Sets of 8 items each
const GAME_SETS = [
  {
    id: 1,
    category: "Emojis & Emotions",
    items: ["laughing", "crying", "angry", "cool", "loving", "surprised", "sleepy", "thinking"]
  },
  {
    id: 2,
    category: "Animals",
    items: ["Tiger", "Lion", "Elephant", "Panda", "Rabbit", "Monkey", "Fox", "Koala"]
  },
  {
    id: 3,
    category: "Modes of Transport",
    items: ["Car", "Airplane", "Train", "Motorcycle", "Bicycle", "Ship", "Helicopter", "Bus"]
  },
  {
    id: 4,
    category: "Food Items",
    items: ["Pizza", "Burger", "Pasta", "Sushi", "Salad", "Ice Cream", "Cake", "Taco"]
  },
  {
    id: 5,
    category: "Mixed Challenge",
    items: ["cool", "Tiger", "Car", "Pizza", "surprised", "Lion", "Airplane", "Burger"]
  }
];

// Mapping items to local high-quality image paths (PNG for 3D emojis, JPG for realistic photos)
const IMAGE_PATHS = {
  // Emotions (Microsoft 3D static emojis)
  "laughing": "images/emotions/laughing.png",
  "crying": "images/emotions/crying.png",
  "angry": "images/emotions/angry.png",
  "cool": "images/emotions/cool.png",
  "loving": "images/emotions/loving.png",
  "surprised": "images/emotions/surprised.png",
  "sleepy": "images/emotions/sleepy.png",
  "thinking": "images/emotions/thinking.png",
  // Animals
  "Tiger": "images/animals/tiger.jpg",
  "Lion": "images/animals/lion.jpg",
  "Elephant": "images/animals/elephant.jpg",
  "Panda": "images/animals/panda.jpg",
  "Rabbit": "images/animals/rabbit.jpg",
  "Monkey": "images/animals/monkey.jpg",
  "Fox": "images/animals/fox.jpg",
  "Koala": "images/animals/koala.jpg",
  // Transport
  "Car": "images/transport/car.jpg",
  "Airplane": "images/transport/airplane.jpg",
  "Train": "images/transport/train.jpg",
  "Motorcycle": "images/transport/motorcycle.jpg",
  "Bicycle": "images/transport/bicycle.jpg",
  "Ship": "images/transport/ship.jpg",
  "Helicopter": "images/transport/helicopter.jpg",
  "Bus": "images/transport/bus.jpg",
  // Food
  "Pizza": "images/food/pizza.jpg",
  "Burger": "images/food/burger.jpg",
  "Pasta": "images/food/pasta.jpg",
  "Sushi": "images/food/sushi.jpg",
  "Salad": "images/food/salad.jpg",
  "Ice Cream": "images/food/icecream.jpg",
  "Cake": "images/food/cake.jpg",
  "Taco": "images/food/taco.jpg"
};

/**
 * Returns HTML for the image of a given item.
 * Styles emojis as floating 3D icons, and realistic photos as full edge-to-edge covers.
 */
function getTechIconSvg(itemName, roundIndex) {
  const src = IMAGE_PATHS[itemName];
  if (!src) {
    // Fallback if image is missing
    return `
      <div style="color: var(--text-muted); font-size: 0.75rem; text-align: center;">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="48" height="48" style="color: #6b7280; margin: 0 auto 4px auto;">
          <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" stroke-width="4"/>
          <path d="M50,30 V55 M50,65 H50.01" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
        </svg>
        <div>Image Missing</div>
      </div>
    `;
  }

  // Check if it is an emoji icon (stored under images/emotions/)
  const isEmoji = src.includes('images/emotions/');
  
  if (isEmoji) {
    // Float emojis with padding and contain object-fit
    return `
      <img src="${src}" alt="${itemName}" class="card-photo emoji-icon" style="width: 100%; height: 100%; object-fit: contain; padding: 12px; box-sizing: border-box;" />
    `;
  } else {
    // Fill photo cards completely edge-to-edge
    return `
      <img src="${src}" alt="${itemName}" class="card-photo realistic-photo" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);" />
    `;
  }
}
