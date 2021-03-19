const map = null;
function initMap() {

    const mySchool = { lat: 10.845587, lng: 106.794632 };
    const myHouse = { lat: 10.8475176, lng: 106.7963644 };

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: myHouse,
    });
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);

    const imageUTC2 = {
        url:
          "utc2.jpg",
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(90, 90),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(30, 30)
    };

    const imageAVT = {
        url:
          "avt.jpg",
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(90, 90),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(30, 30)
      };

    const markerSchool = new google.maps.Marker({
        position: mySchool,
        title: "Trường Đại Học Giao Thông Vận Tải",
        icon: imageUTC2,
        map: map,
    });

    const markerHouse = new google.maps.Marker({
        position: myHouse,
        title: "Nhà Trọ",
        icon: imageAVT,
        map: map,
    });

    const infoUTC2 = '<b>Đại Học Giao Thông Vận Tải Phân Hiệu Tại TP. Hồ Chí Minh</b>' 
    + '<br>Địa chỉ: 451 Lê Văn Việt, Tăng Nhơn Phú A, Quận 9, Thành Phố Hồ Chí Minh';
    const infoMe = '<b>Họ và tên: Đỗ Quốc Tuấn</b>' 
    + '<br><b>Tuổi: 20</b>'
    + '<br><b>MSSV: 5951071118</b>'
    + '<br><b>Quê quán: Bình Định</b>'
    + '<br><b>Email: tuandoquoc28@gmail.com</b>'
    + '<br><b>Địa chỉ: 11E liên khu 2-5, Tăng Nhơn Phú A, Quận 9</b>';
    const infoWindow = new google.maps.InfoWindow({
        content: infoUTC2,
    });
    const infoWindow2 = new google.maps.InfoWindow({
        content: infoMe,
    });

    markerHouse.addListener("click", () => {
        infoWindow2.open(map, markerHouse);
    });
    markerSchool.addListener("click", () => {
        infoWindow.open(map, markerSchool);
    });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    var mySchool = new google.maps.LatLng(10.845650, 106.794597);
    var myHouse = new google.maps.LatLng(10.8475176, 106.7963644);
    directionsService.route(
        {
            origin: myHouse,
            destination: mySchool,
            travelMode: google.maps.TravelMode.DRIVING,

        },
        (response, status) => {
            if (status === "OK") {
                directionsRenderer.setDirections(response);
            } else { window.alert("Directions request failed due to " + status); }
        });
}

