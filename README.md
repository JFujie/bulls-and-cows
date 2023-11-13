# Bulls and Cows - Built with Javascript

This project implements a console-based Bulls and Cows game where players can either guess the secret number or let the computer guess their secret number.

## Reasoning and Approach

My goal with this project was to learn more about object based programming and structuring. I wanted my code to be easy to read and maintain.
I kept the functionality and features of the game very basic to focus on my mentioned goals.

### Key Appoaches:

_Object-Based Programming_: Embracing the principles of object-oriented programming, I used classes and objects to encapsulate functionality, promoting a modular and organized code structure.

_Modular Code Design_: To enhance readability and future maintenance, I adopted a modular approach by dividing the code into distinct files, each dedicated to a specific task or functionality. This separation promotes clarity and allows for easier navigation within the project.

### Achievements:

_I learned A LOT_: The project served as a valuable learning experience, providing insights into effective code organization, the practical application of object-oriented principles, and the importance of maintainability in software development.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Game Modes](#game-modes)
- [Gameplay](#gameplay)
- [Dependencies](#dependencies)

## Overview

Bulls and Cows is a game where one player (or the computer) generates a secret 4-digit number, and the other player tries to guess it. After each guess, the player receives feedback on the number of "bulls" (correct digits in the correct position) and "cows" (correct digits in the wrong position). The game continues until the correct number is guessed.

## Features

- Player vs. Computer mode
- Computer vs. Player mode
- Game statistics tracking
- User-friendly console interface
- Manual with game rules

## Getting Started

1. _Clone the repository_:

   - git clone https://github.com/JFujie/bulls-and-cows.git

2. _Navigate to the project folder_:

   - cd bulls-and-cows

3. _Install dependencies_:

   - npm install

4. _Run the game_:
   - npm start

## Game Modes

1. _Player Guesses Number_

- The human player guesses the computer generated secret number.

2. _Computer Guesses Number_

- The human player generates a secret number and the computer tries to guess it.

3. _Show your statistics_

- View your game statistics, inluding games played, attempts and game result (win or quit).

4. _Show Computer Statistics_

- View Computer Player statistics, inluding games played, attempts and game result (win or quit).

5. _How to Play_

- Access the game manual to understand rules and controles

6. _Close Application_

- Quit the game and close Application

## Gameplay

- Enter your choices according the the displayed menu.
- Follow the on-screen instructions to make guesses or set the secret number.
- Receive feedback on each guess, including the number of bulls and cows.
- View game statistics to track your performance

## Dependencies

- _readline-sync_
