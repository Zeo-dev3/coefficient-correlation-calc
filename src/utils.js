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

  return [
    `sigma X adalah ${formatNumber(sigmaX)}`,
    `sigma Y adalah ${formatNumber(sigmaY)}`,
  ];
};

export const productOfPairs = (independent, dependent) => {
  let sigmaXy = 0;
  const results = [];
  for (let i = 0; i < independent.length; i++) {
    const product = independent[i] * dependent[i];
    sigmaXy += product;
    results.push(`x.y ke-${i + 1} x.y = ${formatNumber(product)}`);
  }
  results.push(`sigma x.y adalah ${formatNumber(sigmaXy)}`);
  return results;
};

export const printQuadratics = (data, label) => {
  let sigma = 0;
  const results = [];
  for (let i = 0; i < data.length; i++) {
    const quadratic = data[i] ** 2;
    sigma += quadratic;
    results.push(
      `${label}^2 ke-${i + 1} ${label}^2 = ${formatNumber(quadratic)}`
    );
  }
  results.push(`sigma ${label}^2 adalah ${formatNumber(sigma)}`);
  return results;
};
