import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import skeleton from '../images/shadow-skeleton.svg'
import hornimal from '../images/hornimal.svg'
import '../App.css';

class AboutMe extends React.Component { 
  render() {
    return (
      <Container id="top" fluid className="bg-spots-blask pt-extra">
        <Row className="justify-content-md-center vh-100">           
          <Col sm={12} md={3} className="bg-lilac">
            <img src={skeleton} className="skeleton"/>
          </Col>   
          <Col sm={12} md={6} className="my-auto">
            <p className="text-md">
              Som person är jag positiv, lätt&shy;sam och pålitlig (har exempel&shy;vis bara för&shy;sovit mig en
              gång och det var för att väckarklockan vägrade ringa). Jag är också bra på att se
              det bästa i männi&shy;skor och hjälper gärna andra. På IKEA är det ofta ett högt tempo
              och ibland upprörda kunder men jag brukar vara bra på att hålla mig lugn i både
              stressiga och obekväma situa&shy;tioner. Förutom detta kan väl nämnas att jag tycker
              om att arbeta till&shy;sammans med andra, såsom i grupparbeten i skolan eller under
              en stressig helg på IKEA. Det är all&shy;tid skönt att kunna bolla sina tankar med någon!            
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="bg-white">
            <Row className="mt-extra">
              <Col>
              <h3 className="text-center title-md letter-space mt-extra">INTRESSEN</h3>
              </Col>
            </Row>
            <Row className="justify-content-center text-md text-justify py-4 my-4">
              <Col sm={12} md={3} className="bg-spots-blask p-4 m-3 rounded">
                <div className="mb-5">
                  <svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-brush" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.247-.013-.574.05-.88.479a11.01 11.01 0 0 0-.5.777l-.104.177c-.107.181-.213.362-.32.528-.206.317-.438.61-.76.861a7.127 7.127 0 0 0 2.657-.12c.559-.139.843-.569.993-1.06a3.121 3.121 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.591 1.927-5.566 4.66-7.302 6.792-.442.543-.796 1.243-1.042 1.826a11.507 11.507 0 0 0-.276.721l.575.575zm-4.973 3.04l.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043l.002.001h-.002z"/>
                  </svg>
                </div>
                <p className="mb-4">
                  På fritiden brukar jag syssel&shy;sätta
                  mig med diverse skapande
                  aktivi&shy;teter. Stick&shy;ning, virkning,
                  tälj&shy;ning och origami&shy;vikning är
                  bara ett ax&shy;plock. Jag tycker även
                  om att teckna och måla och har
                  gjort alla skiv&shy;omslag och videor
                  till Revenge Prevails (se nedan). 
                </p>
              </Col>
              <Col sm={12} md={3} className="bg-spots-blask p-4 m-3 rounded">
                <div className="mb-4">
                  <svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-music-note-beamed" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                    <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                    <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
                  </svg>
                </div>
                <p className="mb-5">
                  Jag spelar bas i ett
                  metal&shy;band som heter Revenge
                  Prevails där även min sambo är
                  med. Vi repar ett par gånger i
                  veckan i vår lilla timmer&shy;stuga i
                  skogen. Vi har haft ett gäng
                  spel&shy;ningar runt om i Sverige men
                  även i Dan&shy;mark och Tysk&shy;land. Vi
                  släppte nu i juni vårt tredje album
                  ”Habitats”.
                </p>
              </Col>
              <Col sm={12} md={3} className="bg-spots-blask p-4 m-3 rounded">
                <div className="mb-4">
                  <svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-egg-fried" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13.665 6.113a1 1 0 0 1-.667-.977L13 5a4 4 0 0 0-6.483-3.136 1 1 0 0 1-.8.2 4 4 0 0 0-3.693 6.61 1 1 0 0 1 .2 1 4 4 0 0 0 6.67 4.087 1 1 0 0 1 1.262-.152 2.5 2.5 0 0 0 3.715-2.905 1 1 0 0 1 .341-1.113 2.001 2.001 0 0 0-.547-3.478zM14 5c0 .057 0 .113-.003.17a3.001 3.001 0 0 1 .822 5.216 3.5 3.5 0 0 1-5.201 4.065 5 5 0 0 1-8.336-5.109A5 5 0 0 1 5.896 1.08 5 5 0 0 1 14 5z"/>
                    <circle cx="8" cy="8" r="3"/>
                  </svg>
                </div>
                <p className="mb-5">
                  Jag tycker om att laga (och äta)
                  mat. Gärna med inspira&shy;tion från
                  medel&shy;havet eller Mexiko. Mycket
                  indiskt blir det också. Det händer
                  också att jag slänger ihop en
                  kladd&shy;kaka, gärna med apelsin.
                  Jag är också ett stort fan av
                  smörgås&shy;tårtor, ett måste på varje
                  födelse&shy;dags&shy;kalas! 
                </p>
              </Col>
            </Row>
          </Col>
          
        </Row>
        <Row className="bg-white text-justify py-5 mb-5">
          <Col md={4} sm={12}>
            <img src={hornimal}/>
          </Col>
          <Col md={4} sm={12} className="text-md py-5 my-auto">
            <p className="p-5">
              I fram&shy;tiden hoppas jag att jag har ett giv&shy;ande jobb där man får göra många olika
              saker och där man ut&shy;vecklas varje dag. Jag tror också att jag är en upp&shy;skattad
              kollega som man kan komma till om man behöver hjälp eller stöd. Förutom detta
              älskar jag att lära mig nya saker (därav mina sex år på högskola) och fort&shy;sätter
              gärna så. Jag upp&shy;skattar kombi&shy;nationen av det kreativa, visuella och det
              tekniska så jag jobbar gärna både front-end och back-end om det finns möjlig&shy;het.
            </p>
          </Col>
          <Col md={4} sm={12}>
          <img src={hornimal} className="flip-img"/>    
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;