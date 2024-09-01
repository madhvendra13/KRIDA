import React, { useEffect, useRef, useState } from "react";
import "./GameWindow.css";

function GameWindow2({ selectedAsset }) {
  const canvasRef = useRef(null);
  const [game, setGame] = useState({
    env: {
      type: "forest", // forest | desert
      color: "green", // green | yellow
    },
    car: {
      type: "sports", // sports | race
      color: "white", // white | red
      pos: { x: 100, y: 100 },
    },
    track: {
      type: "asphalt", // dirt | asphalt
    },
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Draw environment
    ctx.fillStyle = game.env.color === "green" ? "#228B22" : "#EDC9AF"; // Forest green or desert sand color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill entire canvas

    // Draw environment text
    ctx.fillStyle = "#000000"; // Black text color
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.fillText(`Environment: ${game.env.type}`, canvas.width / 2, 50); // Display environment type at the top center

    // Draw car
    ctx.fillStyle = game.car.color === "white" ? "#FFFFFF" : "#FF0000"; // White or red color
    const carWidth = 100;
    const carHeight = 100;
    ctx.fillRect(game.car.pos.x, game.car.pos.y, carWidth, carHeight); // Draw car at its current position

    // Draw car text
    ctx.fillStyle = "#000000"; // Black text color
    ctx.font = "20px Arial";
    ctx.fillText(
      `Car: ${game.car.type}`,
      canvas.width / 2,
      game.car.pos.y + carHeight + 30
    ); // Display car type below the car
  }, [game]);

  // Handle gamepad input
  useEffect(() => {
    let gameLoopId;

    const handleGamepadInput = () => {
      const gamepads = navigator.getGamepads();
      if (!gamepads[0]) return;

      const gp = gamepads[0];

      //env
      if (gp.buttons[0].pressed) {
      console.log('ssss',gp.buttons[0].pressed)
      // Up
      setGame((prev) => ({
        ...prev,
        env: {
          type: "forest" ,
          color: "green" ,
        },
      }));
      }
      if (gp.buttons[1].pressed) {
        console.log('kkkk',gp.buttons[0].pressed)
        // Up
        setGame((prev) => ({
          ...prev,
          env: {
            type: prev.env.type === "desert" ,
            color: prev.env.color === "yellow",
          },
        }));
        }
      if (gp.buttons[12].pressed) {
        // Up
        setGame((prev) => ({
          ...prev,
          car: { ...prev.car, pos: { ...prev.car.pos, y: prev.car.pos.y - 10 } },
        }));
      }
      if (gp.buttons[13].pressed) {
        // Down
        setGame((prev) => ({
          ...prev,
          car: { ...prev.car, pos: { ...prev.car.pos, y: prev.car.pos.y + 10 } },
        }));
      }
      if (gp.buttons[14].pressed) {
        // Left
        setGame((prev) => ({
          ...prev,
          car: { ...prev.car, pos: { ...prev.car.pos, x: prev.car.pos.x - 10 } },
        }));
      }
      if (gp.buttons[15].pressed) {
        // Right
        setGame((prev) => ({
          ...prev,
          car: { ...prev.car, pos: { ...prev.car.pos, x: prev.car.pos.x + 10 } },
        }));
      }

      gameLoopId = requestAnimationFrame(handleGamepadInput);
    };

    // Start the game loop when the gamepad is connected
    window.addEventListener("gamepadconnected", () => {
      gameLoopId = requestAnimationFrame(handleGamepadInput);
    });

    // Stop the game loop when the gamepad is disconnected
    window.addEventListener("gamepaddisconnected", () => {
      cancelAnimationFrame(gameLoopId);
    });

    return () => {
      cancelAnimationFrame(gameLoopId); // Clean up on unmount
    };
  }, []);

  const toggleCar = () => {
    setGame((prev) => ({
      ...prev,
      car: {
        type: prev.car.type === "race" ? "sports" : "race",
        color: prev.car.color === "white" ? "red" : "white",
        pos: { ...prev.car.pos },
      },
    }));
  };

  const toggleEnv = () => {
    setGame((prev) => ({
      ...prev,
      env: {
        type: prev.env.type === "forest" ? "desert" : "forest",
        color: prev.env.color === "green" ? "yellow" : "green",
      },
    }));
  };

  return (
    <div>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100vh" }}></canvas>
      <button onClick={toggleCar}>Toggle Car</button>
      <button onClick={toggleEnv}>Toggle ENV</button>
    </div>
  );
}

export default GameWindow2;
