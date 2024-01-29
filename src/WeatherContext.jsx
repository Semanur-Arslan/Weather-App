import React, { createContext, useContext, useReducer } from 'react'; // Gerekli importları ekledik


// öncelikle bir contex oluşturuyoruz
const WeatherContext = createContext()

// başlangıç durumunu belirliyoruz
const initialState = {
    selectedCity: 'Istanbul',
    weatherData: null,
  };

// weatherReducer ile state'in nasıl değiştireleceğini belirliyoruz.
// SET_SELECTED_CİTY eylemi selectedCity değerini günceller.
// SET_WEATHER_DATA eylemi ise weatherData değerini günceller.

  const weatherReducer = (state, action) => {
    switch (action.type) {
      case 'SET_SELECTED_CITY':
        return { ...state, selectedCity: action.payload };
      case 'SET_WEATHER_DATA':
        return { ...state, weatherData: action.payload };
      default:
        return state;
    }
  };
  

// WeatherProvider -> Global State Yönetimini sağlayan Bileşendir.
// bu Bileşen -> useReducer Hook kullanarak bir state ve dispatch fonksiyonu oluşturur.

  const WeatherProvider = ({ children }) => {

    //Buradaki state -> Başlangıç durumu olarak belirlenen initialState değerini alır ve  weatherReducer fonksiyonunu kullanarak günceller.
    const [state, dispatch] = useReducer(weatherReducer, initialState);

    // userReducer hook'u -> weatherReducer fonksiyonunu ve  initialState başlangıç değerini alır , bir state ve dispatch fonksiyonu döndürür. 
   // state -> şu an ki state temsil eder.
   // dispatch -> useReducer fonksiyonun action göndermek için kullanılır.


    return (
      <WeatherContext.Provider value={{ state, dispatch }}>
        {children}
      </WeatherContext.Provider>
    );
  };

    // <WeatherContext.Provider> bileşeni WeatherProvider tarafından sağlanan state ve dispatch değerlerini içerir.
    
    // children prop'u -> WeatherProvider içindeki jsx'i temsil eder. 
    // Bu nedenle bileşenler global state'e ve dispatch fonksiyonuna erişebilir.

    // Farklı bir ifadeyle şu şekilde açıklayabiliriz ;
    // Bu Provider, çocuk bileşenlere WeatherContext içindeki state ve dispatch fonksiyonunu sağlar.


    const useWeather = () => {
        const context = useContext(WeatherContext);
        if (!context) {
          throw new Error('useWeather must be used within a WeatherProvider');
        }
        return context;
      };

    // useWeather custom hook'u oluşturuyoruz.
    // WeatherContext içindeki state ve dispatch fonksiyonuna erişmek için kullanılır.

    export { WeatherProvider, useWeather };