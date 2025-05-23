---
layout: page
title: About
---


Hi! My name is **Kohei Asano**, I use **khei4** on the Internet.

I'm a Software Engineer at [Sony Interactive Entertainment](https://sonyinteractive.com/en/), mainly working on [PS5 WebKit](https://www.playstation.com/en-us/oss/ps5/webkit/). I love the (Soft/Hardware, any)Engineers and creators to make the world convenient/humorous/swift, I wanna become one of them. I wanna contribute the tools that help those Engineers.

I studied Mathematics at the University of Hokkaido and Computer Science at the University of Tokyo.

Feel free to contact me via [GitHub](https://github.com/khei4), [LinkedIn](https://www.linkedin.com/in/kohei-asano-8082881b2/), [X](https://x.com/khei4444).

### Projects

- Selected Fellow, IPA Mitou 2023 – ["RiP: High-Efficiency Reservoir-in-Processor Computing Utilizing Internal State of RISC-V Processors"](https://www.ipa.go.jp/en/it-talents/mitou/target-reservoir-computing-2023.html) ([Ja](https://www.ipa.go.jp/jinzai/mitou/target/2023_reservoir/gaiyou_tg-1.html))
  - Designed a reservoir-computing architecture that re-uses RISC-V micro-architectural state as the nonlinear reservoir.
  - I created [RISC-V cycle-accurate emulator](https://github.com/Reservoir-In-Processor/rip-sim), that has branch predictions and stats calculator for that.

### OSS

- [LLVM](https://github.com/llvm/llvm-project/commits/main/?author=khei4) -- Middle-end passes, MemCpyOpt, InstCombine as Google Summer of Code 2023 and more.
  - [Google Summer of Code Final Report](https://www.khei4.com/gsoc2023/)
    - [Japanese Blog about that](https://crowpenguin.hatenablog.com/entry/2023/12/18/022055)

- [WebKit](https://github.com/WebKit/WebKit) -- Windows Rendering, and Refactorings.

- [Reservoir-In-Processor RISC-V Simulator](https://github.com/Reservoir-In-Processor/rip-sim) -- RISC-V cycle-level emulator, with CI/CD, Statistics, cycle-level registers dump.

- [Polynomial Invariant calculator](https://github.com/khei4/poly_inv) -- Rust implementation of C-subset Parser and Algebraic Invariant Computation using Groebner basis for my Undergraduate Poster session.

- [Symbolic Differentiator](https://github.com/khei4/sym_diff) -- Rust implementation of Mathematical Expression Parser and Differentiation algorithm on the paper.
  - [English slides](pdf/Sym_diff_english.pdf)
  - [Japanese blog](https://qiita.com/KoheiAsano/items/943c66e226ec8f44d106)

- [Corner Case Faker Fuzzer](https://github.com/khei4/ccffer) -- Golang Generics Function's Type-Level Fuzzer exploiting fuzzing and generics on GoLang 1.18.

### Presentations

- Presentation about Stack-Move Optimization I implemented on GSoC at Kernel/VM探検隊 No16 ([English slides](pdf/rust_move_optimization.pdf), [Japanese video](https://www.youtube.com/live/1OQDfsq6uTE?feature=shared&t=6538))

- Presentation about Undergraduate Poster: Inference of polynomial invariants for imperative programs ([English slides](pdf/bachelor_poly_inv.pdf))

- Introduction of Clippy await warning about Lock/RefCellRef ([Japanese slides](https://drive.google.com/file/d/1HeiQAV4bf1CPV6ceNoI55MgcwGamfmnW/view), [Japanese Blog](https://www.estie.jp/blog/entry/2022/08/01/160827))

- Survey about Syntax-Guided Synthesis ([English slides](https://drive.google.com/file/d/1Cd6t8GlnZU5p7USnUyfaD2w-x9hmYgqD/view?usp=sharing))

- Eulerian cycle, Rust, Bit tricks at Hokkaido University HUIT-Club Seminar.([Japanese slides](pdf/euler_rust_bit.pdf))

### Theses and Posters

- Rust Implementation of Polynomial Invariant Computation using Groebner Basis[Undergraduate Mathematics]
   ([slides](pdf/bachelor_poly_inv.pdf))

- Could LLM be LLVM superoptimizer? [xSig 2023]
   ([Japanese poster](pdf/xSIGasano.pdf))
  - I implemented LLVM middle-end path, that asks ChatGPT to optimize the peephole optimization tests, and evaluate them by llvm-mca.
  - Got [Poster Award](https://xsig.ipsj.or.jp/2023/).

- Master Thesis: Finding Missing Automatic Vectorization Opportunity by Differential Testing [Graduate CS]
   ([pdf](pdf/master_thesis.pdf), [Japanese slides](pdf/kohei-asano_takamaeda-lab_2024_master.pdf))

### Miscellaneous

- [TOEIC Reading & Listening 840](pdf/kohei-asano_takamaeda-lab_2024_master.pdf) [2024/09]

- [TechBookFest Japanese Leaflet writing](https://techbookfest.org/event/tbf06/circle/61900008)
   Explaining about LLVM overview and steps tweaking LLVM Frontend to parse Python-subset language.

- [LifeGame by pure JS](https://hei-7b848.firebaseapp.com/bokulife/index.html) A JS-practice implementation of Conway's Game of Life, configurable in detail.
