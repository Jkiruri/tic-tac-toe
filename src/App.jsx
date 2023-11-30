function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">player 1</span>
              <span className="player-symbol">x</span>
            </span>
            <button>edit</button>
          </li>
          <li>
            <span className="player">
              <span className="player-name">player 2</span>
              <span className="player-symbol">0</span>
            </span>
            <button>edit</button>
          </li>
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
