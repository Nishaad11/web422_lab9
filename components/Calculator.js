// Feature: scientific notation (E button)
import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleDigit = (val) => {
    setDisplay((prev) => (prev === "0" ? String(val) : prev + val));
  };

  const handleOperator = (op) => {
    setDisplay((prev) => prev + op);
  };

  const handleEquals = () => {
    try {
      const result = eval(display);
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleScientific = () => {
    setDisplay((prev) => (prev === "0" ? "E" : prev + "E"));
  };

  const btnStyle = (bg) => ({
    background: bg,
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "1.3rem",
    fontFamily: "'Courier New', monospace",
    fontWeight: "700",
    padding: "18px",
    cursor: "pointer",
    transition: "filter 0.15s",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  });

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#1a1a2e",
    }}>
      <div style={{
        background: "#16213e",
        borderRadius: "20px",
        padding: "28px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        width: "320px",
      }}>
        {/* Display */}
        <input
          readOnly
          value={display}
          data-testid="display"
          style={{
            width: "100%",
            boxSizing: "border-box",
            background: "#0f3460",
            color: "#e94560",
            fontFamily: "'Courier New', monospace",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "right",
            border: "2px solid #e94560",
            borderRadius: "12px",
            padding: "14px 18px",
            marginBottom: "20px",
            letterSpacing: "2px",
          }}
        />

        {/* Buttons Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
          {/* Row 1 */}
          <button data-testid="btn-clear" style={{ ...btnStyle("#e94560"), gridColumn: "span 2" }} onClick={handleClear}>C</button>
          <button data-testid="btn-E" style={btnStyle("#533483")} onClick={handleScientific}>E</button>
          <button data-testid="btn-divide" style={btnStyle("#0f3460")} onClick={() => handleOperator("/")}>/</button>

          {/* Row 2 */}
          <button data-testid="btn-7" style={btnStyle("#1a1a2e")} onClick={() => handleDigit("7")}>7</button>
          <button data-testid="btn-8" style={btnStyle("#1a1a2e")} onClick={() => handleDigit("8")}>8</button>
          <button data-testid="btn-9" style={btnStyle("#1a1a2e")} onClick={() => handleDigit("9")}>9</button>
          <button data-testid="btn-multiply" style={btnStyle("#0f3460")} onClick={() => handleOperator("*")}>*</button>

          {/* Row 3 */}
          <button data-testid="btn-4" style={btnStyle("#1a1a2e")} onClick={() => handleDigit("4")}>4</button>
          <button data-testid="btn-5" style={btnStyle("#1a1a2e")} onClick={() => handleDigit("5")}>5</button>
          <button data-testid="btn-6" style={btnStyle("#1a1a2e")} onClick={() => handleDigit("6")}>6</button>
          <button data-testid="btn-subtract" style={btnStyle("#0f3460")} onClick={() => handleOperator("-")}>-</button>

          {/* Row 4 */}
          <button data-testid="btn-1" style={btnStyle("#1a1a2e")} onClick={() => handleDigit("1")}>1</button>
          <button data-testid="btn-2" style={btnStyle("#1a1a2e")} onClick={() => handleDigit("2")}>2</button>
          <button data-testid="btn-3" style={btnStyle("#1a1a2e")} onClick={() => handleDigit("3")}>3</button>
          <button data-testid="btn-add" style={btnStyle("#0f3460")} onClick={() => handleOperator("+")}>+</button>

          {/* Row 5 */}
          <button data-testid="btn-0" style={{ ...btnStyle("#1a1a2e"), gridColumn: "span 3" }} onClick={() => handleDigit("0")}>0</button>
          <button data-testid="btn-equals" style={btnStyle("#e94560")} onClick={handleEquals}>=</button>
        </div>
      </div>
    </div>
  );
}
