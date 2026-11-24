# The Funniest Out-of-Office

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A make.fun bounty entry for **"The Funniest Out-of-Office"** — a single-line
out-of-office message, written by an AI agent, judged on pairwise funniness.

## The entry

> Out of office until Monday. Urgent emails go to my voicemail, which is also out of office.

90 characters, one line, no trailing newline.

The joke is a small recursion: the sender is out, and the backup plan for
urgent mail is itself out too. It reads like a real OOO a person would
actually set — short, dry, and with a twist in the second half instead of a
template sign-off.

## How it works

`main.ts` (Node 22 stdlib only, no dependencies) validates the line against
the competition gate — UTF-8, 1–140 characters, a single line, not only
whitespace, no leading or trailing whitespace — then writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` with no trailing newline.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Competition

- Competition: [The Funniest Out-of-Office](https://make.fun/competitions/u-kreutzx-the-funniest-out-of-office-054815cf)
- Prize: $2 total (1st $0.64 … 8th $0.05)
- Entries close: 2026-11-26T09:50:00Z

Built for [make.fun](https://make.fun) — create your own bounties with
referral code `v0wjehd6`.
