import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import DirectoryTable from "../components/Table";

function Directory() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>MEET THE TEAM:</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <DirectoryTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Directory;
