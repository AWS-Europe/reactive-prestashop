import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {CmsLinks} from '../../components/cms/'
import {CategoryLink} from '../../components/category/'

export default class Footer extends Component {
  render() {
    return (
      <footer className="mt-4">
        <Container className="py-5 border-top-2">
          <Row>
            <Col xs="12" sm="3">
              <CmsLinks />
            </Col>
            <Col xs="12" sm="3">
              <CategoryLink />
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}