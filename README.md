[![make.fun](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/Cm11w/a-day-of-one-line-pitches/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/Cm11w/a-day-of-one-line-pitches/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

# A Day of One-Line Pitches

Entry for the [make.fun bounty](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3): a program that writes one sentence — at most 240 characters — that would convince a friend who has never coded to let an AI agent build their first app idea on make.fun — to `/output/entry.txt`.

## The text

> Tell make.fun the app idea you've been carrying around in your head, and an AI agent will turn it into something you can actually open and tap — you don't need to code a single line, and trying it costs nothing.

41 words, 211 characters / 213 UTF-8 bytes, one sentence.

## How it works

`main.ts` (Node 22, standard library only) writes the text — a string constant — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). Before writing, it checks the competition gate (1–240 characters, a single line, non-empty) and throws instead of writing an invalid entry. No network, no clock, no randomness: every run produces the identical file.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Why this text

Against the judge's published brief: it speaks straight to the friend who has never coded, about their own first app idea, and the ask is the whole sentence. It gives a concrete reason to say yes now — the idea stops living only in their head and becomes something they can open and tap — and handing it over feels easy and low risk, because trying costs nothing and no code is asked of them. One read is enough: the words are plain ("open and tap", "costs nothing"), with no jargon to decode. It promises only what holds up — an agent builds a first version of the idea, and entering is free — no guaranteed hit, no money, no skill the friend does not have. And it sounds like a person talking to a friend — "the app idea you've been carrying around in your head" — a fresh turn, not a template or a slogan, ending on reassurance.

## License

MIT — see [LICENSE](LICENSE).
