// Show a map centered at latitude / longitude.(Get current location)
navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    
  });

  // Show a map centered at latitude / longitude.()
  const watchId = navigator.geolocation.watchPosition(position => {
    const { latitude, longitude } = position.coords;
    
  });