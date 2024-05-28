export const formatNumber = (number) => {
  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};

export const mean = (data) => {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i];
  }
  const result = total / data.length;
  return parseFloat(result.toFixed(2));
};

export const sum = (data) => {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i];
  }
  return total;
};

export const sigmaVariable = (independent, dependent) => {
  let sigmaX = 0;
  let sigmaY = 0;

  for (let i = 0; i < independent.length; i++) {
    sigmaX += independent[i];
  }

  for (let i = 0; i < dependent.length; i++) {
    sigmaY += dependent[i];
  }

  return [`sigma X adalah ${sigmaX}`, `sigma Y adalah ${sigmaY}`];
};

export const productOfPairs = (independent, dependent) => {
  let sigmaXy = 0;
  const results = [];
  for (let i = 0; i < independent.length; i++) {
    const product = independent[i] * dependent[i];
    sigmaXy += product;
    results.push(`x.y ke-${i + 1} x.y = ${product}`);
  }
  results.push(`sigma x.y adalah ${sigmaXy}`);
  return results;
};

export const printQuadratics = (data, label) => {
  let sigma = 0;
  const results = [];
  for (let i = 0; i < data.length; i++) {
    const quadratic = data[i] ** 2;
    sigma += quadratic;
    results.push(`${label}^2 ke-${i + 1} ${label}^2 = ${quadratic}`);
  }
  results.push(`sigma ${label}^2 adalah ${sigma}`);
  return results;
};

// coeficient function
export const correlationCoefficient = (x, y) => {
  const n = x.length;
  const sumX = sum(x);
  const sumY = sum(y);
  const sumXY = x.reduce((acc, _, i) => acc + x[i] * y[i], 0);
  const sumX2 = x.reduce((acc, xi) => acc + xi ** 2, 0);
  const sumY2 = y.reduce((acc, yi) => acc + yi ** 2, 0);

  const numerator = n * sumXY - sumX * sumY;
  let denominator = Math.sqrt(
    (n * sumX2 - sumX ** 2) * (n * sumY2 - sumY ** 2)
  );

  // Format denominator to two decimal places
  denominator = parseFloat(denominator);

  const correlation = numerator / denominator;
  return parseFloat(correlation);
};

export const coefficientOfDetermination = (r) => {
  return parseFloat(r ** 2);
};

export const coefficientOfDeterminationPersentation = (r) => {
  return `${r * 100}%`;
};
