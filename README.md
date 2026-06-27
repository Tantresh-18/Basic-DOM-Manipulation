# Task 3: Smart Counter Dashboard

An advanced counter dashboard that features user configurations, event history logging, keyboard shortcut triggers, and data persistence. It supports light/dark theme switching and dynamic custom adjustments.

---

## File 

- [index.html](./index.html): Document layout displaying counts, action logs, custom inputs, and theme buttons.
- [style.css](./style.css): Defines color styles for dark mode (default) and light mode theme overlays.
- [script.js](./script.js): Logic managing count state, persistence, event logs, and keyboard shortcuts.

---

##  Features & Functionality

1. **Persistent Count State**:
   - Save current counter states inside browser `localStorage`.
   - Reloads the last recorded value immediately upon page refresh.
2. **Flexible Control Panel**:
   - **Increment (`+`) / Decrement (`-`)**: Modifies the count value. The counter stops at `0` to prevent negative numbers.
   - **Reset**: Restores count value back to `0`.
   - **Custom Increments**: Input field allows entering any custom number, then adds it directly to the total.
3. **Keyboard Shortcuts**:
   - Triggers quick increments by pressing the `+` key.
   - Triggers quick decrements by pressing the `-` key.
4. **Theme Switcher**:
   - Includes a circular button to toggle themes.
   - Toggles a `.light` theme class on the body to switch colors.
5. **Activity Log Feed**:
   - Dynamically prepends a history item to the log feed detailing every change (e.g. `Increment → 1`, `Added 15 → 16`, `Reset → 0`).

---

## Technology Stack

- **Structure**: Semantic HTML5 (dashboard cards, logs list)
- **Styling**: Vanilla CSS3 custom variables
- **Interactivity**: Vanilla JavaScript (ES6 keyboard capture listeners, LocalStorage API)

---

##  How to Run

Open [index.html](./index.html) directly in your browser.
