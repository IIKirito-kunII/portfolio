export type ThemeChoice = "classic" | "modern";

export interface VariantOption {
  key: ThemeChoice;
  title: string;
  description: string;
}

export interface ThemeVariant {
  id: number;
  headline: string;
  options: VariantOption[];
  footer: string;
}

export const THEME_VARIANTS: ThemeVariant[] = [
  {
    id: 1,
    headline: "Before we begin… what kind of person are you?",
    options: [
      {
        key: "classic",
        title: "🕰️ Nostalgic Personality",
        description:
          "I cherish the old, the classic, the timeless.\nThere’s a charm in familiar things — simple, warm, and imperfect in the most beautiful way.",
      },
      {
        key: "modern",
        title: "⚡ Modern Personality",
        description:
          "I prefer clean, minimal, and modern experiences.\nThere’s a calm clarity in simplicity — smooth lines, gentle colors, and organized design.",
      },
    ],
    footer: "Choose what feels right to you.",
  },

  {
    id: 2,
    headline: "Choose the experience that matches your taste.",
    options: [
      {
        key: "classic",
        title: "📐 The Classic Mindset",
        description:
          "I find comfort in things that hold history and heart.\nThere’s a quiet elegance in timeless design — steady, familiar, and filled with gentle nostalgia.",
      },
      {
        key: "modern",
        title: "🧩 The Modern Mindset",
        description:
          "I’m drawn to neat, polished, and present-day aesthetics.\nThere’s a special beauty in modern clarity — clean spacing, soft balance, and effortless usability.",
      },
    ],
    footer: "Your choice sets the tone.",
  },

  {
    id: 3,
    headline: "Every person connects differently with design.",
    options: [
      {
        key: "classic",
        title: "📜 The Timeless Soul",
        description:
          "I appreciate designs that remind me of where we’ve come from.\nThere’s a nostalgic warmth in meaningful design — memory-filled, steady, and quietly comforting.",
      },
      {
        key: "modern",
        title: "🌐 The Contemporary Soul",
        description:
          "I connect with fresh, modern, and uncluttered visuals.\nThere’s a smooth ease in present-day design — clear, uncluttered, and crafted for natural flow.",
      },
    ],
    footer: "Pick the one that speaks to you.",
  },

  {
    id: 4,
    headline: "What do you connect with more?",
    options: [
      {
        key: "classic",
        title: "⬛ Sharp Edges",
        description:
          "I prefer bold, defined, and structured visuals.\nThere’s a strong clarity in precision — crisp lines, firm shapes, and confident contrast.",
      },
      {
        key: "modern",
        title: "◯ Sleek Designs",
        description:
          "I’m drawn to smooth, flowing, and refined visuals.\nThere’s a quiet elegance in seamless transitions — soft curves, subtle motion, and effortless harmony.",
      },
    ],
    footer: "Choose what feels right to you.",
  },
];
