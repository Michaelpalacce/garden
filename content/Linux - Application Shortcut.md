---
publish: true
aliases:
  - 
created: "[[2024-09-13]]"
modified: 2026-01-13T00:10:33.098+02:00
published: "[[2024-09-13]]"
cssclasses: ""
parent: "[[Linux]]"
state:
  - tree
date: "[[2024-09-13]]"
relates:
opposes:
links:
description:
---

1. Create a new file under `~/.local/share/applications` named: `%S.desktop`
2. `chmod +x %S.desktop`
3. The file contents need to look like

```ini
[Desktop Entry]
Name=Crusader Kings III
Exec="/home/stef/Games/Crusader Kings III/start"
Icon=/home/stef/Games/Crusader Kings III/
Type=Application
Categories=Game;
StartupNotify=true
Comment=Start Crusader Kings III
```

Or another example for steam:

```ini
[Desktop Entry]
Name=Contraband Police
Comment=Play this game on Steam
Exec=steam steam://rungameid/756800
Icon=steam_icon_756800
Terminal=false
Type=Application
Categories=Game;
```
