# TODO: Fix Inconsistent Dark Mode

## Steps to Complete

- [x] Update tailwind.config.cjs to add cardDark: '#252525' and borderDark: '#333'
- [x] Update src/index.css to use bg-chatgptDark instead of bg-gray-900
- [x] Remove bg-[#1e1e1e] from index.html body class
- [x] Replace bg-[#1e1e1e] with bg-chatgptDark in src/App.jsx
- [x] Replace bg-[#252525] with bg-cardDark in src/App.jsx
- [x] Replace bg-[#1e1e1e] with bg-chatgptDark in src/pages/Login.jsx
- [x] Replace bg-[#252525] with bg-cardDark in src/pages/Login.jsx
- [x] Replace bg-[#1e1e1e] with bg-chatgptDark in src/pages/Demo.jsx
- [x] Replace bg-[#252525] with bg-cardDark in src/pages/Demo.jsx
- [x] Replace border-[#333] with border-borderDark in src/components/AuthCard.jsx
- [x] Test the app to ensure consistent dark mode appearance
