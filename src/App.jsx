import { useState } from "react";
import {
  mean,
  sum,
  productOfPairs,
  sigmaVariable,
  printQuadratics,
  formatNumber,
  correlationCoefficient,
  coefficientOfDetermination,
  coefficientOfDeterminationPersentation,
} from "./utils.js";

function App() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [results, setResults] = useState({});
  const [showInfo, setShowInfo] = useState(false);

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

    const correlation = correlationCoefficient(parseX, parseY);
    const determination = coefficientOfDetermination(correlation);

    setResults({
      meanX: formatNumber(meanX),
      meanY: formatNumber(meanY),
      sigmaX: formatNumber(sigmaX),
      sigmaY: formatNumber(sigmaY),
      sigmaVariables,
      productPairs,
      quadraticsX,
      quadraticsY,
      correlation: formatNumber(correlation),
      determination: formatNumber(determination),
      determinationPersentation:
        coefficientOfDeterminationPersentation(determination),
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Statistical Calculator
        </h1>
        <button
          className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          onClick={() => setShowInfo(!showInfo)}
        >
          i
        </button>
        {showInfo && (
          <div className="absolute top-12 right-4 bg-white p-4 border border-gray-300 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold">Information</h2>
            <p>
              This tool allows you to calculate various statistical metrics
              including mean, sum, correlation coefficient, and coefficient of
              determination based on input data sets X and Y.{" "}
              <strong>
                The correlation coefficient is rounded to two decimal places.
              </strong>
            </p>
            <a
              href="https://github.com/Zeo-dev3/coefficient-correlation-calc"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 mt-2 hover:underline"
            >
              Link to this project on GitHub
            </a>
            <button
              className="block mt-2 text-blue-500 hover:underline"
              onClick={() => setShowInfo(false)}
            >
              Close
            </button>
          </div>
        )}

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
            <div className="mt-4">
              <h3 className="text-lg font-medium">Correlation</h3>
              <p>{results.correlation}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">
                Coefficient of Determination
              </h3>
              <p>{results.determination}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">Determination Percentage</h3>
              <p>{results.determinationPersentation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
