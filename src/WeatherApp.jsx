import React, { useEffect } from "react";
import { useWeather } from "./WeatherContext";
import { fetchWeatherData } from "./WeaterAPI";
import Select from "react-select";
import "../src/weatherApp.css";

const WeatherApp = () => {
  // useWeather hook'u ile WeatherContext'ten state ve dispatch'i alıyoruz.
  const { state, dispatch } = useWeather();

  // useEffect , bileşen yüklendiği anda ve state.selectedCity değiştiğinde çalışacak.
  useEffect(() => {
    const fetchData = async () => {
      try {
        // WeaterAPI.jsx dosyasında API'den çektiğimiz verileri alıyoruz
        // state.selectedCity -> WeatherContext'ten gelen şehir bilgisini içerir.
        const data = await fetchWeatherData(state.selectedCity);

        // fetchWeatherData(API)'dan gelen veriyi kullanarak WeatherContext'teki state'i güncelliyoruz.
        // Güncellemeyi SET_WEATHER_DATA action'ı ile yapıyoruz.
        dispatch({ type: "SET_WEATHER_DATA", payload: data });
      } catch (error) {
        // Hata durumunu kontrol ediyoruz.
        console.error("Hava durumu verileri alınırken hata oluştu:", error);
      }
    };

    fetchData();
  }, [state.selectedCity, dispatch]);

  // Select bileşeni için seçenekler
  const cityOptions = [
    { value: "Adana", label: "Adana" },
    { value: "Adıyaman", label: "Adıyaman" },
    { value: "Afyonkarahisar", label: "Afyonkarahisar" },
    { value: "Ağrı", label: "Ağrı" },
    { value: "Amasya", label: "Amasya" },
    { value: "Ankara", label: "Ankara" },
    { value: "Antalya", label: "Antalya" },
    { value: "Artvin", label: "Artvin" },
    { value: "Aydın", label: "Aydın" },
    { value: "Balıkesir", label: "Balıkesir" },
    { value: "Bilecik", label: "Bilecik" },
    { value: "Bingöl", label: "Bingöl" },
    { value: "Bitlis", label: "Bitlis" },
    { value: "Bolu", label: "Bolu" },
    { value: "Burdur", label: "Burdur" },
    { value: "Bursa", label: "Bursa" },
    { value: "Çanakkale", label: "Çanakkale" },
    { value: "Çankırı", label: "Çankırı" },
    { value: "Çorum", label: "Çorum" },
    { value: "Denizli", label: "Denizli" },
    { value: "Diyarbakır", label: "Diyarbakır" },
    { value: "Edirne", label: "Edirne" },
    { value: "Elazığ", label: "Elazığ" },
    { value: "Erzincan", label: "Erzincan" },
    { value: "Erzurum", label: "Erzurum" },
    { value: "Eskişehir", label: "Eskişehir" },
    { value: "Gaziantep", label: "Gaziantep" },
    { value: "Giresun", label: "Giresun" },
    { value: "Gümüşhane", label: "Gümüşhane" },
    { value: "Hakkâri", label: "Hakkâri" },
    { value: "Hatay", label: "Hatay" },
    { value: "Isparta", label: "Isparta" },
    { value: "Mersin", label: "Mersin" },
    { value: "istanbul", label: "İstanbul" },
    { value: "izmir", label: "İzmir" },
    { value: "Kars", label: "Kars" },
    { value: "Kastamonu", label: "Kastamonu" },
    { value: "Kayseri", label: "Kayseri" },
    { value: "Kırklareli", label: "Kırklareli" },
    { value: "Kırşehir", label: "Kırşehir" },
    { value: "Kocaeli", label: "Kocaeli" },
    { value: "Konya", label: "Konya" },
    { value: "Kütahya", label: "Kütahya" },
    { value: "Malatya", label: "Malatya" },
    { value: "Manisa", label: "Manisa" },
    { value: "Kahramanmaraş", label: "Kahramanmaraş" },
    { value: "Mardin", label: "Mardin" },
    { value: "Muğla", label: "Muğla" },
    { value: "Muş", label: "Muş" },
    { value: "Nevşehir", label: "Nevşehir" },
    { value: "Niğde", label: "Niğde" },
    { value: "Ordu", label: "Ordu" },
    { value: "Rize", label: "Rize" },
    { value: "Sakarya", label: "Sakarya" },
    { value: "Samsun", label: "Samsun" },
    { value: "Siirt", label: "Siirt" },
    { value: "Sinop", label: "Sinop" },
    { value: "Sivas", label: "Sivas" },
    { value: "Tekirdağ", label: "Tekirdağ" },
    { value: "Tokat", label: "Tokat" },
    { value: "Trabzon", label: "Trabzon" },
    { value: "Tunceli", label: "Tunceli" },
    { value: "Şanlıurfa", label: "Şanlıurfa" },
    { value: "Uşak", label: "Uşak" },
    { value: "Van", label: "Van" },
    { value: "Yozgat", label: "Uşak" },
    { value: "Zonguldak", label: "Zonguldak" },
    { value: "Aksaray", label: "Aksaray" },
    { value: "Bayburt", label: "Bayburt" },
    { value: "Karaman", label: "Karaman" },
    { value: "Kırkkale", label: "Kırkkale" },
    { value: "Batman", label: "Batman" },
    { value: "Şırnak", label: "Şırnak" },
    { value: "Bartın", label: "Bartın" },
    { value: "Ardahan", label: "Ardahan" },
    { value: "Iğdır", label: "Iğdır" },
    { value: "Yalova", label: "Yalova" },
    { value: "Karabük", label: "Karabük" },
    { value: "Kilis", label: "Kilis" },
    { value: "Osmaniye", label: "Osmaniye" },
    { value: "Düzce", label: "Düzce" },
  ];

  // Select bileşeni için onChange olayı
  const handleCityChange = (selectedOption) => {
    // Seçilen şehri WeatherContext'e iletiyoruz.
    dispatch({ type: "SET_SELECTED_CITY", payload: selectedOption.value });
  };

  // API den gelen verileriin günlük ortalamasını almak ve ekrana yazdırmak için gerekli fonksiyon
  const renderWeatherAverages = () => {
    if (state.weatherData && state.weatherData.list) {
      // Günlük ortalamaları tutmak için bir nesne oluşturuyoruz
      const dailyAverages = {};

      // Her gün için verileri grupluyoruz ve ortalamasını alıyoruz
      // state.weatherData.list içindeki her bir period için döngü başlatıyoruz
      state.weatherData.list.forEach((period) => {
        // dt_txt: "2024-02-04 18:00:00" gelen veri bu şekilde. buradan sadece tarihi(gün bilgisini) alıyoruz.
        const date = period.dt_txt.split(" ")[0];

        // Eğer dailyAverages nesnesinde bu gün için bir giriş yoksa, yeni bir giriş oluşturan if sorgusunu yazıyoruz
        if (!dailyAverages[date]) {
          dailyAverages[date] = {
            tempSum: 0, // Sıcaklık toplamını saklamak için
            feelsLikeSum: 0, // Hissedilen sıcaklık toplamını saklamak için
            count: 0, // Ölçüm sayısını saklamak için
          };
        }
        // Bu gün için sıcaklık, hissedilen sıcaklık ve ölçüm sayısını gelen ölçüm değerlerini kullanarak toplayıp nesnemize kaydediyoruz
        dailyAverages[date].tempSum += period.main.temp;
        dailyAverages[date].feelsLikeSum += period.main.feels_like;
        dailyAverages[date].count++;
      });

      //bir önceki yaptığımız işlme göre dailyAverages nesnesi, her bir tarih için bir nesne içermektedir.
      //  Object.keys(dailyAverages) kullanıldığında, bu nesnenin anahtarları olan tarihlerin bir dizisi elde edilir.

      const allDates = Object.keys(dailyAverages);
      //  allDates dizisini map fonksiyonu ile dönüyoruz ve günlere ait ortalama değerleri hesaplıyoruz.
      return allDates.map((date, index) => {
        const average = {
          temp: dailyAverages[date].tempSum / dailyAverages[date].count,
          feels_like:
            dailyAverages[date].feelsLikeSum / dailyAverages[date].count,
        };

        // Tarihi JavaScript Date objesine çeviriyoruz
        const currentDate = new Date(date);
        // Date objesinden gün bilgisini alıyoruz
        const dayOfWeek = currentDate.toLocaleDateString("en-US", {
          weekday: "short",
        });

        //  hava durumu bilgisini alıyoruz (güneşli, yağmurlu, vb.)
        const weatherCondition = state.weatherData.list.find(
          (period) => period.dt_txt.split(" ")[0] === date
        )?.weather[0]?.description;

        // Hava durumuna göre SVG ikon belirleme fonksiyonu
        const getWeatherIcon = (condition) => {
          switch (condition) {
            case "Clear":
              return require("./SVG/day_clear.svg").default;
            case "clear sky":
              return require("./SVG/day_clear.svg").default;
            case "light rain":
              return require("./SVG/rain.svg").default;

            case "Clouds":
              return require("./SVG/cloudy.svg").default;
            case "few clouds":
              return require("./SVG/cloudy.svg").default;
            case "overcast clouds":
              return require("./SVG/overcast.svg").default;
            case "scattered clouds":
              return require("./SVG/cloudy.svg").default;
            case "broken clouds":
              return require("./SVG/broken_clouds.svg").default;

            case "snow":
              return require("./SVG/snow.svg").default;
            case "light snow":
              return require("./SVG/snow.svg").default;

            case "Rain":
              return require("./SVG/rain.svg").default;

            default:
              return "default.svg";
          }
        };

        const iconFileName = getWeatherIcon(weatherCondition);

        // bulunduğmuz günü işaretleme
        const today = new Date();
        const isToday = currentDate.getDate() === today.getDate();
  

        return (
          <div key={index} className={`daily-weather ${isToday ? "today" : ""}`}>
            <p className="day">{dayOfWeek}</p>
            <img
              className="icon"
              src={iconFileName}
              alt={`Weather Icon - ${weatherCondition}`}
            />
            <p className="weatherCondition">{weatherCondition}</p>
            <div className="values">
              <span className="temp">{average.temp.toFixed(0)}°</span>
              <span className="feel">{average.feels_like.toFixed(0)}°</span>
            </div>

            <hr />
          </div>
        );
      });
    }
  };

  return (
    <div className="page">
      <div className="select-div">
        <Select
          id="citySelect"
          value={{ value: state.selectedCity, label: state.selectedCity }}
          options={cityOptions}
          onChange={handleCityChange}
        />
      </div>

      <div>
        {state.weatherData && (
          <div className="weather-div">{renderWeatherAverages()}</div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
