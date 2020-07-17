import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import TableDirectory from "../components/Table";
// import SearchBar from "../components/SearchBar";

function Directory() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        {/* <Row>
          <Col size="md-12">
            <h1>MEET THE TEAM:</h1>
          </Col>
        </Row> */}
        {/* <Row>
          <Col size="md-12">
            <SearchBar />
          </Col>
        </Row> */}
        <Row>
          <Col size="md-12">
            <TableDirectory />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Directory;
