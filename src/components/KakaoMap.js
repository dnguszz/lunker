const { kakao } = window;

export default function KakaoMap() {
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(36.641310, 126.812976),
        level: 6
    };
    const map = new kakao.maps.Map(container, options);
}