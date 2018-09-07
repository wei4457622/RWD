// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: 經緯度中心, lng: 經緯度中心 },
//     zoom: 14
//   });
//   var marker = new google.maps.Marker({
//     position: { lat: 你的經緯度, lng: 你的經緯度 },
//     map: map,
//     title: '帥哥的家'
//     // 客製化標記
//     icon: '圖像名稱.png'
//   })
// }

function initMap() {
  var myLatLng = { lat: 24.7543166, lng: 121.7561839 };

  // Create a map object and specify the DOM element
  // for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 14
  });

  var data = [
    {
      position: { lat: 24.7303225, lng: 121.7389597 },
      map: map,
      title: '帥哥的家'
    },
    {
      position: { lat: 24.7513619, lng: 121.7444196 },
      map: map,
      title: '幾米公園'
    },
    {
      position: { lat: 24.7438136, lng: 121.7402079 },
      map: map,
      title: '奕順軒'
    }
  ];

  for (var i = 0; i < data.length; i++) {
    var marker = new google.maps.Marker(data[i]);
  }
  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: '宜蘭火車站'
  });
}

$(document).ready(function() {
  $('#special').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.content').offset().top
    }, 750)
  });

  $('#chef').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.chef').offset().top
    }, 1000)
  });

  $('#maps').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.maps').offset().top
    }, 1250)
  });

  /* 按下GoTop按鈕時的事件 */
  $('#gotop').click(function(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
    return false;
  });
  /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 400){
      $('#gotop').fadeIn();
    } else {
      $('#gotop').fadeOut();
    }
  });

  $('.showmenu').on('click',  function(e){
    e.preventDefault();
    $('body').toggleClass('menu-show');
  });
});