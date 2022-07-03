import React, { useEffect, useState } from "react";
import { keyframes } from "styled-components";
import styled from "@emotion/styled";
import pointHelp from "components/pointHelp";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Popover from "@mui/material/Popover";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import Modal from "@mui/material/Modal";
import PointDetailModal from "components/PointDetailModal";
import fishMarker from "statics/images/fish-marker.png";
import Alert from "@mui/material/Alert";

const { kakao } = window;

function KakaoMap() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [addPointIng, setAddPointIng] = useState(false);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addNewPoint = () => {
    console.log("어");
    setAddPointIng(true);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    console.log("카카오맵 로드한다 ㅎㅎ");
    let markerPosition = new kakao.maps.LatLng(36.64131, 126.812976); //마커
    var markerImage = new kakao.maps.MarkerImage(
      fishMarker,
      new kakao.maps.Size(48, 48),
      { offset: new kakao.maps.Point(24, 24) }
    );
    let marker = new kakao.maps.Marker({
      position: markerPosition,
      clickable: true,
      image: markerImage,
    }); //마커
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(36.64131, 126.812976),
      level: 6,
    };
    const map = new kakao.maps.Map(container, options);
    marker.setMap(map); //마커

    kakao.maps.event.addListener(marker, "click", function () {
      handleOpenModal();
    });

    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;
      // setLng(latlng.getLng());
      // setLat(latlng.getLat());
      //여기 비동기라 이상할수도
    });
  }, []);

  // useEffect(() => {
  //   alert(lat + "//" + lng);
  // }, [lat, lng]);

  return (
    <Map id="myMap">
      {addPointIng ? (<StyledAlert severity="info">
        <strong>등록할 포인트를 지도상에서 클릭해주세요.</strong>
      </StyledAlert>) : (<StyledHelpRoundedIcon
        onClick={handleOpen}
        fontSize="large"
        color="primary"
      />)}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "auto",
        }}
      >
        <StyledPointHelp />
      </Popover>

      {addPointIng ? (
        <StyledButton
          size="large"
          variant="contained"
          onClick={() => setAddPointIng(false)}
        >
          취소
        </StyledButton>
      ) : (
        <StyledButton
          size="large"
          variant="contained"
          onClick={() => addNewPoint()}
        >
          포인트 등록
        </StyledButton>
      )}

      <ModalWrapper className={openModal ? "openModal modal" : "modal"}>
        {openModal && <PointDetailModal onClose={handleCloseModal} />}
      </ModalWrapper>
    </Map>
  );
}
export default KakaoMap;

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledPointHelp = styled(pointHelp)`
  width: 100%;
  height: 100%;
`;

const StyledHelpRoundedIcon = styled(HelpRoundedIcon)`
  z-index: 3;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const StyledButton = styled(Button)`
  font-family: Pretendard-Regular;
  z-index: 3;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  &.modal {
    display: none;
  }
  &.modal.openModal {
    display: block;
  }
`;

const StyledAlert = styled(Alert)`
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 1.5rem;
  z-index: 3;
`;
