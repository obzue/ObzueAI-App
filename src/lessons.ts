export type Gender = "female" | "male";

export type AccentId =
  | "us"
  | "uk"
  | "south"
  | "indian"
  | "nigerian"
  | "jamaican"
  | "trinidadian"
  | "barbadian"
  | "guyanese";

export const ACCENTS: { id: AccentId; label: string; region: string; female: string; male: string }[] = [
  { id: "us", label: "Clear English", region: "Not a regional accent", female: "luna", male: "rex" },
  { id: "uk", label: "British English", region: "Documented: Eve, Leo", female: "eve", male: "leo" },
  { id: "south", label: "Southern US", region: "Not in the engine", female: "luna", male: "rex" },
  { id: "indian", label: "Indian English", region: "Documented male: Naksh", female: "luna", male: "naksh" },
  { id: "nigerian", label: "Nigerian English", region: "Not in the engine", female: "luna", male: "rex" },
  { id: "jamaican", label: "Jamaican English", region: "Not in the engine", female: "luna", male: "rex" },
  { id: "trinidadian", label: "Trinidadian English", region: "Not in the engine", female: "luna", male: "rex" },
  { id: "barbadian", label: "Barbadian English", region: "Not in the engine", female: "luna", male: "rex" },
  { id: "guyanese", label: "Guyanese English", region: "Not in the engine", female: "luna", male: "rex" },
];

export function voiceFor(gender: Gender, accent: AccentId) {
  const row = ACCENTS.find((a) => a.id === accent) ?? ACCENTS[0];
  return gender === "female" ? row.female : row.male;
}

export type LessonId = "software" | "web" | "book";

export type Beat = {
  id: string;
  say: string;
  firm: string;
  target: string;
};

export const LESSONS: { id: LessonId; title: string; opens: string; beats: Beat[] }[] = [
  {
    id: "software",
    title: "Open software",
    opens: "Field Notes, a practice app on this desk.",
    beats: [
      {
        id: "open",
        say: "I am opening Field Notes for you. Your turn is the Open button. I will not touch anything outside this desk.",
        firm: "That is not Open. Stay with me. The button says Open Field Notes.",
        target: "open",
      },
      {
        id: "file",
        say: "The app is up. Software hides actions in a menu. Click File.",
        firm: "Not yet. File is the menu. Click that word.",
        target: "file",
      },
      {
        id: "new",
        say: "Good. File is open. Choose New note. That is how this program starts a page.",
        firm: "New note is the command. The other items are not this step.",
        target: "new",
      },
      {
        id: "title",
        say: "A blank note is waiting. Give it a short title, then press Use this title. Any real title is fine.",
        firm: "I need a title before we save. Type a few words, then use them.",
        target: "title",
      },
      {
        id: "save",
        say: "Now save. In most programs this writes the page down so it is still there later. Click Save.",
        firm: "We are not done until you save. Click Save.",
        target: "save",
      },
    ],
  },
  {
    id: "web",
    title: "Use a website",
    opens: "A practice browser. Not the live web.",
    beats: [
      {
        id: "address",
        say: "Look at the address before you trust a page. Click the address bar and read it.",
        firm: "The address bar is the line at the top. Click that, not a picture.",
        target: "address",
      },
      {
        id: "link",
        say: "A link takes you to another page on the same site. Open Chapter 1.",
        firm: "Chapter 1 is the link for this step.",
        target: "link",
      },
      {
        id: "back",
        say: "You moved. Back returns you without retyping the address. Click Back.",
        firm: "Back is the control. Use it.",
        target: "back",
      },
      {
        id: "search",
        say: "Search asks the site a question. Type a word and press Search.",
        firm: "Type something in the search box, then press Search.",
        target: "search",
      },
    ],
  },
  {
    id: "book",
    title: "Read a book",
    opens: "One page. You read it. I ask what it claims.",
    beats: [
      {
        id: "read",
        say: "Read the page once, slowly. When you have, press I have read it. Do not skim past a sentence you did not understand.",
        firm: "Finish the page first. Then tell me you have read it.",
        target: "read",
      },
      {
        id: "mark",
        say: "Mark the sentence that states the claim. The other two are setting and example.",
        firm: "That sentence is not the claim. Read them again. The claim is the one that says what the tool is for.",
        target: "claim",
      },
      {
        id: "answer",
        say: "In your own words, a teacher checks understanding, not memory of my sentence. Choose the answer that matches the page.",
        firm: "That answer is not on the page. Try the other one. I will wait.",
        target: "answer",
      },
    ],
  },
];

export const BOOK = {
  sentences: [
    { id: "set", text: "The desk was quiet, and the lamp was already on." },
    { id: "claim", text: "A good tool is for finishing a job you can explain to someone else." },
    { id: "ex", text: "She used it to write down the three steps, then closed the book." },
  ],
  answers: [
    { id: "answer", text: "A tool should help you finish a job you can explain." },
    { id: "wrong", text: "A tool is mainly a lamp for a quiet room." },
  ],
};
