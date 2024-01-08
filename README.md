# Emoji search - Exercise with React

Exercise made during fullstack developper bootcamp training provided by [Le Reacteur](https://www.lereacteur.io/).  
Fourth part: [React](https://react.dev/blog/2023/03/16/introducing-react-dev).

## Purpose & learnings

Purpose: a search engine to find and copy emojis from a `JSON` file (containing 1800 elements).

Learnings:

- `onChange` event and `state` use in the search bar, to change emojis list diplay at each letter input.
- Research matching emojis from keywords lists associated with each emoji.
- `navigator.clipboard.writeText` function use to copy the emojis to the clipboard.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
