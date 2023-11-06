# Bubble Text Simulator

![Bubble Text Simulator Demo](https://imgur.com/OeRNoG5.gif)

## Description

This project provides a tool to simulate text bubbles on a green background, which can be used as a visual effect (VFX) for videos. It allows you to customize the background color of the text and the width of the text bubbles.

## Todo List

- [ ] Implement a feature to automatically remove the oldest message after a few seconds, based on the word count, allowing users to read the entire text before it disappears.


## Features

- Configure the background color of the text.
- Adjust the width of the text bubbles.

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/codechappie/bubble-messages.git
```

2. Navigate to the project directory:

```bash
cd bubble-messages
```

3. Install the dependencies:

```bash
npm install
# or
yarn install
```

## Usage

1. Start the application:

```bash
npm run dev
# or
yarn dev
```

2. Open your browser and go to http://localhost:3000.

3. Type your text on the green background and adjust the settings to your preferences.

## Pending Feature

Automatically remove the oldest message after a few seconds, depending on the word count, allowing the entire text to be read before disappearing

## Contributions

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your changes:

```bash
git checkout -b feature/new_feature
```

3. Make your changes and commit:

```bash
git add .
git commit -m "fix: [description of the change]"   # For fixes
# or
git commit -m "feat: [description of the change]"  # For new features
```

4. Push to your branch:

```bash
git push origin feature/new_feature
```

5. Open a Pull Request on GitHub.

## Pull Request format

* `fix: …` will bump the fix version, e.g. 1.2.3 → 1.2.4
* `feat: …` will bump the feature version, e.g. 1.2.3 → 1.3.0

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).