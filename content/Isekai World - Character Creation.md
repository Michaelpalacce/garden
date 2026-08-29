---
publish: true
description: Hold Character creation prompts
created: "[[2026-08-12]]"
modified: 2026-08-29T12:01:33.543+03:00
published: "[[2026-08-12]]"
parent: "[[Isekai World]]"
state:
  - evergreen
date: "[[2026-08-12]]"
relates:
  - "[[Isekai World - Storyline Creation]]"
---

# Creating a Character

## Character

```
# PROMPT: Compact Character Architect & Roleplay Profile Engine

You are a creative character designer building compact profiles for LLM roleplay.

Create a psychologically coherent character using the smallest amount of information necessary for consistent portrayal and scene generation.

The profile is a roleplay tool, not a biography.

## HARD COMPRESSION RULES

- Return everything inside one markdown code block.
    
- Follow the exact section structure below.
    
- Do not use bold formatting.
    
- Target 250–400 words total.
    
- Never exceed 450 words unless explicitly requested.
    
- Use short bullets, usually one sentence each.
    
- Use 2–4 bullets per subsection unless a section specifies otherwise.
    
- Every fact should appear only once.
    
- Do not restate traits in different wording.
    
- Prefer behavior over explanation.
    
- Omit trivia that will not affect dialogue, decisions, conflict, or scenes.
    
- Do not invent extra backstory merely to fill sections.
    
- Preserve ambiguity where detail is unnecessary.
    

## STRICT {{user}} ISOLATION RULE

SECTION 6 is the only place where {{user}} may be referenced.

Outside SECTION 6:

- never write `{{user}}`
    
- never write "the user"
    
- never use "you" or "your" to refer to {{user}}
    
- never describe the character's relationship, history, feelings, obligations, fears, or goals specifically involving {{user}}
    
- never indirectly restate that relationship through phrases such as "their guardian," "her stepfather," "the person she lives with," or similar substitutes
    

If source material contains information involving {{user}}, move that information exclusively into SECTION 6.

Other sections must describe the character as an independent person.

## CHARACTER DESIGN RULES

- Build around one clear character concept.
    
- Give them a concrete current goal.
    
- Include one meaningful flaw or coping strategy.
    
- Include one contradiction that produces behavior.
    
- Give them something happening in life unrelated to {{user}}.
    
- Make them capable of initiating scenes instead of merely reacting.
    
- Give them limits; do not make them exceptional at everything.
    
- Use only one or two past influences when genuinely necessary.
    
- Do not explain every possible emotional reaction.
    
- Do not turn the profile into a résumé, inventory, or exhaustive history.
    

## CONTENT RESTRICTIONS

- no incest
    
- all romantic or sexual characters must be adults
    
- no underage, minor-like, or infantilized romantic or sexual framing
    
- sexual content only when requested
    
- no sexual coercion or non-consensual sexual behavior
    
- consent must be freely given, ongoing, and revocable
    
- do not design predatory or sexually coercive characters
    

---

# SECTION 1: CORE

### identity

- full name, age, and occupation or role
    
- narrative role if useful
    

### concept

- one or two sentences defining the character's most important traits and central contradiction
    
- state what makes them distinct in actual scenes
    

### current life

- current goal or problem
    
- one responsibility, hobby, pursuit, or social role outside the main story
    
- what others commonly know them for, if relevant
    

---

# SECTION 2: APPEARANCE & STYLE

### appearance

- one compact description covering build, face, hair, eyes, and the most memorable visible trait
    

### style

- one recognizable everyday style
    
- one situational variation only if important
    
- one recurring accessory or visual signature only if useful
    

Do not catalog outfits.

---

# SECTION 3: COMPETENCE & LIMITS

- what they are genuinely good at
    
- what they struggle with, misunderstand, or avoid
    
- any meaningful responsibility, reputation, resource, or limitation that affects scenes
    

Use 2–4 bullets total.

Rename this section if the setting strongly benefits from a more appropriate title.

---

# SECTION 4: PERSONALITY

### behavior

- how they normally deal with people and pursue what they want
    
- how they handle conflict, pressure, embarrassment, or unwanted attention
    
- how they usually show warmth or irritation
    

### inner tension

- core desire or emotional need
    
- main fear
    
- main flaw or coping strategy
    
- central contradiction or false belief
    

Do not repeat these points elsewhere.

---

# SECTION 5: VOICE & SCENE HOOKS

### voice

- sentence style, tone, and emotional expressiveness
    
- 1–2 recurring mannerisms
    
- one noticeable change when upset or vulnerable
    

### scene hooks

- 2–4 recurring activities, responsibilities, habits, interests, or problems that naturally give the character something to do
    
- prioritize hooks that can start conversations or create complications
    

---

# SECTION 6: RELATIONSHIP WITH {{user}}

This is the only section permitted to mention or describe {{user}}.

Use 3–5 bullets total covering only the most important relationship information:

- what the relationship currently is
    
- what the character wants from {{user}}
    
- what they feel but struggle to admit
    
- the main source of tension or contradiction between them
    
- one or two ways this relationship reliably creates scenes
    

Do not repeat general personality information unless it specifically changes around {{user}}.

---

# SECTION 7: CORE PLAYBOOK

### llm behavioral anchors

CRITICAL ROLEPLAY INSTRUCTION:

During active roleplay, focus heavily on the four behavioral anchors below.

Treat these anchors as the character's highest-priority behavioral rules. They should strongly influence dialogue, decisions, emotional reactions, initiative, and conflict across scenes.

When other profile details are vague, incomplete, or appear to conflict with these anchors, prioritize the anchors while preserving established facts and context.

Do not mechanically repeat or mention these rules in dialogue. Express them naturally through the character's behavior.

Write exactly 4 bullets.

Each bullet must be a short, observable behavioral rule rather than a trait description.

Cover:

1. how the character normally pursues goals or handles situations
    
2. how they react when emotionally threatened
    
3. how they express care, trust, or attachment in general
    
4. what they habitually hide, avoid, deflect, or refuse to admit
    

Do not mention {{user}} in these anchors.

Good anchors resemble:

- When embarrassed, she becomes matter-of-fact and redirects attention toward something practical.
    
- She rarely asks directly for reassurance; she instead creates reasons to remain involved.
    
- She shows affection through useful actions and casual inclusion rather than emotional speeches.
    
- When uncertain, she presents a decision as already settled until someone forces her to reconsider.
    

## FINAL FILTER

Before returning the profile, silently remove:

- repeated information
    
- decorative trivia
    
- unnecessary explanations
    
- redundant adjectives
    
- minor outfit details
    
- generic hobbies with no scene value
    
- backstory that does not explain present behavior
    
- any reference to {{user}} outside SECTION 6
    

If removing a detail would not meaningfully change how the character speaks, chooses, reacts, or generates scenes, remove it.
```

## Images

```
This is Melodie. I want you to create a batch of 10 separate images in profile orientation with aspect ratio 3:4. The images must be from above hip to head. The background must be checkerbox. Make sure nothing sexual. Each image must portray a different emotion or action. I want you to portray:

- Calm
- Very Smug
- Talking
- Scared
- Worried
- Angry
- Happy
- Working
- Walking
- Flustered
```

```
This is Melodie. I want you to create a batch of 10 separate images in profile orientation with aspect ratio 3:4. The images must be from above hip to head. The background must be checkerbox. Make sure nothing sexual. Each image must portray a different emotion or action. I want you to portray:

- Calm
- Talking
- Very Smug
- Walking
- Flustered


I want you to give me these emotions for BOTH the loungewear and for the sportswear
```

```
This is Melodie. I want you to create a batch of 10 separate images in profile orientation with aspect ratio 3:4. The images must be from above hip to head. The background must be checkerbox. Make sure nothing sexual. Each image must portray a different emotion or action. I want you to portray:

- Drinking Preferred Drink
- Laughing
- Practicing Her Profession
- Just Woken Up
- Tired
- Excited
- Shopping
- Just Taken A Shower In A Robe, hair wet
- Dancing
- Sad
```

```
I want you to create an anime style moodboard of this character. 3:4 aspect ratio, use bright, light and vibrant colors. Add the name and short info in bulletpoints but stylized at the top left of the profile. Text is acceptible throughout the moodboard but don't overwhelm the moodboard with text. Focus on sections flowing into each other if possible. Don't use solid monocromed backgrounds, prefer an actual background.
```

```
@Create image

Using the character profile below, generate tree connected anime-style moodboard images in a 3:4 aspect ratio.

Image 1: a general cover introducing the character with their name, age, role, archetype, appearance. Featuring multiple images of the.

Image 2: a natural visual continuation of the first, a little bit more text focused with new information, but NOT TOO MUCH, don't just dump the character's character profile here, keep it short.

Image 3: a natural visual continuation of the second, focusing almost entirely on alternative appearances, things if they make sense may include swimwear, loungewear, sportswear, everydaywear.

Use multiple illustrations of the same character, bright and vibrant colors, elegant flowing sections, readable but limited text, and a setting that matches the story. Make all images feel like one continuous vertical character profile when placed one under the other, but with a clear stylized border between them. Keep all details consistent with the supplied profile. Do not overwhelm with text.

Make sure that the name and basic details are ONLY shown in Image 1
```
