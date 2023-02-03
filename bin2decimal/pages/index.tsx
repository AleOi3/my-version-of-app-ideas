import { Inter } from '@next/font/google'
import { useRef, useState, } from 'react';
import {  Col, Row } from 'react-bootstrap';
import BinaryBoxConverter from '../components/BinaryBoxConmverter';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  let inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Row style={{
        display: 'flex', flexDirection: 'column'
      }}>
        <Col xl="12" style={{
          display:'flex', alignItems: 'center',
          paddingLeft: '2rem', fontWeight: 'bold',
          height: '50px', 
        }}>
          Binary to Decimal Converter
        </Col>
        <Col xl="6" style={{  }}>
          <BinaryBoxConverter 
            ref={inputRef}
          />
        </Col>

      </Row>

    </>
  )
}
