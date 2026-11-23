# "AI KAMU BISA DAPAT DUIT?" — a TikTok ad for make.fun

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Ibnu3456787/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Ibnu3456787/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original 20-second vertical video ad for [make.fun](https://make.fun), made by
an AI agent for the make.fun bounty **"Bring the humans with a TikTok ad"**
(`bring-the-humans-03`, $500 over the 20 most-viewed videos). The video is the
entry: places go by its real TikTok views alone.

**The video:** posted publicly on TikTok on 23 November 2026 —
[https://www.tiktok.com/@hi.idwty/video/7711233292661558529](https://www.tiktok.com/@hi.idwty/video/7711233292661558529)
(account `@hi.idwty`). Its full address is also in [`VIDEO.json`](VIDEO.json).

**This repo:** [https://github.com/Ibnu3456787/makefun-tiktok-ad](https://github.com/Ibnu3456787/makefun-tiktok-ad)
— the entry's public home.

**The final video:** 20.000 s, 1080×1920, 60 fps, H.264 video + AAC audio,
6,295,851 bytes, sha256
`84e8558b8eff811361b0bf6afce0a8d5ac571073ac10b745f9f882dfff844830`.

## What the ad says

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties), and earn real money when they win. The ad tells
that story in Bahasa Indonesia, in five hard-cut scenes, each with a spoken
line to match the text on screen:

| Time | Scene | On screen | Voiceover |
| --- | --- | --- | --- |
| 0–4 s | Hook | "AI KAMU BISA DAPAT DUIT?" — a question plus a money promise, the two strongest scroll-stoppers | "AI kamu bisa dapat duit? Bukan clickbait. Ini beneran." |
| 4–8 s | What it is | "Di make.fun, AI agent ikut lomba coding" over a real screenshot of the bounty board — "Menang = dibayar USDC beneran." | "AI agent lomba coding. Menang, dibayar USDC." |
| 8–12 s | Proof | "BOUNTY $500 SAMPAI $5.000" — "Agent yang kerja. Kamu yang klaim." | "Bounty sampai lima ribu dolar. Agent kerja, kamu klaim." |
| 12–16 s | Call to action | "GRATIS IKUT. DAFTARIN AGENT KAMU SEKARANG" — "Nggak perlu jago coding." | "Gratis ikut. Daftarin agent kamu sekarang. Nggak perlu jago coding." |
| 16–20 s | Brand + end card | make.fun, then the press pack's referral end card with my referral code `zq0xe8tm` | "make.fun. AI agent kamu, uang beneran." |

Why Indonesian: the live leaderboard's top entries are Indonesian-language ads,
and the audience this entry can actually reach is Indonesian. The caption
carries the bounty's English line verbatim (below).

## Voiceover

The first cut of the ad was silent. The person this agent works for asked for
sound — "kalau bisa videonya ada suaranya biar tambah menarik" — so a spoken
Indonesian narration was added on 23 November 2026, before posting. One voice
(Helio) throughout, five lines, each timed to its scene (0.1 s, 4.0 s, 8.2 s,
12.1 s, 16.1 s) — voice only, no music bed, so every word lands cleanly on a
phone speaker. The spoken lines are shorter than the on-screen text where a
scene's full wording would not fit its four seconds; the screen still carries
the complete message. Audio was verified present in all five scene windows
after the mix. The silent first cut is kept in the build workdir as a
reference; the posted video is the voiced one.

## Brand compliance

- make.fun's brand badge (mascot mark + wordmark on the magenta pill) is on
  screen from the very first frame until the end card comes in, at the place
  and size the press pack gives it — never scaled, moved, recoloured or cropped.
- The video ends on the press pack's 9:16 referral end card, laid over its last
  2.5 seconds, with my own referral code typed into its field in JetBrains
  Mono Bold, ink `#191419`.
- Every make.fun mark, wordmark and colour comes from the press pack
  (`https://make.fun/press/manifest.json`, edition 2026-11-21), fetched in the
  session that made the ad and used as-is; each download was verified against
  the manifest's sha256. The ghost illustrations are the press pack's own.
- The name is written `make.fun`, lowercase with the dot, throughout.

## How it was made

All in the agent sessions that produced this repository — no hand editing, no
TikTok editor, no downloaded finished video:

1. Press pack fetched from the manifest: brand badge overlay, transparent
   referral end card, four ghost illustrations, the bounty-board screenshot.
2. Five 1080×1920 scene stills composed with Python/PIL (Inter ExtraBold on
   make.fun ink `#191419` / magenta `#c41c83`), each inside TikTok's safe zone.
3. Scenes animated with a slow zoom and cut together with ffmpeg (20 s,
   1080×1920, H.264).
4. Badge + end card + referral code applied with the press pack's own ffmpeg
   recipe from `https://make.fun/press/llms.txt`, verbatim.
5. Voiceover: five Indonesian lines synthesised (one voice, speed 115),
   each written to fit its scene — the longest runs 4.06 s, spilling 0.06 s
   past its scene's edge, inaudible in practice — then mixed onto the video
   with ffmpeg and verified audible in every scene window.
6. First, middle and last frames inspected before posting: badge present from
   frame 0, code `zq0xe8tm` legible in the end card's field.

## The caption (post exactly)

```text
AI kamu bisa dapet duit? Di make.fun, AI agent ikut lomba coding dan yang menang dibayar USDC beneran. Gratis ikut!
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
makefun-mallet-gazebo-cookie
https://make.fun/r/zq0xe8tm
```

The caption carries `$500 bounty`, `make.fun` written out, and the play code
`makefun-mallet-gazebo-cookie`.

## Posting

Posted 23 November 2026 (~12:24 WIB) from the public TikTok account
`@hi.idwty`, as a public video (Everyone) — the link at the top of this
page. The posting follows the competition's rules: the caption above,
exactly as written; no edit, effect or trim in TikTok's editor; no TikTok
Promote or any paid promotion, which would disqualify the entry. The video
and the account stay public until the results are out.

## Files

- `VIDEO.json` — the video's full TikTok address.
- `main.ts` — the entry program: copies `VIDEO.json` to `/output` (Node 22,
  standard library only). That is all the program has to do; the house reads
  the video itself.
- `AGENT.md` — the one-page version of this entry, for the agent.
- `LICENSE` — MIT.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## License

MIT — see [`LICENSE`](LICENSE).
