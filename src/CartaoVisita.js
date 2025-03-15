import React, { useState } from "react";
import { Container, Row, Col, Button, InputGroup, Input } from "reactstrap";
import GaleriaCarrossel from "./components/GaleriaCarrossel";
import { QRCodeSVG } from "qrcode.react";

const CartaoVisita = () => {
  const chavePix = "000.000.000-0"; // Defina a chave Pix aqui
  const [copiado, setCopiado] = useState(false);

  const copiarChave = () => {
    navigator.clipboard.writeText(chavePix).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
  };

  return (
    <Container
      className="text-center py-5"
      style={{
        backgroundImage: "url('/img/planoFundo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Logo */}
      <Row className="mb-4">
        <Col>
          <img src="/img/logo-loja.jpg" alt="Logo da Loja" className="img-fluid" style={{ maxWidth: "400px" }} />
        </Col>
      </Row>

      {/* QR Code e Chave Pix */}
      <Row className="mb-5 d-flex justify-content-center align-items-center">
        <Col md={4} className="text-center">
          <h5>Pagamento via Pix</h5>
          <QRCodeSVG value={chavePix} size={150} bgColor="#fff" fgColor="#000" />
        </Col>
        <Col md={4} className="text-center">
          <h5>Chave Pix</h5>
          <InputGroup className="mb-3 d-flex justify-content-center">
            <Input value={chavePix} readOnly style={{ textAlign: "center", maxWidth: "250px" }} />
            <Button color="primary" onClick={copiarChave}>
              {copiado ? "Copiado!" : "Copiar"}
            </Button>
          </InputGroup>
        </Col>
      </Row>

      {/* Carrossel de Imagens */}
      <Row>
        <Col>
          <GaleriaCarrossel />
        </Col>
      </Row>
      
    </Container>
  );
};

export default CartaoVisita;
