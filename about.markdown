---
layout: page
title: About
permalink: /about/
---


Hi! My name is **Kohei Asano**, I use **khei4** on the Internet.

I'm a Software Engineer at [Sony Interactive Entertainment](https://sonyinteractive.com/en/), working on [PS5 WebKit](https://www.playstation.com/en-us/oss/ps5/webkit/).

I studied Mathematics at the University of Hokkaido and Computer Science at the University of Tokyo.

Feel free to contact me via [GitHub](https://github.com/khei4), [LinkedIn](https://www.linkedin.com/in/kohei-asano-8082881b2/), [X](https://x.com/khei4444).

### Experiences

### Projects

- Selected Fellow, IPA Mitou 2023 – ["RiP: High-Efficiency Reservoir-in-Processor Computing Utilizing Internal State of RISC-V Processors"](https://www.ipa.go.jp/en/it-talents/mitou/target-reservoir-computing-2023.html) ([Ja](https://www.ipa.go.jp/jinzai/mitou/target/2023_reservoir/gaiyou_tg-1.html))
  - Designed a reservoir-computing architecture that re-uses RISC-V micro-architectural state as the nonlinear reservoir.
  - I created [RISC-V emulator](https://github.com/Reservoir-In-Processor/rip-sim), that has branch predictions and stats calculator for that.

### Open sources contributions

- [LLVM](https://github.com/llvm/llvm-project/commits/main/?author=khei4) -- Middle-end passes like, MemCpyOpt, InstCombine.
  - [Google Summer of Code Final Report](https://www.khei4.com/gsoc2023/)
    - [Japanese Blog about that](https://crowpenguin.hatenablog.com/entry/2023/12/18/022055)

- [WebKit](https://github.com/WebKit/WebKit) -- Windows Rendering, and Refactorings.

- [Polynomial Invariant calculator](https://github.com/khei4/poly_inv) -- Rust implementation of C-subset Parser and Algebraic Invariant Computation using Groebner basis for my Undergraduate Poster session.

- [Symbolic Differentiator](https://github.com/khei4/sym_diff) -- Rust implementation of Mathematical Expression Parser and Differentiation algorithm on the paper.
  - [Japanese blog](https://qiita.com/KoheiAsano/items/943c66e226ec8f44d106)

### Presentations

- Presentation about Stack-Move Optimization on Kernel/VM探検隊 No16 ([English slides](pdf/rust_move_optimization.pdf))

- Presentation about Undergraduate Poster: Inference of polynomial invariants for imperative programs ([English slides](pdf/bachelor_poly_inv.pdf))

- Survey about Syntax-Guided Synthesis ([English slides](https://drive.google.com/file/d/1Cd6t8GlnZU5p7USnUyfaD2w-x9hmYgqD/view?usp=sharing))

- Introduction of Clippy await warning about Lock/RefCellRef ([Japanese slides](https://drive.google.com/file/d/1HeiQAV4bf1CPV6ceNoI55MgcwGamfmnW/view), [Japanese Blog](https://www.estie.jp/blog/entry/2022/08/01/160827))

- Eulerian cycle, Rust, Bit tricks ([Japanese slides](pdf/euler_rust_bit.pdf))

### Theses and Posters

- Rust Implementation of Polynomial Invariant Computation using Groebner Basis[Undergraduate Mathematics] <br>
   ([pdf](pdf/thesis_physics_bachelor_lanczos_spinors.pdf))
   ([slides](pdf/thesis_physics_bachelor_lanczos_spinors.pdf))
- Master Thesis: Finding Missing Automatic Vectorization Opportunity by
Diﬀerential Testing [Graduate CS] <br>
   ([pdf](pdf/master_thesis.pdf))
- Could LLM be LLVM optimizer? [xSig 2023]2024<br>
   ([Japanese poster](pdf/xSIGasano.pdf))
  - [Poster Award](https://xsig.ipsj.or.jp/2023/)

### Miscellaneous

- [TechBookFest Japanese Leaflet writing](https://techbookfest.org/event/tbf06/circle/61900008)
   <br> Explain about LLVM overview and steps tweaking LLVM Frontend to parse Python-subset language.
