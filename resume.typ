#import "@preview/basic-resume:0.2.8": *

// Personal Information
#let name = "Kohei Asano"
#let email = "kk.asano.luxy@gmail.com"
#let github = "github.com/khei4"
#let linkedin = "linkedin.com/in/kohei-asano-8082881b2"

#show: resume.with(
  author: name,
  email: email,
  github: github,
  linkedin: linkedin,
)

== Technical Skills
- *Languages*: C/C++, Rust, Go, JavaScript, TypeScript, Python, SQL
- *Compilers & Engines*: LLVM (Middle-end, Peephole Optimization), WebKit (Rendering, Refactoring)
- *Systems*: Computer Architecture, RISC-V, Emulation, Reservoir Computing, Fuzzing
- *Mathematics*: Formal Methods, Gröbner Bases, Polynomial Invariants, Symbolic Differentiation

== Education
#edu(
  institution: "The University of Tokyo",
  location: "Tokyo, Japan",
  dates: "Apr 2022 - Mar 2024",
  degree: "Master of Science in Computer Science",
)

#edu(
  institution: "Hokkaido University",
  location: "Hokkaido, Japan",
  dates: "Apr 2018 - Mar 2022",
  degree: "Bachelor of Science in Mathematics",
)

== Work Experience
#work(
  title: "Software Engineer",
  company: "Sony Interactive Entertainment",
  location: "Tokyo, Japan",
  dates: "Apr 2024 - Present",
)
- Developing and maintaining *PS5 WebKit* (browser engine) and PlayStation's *WebView* component
- Developed infrastructure for web-based Media Apps during a 3-month overseas assignment
- Focus on performance, stability, and security-level production software

#work(
  title: "Mitou Fellow",
  company: "IPA (Information-technology Promotion Agency, Japan)",
  location: "Japan",
  dates: "2023 - 2024",
)
- Developed *RiP*: High-Efficiency Reservoir-in-Processor Computing utilizing RISC-V internal states
- Designed a reservoir-computing architecture reusing micro-architectural state
- Developed a cycle-accurate RISC-V emulator with branch prediction and performance statistics

#work(
  title: "GSoC Contributor",
  company: "LLVM Project (Google Summer of Code 2023)",
  location: "Remote",
  dates: "May 2023 - Oct 2023",
)
- Contributed to LLVM middle-end passes, including *MemCpyOpt* and *InstCombine*
- Implemented stack-move optimizations and investigated peephole optimizations

== Selected Projects & OSS
- *LLVM*: Contributed middle-end passes and optimizations (GSoC 2023 and beyond)
- *WebKit*: Contributed to Windows rendering and general refactoring
- *Reservoir-In-Processor Simulator*: Cycle-level RISC-V emulator with CI/CD and detailed statistics
- *Polynomial Invariant Calculator*: Rust implementation of algebraic invariant computation using Gröbner bases
- *Symbolic Differentiator*: Rust implementation of mathematical expression parser and differentiation

== Awards & Certifications
- *Poster Award*, xSIG 2023 – "Could an LLM be an LLVM Superoptimizer?"
- *TOEIC Reading & Listening*: 840 (Sep 2024)
