function inputSearch(){
   const inputData = document.getElementById('inputField');
   const value = inputData.value;
   inputData.value = '';

   
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+value+'&appid=73b39cee90b144f3d322ce4a8a1e935e')
   .then(res => res.json())
   .then(data =>{
        const cityName = data.name;
        const tem = data.main.temp;
        const temp = tem - 273.15;
        const description = data.weather[0].description;

        document.getElementById('city').innerText = cityName;
        document.getElementById('temp').innerText = temp.toFixed(2);
        document.getElementById('des').innerText = description;
        
   })
}
