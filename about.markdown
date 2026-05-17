---
layout: page
title: About
---

Hi! My name is **Kohei Asano**, and I go by **khei4** online.

I am a Software Engineer at [Sony Interactive Entertainment](https://sonyinteractive.com/en/), where I primarily work on [PS5 WebKit](https://www.playstation.com/en-us/oss/ps5/webkit/). I admire the engineers and creators—both in software and hardware—who make the world more convenient, delightful, and efficient. My goal is to become one of them and to contribute to the tools that empower them.

I studied Mathematics at Hokkaido University and Computer Science at the University of Tokyo.

Feel free to contact me via [GitHub](https://github.com/khei4), [LinkedIn](https://www.linkedin.com/in/kohei-asano-8082881b2/), or [X](https://x.com/khei4444).

### Projects

- **Selected Fellow, IPA Mitou 2023** – ["RiP: High-Efficiency Reservoir-in-Processor Computing Utilizing Internal State of RISC-V Processors"](https://www.ipa.go.jp/en/it-talents/mitou/target-reservoir-computing-2023.html) ([Ja](https://www.ipa.go.jp/jinzai/mitou/target/2023_reservoir/gaiyou_tg-1.html))
  - Designed a reservoir-computing architecture that reuses RISC-V micro-architectural state as a nonlinear reservoir.
  - Developed a [cycle-accurate RISC-V emulator](https://github.com/Reservoir-In-Processor/rip-sim) with branch prediction and performance statistics.

### OSS

- [LLVM](https://github.com/llvm/llvm-project/commits/main/?author=khei4) – Contributed middle-end passes (e.g., MemCpyOpt, InstCombine) as part of Google Summer of Code 2023 and beyond.
  - [Google Summer of Code Final Report](https://www.khei4.com/gsoc2023/)
    - [Japanese Blog Post](https://crowpenguin.hatenablog.com/entry/2023/12/18/022055)

- [WebKit](https://github.com/WebKit/WebKit) – Contributions to Windows rendering and general refactoring.

- [Reservoir-In-Processor RISC-V Simulator](https://github.com/Reservoir-In-Processor/rip-sim) – A cycle-level RISC-V emulator featuring CI/CD integration, performance statistics, and cycle-by-cycle register dumps.

- [Polynomial Invariant Calculator](https://github.com/khei4/poly_inv) – A Rust implementation of a C-subset parser and algebraic invariant computation using Gröbner bases, developed for my undergraduate poster session.

- [Symbolic Differentiator](https://github.com/khei4/sym_diff) – A Rust implementation of a mathematical expression parser and a differentiation algorithm based on literature.
  - [English Slides](pdf/Sym_diff_english.pdf)
  - [Japanese Blog Post](https://qiita.com/KoheiAsano/items/943c66e226ec8f44d106)

- [Corner Case Faker Fuzzer](https://github.com/khei4/ccffer) – A type-level fuzzer for Go generics, exploiting fuzzing capabilities introduced in Go 1.18.

### Presentations

- **Stack-Move Optimization** – Implementation details from GSoC, presented at Kernel/VM Explorer Group No. 16 ([English Slides](pdf/rust_move_optimization.pdf), [Japanese Video](https://www.youtube.com/live/1OQDfsq6uTE?feature=shared&t=6538)).

- **Undergraduate Poster: Inference of Polynomial Invariants for Imperative Programs** ([English Slides](pdf/bachelor_poly_inv.pdf)).

- **Clippy Await Warning for Lock/RefCellRef** – Introduction to a Clippy lint ([Japanese Slides](https://drive.google.com/file/d/1HeiQAV4bf1CPV6ceNoI55MgcwGamfmnW/view), [Japanese Blog Post](https://www.estie.jp/blog/entry/2022/08/01/160827)).

- **Survey of Syntax-Guided Synthesis** ([English Slides](https://drive.google.com/file/d/1Cd6t8GlnZU5p7USnUyfaD2w-x9hmYgqD/view?usp=sharing)).

- **Eulerian Cycles, Rust, and Bit Tricks** – Presented at the Hokkaido University HUIT-Club Seminar ([Japanese Slides](pdf/euler_rust_bit.pdf)).

### Theses and Posters

- **Rust Implementation of Polynomial Invariant Computation using Gröbner Bases** [Undergraduate Mathematics] ([Slides](pdf/bachelor_poly_inv.pdf)).

- **Could an LLM be an LLVM Superoptimizer?** [xSIG 2023] ([Japanese Poster](pdf/xSIGasano.pdf)).
  - Implemented an LLVM middle-end pass that prompts ChatGPT to optimize peephole tests, with evaluation via `llvm-mca`.
  - Awarded the **Poster Award** at [xSIG 2023](https://xsig.ipsj.or.jp/2023/).

- **Master's Thesis: Finding Missing Automatic Vectorization Opportunities via Differential Testing** [Graduate CS] ([PDF](pdf/master_thesis.pdf), [Japanese Slides](pdf/kohei-asano_takamaeda-lab_2024_master.pdf)).

### Miscellaneous

- **TOEIC Reading & Listening: 840** [2024/09].

- **TechBookFest Japanese Leaflet** ([Link](https://techbookfest.org/event/tbf06/circle/61900008)) – An overview of LLVM and steps for modifying the LLVM frontend to parse a Python-subset language.

- **LifeGame in Pure JS** ([Link](https://hei-7b848.firebaseapp.com/bokulife/index.html)) – A practice implementation of Conway's Game of Life, featuring detailed configuration options.
