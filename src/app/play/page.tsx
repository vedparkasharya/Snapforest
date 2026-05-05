"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Gamepad2, RotateCcw, Trophy } from "lucide-react";

const GRID_SIZE = 20;
const INITIAL_SPEED = 150;

export default function PlayPage() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 0, y: -1 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const speedRef = useRef(INITIAL_SPEED);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  const generateFood = useCallback((currentSnake: { x: number; y: number }[]) => {
    let newFood: { x: number; y: number };
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, []);

  const resetGame = useCallback(() => {
    const initialSnake = [{ x: 10, y: 10 }];
    setSnake(initialSnake);
    setFood(generateFood(initialSnake));
    setDirection({ x: 0, y: -1 });
    setIsPlaying(false);
    setGameOver(false);
    setScore(0);
    speedRef.current = INITIAL_SPEED;
    if (gameLoopRef.current) clearTimeout(gameLoopRef.current);
  }, [generateFood]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying && !gameOver && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        setIsPlaying(true);
      }
      if (gameOver) return;
      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, isPlaying, gameOver]);

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const gameLoop = () => {
      setSnake((currentSnake) => {
        const newHead = {
          x: currentSnake[0].x + direction.x,
          y: currentSnake[0].y + direction.y,
        };

        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE ||
          currentSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
        ) {
          setGameOver(true);
          setIsPlaying(false);
          setHighScore((prev) => Math.max(prev, score));
          return currentSnake;
        }

        const newSnake = [newHead, ...currentSnake];

        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 10);
          setFood(generateFood(newSnake));
          speedRef.current = Math.max(50, speedRef.current - 3);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });

      gameLoopRef.current = setTimeout(gameLoop, speedRef.current);
    };

    gameLoopRef.current = setTimeout(gameLoop, speedRef.current);
    return () => {
      if (gameLoopRef.current) clearTimeout(gameLoopRef.current);
    };
  }, [isPlaying, gameOver, direction, food, score, generateFood]);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
            <Gamepad2 className="w-6 h-6 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Snapforest Snake</h1>
          <p className="text-gray-400 text-sm">Use arrow keys to play. Eat the green dots!</p>
        </motion.div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <span className="text-gray-500">Score:</span>{" "}
              <span className="text-white font-bold">{score}</span>
            </div>
            <div className="text-sm flex items-center gap-1">
              <Trophy className="w-3 h-3 text-emerald-400" />
              <span className="text-gray-500">Best:</span>{" "}
              <span className="text-emerald-400 font-bold">{highScore}</span>
            </div>
          </div>
          <button
            onClick={resetGame}
            className="flex items-center gap-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 text-sm rounded-lg transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        </div>

        <div className="relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden aspect-square">
          {/* Grid */}
          <div
            className="absolute inset-0 grid"
            style={{
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
            }}
          >
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
              <div
                key={i}
                className={`border border-white/[0.03] ${
                  (Math.floor(i / GRID_SIZE) + (i % GRID_SIZE)) % 2 === 0
                    ? "bg-zinc-900/50"
                    : "bg-zinc-900"
                }`}
              />
            ))}
          </div>

          {/* Snake */}
          {snake.map((segment, i) => (
            <div
              key={i}
              className="absolute transition-all duration-75"
              style={{
                left: `${(segment.x / GRID_SIZE) * 100}%`,
                top: `${(segment.y / GRID_SIZE) * 100}%`,
                width: `${100 / GRID_SIZE}%`,
                height: `${100 / GRID_SIZE}%`,
              }}
            >
              <div
                className={`w-full h-full rounded-sm ${
                  i === 0 ? "bg-emerald-400 shadow-lg shadow-emerald-400/30" : "bg-emerald-500/60"
                }`}
              />
            </div>
          ))}

          {/* Food */}
          <div
            className="absolute transition-all duration-300"
            style={{
              left: `${(food.x / GRID_SIZE) * 100}%`,
              top: `${(food.y / GRID_SIZE) * 100}%`,
              width: `${100 / GRID_SIZE}%`,
              height: `${100 / GRID_SIZE}%`,
            }}
          >
            <div className="w-full h-full rounded-full bg-rose-500 shadow-lg shadow-rose-500/30 animate-pulse" />
          </div>

          {/* Game Over Overlay */}
          {gameOver && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-white mb-2">Game Over!</h2>
              <p className="text-gray-400 mb-4">Final Score: {score}</p>
              <button
                onClick={resetGame}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-colors"
              >
                Play Again
              </button>
            </div>
          )}

          {/* Start Prompt */}
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center">
              <p className="text-gray-300 mb-4">Press any arrow key to start</p>
            </div>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="mt-6 grid grid-cols-3 gap-2 max-w-[200px] mx-auto sm:hidden">
          <div />
          <button
            onClick={() => { setDirection({ x: 0, y: -1 }); setIsPlaying(true); }}
            className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white active:bg-emerald-500/20"
          >
            ↑
          </button>
          <div />
          <button
            onClick={() => { setDirection({ x: -1, y: 0 }); setIsPlaying(true); }}
            className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white active:bg-emerald-500/20"
          >
            ←
          </button>
          <button
            onClick={() => { setDirection({ x: 0, y: 1 }); setIsPlaying(true); }}
            className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white active:bg-emerald-500/20"
          >
            ↓
          </button>
          <button
            onClick={() => { setDirection({ x: 1, y: 0 }); setIsPlaying(true); }}
            className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white active:bg-emerald-500/20"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
