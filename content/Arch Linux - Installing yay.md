---
{"publish":true,"created":"[[2025-05-01]]","modified":"2026-01-13T00:10:02.426+02:00","published":"[[2025-05-01]]","cssclasses":"","parent":"[[Arch Linux]]","state":["evergreen"],"date":"[[2025-05-01]]"}
---

```sh
sudo pacman -Syu

sudo pacman -S --needed base-devel git

git clone https://aur.archlinux.org/yay.git

cd yay

makepkg -si
```
