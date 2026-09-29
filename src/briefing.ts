export const CORE_MODES = [
  {
    id: "remember",
    name: "Remember",
    line: "The graph keeps what happened. A missed step is not thrown away.",
  },
  {
    id: "guard",
    name: "Guard",
    line: "She will not run a dangerous action, and she will not pretend to own your real machine.",
  },
  {
    id: "twin",
    name: "Twin",
    line: "A click is checked against the step before she calls it done.",
  },
  {
    id: "patch",
    name: "Patch",
    line: "If you miss, she writes the miss down and teaches that control again.",
  },
  {
    id: "voice",
    name: "Voice",
    line: "Speech sits on top of the membrane. Male or female. English. Caring, and firm when you drift.",
  },
] as const;

export const CARE_MODES = [
  {
    id: "everyday",
    name: "Everyday",
    line: "A normal class. She explains, waits, and corrects.",
  },
  {
    id: "elder",
    name: "Elder",
    line: "Larger type. One action. She does not rush the step.",
  },
  {
    id: "guardian",
    name: "Guardian",
    line: "Someone can sit with the lesson. The learner sees that. No hidden listening.",
  },
] as const;
