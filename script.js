async function loadData() {
  const res = await fetch('data.json');
  const data = await res.json();

  document.getElementById('co2').textContent = data.co2 + ' ppm';
  document.getElementById('ocean').textContent = data.ocean + ' mm';
  document.getElementById('temp').textContent = data.temp + ' °C';
}

// Simulate live update
function randomizeData() {
  const co2 = 415 + Math.random() * 5;
  const ocean = 102 + Math.random() * 2;
  const temp = 14.8 + Math.random() * 0.3;
  return { co2: co2.toFixed(2), ocean: ocean.toFixed(1), temp: temp.toFixed(2) };
}

function updateDashboard() {
  const newData = randomizeData();
  document.getElementById('co2').textContent = newData.co2 + ' ppm';
  document.getElementById('ocean').textContent = newData.ocean + ' mm';
  document.getElementById('temp').textContent = newData.temp + ' °C';
}

loadData();
setInterval(updateDashboard, 5000);
