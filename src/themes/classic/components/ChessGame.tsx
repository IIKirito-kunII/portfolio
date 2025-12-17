import { Chess } from "chess.js";
import { useRef, useState } from "react";
import { Chessboard, type PieceDropHandlerArgs } from "react-chessboard";
function ChessGame() {
  const chessGameRef = useRef(new Chess());
  const chessGame = chessGameRef.current;
  const [chessPosition, setChessPosition] = useState(chessGame.fen());
  const [gameOutcome, setGameOutcome] = useState<string | null>(null);

  function makeRandomMove() {
    const possibleMoves = chessGame.moves();
    if (chessGame.isGameOver()) {
      setGameOutcome(getGameOutcomeMessage(chessGame));
      return;
    }
    const randomMove =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    chessGame.move(randomMove);
    setChessPosition(chessGame.fen());
  }

  function onPieceDrop({ sourceSquare, targetSquare }: PieceDropHandlerArgs) {
    if (!targetSquare) return false;
    try {
      chessGame.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });
      setChessPosition(chessGame.fen());
      setTimeout(makeRandomMove, 500);
      return true;
    } catch {
      return false;
    }
  }

  function getGameOutcomeMessage(game: Chess): string {
    if (game.isCheckmate()) {
      return `Checkmate! ${game.turn() === "w" ? "Black" : "White"} wins.`;
    }
    if (game.isDraw()) {
      return "Draw! (Stalemate, Threefold Repetition, or Insufficient Material)";
    }
    if (game.isStalemate()) {
      return "Stalemate! Game is a Draw.";
    }
    if (game.isThreefoldRepetition()) {
      return "Draw by Threefold Repetition.";
    }
    if (game.isInsufficientMaterial()) {
      return "Draw by Insufficient Material.";
    }
    return "Game Over!"; // Fallback
  }

  function restartGame() {
    chessGame.reset();
    setChessPosition(chessGame.fen());
    setGameOutcome(null);
  }

  const chessboardOptions = {
    position: chessPosition,
    onPieceDrop,
    id: "play-vs-random",
  };

  return (
    <div style={{ position: "relative" }}>
      <Chessboard options={chessboardOptions} />

      {gameOutcome && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "2px solid silver",
            padding: "20px",
            backgroundColor: "#C0C0C0",
            boxShadow: "2px 2px 0 #000, -2px -2px 0 #fff",
            fontFamily: "Tahoma, sans-serif",
            zIndex: 100,
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "15px",
              borderBottom: "1px solid #808080",
              paddingBottom: "5px",
            }}
          >
            Game Over! 🏆
          </div>
          <p>{gameOutcome}</p>
          <button
            onClick={restartGame}
            style={{
              marginTop: "15px",
              padding: "5px 15px",
              border: "2px outset #fff",
              backgroundColor: "#C0C0C0",
            }}
          >
            New Game
          </button>
        </div>
      )}
    </div>
  );
}

export default ChessGame;
