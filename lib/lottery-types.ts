// Lottery types configuration
export interface PrizeTier {
  matches: number;
  name: string;
}

export interface LotteryType {
  id: string;
  name: string;
  numbersCount: number; // How many numbers to pick
  maxNumber: number; // Maximum number (1-60 for Mega-Sena, etc.)
  color: string; // Theme color
  icon: string; // Emoji icon
  prizeTiers: PrizeTier[]; // Prize tiers (sorted by matches descending)
}

export const LOTTERY_TYPES: LotteryType[] = [
  {
    id: "mega-sena",
    name: "Mega-Sena",
    numbersCount: 6,
    maxNumber: 60,
    color: "#209869",
    icon: "🍀",
    prizeTiers: [
      { matches: 6, name: "Sena" },
      { matches: 5, name: "Quina" },
      { matches: 4, name: "Quadra" },
    ],
  },
  {
    id: "mega-virada",
    name: "Mega da Virada",
    numbersCount: 6,
    maxNumber: 60,
    color: "#16a34a",
    icon: "🎆",
    prizeTiers: [
      { matches: 6, name: "Sena" },
      { matches: 5, name: "Quina" },
      { matches: 4, name: "Quadra" },
    ],
  },
  {
    id: "lotofacil",
    name: "Lotofácil",
    numbersCount: 15,
    maxNumber: 25,
    color: "#8b5cf6",
    icon: "🎯",
    prizeTiers: [
      { matches: 15, name: "15 acertos" },
      { matches: 14, name: "14 acertos" },
      { matches: 13, name: "13 acertos" },
      { matches: 12, name: "12 acertos" },
      { matches: 11, name: "11 acertos" },
    ],
  },
  {
    id: "quina",
    name: "Quina",
    numbersCount: 5,
    maxNumber: 80,
    color: "#3b82f6",
    icon: "⭐",
    prizeTiers: [
      { matches: 5, name: "Quina" },
      { matches: 4, name: "Quadra" },
      { matches: 3, name: "Terno" },
      { matches: 2, name: "Duque" },
    ],
  },
  {
    id: "lotomania",
    name: "Lotomania",
    numbersCount: 50,
    maxNumber: 100,
    color: "#f97316",
    icon: "🎪",
    prizeTiers: [
      { matches: 20, name: "20 acertos" },
      { matches: 19, name: "19 acertos" },
      { matches: 18, name: "18 acertos" },
      { matches: 17, name: "17 acertos" },
      { matches: 16, name: "16 acertos" },
      { matches: 15, name: "15 acertos" },
      { matches: 0, name: "0 acertos" },
    ],
  },
  {
    id: "dupla-sena",
    name: "Dupla Sena",
    numbersCount: 6,
    maxNumber: 50,
    color: "#ef4444",
    icon: "🎲",
    prizeTiers: [
      { matches: 6, name: "Sena" },
      { matches: 5, name: "Quina" },
      { matches: 4, name: "Quadra" },
      { matches: 3, name: "Terno" },
    ],
  },
  {
    id: "dia-de-sorte",
    name: "Dia de Sorte",
    numbersCount: 7,
    maxNumber: 31,
    color: "#eab308",
    icon: "☀️",
    prizeTiers: [
      { matches: 7, name: "7 acertos" },
      { matches: 6, name: "6 acertos" },
      { matches: 5, name: "5 acertos" },
      { matches: 4, name: "4 acertos" },
    ],
  },
  {
    id: "super-sete",
    name: "Super Sete",
    numbersCount: 7,
    maxNumber: 9,
    color: "#06b6d4",
    icon: "7️⃣",
    prizeTiers: [
      { matches: 7, name: "7 acertos" },
      { matches: 6, name: "6 acertos" },
      { matches: 5, name: "5 acertos" },
      { matches: 4, name: "4 acertos" },
      { matches: 3, name: "3 acertos" },
    ],
  },
  {
    id: "mais-milionaria",
    name: "+Milionária",
    numbersCount: 6,
    maxNumber: 50,
    color: "#ec4899",
    icon: "💎",
    prizeTiers: [
      { matches: 6, name: "6 acertos" },
      { matches: 5, name: "5 acertos" },
      { matches: 4, name: "4 acertos" },
      { matches: 3, name: "3 acertos" },
      { matches: 2, name: "2 acertos" },
    ],
  },
  {
    id: "personalizado",
    name: "Personalizado",
    numbersCount: 6,
    maxNumber: 60,
    color: "#6b7280",
    icon: "⚙️",
    prizeTiers: [
      { matches: 6, name: "6 acertos" },
      { matches: 5, name: "5 acertos" },
      { matches: 4, name: "4 acertos" },
    ],
  },
];

export function getLotteryType(id: string): LotteryType {
  return LOTTERY_TYPES.find((l) => l.id === id) || LOTTERY_TYPES[0];
}

