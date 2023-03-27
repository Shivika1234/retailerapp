import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Chart } from "react-google-charts";


    export const data1 = [
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
      ];
      export const options1 = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
      };

      export const data2 = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ];

      export const options2 = {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      };

      export const data3 = [
        ["Name", "Salary", "Full time employee"],
        ["Mike", { v: 10000, f: "$10,000" }, true],
        ["Jim", { v: 8000, f: "$8,000" }, false],
        ["Alice", { v: 12500, f: "$12,500" }, true],
        ["Bob", { v: 7000, f: "$7,000" }, true],
      ];

      export const options3 = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
        pageSize: 1,
      };
    export default function Googlechart() {
    return (
        <Container>
        <Row>
          <Col style={{marginTop:"3vw"}}>
          <Chart
          chartType="LineChart"
          width="100%"
          height="300px"
          data={data1}
          options={options1}
        />
          </Col>

          <Col style={{marginTop:"5vw"}}>
          <Chart
          chartType="Bar"
          width="100%"
          height="250px"
          data={data2}
          options={options2}
        />
          </Col>
          <Col style={{marginLeft:"3vw",marginTop:"7vw"}}>
          <Chart
          chartType="Table"
          width="100%"
          height="800px"
          data={data3}
          options={options3}
        />
          </Col>
        </Row>
      </Container>
    );
}

