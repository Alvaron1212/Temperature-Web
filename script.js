const Display = document.getElementById('temperature-display');
const LatitudeInput = document.getElementById('latitude');
const LongitudeInput = document.getElementById('longitude');


function GetTemperature(){
  let Latitude = Number(LatitudeInput.value);
  let Longitude = Number(LongitudeInput.value);
  
  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${Latitude}&longitude=${Longitude}&hourly=temperature_2m&current=temperature_2m&timezone=auto`)
  .then(res => res.json())
  .then(data => {
    Display.textContent = '~';
    
    setTimeout(() => {
      Display.textContent = Math.round(data.current.temperature_2m)
    }, 500);
  });
};

GetTemperature();
