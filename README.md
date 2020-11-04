# Fru Timer
Under development...

Rubik's cube timer app for speedcubers. App created using new Vue 3 Composition API. New features coming soon

[Live](https://relaxed-saha-040341.netlify.app/)

## Tech stack:
* Vue 3 (Composition API, Vue Router)
* TypeScript
* SCSS
* Dexie.js (IndexedDB wrapper)
* Local Storage

## Features:
* Timer
* Menu for managing displays and sub menus
* Statistics display (mo3, ao5, ao12, session mean and bests)
* Sortable times list history display
* Menu for editing result (comment, dnf/+2 penalty, delete)
* Menu for sessions (clear, delete, add new, select)
* Scramble display
* Scramble generator (supported cubes: 2x2, 3x3, 4x4, 5x5, 6x6, 7x7, skweb, pyraminx, megaminx)

## Upcoming features/changes:
* PWA
* Replace logo placeholder
* Settings subpage (color palette, font sizes, etc.)
* About subbpage
* Square-1 scramble generator
* Clock scramble generator
* 3x3 multi blind - setting number of scrambles
* Preinspection
* Metronome
* Keyboard shortcuts
* Stackmat support
* Chart display
* Scrambled cube display
* Modal for displaying full data about averages in times list
* Server - online competitions, possibly in form of best of 3/5 and mo3/ao5
* Modal for manual adding times for those who prefer using stackmat alone

## How to run:
    git clone https://github.com/pawelkaczoruk/fru-timer.git && cd fru-timer
    npm install
#####  Development build
    npm run serve
##### Production build
    npm run build
