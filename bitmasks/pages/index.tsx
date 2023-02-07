import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Button, Col, Row } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { countries } from '@/contants'
import ButtonGroup, { IObjLike } from './ButtonGroup/buttonGroupControlledByParent'
import { Operator } from '@/utils'

const inter = Inter({ subsets: ['latin'] })

const Filter = (filterNumber: number) => {
  return countries.filter((country) => {
    if (country.gmt === filterNumber) return true;
  })
}

interface IGmt {
  countryName: string,
  gmt: number,
}

export const convertBinary2Decimal = (binary: number | null) => {
  let result = 0;
  if (binary) {
    let binaryCopy = binary;
    let digitalNumber;
    let counter = 0;
    while (binaryCopy > 0) {
      digitalNumber = binaryCopy % 10;
      result += digitalNumber * 2 ** counter;
      binaryCopy = Math.floor(binaryCopy / 10)
      counter++;
    }
  }
  return result;
}

const convertBooleanArray2Bit = (booleanArray: boolean[]) => {
  let result = '';
  for (let index = 0; index < booleanArray.length; index++) {
    let oneOrZero = (booleanArray[index] == true)
      ? '1'
      : '0';
    result = result + oneOrZero;
  }
  return (result !== '') ? Number(result) : 0;
}

const parseLine = (linetState: IObjLike[]) => {
  let lineParsed = convertBooleanArray2Bit(linetState.map((el) => el.status));
  return convertBinary2Decimal(lineParsed);

}

const convertBoleanArrayInIObjLike = (boolArray: boolean[]): IObjLike[] => {
  return boolArray.map((boolElement) => {
    return {
      status: boolElement
    }
  })
}

const calculateResult = (firstBooleanArray: IObjLike[], command: 'and', secondBooleanArray: IObjLike[]) => {
  let first = firstBooleanArray.map((el) => el.status);
  let second = secondBooleanArray.map((el) => el.status);
  let result: boolean[] = [];
  for (let index = 0; index < first.length; index++) {
    result.push(Operator.operate(first[index], command, second[index]));
  }
  return result;
}

export default function Home() {
  let [filteredCountries, setFilteredCountries] = useState<IGmt[]>([]);
  let [firstLinetState, setFirstLinetState] = useState<IObjLike[]>(
    [
      { status: false }, { status: false }, { status: false },
      { status: false },
    ]
  );
  let [secondLinetState, setSecondLinetState] = useState<IObjLike[]>(
    [
      { status: false }, { status: false }, { status: false },
      { status: false },
    ]
  );

  let [resultLinetState, setResultLinetState] = useState<IObjLike[]>(
    [
      { status: false }, { status: false }, { status: false },
      { status: false },
    ]
  );

  let gmtFileld = useRef<HTMLInputElement>(null);
  let firstLineDecimal = parseLine(firstLinetState);
  let secondLineDecimal = parseLine(secondLinetState);

  const completeResultLine = (firstLinetState: IObjLike[], secondLinetState: IObjLike[]) => {
    let booleanResultLine = calculateResult(firstLinetState, 'and', secondLinetState);
    let IObjResultLine = convertBoleanArrayInIObjLike(booleanResultLine);
    setResultLinetState(IObjResultLine);
  }

  let booleanResultLine = calculateResult(firstLinetState, 'and', secondLinetState);
  let resultLine = convertBinary2Decimal(convertBooleanArray2Bit(booleanResultLine));

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', width: '18%', flexDirection: 'column' }}>
          <Row style={{ alignItems: 'center' }}>
            <Col xl="9">
              <ButtonGroup<IObjLike>
                id={'BtnGtoup01'}
                buttonGroupState={firstLinetState}
                onClick={(event, index) => {
                  let copy = [...firstLinetState];
                  copy[index].status = !copy[index].status;
                  setFirstLinetState(copy);
                  completeResultLine(copy, secondLinetState);
                }}
              ></ButtonGroup>
            </Col>
            <Col>
              <div>{firstLineDecimal}</div>
            </Col>
          </Row>
          <Row style={{ alignItems: 'center' }}>
            <Col xl="9">
              <ButtonGroup<IObjLike>
                id={'BtnGtoup02'}
                buttonGroupState={secondLinetState}
                onClick={(event, index) => {
                  let copy = [...secondLinetState];
                  copy[index].status = !copy[index].status;
                  setSecondLinetState(copy);
                  completeResultLine(firstLinetState, copy);

                }}
              ></ButtonGroup>
            </Col>
            <Col>
              <div>{secondLineDecimal}</div>
            </Col>
          </Row>
          <Row>
            <Col xl="9">
              <ButtonGroup<IObjLike>
                id={'BtnGtoupResult'}
                buttonGroupState={resultLinetState}
              ></ButtonGroup>
            </Col>
            <Col> {resultLine} </Col>
          </Row>
          <Row>
            <Col>
              <input 
                style={{height: '100%', width: "100px"}}
                ref={gmtFileld}
                defaultValue={resultLine}
                placeholder={"GMT"}>
              </input>
              <Button onClick={() => {
                let filtered;
                if (gmtFileld.current?.value !== '') {
                  filtered = Filter(Number(gmtFileld.current?.value));
                } else {
                  filtered = countries;
                }
                setFilteredCountries(filtered);
              }}>Find Cities</Button>
            </Col>
          </Row>
          {
            filteredCountries.map((country) => {
              return (
                <Row>
                  <Col xl="4">
                    {country.countryName}
                  </Col>
                  <Col>
                    GMT {country.gmt}
                  </Col>
                </Row>
              )
            })
          }
        </div>
      </main>
    </>
  )
}
