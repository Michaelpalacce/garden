---
publish: true
created: "[[2025-09-23]]"
modified: 2026-01-13T00:11:14.590+02:00
published: "[[2025-09-23]]"
cssclasses: ""
parent: "[[bash]]"
state: evergreen
relates:
  - "[[bash - Variables]]"
date: "[[2025-09-23]]"
---

This is where you will find information on how to work with bash strings

# String Types
Using single or double quotes matter!
~~~bash
NAME="Stefan"
echo "Hi $NAME"  #=> Hi Stefan
echo 'Hi $NAME'  #=> Hi $NAME
~~~
Single quotes prevent you from using [[bash - Functions#Inline functions\|Bash Inline Functions]] ( `$()` syntax )

# Get Length Of String

```sh
my_string="hello"
echo "${#my_string}"  # Output: 5
```

# Substring Extraction

```sh
my_string="abcdefg"
echo "${my_string:2:3}"  # Output: cde
```

# Removing Substrings

```sh
file_path="/home/user/document.txt"
echo "${file_path#*/}"   # Output: home/user/document.txt
```


```sh
file_path="/home/user/document.txt"
echo "${file_path##*/}"  # Output: document.txt
```

```sh
filename="document.txt"
echo "${filename%.txt}"  # Output: document
```

```sh
filename="archive.tar.gz"
echo "${filename%%.*}"   # Output: archive
```

# Replacing Substrings

```sh
text="hello world, hello again"
echo "${text/hello/hi}"  # Output: hi world, hello again
```

# Case Conversion

```sh
word="hello"
echo "${word^^}"  # Output: HELLO
```

```sh
word="WORLD"
echo "${word,,}"  # Output: world
```