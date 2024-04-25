'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

if (navigator.geolocation) {
  console.log(navigator.geolocation);
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(latitude, longitude); // 21.2041728 72.8301568
      console.log(`https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu
`);

      map = L.map('map', {
        center: [latitude, longitude],
        zoom: 13,
      }); // .setView([latitude, longitude], 14);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
        foo: 'bar',
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function () {
      alert('could not get position');
    }
  );
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(mapEvent);

  inputDistance.value =
    inputDuration.value =
    inputElevation.value =
    inputCadence.value =
      '';

  const { lat, lng } = mapEvent.latlng;

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 230,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();
});

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
