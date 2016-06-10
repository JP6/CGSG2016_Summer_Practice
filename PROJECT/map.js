/**
 * Created by jp6 on 09.06.2016.
 */
var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.89444, 30.26417], // Москва
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

    document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        myMap.destroy();
    };

}
alert("дерьмо");

function loadXMLDoc(dname)
{
    if (window.XMLHttpRequest)
    {
        xhttp= new XMLHttpRequest();
    }
    else
    {
        xhttp= new ActiveXObject('Microsoft.XMLHTTP');
    }
    xhttp.open('GET', dname, false);
    xhttp.send();
    return xhttp.responseXML;
}

function getWeather(city, col) {        // col <= 10
    var data_file = 'http://export.yandex.ru/weather-ng/forecasts/'+ city +'.xml';   // загружаем файл прогноза погоды для выбранного города
    var xml = xmlDoc=loadXMLDoc(data_file); // загружаем xml файл через simple_xml

    var out = array();  // массив вывода прогноза
    var cnt = 0 ;       // счетчик количества дней, для которых доступен прогноз

    if(xml.day)
        for(j = 0; j < 7; j++)
            while(cnt++ != col)
                for (i = 0; i <= 3; i++)
                    out[cnt]['weather'][i]['weather_type'] = xml.day[j].day_part[i].weather_type;
    return out;
}