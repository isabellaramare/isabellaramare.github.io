import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Portrait from './portrait'
import '../App.css';

class Resume extends React.Component { 
  render() {
    return (
      <Container fluid className="bg-tilt">
        <Row className="justify-content-md-center p-5 vh-100">
          <Col sm={6} md={6} className="py-6">
            <h1 className="title-lg">
              RESUME 
              <span className="text-light"> RESUME</span>
            </h1>
            <div className="text-lg pr-5">
              <p>
                I början av juni avslutade jag min utbildning till systemutvecklare 
                och letar nu efter ett roligt och givande jobb där jag kan fortsätta utvecklas och lära mig nya saker.
              </p>
              <p >
                Med mig som anställd får ni en snabblärd medarbetare
                med breda kunskaper inom allt från programmering och systemutveckling till visualisering, bild och videoproduktion.
              </p>
            </div>
          </Col>
          <Col sm={6} md={4} className="my-auto">
            <Portrait />
          </Col>       
        </Row>

        <Row className="py-6 bg-spots-light">
          <Row className="justify-content-md-center p-5">
            <Col sm={10} md={4} className="p-5 bg-white-80 rounded-left">
              <h3>2017 - 2020</h3>
              <h1 className="title-md">KANDIDATEXAMEN <br/>I INFORMATIK</h1>
              <h2><strong>systemutveckling -<br/>samhälle och IT</strong></h2>
              <h3 className="mt-4 mb-5">HÖGSKOLAN VÄST, TROLLHÄTTAN</h3>
            </Col>
            <Col sm={10} md={4} className="bg-white p-5 text-md rounded-right">
              <p className="mb-5">
                Har under studieperioden lärt mig programmera 
                i flera olika språk, främst C# (.Net) 
                men har även använt Java, JavaScript och PHP. 
                Vi fick även göra hemsidor (med HTML och CSS), 
                appar, databaser och e-tjänster, i flera fall 
                utifrån verkliga case då utbildningen strävar 
                efter ett arbetsintegrerat lärande. Vi utformade 
                även system med hjälp av processkartor och 
                processmodellering. Under denna period satt jag 
                också med i programrådet och hjälpte till att forma 
                utbildningen efter elevernas önskemål.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center p-5">
            <Col sm={10} md={4} className="bg-white-80 p-5 rounded-left">
            <h3>2012 - 2015</h3>
              <h1 className="title-md">KANDIDATEXAMEN <br/>I INFORMATIK</h1>
              <h2><strong>3D-animation <br/>och visualisering</strong></h2>
              <h3 className="mt-4 mb-5">HÖGSKOLAN VÄST, TROLLHÄTTAN</h3>
            </Col>
            <Col sm={10} md={4} className="bg-white p-5 text-md rounded-right">
              <p className="mb-5">
                Under denna utbildning lärde jag mig bland annat 
                hur man förmedlar budskap med hjälp av olika visuella verktyg. 
                Vi fick arbeta både med foto, video, illustrationer, 2D- och 3D-grafik. 
                Detta är något som jag fortfarande har mycket användning av 
                när det kommer till design av gränssnitt och dylikt. 
                Vi använde bland annat Adobes olika verktyg 
                (Photoshop, After Effects, Illustrator, Premiere) 
                och Autodesks Maya för 3D-modellering och animation. 
              </p>
            </Col>
          </Row>
        </Row>

        <Row className="py-6 bg-spots-dark">
          <Row className="justify-content-md-center p-5">
            <Col sm={10} md={4} className="p-5 bg-white-80 rounded-left">
              <h3>nov 2019 - jan 2020</h3>
              <h1 className="title-md">RAPID IMAGES</h1>
              <h2><strong>praktik - systemutveckling</strong></h2>
              <h3 className="mt-4 mb-5">GÖTEBORG</h3>
            </Col>
            <Col sm={10} md={4} className="bg-white p-5 text-md rounded-right">
              <p className="mb-5">
                Hade praktik under 10 veckor där jag på egen hand 
                fick utveckla ett verktyg som skulle underlätta 
                kvalitetskontroll av olika bilder. Programmet gjordes 
                i C# och fungerar lite som ett “photoshop-light” 
                där man kan titta på bilder i olika lager. 
                Fick även inblick i hur det kan fungera på 
                en riktig arbetsplats, hur man arbetar tillsammans 
                med olika projekt och så vidare. 
                Kort sagt en mycket lärorik period! 
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center p-5">
            <Col sm={10} md={4} className="bg-white-80 p-5 rounded-left">
            <h3>2018-2020</h3>
              <h1 className="title-md">IKEA</h1>
              <h2><strong>restaurangbiträde</strong></h2>
              <h3 className="mt-4 mb-5">UDDEVALLA</h3>
            </Col>
            <Col sm={10} md={4} className="bg-white p-5 text-md rounded-right">
              <p className="mb-5">
                Sedan april 2018 har jag jobbat extra 
                i restaurangen på IKEA Uddevalla. Mestadels helgarbete, 
                sommarjobb och julbord. Mina arbetsuppgifter innebär 
                allt från servering av köttbullar, till kassa, disk
                och förberedning av mat. Arbetet kräver stor social 
                kompetens då man jobbar tätt ihop med kollegor samtidigt 
                som det är mycket kundkontakt. Tidsvis blir det också 
                mycket att göra vilket också har gett mig stor vana 
                av att jobba i ett högt tempo. 
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default Resume;