import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchBar from "../components/SearchBar";

function Search() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <SearchBar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
