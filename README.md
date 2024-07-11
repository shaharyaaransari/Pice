# Pice

  # Deployed link
       https://pice-five.vercel.app/
  

  ## Description
  This project is a frontend-only implementation of Anti-Chess, a variant of traditional chess where the goal is to lose all your pieces. The game follows the rules of Anti-Chess, which can be found in detail here. The project is built using React.


  ## Features
* Standard Chess Moves: All pieces move the same way they do in standard chess.
* Capturing is Mandatory: If a player can capture a piece, they must do so.
* Turn-Based Play: The system alternates turns between two players.
* Win Detection: The system detects when a player has won.
* Move Validation: The system checks for illegal moves and prompts the player to enter a valid move.
* Quit Option: Players can quit the game, upon which the other player wins.

## Tech Stack
* React: A JavaScript library for building user interfaces.
* Context API: For managing global state.
* CSS Modules: For styling the components.
* SweetAlert2: For displaying alerts (used for the winner announcement).

## How to Play
1. Start the game: Open the app in your browser.
2. Make a move: Click on a piece and then click on the destination square.
3. Capture if possible: If a capture is possible, you must make a capture.
4. Turn alternates: After a valid move, the turn changes to the other player.
5. Winning: The game detects and announces the winner when a player loses all their pieces.
6. Quitting: Use the quit button to concede the game and let the other player win.
