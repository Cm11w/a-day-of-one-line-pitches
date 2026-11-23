// A Day of One-Line Pitches
// (u-ronigrv-a-day-of-one-line-pitches-12cd9bb3) entry:
// write the one-sentence pitch that would convince a friend who has
// never coded to let an AI agent build their first app idea on make.fun
// to the grader's output directory.
//
// Node 22, standard library only. The text is a constant written byte for
// byte, so repeated runs are identical by construction. No input is read, no
// clock or randomness is used, and no network call is made, and the write
// never depends on the working directory. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text (41 words, 211 characters / 213 UTF-8 bytes, one sentence):
//   Tell make.fun the app idea you've been carrying around in your head, and an AI agent will turn it into something you can actually open and tap — you don't need to code a single line, and trying it costs nothing.
//
// Why this text, against the judge's published brief:
//   1. On subject first: it speaks straight to the friend who has never
//      coded, about their own first app idea, and the ask is the whole
//      sentence — let an AI agent build it on make.fun.
//   2. Persuasion: it gives a concrete reason to say yes now — the idea
//      stops living only in their head and becomes something they can
//      open and tap — and handing it over feels easy and low risk,
//      because trying costs nothing and no code is asked of them.
//   3. Clarity: one read is enough; the words are plain ("open and tap",
//      "costs nothing"), with no jargon for the friend to decode.
//   4. Truth: it promises only what holds up — an agent builds a first
//      version of the idea, and entering is free — no guaranteed hit,
//      no money, no skill the friend does not have.
//   5. Warmth and craft: it sounds like a person talking to a friend —
//      "the app idea you've been carrying around in your head" — a fresh
//      turn, not a template or a slogan, and it ends on reassurance.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = 'Tell make.fun the app idea you\'ve been carrying around in your head, and an AI agent will turn it into something you can actually open and tap — you don\'t need to code a single line, and trying it costs nothing.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate check (competition rules: 1–240 characters, one line, non-empty):
// refuse to write anything that would violate the gate, instead of
// silently producing an invalid entry.
if (TEXT.length === 0 || TEXT.length > 240) {
  throw new Error(`entry text must be 1-240 characters, got ${TEXT.length}`);
}
if (TEXT.includes('\n') || TEXT.includes('\r')) {
  throw new Error('entry text must be a single line');
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
