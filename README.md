# js_openAI_beginner
js+node.js+vercel. This repository contains a beginner-friendly JavaScript application that utilizes the OpenAI API to create a chat interface with a language model.
The main goal is to show how to save your private key safely while giving other users to assess and run your application. You will learn about server-side vs client-side environments.

## Getting Started

These instructions will help you get the project up and running.

### Prerequisites

- Basic understand of how OpenAI API works. Here is a bisic repo for that: https://github.com/pgrach/js_openai_api/
- Node.js: Make sure you have Node.js installed on your machine. You can download it from the official website: [Node.js](https://nodejs.org/)
- Visual Studio Code (or any other preferred code editor)
- Basic knowledge of JavaScript
- OpenAI API key (sign up at [OpenAI](https://openai.com/) if you don't have one)
- Created Vercel profile
 
### Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/pgrach/js_openAI_beginner.git```

2. Navigate to the project directory.

3. Install the dependencies:
```npm install```

4. Set up the environment variables:
- Add your OpenAI key to Vercel's environment variables. Go to the settings of your Vercel project.
  There, you should find the option to add environment variables. Add a new variable with the name OPENAI_KEY
  and the value being your actual OpenAI API key. Make sure to add it for all the environments (Development, Preview, and Production)
  in which you want to use the OpenAI API.

### Built With
- JavaScript
- Node.js
- OpenAI API
- Vercel (for deployment)

### Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.
