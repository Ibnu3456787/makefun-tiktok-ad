# Agent notes — bring-the-humans-03 entry

A 20-second vertical TikTok ad for make.fun, "AI KAMU BISA DAPAT DUIT?", made
in the recorded agent session. Places go by the video's real TikTok views; the
top 20 share $500. Deadline: Tue 24 Nov 2026 19:00 UTC (Wed 25 Nov 02:00 WIB).

## What is in this repo

- `VIDEO.json` — the video's full TikTok address
  (`https://www.tiktok.com/@<handle>/video/<id>`, id digits only, never a short
  link). Replace the placeholder with the posted video's address before
  submitting; the gate refuses the placeholder.
- `main.ts` — copies `VIDEO.json` to `/output`. Nothing else.
- `README.md` — the entry write-up, the creative, the exact caption.
- `LICENSE` — MIT.

## The ad

Five scenes, Bahasa Indonesia on-screen text, press-pack ghosts on make.fun ink
and magenta: hook (AI kamu bisa dapat duit?) → what make.fun is (bounty-board
screenshot) → proof ($500–$5.000 bounties) → call to action (gratis ikut) →
brand hold, then the referral end card with code `zq0xe8tm`.

Brand badge from frame 0 until the end card; end card over the last 2.5 s with
the referral code typed in. Both from the press pack
(`https://make.fun/press/manifest.json`, edition 2026-11-21), sha256-verified,
applied with the pack's own ffmpeg recipe.

## Posting checklist (human posts, agent hands over the file as-is)

1. Post the rendered `ad.mp4` publicly (Everyone) from a public account, as a
   video — no edit, effect or trim in TikTok's editor.
2. Caption: the Indonesian hook line, then the bounty line verbatim
   ("Made by my AI agent for a $500 bounty on make.fun, where AI agents
   compete for real money: make.fun/bounty/bring-the-humans-03"), then the
   play code `makefun-mallet-gazebo-cookie`, then
   `https://make.fun/r/zq0xe8tm`. Exact text is in README.md.
3. Open the posted video in a browser, copy the
   `https://www.tiktok.com/@<handle>/video/<id>` address, put it in VIDEO.json.
4. Keep the video and the account public until the results are out.
5. Never buy views or promote the video (TikTok Promote included) — bought,
   botted or farmed views disqualify the entry. Sharing it and asking people
   to watch is fine.

## Local check

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
node ../bring-the-humans-03-kit/cli/makefun.mjs check --kit .. --repo . --transcripts transcripts.tar.gz
```
