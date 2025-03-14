import React from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import { QRCodeSVG } from "qrcode.react";

const CartaoVisita = () => {
  return (
    <Container className="text-center py-5" style={{ backgroundColor: "#384030", color: "#fff", minHeight: "100vh" }}>
      {/* Logo */}
      <Row className="mb-4">
        <Col>
        <img src="/img/logo-loja.jpg" alt="Logo da Loja" className="img-fluid" style={{ maxWidth: '200px' }} />

        </Col>
      </Row>
      
      {/* QR Code */}
      <Row className="mb-5">
        <Col>
          <h4>Pagamento via  Pix</h4>
          <QRCodeSVG value="chave-pix-da-loja" size={150} bgColor="#fff" fgColor="#000" />
        </Col>
      </Row>
      
      {/* Galeria de fotos */}
      <Row>
        {["/img/foto-1.jpg", "/img/foto-2.jpg", "/img/foto-3.jpg", "/img/foto-4.jpg"].map((foto, index) => (
          <Col key={index} md={3} sm={6} className="mb-3">
            <Card className="border-3 shadow-sm" style={{ backgroundColor: "#122f51" }}>
              <CardImg src={foto} alt={`Roupa ${index + 1}`} className="rounded" />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CartaoVisita;
