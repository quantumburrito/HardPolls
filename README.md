Here’s a revised README for "Hard Polls" with the new features and installation instructions updated based on the state of your project:

---

# Hard Polls Chrome Extension

The **Hard Polls** Chrome extension is an open-source tool that humorously replaces all instances of "election" with "erection" across web pages. This extension lightens the tone of political and current events, adding a bit of humor to your browsing experience.

## Project Status

The extension has been submitted to the Chrome Web Store and is pending review. Once approved, it will be available for download. Meanwhile, you can install and test it locally.

## Current Features

-[x] **Automatic Text Replacement**: Changes "election" to "erection" and "elect" to "erect" on all web pages you visit.

## Upcoming Features
-[ ] **Toggle On/Off**: An upcoming feature to allow users to enable or disable the extension without reinstalling it.
-[ ] **Persistent Toggle State**: The extension will remember your toggle preference even after restarting Chrome.
-[ ]  **Dynamic Reloading**: Text replacements will refresh dynamically based on the toggle state.
-[ ]  **Lightweight and Non-Intrusive**: Runs seamlessly in the background, enhancing your browsing experience with minimal impact on performance.

-[ ]  **About Section**: A new section in the extension interface providing details on the project and its contributors.
-[ ]  **Additional Tests**: More tests to improve robustness and coverage, especially for toggle functionality and edge cases.

## Installation and Running Locally

If you’d like to test the extension before it’s available on the Chrome Web Store, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/quantumburrito/hard-polls.git
   cd hard-polls
   ```

2. **Install Dependencies**:
   Ensure Node.js is installed, then run:
   ```bash
   npm install
   ```

3. **Build the Extension**:
   Compile the TypeScript code using Webpack:
   ```bash
   npm run build
   ```

4. **Load the Extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** by toggling the switch in the top right corner.
   - Click on **Load unpacked** and select the `dist` folder in your project directory.

5. **Testing the Extension**:
   - Go to any webpage containing the word "election" to see the extension in action.

## Contributing

We welcome contributions to the Hard Polls project! If you’d like to add features or fix issues, please follow these steps:

1. **Fork the Repository**.
2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/hard-polls.git
   cd hard-polls
   ```

3. **Create a Branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Implement Your Changes**.

5. **Run Tests**: Before submitting, ensure all tests pass:
   ```bash
   npm test
   ```

6. **Commit and Push Your Changes**:
   ```bash
   git add .
   git commit -m "Add description of your changes"
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**: Go to the original repository and click **New Pull Request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

Thanks to all contributors for helping make this project fun and functional!

For questions or suggestions, please contact the project maintainer: [quantumburrito](https://github.com/quantumburrito).

---

This README reflects the project's current state and goals. Let me know if there’s anything specific you’d like to expand on, like the new features’ technical details or usage tips.