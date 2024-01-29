

import React, { useEffect } from 'react';
import {useWeather} from "./WeatherContext" ;
import { fetchWeatherData } from './WeaterAPI'; 
import Select from 'react-select';

const WeatherApp = () => {
    // useWeather hook'u ile WeatherContext'ten state ve dispatch'i alıyoruz.
    const {state, dispatch} = useWeather();

    // useEffect , bileşen yüklendiği anda ve state.selectedCity değiştiğinde çalışacak.
    useEffect(() => {
       
        const fetchData = async () => {
          try {
           
            // WeaterAPI.jsx dosyasında API'den çektiğimiz verileri alıyoruz
            // state.selectedCity -> WeatherContext'ten gelen şehir bilgisini içerir.
            const data = await fetchWeatherData(state.selectedCity);
    
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

      
  // Select bileşeni için seçenekler
  const cityOptions = [

    { value: 'Adana', label: 'Adana' },
    { value: 'Adıyaman', label: 'Adıyaman' },
    { value: 'Afyonkarahisar', label: 'Afyonkarahisar' },
    { value: 'Ağrı', label: 'Ağrı' },
    { value: 'Amasya', label: 'Amasya' },
    { value: 'Ankara', label: 'Ankara' },
    { value: 'Antalya', label: 'Antalya' },
    { value: 'Artvin', label: 'Artvin' },
    { value: 'Aydın', label: 'Aydın' },
    { value: 'Balıkesir', label: 'Balıkesir' },
    { value: 'Bilecik', label: 'Bilecik' },
    { value: 'Bingöl', label: 'Bingöl' },
    { value: 'Bitlis', label: 'Bitlis' },
    { value: 'Bolu', label: 'Bolu' },
    { value: 'Burdur', label: 'Burdur' },
    { value: 'Bursa', label: 'Bursa' },
    { value: 'Çanakkale', label: 'Çanakkale' },
    { value: 'Çankırı', label: 'Çankırı' },
    { value: 'Çorum', label: 'Çorum' },
    { value: 'Denizli', label: 'Denizli' },
    { value: 'Diyarbakır', label: 'Diyarbakır' },
    { value: 'Edirne', label: 'Edirne' },
    { value: 'Elazığ', label: 'Elazığ' },
    { value: 'Erzincan', label: 'Erzincan' },
    { value: 'Erzurum', label: 'Erzurum' },
    { value: 'Eskişehir', label: 'Eskişehir' },
    { value: 'Gaziantep', label: 'Gaziantep' },
    { value: 'Giresun', label: 'Giresun' },
    { value: 'Gümüşhane', label: 'Gümüşhane' },
    { value: 'Hakkâri', label: 'Hakkâri' },
    { value: 'Hatay', label: 'Hatay' },
    { value: 'Isparta', label: 'Isparta' },
    { value: 'Mersin', label: 'Mersin' },
    { value: 'İstanbul', label: 'İstanbul' },
    { value: 'izmir', label: 'izmir' },
    { value: 'Kars', label: 'Kars' },
    { value: 'Kastamonu', label: 'Kastamonu' },
    { value: 'Kayseri', label: 'Kayseri' },
    { value: 'Kırklareli', label: 'Kırklareli' },
    { value: 'Kırşehir', label: 'Kırşehir' },
    { value: 'Kocaeli', label: 'Kocaeli' },
    { value: 'Konya', label: 'Konya' },
    { value: 'Kütahya', label: 'Kütahya' },
    { value: 'Malatya', label: 'Malatya' },
    { value: 'Manisa', label: 'Manisa' },
    { value: 'Kahramanmaraş', label: 'Kahramanmaraş' },
    { value: 'Mardin', label: 'Mardin' },
    { value: 'Muğla', label: 'Muğla' },
    { value: 'Muş', label: 'Muş' },
    { value: 'Nevşehir', label: 'Nevşehir' },
    { value: 'Niğde', label: 'Niğde' },
    { value: 'Ordu', label: 'Ordu' },
    { value: 'Rize', label: 'Rize' },
    { value: 'Sakarya', label: 'Sakarya' },
    { value: 'Samsun', label: 'Samsun' },
    { value: 'Siirt', label: 'Siirt' },
    { value: 'Sinop', label: 'Sinop' },
    { value: 'Sivas', label: 'Sivas' },
    { value: 'Tekirdağ', label: 'Tekirdağ' },
    { value: 'Tokat', label: 'Tokat' },
    { value: 'Trabzon', label: 'Trabzon' },
    { value: 'Tunceli', label: 'Tunceli' },
    { value: 'Şanlıurfa', label: 'Şanlıurfa' },
    { value: 'Uşak', label: 'Uşak' },
    { value: 'Van', label: 'Van' },
    { value: 'Yozgat', label: 'Uşak' },
    { value: 'Zonguldak', label: 'Zonguldak' },
    { value: 'Aksaray', label: 'Aksaray' },
    { value: 'Bayburt', label: 'Bayburt' },
    { value: 'Karaman', label: 'Karaman' },
    { value: 'Kırkkale', label: 'Kırkkale' },
    { value: 'Batman', label: 'Batman' },
    { value: 'Şırnak', label: 'Şırnak' },
    { value: 'Bartın', label: 'Bartın' },
    { value: 'Ardahan', label: 'Ardahan' },
    { value: 'Iğdır', label: 'Iğdır' },
    { value: 'Yalova', label: 'Yalova' },
    { value: 'Karabük', label: 'Karabük' },
    { value: 'Kilis', label: 'Kilis' },
    { value: 'Osmaniye', label: 'Osmaniye' },
    { value: 'Düzce', label: 'Düzce' },  
  ];

  // Select bileşeni için onChange olayı
  const handleCityChange = (selectedOption) => {
    // Seçilen şehri WeatherContext'e iletiyoruz.
    dispatch({ type: 'SET_SELECTED_CITY', payload: selectedOption.value });
  };

  return (
    <div>
      <label htmlFor="citySelect">Şehir Seç:</label>
      <Select
        id="citySelect"
        value={{ value: state.selectedCity, label: state.selectedCity }}
        options={cityOptions}
        onChange={handleCityChange}
      />

      <div>
        {/* Hava durumu verilerini burada göster */}
        {/* Örneğin: */}
        {state.weatherData && (
          <div>
            <h2>{state.weatherData.city.name} - {state.weatherData.city.country}</h2>
            {/* Diğer hava durumu verilerini burada göster */}
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;