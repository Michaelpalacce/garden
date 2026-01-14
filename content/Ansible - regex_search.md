---
publish: true
created: "[[2022-07-20]]"
modified: 2026-01-14T20:58:28.128+02:00
published: "[[2022-07-20]]"
cssclasses: ""
parent:
  - "[[Ansible]]"
state: sapling
date: "[[2022-07-20]]"
---

```yaml
- name: Get Log  
  set_fact:  
    match: "{{ 'foobar' | regex_search( 'foo' ) }}"  
  
- debug:  
    var: match
```
