import React, { useEffect, useRef } from 'react';
import './GameWindow.css';
import p5 from 'p5';

function GameWindow({ selectedAsset }) {
  const canvasRef = useRef(null);
  const p5InstanceRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const sketch = (p) => {
        p.setup = () => {
          p.createCanvas(1092,680).parent(canvasRef.current);
        };

        p.draw = () => {
          p.background(200);
          if (selectedAsset) {
            p.fill(0);
            p.textSize(24);
            p.textAlign(p.CENTER, p.CENTER);
            p.text(`Selected Asset: ${selectedAsset}`, p.width / 2, p.height / 2);

            switch (selectedAsset) {
              case 'Dirt Road':
                p.background(139, 69, 19);
                break;
              case 'Asphalt Road':
                p.background(50);
                break;
              case 'Gravel Road':
                p.background(128);
                break;
              case 'Paved Road':
                p.background(100);
                break;
              case 'Sports Car':
                p.fill(255, 0, 0);
                p.rect(p.width / 2 - 50, p.height / 2 - 25, 100, 50);
                break;
              case 'Race Car':
                p.fill(0, 0, 255);
                p.rect(p.width / 2 - 50, p.height / 2 - 25, 100, 50);
                break;
              case 'Forest':
                p.fill(34, 139, 34);
                p.rect(0, 0, p.width, p.height);
                break;
              case 'Desert':
                p.fill(255, 228, 181);
                p.rect(0, 0, p.width, p.height);
                break;
              case 'Cone':
                p.fill(255, 165, 0);
                p.triangle(p.width / 2 - 20, p.height / 2 + 20, p.width / 2 + 20, p.height / 2 + 20, p.width / 2, p.height / 2 - 20);
                break;
              case 'Barrier':
                p.fill(128, 128, 128);
                p.rect(p.width / 2 - 50, p.height / 2 - 20, 100, 40);
                break;
              case 'Star':
                p.fill(255, 223, 0);
                p.beginShape();
                for (let i = 0; i < 5; i++) {
                  let angle = p.TWO_PI / 5 * i;
                  let x = p.width / 2 + Math.cos(angle) * 50;
                  let y = p.height / 2 + Math.sin(angle) * 50;
                  p.vertex(x, y);
                }
                p.endShape(p.CLOSE);
                break;
              case 'Coin':
                p.fill(255, 215, 0);
                p.ellipse(p.width / 2, p.height / 2, 50);
                break;
              // Add more cases for other assets
              default:
                p.background(200);
            }
          }
        };
      };

      p5InstanceRef.current = new p5(sketch);
    }

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }
    };
  }, [selectedAsset]);

  return (
    <div className="game-window">
      <div className="game-area" ref={canvasRef}></div>
      <div className="game-controls">
        <button className="play-button">Play</button>
        <button className="stop-button">Stop</button>
        <button className="fullscreen-button">Fullscreen</button>
      </div>
    </div>
  );
}

export default GameWindow;
