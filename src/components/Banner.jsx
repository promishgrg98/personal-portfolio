import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export function Banner() {
  return (
    <section className="banner" id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Promish`}<span className='wrap'>Web Developer</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea provident cum obcaecati ipsa facilis dolores autem est, neque perspiciatis eveniet explicabo ipsam accusantium deserunt blanditiis nulla eius voluptatum deleniti.</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
