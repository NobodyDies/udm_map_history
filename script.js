$(function () {

  var w = 594;
  var h = 786;
  var ibounds = [[0, 0], [h, w]];
  var map = L.map('map', {
    crs: L.CRS.Simple,
    maxBounds: ibounds
  });
  var image = L.imageOverlay('Udmurtia.svg', ibounds).addTo(map);
  map.fitBounds(ibounds);
  map.dragging.disable();

  /// Описание городов
  var cities = {
    1: {
      name: 'Ижевск',
      coords: [285.505, 375],
      id: 1
    },
    2: {
      name: 'Можга',
      coords: [170, 200],
      id: 2
    },
    3: {
      name: 'Сарапул',
      coords: [170, 470],
      id: 3
    },
    4: {
      name: 'Воткинск',
      coords: [340, 510],
      id: 4
    },
    5: {
      name: 'Глазов',
      coords: [664, 275],
      id: 5
    }
  };

  /// создаем плашки городов и маркеры
  Object.entries(cities).forEach(function (keyVal) {
    city = keyVal[1];
    city.marker = L.marker(city.coords, {
      icon: new L.DivIcon({
        className: 'my-div-icon',
        /// Стилизуя тег ниже - стилизуются маркеры
        html: '<div class="container" data-id="'+city.id+'" style="height: 40px; width: 40px; border: 1px solid"></div>'
      })
    }).addTo(map);

    var cityTag = $('<div class="city city-' + city.id + '" data-id="' + city.id + '">' + city.name + '</div>')
    $('.cities').append(cityTag)
    city.cityTag = cityTag
  })

  // инициализируем перетаскивание
  var draggable = new Draggable.Draggable(document.querySelectorAll('.container'),
    {
      draggable: '.city',
    });
  var container

  // основная магия
  draggable.on('drag:stop', function(e) {
    var city = cities[e.source.dataset.id]
    if(city.id == container.dataset.id) {
      /// тут можно как то иначе выводить сообщение об успехе
      alert('бинго! это ' + city.name)
      city.marker.remove()
      city.marker = L.marker(city.coords, {
        icon: new L.DivIcon({
          className: 'my-div-icon',
          // стилизуя тег ниже - стилизуются итоговые маркеры с городом
          html: '<div class="container" data-id="'+city.id+'" style="color: red; font-size: 16px">'+city.name+'</div>'
        })
      }).addTo(map);
      setTimeout(function () {
        city.cityTag.hide()
      }, 200)
    }
  });
  // сбрасываем активный контейнер если перетаскиваем за его пределы
  draggable.on('drag:out:container', function () {
    container = false
  });
  // выставляем активный контейнер при перетаскивании
  draggable.on('drag:over:container', function(e) {
    container = e.data.overContainer;
  });
});
