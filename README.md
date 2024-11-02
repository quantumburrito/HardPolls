
# Hard Polls Extension

The **Hard Polls** Chrome extension is a fun, open-source tool designed to replace all instances of the word "election" with "erection" on web pages, adding a humorous twist to political content. This extension aims to lighten the often serious nature of political discourse online, making browsing a bit more entertaining.

## Project Status

The extension is currently in a stable state. It has been thoroughly tested locally and all tests have passed. The next steps involve registering as a developer with the Chrome Web Store, creating a description for the extension, and submitting it for approval. Once approved, the extension will be available for download through the Chrome Web Store.

## Features

- **Automatic Text Replacement**: Instantly replaces the word "election" with "erection" on any web page you visit.
- **Lightweight and Non-Intrusive**: Runs seamlessly in the background without disrupting your browsing experience.
- **Open-Source and Community-Driven**: Contributions are welcome, and the project encourages community involvement.

## Installation and Running Locally

To install and run the Hard Polls extension locally without using the Chrome Web Store, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/quantumburrito/hard-polls.git
   cd hard-polls
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
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
   - Click on **Load unpacked** and select the `dist` folder of your project.

5. **Test the Extension**:
   - Navigate to any web page that contains the word "election" to see the extension in action!

## Contributing

Contributions to the Hard Polls project are welcome! To contribute, please follow these steps:

1. **Fork the Repository**: Click the **Fork** button at the top right of this repository page to create your copy.

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/hard-polls.git
   cd hard-polls
   ```

3. **Create a Branch**: For new features or fixes, create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**: Implement your changes in the codebase.

5. **Run Tests**: Ensure all tests pass by running:
   ```bash
   npm test
   ```

6. **Commit Your Changes**:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

7. **Push Your Branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**: Navigate to the original repository and click **New Pull Request** to submit your changes for review.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to all contributors for making this project possible.

---

For any inquiries or suggestions, please contact the project maintainer: [quantumburrito](https://github.com/quantumburrito).
