import { useState } from "react";
import {
  mean,
  sum,
  productOfPairs,
  sigmaVariable,
  printQuadratics,
  formatNumber,
} from "./utils";

function App() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [results, setResults] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const parseX = x.split(",").map(Number);
    const parseY = y.split(",").map(Number);

    const meanX = mean(parseX);
    const meanY = mean(parseY);

    const sigmaX = sum(parseX);
    const sigmaY = sum(parseY);

    const sigmaVariables = sigmaVariable(parseX, parseY);
    const productPairs = productOfPairs(parseX, parseY);
    const quadraticsX = printQuadratics(parseX, "x");
    const quadraticsY = printQuadratics(parseY, "y");

    setResults({
      meanX: formatNumber(meanX),
      meanY: formatNumber(meanY),
      sigmaX: formatNumber(sigmaX),
      sigmaY: formatNumber(sigmaY),
      sigmaVariables,
      productPairs,
      quadraticsX,
      quadraticsY,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Statistical Calculator
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Data X:</label>
            <input
              type="text"
              value={x}
              onChange={(e) => setX(e.target.value)}
              placeholder="Enter comma-separated values"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Data Y:</label>
            <input
              type="text"
              value={y}
              onChange={(e) => setY(e.target.value)}
              placeholder="Enter comma-separated values"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-700"
          >
            Calculate
          </button>
        </form>
        {results.meanX && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Results</h2>
            <p>
              <strong>Mean X:</strong> {results.meanX}
            </p>
            <p>
              <strong>Mean Y:</strong> {results.meanY}
            </p>
            <p>
              <strong>Sum X:</strong> {results.sigmaX}
            </p>
            <p>
              <strong>Sum Y:</strong> {results.sigmaY}
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-medium">Sigma Variables</h3>
              {results.sigmaVariables.map((res, index) => (
                <p key={index}>{res}</p>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">Product of Pairs</h3>
              {results.productPairs.map((res, index) => (
                <p key={index}>{res}</p>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">Quadratics X</h3>
              {results.quadraticsX.map((res, index) => (
                <p key={index}>{res}</p>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">Quadratics Y</h3>
              {results.quadraticsY.map((res, index) => (
                <p key={index}>{res}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
