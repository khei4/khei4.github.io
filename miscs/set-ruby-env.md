
---

layout: default
title: Set Ruby Environment
---

When I deceided to create this blog, I had to set up Ruby environment for Jekyll.

I used [rbenv](https://github.com/rbenv/rbenv) to manage Ruby versions.

```bash
brew install rbenv
```

```fish
rbenv install 3.4.1
rbenv global 3.4.1
```

add the following to `~/.config/fish/config.fish`

```fish
status --is-interactive; and source (rbenv init - | psub)
```

```
gem install jekyll
```
