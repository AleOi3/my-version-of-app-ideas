import { convertBinary2Decimal, isValid } from '@/utils/binaryBoxUtils';
import { Inter } from '@next/font/google'
import React, { Dispatch, forwardRef, MutableRefObject, SetStateAction, useRef, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const BinaryBoxConverter = forwardRef<HTMLInputElement, {}>((props, ref) => {

    let resultRef = useRef<HTMLInputElement>(null);
    let [error, setError] = useState<string>('');
    return (
    <>
        <Row  style={{
            margin: '1rem', border:'1px solid black', height: 150,
            borderRadius: '5px', display:'flex', flexDirection: 'column'
        }}>
            <Row  style={{display:'flex', flexDirection: 'column',  }}>
                <Col style={{}}>
                    Binary Input
                    {
                        error &&
                        <div style={{color: 'red'}}>{error}</div>
                    }
                </Col>
                <Col>
                    <input
                        style={{marginRight:'1rem'}} placeholder='Enter 0 or 1'
                        ref={ref}
                    />
                    <Button style={{width: '200px'}} onClick={() => {
                        console.log("Verificando ref");
                        let inputValue = (ref as MutableRefObject<HTMLInputElement>).current.value;
                        if (isValid(inputValue)){
                            let outputValue = convertBinary2Decimal(Number(inputValue));
                            if(resultRef && resultRef.current)
                                resultRef.current.value = outputValue.toString();
                                setError('')
                            } else {
                                setError('Invalid Number')
                            }
                    }}>Convert</Button>
                </Col>
            </Row>
            <Row  style={{display:'flex', flexDirection: 'column'}}>
                <Col style={{}}>
                    Decimal Output
                </Col>
                <Col>
                    <input ref={resultRef} disabled={true}/>
                </Col>
            </Row>
        </Row>
    </>
    )
})

export default BinaryBoxConverter;