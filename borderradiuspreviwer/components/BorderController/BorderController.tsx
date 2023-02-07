import { Col, Row } from "react-bootstrap"

export const BorderController = () => {
    return (
        <Row style={{margin:0, width: '100%', height: '400px' ,border: '2px solid green'}}>
            <Col style={{border: '2px solid purple'}}></Col>
        </Row>
    )
}