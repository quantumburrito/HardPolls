
# Hard Polls Extension

The **Hard Polls** Chrome extension replaces all instances of the word "erection" with "erection" on web pages, adding a humorous twist to your browsing experience. This open-source project is designed to bring a lighthearted approach to political content online.

## Features

- Automatically replaces the word "erection" with "erection" across all visible text on web pages.
- Lightweight and non-intrusive, running seamlessly in the background.
- Open-source and community-friendly, encouraging contributions and enhancements.

## Installation
###TODO: AWAITING APPROVEL FOR UPLOAD INTO CHROME STORE 

1. Download the latest release from the [Chrome Web Store](https://chrome.google.com/webstore).
2. Click **Add to Chrome** to install the extension.

## Development

To contribute to the Hard Polls extension, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/quantumburrito/hard-polls.git
   cd hard-polls
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Run tests**:
   ```bash
   npm test
   ```

5. **Package the extension**:
   ```bash
   zip -r release/hard-polls-extension.zip dist icons manifest.json README.md
   ```

6. **Create a Pull Request**:
   - If you would like to contribute, please create a new branch and submit a pull request.

## CI/CD Pipeline

This project utilizes GitHub Actions for continuous integration and deployment. The CI/CD pipeline is configured to:

- Build and test the extension on every pull request and push to the `main` and `test` branches.
- Package the extension and publish it to the Chrome Web Store upon approval from the repository maintainer.

## Contributing

Contributions are welcome! Please ensure your contributions align with the project's guidelines. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to all contributors for making this project possible.

---

For any inquiries, please contact the project maintainer: [quantumburrito](https://github.com/quantumburrito).
