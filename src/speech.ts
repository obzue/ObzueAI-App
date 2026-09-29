import { isAllowedVoice } from "../../ObzueAI-Corta-Membrane/voices.ts";

/** Speech for the app. The voice list lives in the membrane repository, checked out beside this one. */
export async function speakLine(text: string, voiceId: string, apiKey: string) {
  const spoken = text.trim().slice(0, 420);
  const voice = voiceId.toLowerCase();
  if (!spoken) return { ok: false as const, error: "Nothing to say." };
  if (!isAllowedVoice(voice)) return { ok: false as const, error: "Unknown voice." };
  if (!apiKey) return { ok: false as const, error: "Speech is not available right now." };
  const res = await fetch("https://api.x.ai/v1/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + apiKey },
    body: JSON.stringify({ text: spoken, voice_id: voice, language: "en" }),
  });
  if (!res.ok) return { ok: false as const, error: "Speech failed (" + res.status + ")." };
  const audio = Buffer.from(await res.arrayBuffer()).toString("base64");
  return { ok: true as const, audio };
}
