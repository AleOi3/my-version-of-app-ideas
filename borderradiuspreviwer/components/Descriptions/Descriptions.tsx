import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { AppState } from '../../redux/store/store'

export const Descriptions = () => {
    let description = useSelector((state: AppState) => state.description.description);
    
    return (
        <Row style={{ margin:0, width: '100%', height: '200px' ,border: '2px solid green' }}>
            <Col style={{display:'flex',justifyContent:'center', border: '2px solid purple', alignItems:'center', fontSize:'20pt'}}>
                { description }
            </Col>
        </Row>
    )
}