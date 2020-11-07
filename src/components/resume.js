import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Portrait from './portrait'
import isabellaportait from '../images/isabella portrait.png'
import '../App.css';
import ScrollToTop from './scrolltotop';

class Resume extends React.Component { 
  render() {
    return (
      <Container id="top" fluid className="full-width bg-spots-blask">
        <Row className="justify-content-center user-select-none pt-extra mb-5 vh-min-100">
          <Col sm={12} md={6} className="my-auto fade-in justify-content-center p-4">
            <h1 className="title-lg">
            I början 
              <span className="text-light"> av juni </span>
              2020
            </h1>
            <div className="text-lg text-justify">
              <p>
                avslutade jag min utbildning till system&shy;utvecklare 
                och letar nu efter ett roligt och givande jobb där jag kan fort&shy;sätta ut&shy;vecklas och lära mig nya saker.
              </p>
              <p >
                Med mig som anställd får ni en snabblärd medarbetare
                med breda kunskaper inom allt från prog&shy;rammering och system&shy;utveckling till visuali&shy;sering, bild och video&shy;produktion.
              </p>
            </div>
          </Col>
          <Col sm={12} md={4} className="my-auto fade-in">
            <Portrait imgSrc={isabellaportait} tooltip="Hej!" tooltipPosition="top" styling="logo rounded-circle"/>
          </Col>       
        </Row>      
        <Row className="mt-extra">
          <Col>
          <h3 className="text-center title-md letter-space">UTBILDNING</h3>
          </Col>
        </Row>
        <Row className="my-5 vh-70 justify-content-center">          
          <Col sm={12} md={3} className="bg-pink-one rounded-left text-white p-4">
            <h3>2017 - 2020</h3>
            <h1 className="title-md">KANDIDAT&shy;EXAMEN <br/>I INFORMATIK</h1>
            <h2><strong>system&shy;utveckling -<br/>samhälle och IT</strong></h2>
            <h3 className="">HÖGSKOLAN VÄST, TROLLHÄTTAN</h3>
          </Col>
          <Col sm={12} md={5} className="bg-white text-md rounded-right p-4 text-justify">
            <p>
              Lärde mig under denna studie&shy;period prog&shy;rammera 
              i flera olika språk, främst C# (.Net) 
              men har även använt Java, JavaScript och PHP. 
              Vi fick även göra hemsidor (med HTML och CSS), 
              appar, databaser och e-tjänster, i flera fall 
              utifrån verkliga case då utbildningen strävar 
              efter ett arbets&shy;integrerat lärande. Vi ut&shy;formade 
              även system med hjälp av processkartor och 
              process&shy;modellering. Under denna period satt jag 
              också med i programrådet och hjälpte till att forma 
              utbildningen efter elevernas önskemål.
            </p>
          </Col>
        </Row>
        <Row className="my-5 vh-70 justify-content-center">
          <Col sm={12} md={3} className="bg-pink-one rounded-left p-4 text-white">
            <h3>2012 - 2015</h3>
            <h1 className="title-md">KANDIDAT&shy;EXAMEN <br/>I INFORMATIK</h1>
            <h2><strong>3D-animation <br/>och visualisering</strong></h2>
            <h3>HÖGSKOLAN VÄST, TROLLHÄTTAN</h3>
          </Col>
          <Col sm={12} md={5} className="bg-white text-md rounded-right p-4 text-justify">
            <p>
              Under denna utbildning lärde jag mig bland annat 
              hur man förmedlar budskap med hjälp av olika visu&shy;ella verktyg. 
              Vi fick arbeta både med foto, video, illu&shy;strationer, 2D- och 3D-grafik. 
              Detta är något som jag fort&shy;farande har mycket använd&shy;ning av 
              när det kommer till design av gräns&shy;snitt och dylikt. 
              Vi använde bland annat Adobes olika verktyg 
              (Photoshop, After Effects, Illustrator, Premiere) 
              och Autodesks Maya för 3D-modellering och animation. 
            </p>
          </Col>
        </Row>
        <Row className="mt-extra">
          <Col>
          <h3 className="text-center title-md letter-space mt-extra">ERFARENHET</h3>
          </Col>
        </Row>
        <Row className="my-5 vh-70 justify-content-center">
          <Col sm={12} md={3} className="bg-pink-two rounded-left p-4">
            <h3>nov 2019 - jan 2020</h3>
            <h1 className="title-md">RAPID IMAGES</h1>
            <h2><strong>praktik - system&shy;utveckling</strong></h2>
            <h3 className="">GÖTEBORG</h3>
          </Col>
          <Col sm={12} md={5} className="bg-white text-md rounded-right p-4 text-justify">
            <p>
              Hade praktik under 10 veckor där jag på egen hand 
              fick utveckla ett verktyg som skulle underlätta 
              kvalitets&shy;kontroll av olika bilder. Programmet gjordes 
              i C# och fungerar lite som ett “photoshop-light” 
              där man kan titta på bilder i olika lager. 
              Fick även inblick i hur det kan fungera på 
              en riktig arbets&shy;plats, hur man arbetar till&shy;sammans 
              med olika projekt och så vidare. 
              Kort sagt en mycket lärorik period! 
            </p>
          </Col>
        </Row>
        <Row className="mt-5 vh-70 justify-content-center pb-extra">
          <Col sm={12} md={3} className="bg-pink-two rounded-left p-4">
          <h3>2018-2020</h3>
            <h1 className="title-md">IKEA</h1>
            <h2><strong>restaurangbiträde</strong></h2>
            <h3 className="">UDDEVALLA</h3>
          </Col>
          <Col sm={12} md={5} className="bg-white text-md rounded-right p-4 text-justify">
            <p>
              Sedan april 2018 har jag jobbat extra 
              i restaurangen på IKEA Uddevalla. Mestadels helg&shy;arbete, 
              sommarjobb och julbord. Mina arbets&shy;uppgifter innebär 
              allt från servering av köttbullar, till kassa, disk
              och för&shy;beredning av mat. Arbetet kräver stor social 
              kompetens då man jobbar tätt ihop med kollegor samtidigt 
              som det är mycket kund&shy;kontakt. Tidsvis blir det också 
              mycket att göra vilket också har gett mig stor vana 
              av att jobba i ett högt tempo. 
            </p>
          </Col>
        </Row>
        <ScrollToTop />
      </Container>
    );
  }
}

export default Resume;