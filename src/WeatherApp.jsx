
import React, { useEffect } from 'react';
import {useWeather} from "./WeatherContext" ;
import { fetchWeatherData } from './WeaterAPI';

const WeatherApp = () => {
    // useWeather hook'u ile WeatherContext'ten state ve dispatch'i alıyoruz.
    const {state, dispatch} = useWeather();

    // useEffect , bileşen yüklendiği anda ve state.selectedCity değiştiğinde çalışacak.
    useEffect(() => {
       
        const fetchData = async () => {
          try {
           
            // WeaterAPI.jsx dosyasında API'den çektiğimiz verileri alıyoruz
            // state.selectedCity -> WeatherContext'ten gelen şehir bilgisini içerir.
            const data = await fetchWeatherData("Istanbul");
    
            // fetchWeatherData(API)'dan gelen veriyi kullanarak WeatherContext'teki state'i güncelliyoruz.
            // Güncellemeyi SET_WEATHER_DATA action'ı ile yapıyoruz.
            dispatch({ type: 'SET_WEATHER_DATA', payload: data });
            
          } catch (error) {
            // Hata durumunu kontrol ediyoruz.
            console.error('Hava durumu verileri alınırken hata oluştu:', error);
          }
        };
    
        fetchData();

      }, [state.selectedCity, dispatch]);

      return (
        <div>hava durumu</div>
      );
}

export default WeatherApp;