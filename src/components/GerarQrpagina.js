import React from "react";
import { Container, Row, Col } from "reactstrap";
import { QRCodeSVG } from "qrcode.react";

const GerarQrPagina = () => {
  return (
    <Container
    className="text-center py-5"
    > 
      {/* QR Code */}
      <Row className="mb-5">
        <Col>
          <h4>QrCode da pagina</h4>
          <QRCodeSVG value="https://siteresponzza.vercel.app" size={450} bgColor="#fff" fgColor="#000" />
        </Col>
      </Row>

    </Container>
  );
};

export default GerarQrPagina;