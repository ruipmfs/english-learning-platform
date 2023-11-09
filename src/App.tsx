import './App.scss';
import BackgroundVid from './assets/background2.mp4';
import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {TypeAnimation} from "react-type-animation";

function App() {
    return (
        <div className="lf-homepage">
            <video autoPlay loop muted playsInline className="lf-homepage__background-vid">
                <source src={BackgroundVid} type="video/mp4"></source>
            </video>
            <Header />
            <div className="lf-homepage__container">
                <TypeAnimation className="lf-homepage__container__type-animation"
                    style={{ whiteSpace: 'pre-line', height: '420', display: 'block' }}
                    sequence={[
                        `Live\nEnglish\nAnd\nFly`,
                        2000,
                        '',
                    ]}
                    repeat={Infinity}
                />
            </div>
            <a href="#about" className="lf-homepage__button"><FontAwesomeIcon icon={faChevronDown} beat style={{color: "#ffffff", height: 50, width: 50}} /></a>
            <div className="lf-about" id="about">
                <h1>Quem Somos?</h1>
            </div>
            <div className="lf-bg-container">
                <div className="lf-services" id="services">
                    <h1>Serviços</h1>
                    <div className="lf-services__cards">
                       <h1>Inglês para Adultos</h1>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">Inglês Geral para a Vida</h2>
                            <ul className="lf-services__cards-unit--topics">
                                <li>Competências funcionais de linguagem</li>
                                <li>Conversas diárias</li>
                                <li>Compreensão auditiva e de leitura</li>
                                <li>Prática de conversação</li>
                                <li>Competências de escrita</li>
                                <li>Aspetos culturais e sociais</li>
                                <li>Comunicação digital</li>
                            </ul>
                            <p className="lf-services__cards-unit--description">O conteúdo específico e a estrutura do curso podem variar de acordo com o nível (iniciante, intermédio, avançado) e os objetivos do curso. Este curso foi desenvolvido para ajudar os alunos a usar o inglês com confiança em cenários da vida real e a melhorar as suas competências de conversação e comunicação.</p>
                            <div className="lf-services__cards-unit--price">
                                <h3>Preço</h3>
                                <h3>--.--€</h3>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">Contact us</a>
                            </div>
                       </div>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">Inglês para Comunicação Empresarial</h2>
                            <ul className="lf-services__cards-unit--topics">
                                <li>Vocabulário empresarial</li>
                                <li>Competências de comunicação empresarial</li>
                                <li>Comunicação intercultural</li>
                                <li>Networking e socialização</li>
                                <li>Comunicação digital</li>
                            </ul>
                            <p className="lf-services__cards-unit--description">Este curso pode ser personalizado com base nas necessidades específicas dos participantes e dos setores em que trabalham. O objetivo é equipar os participantes com as competências linguísticas e de comunicação necessárias para se destacarem nas suas carreiras profissionais e se envolverem efetivamente na comunidade empresarial global.</p>
                            <div className="lf-services__cards-unit--price">
                                <h3>Preço</h3>
                                <h3>--.--€</h3>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">Contact us</a>
                            </div>
                       </div>
                    </div>
                    <div className="lf-services__cards">
                       <h1>Inglês para Fins Académicos</h1>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">Competências acadêmicas para estudantes que estão a iniciar o Ensino Superior</h2>
                            <ul className="lf-services__cards-unit--topics">
                                <li>Vocabulário e Terminologia Académico</li>
                                <li>Leitura e compreensão de textos académicos</li>
                                <li>Desenvolver competências de pensamento crítico</li>
                                <li>Competências de escrita</li>
                                <li>Técnicas de pesquisa</li>
                                <li>Técnicas de apresentação oral</li>
                                <li>Gerência de tempo e de estudo</li>
                            </ul>
                            <p className="lf-services__cards-unit--description">O conteúdo específico e a estrutura do curso podem variar de acordo com o nível (iniciante, intermédio, avançado) dos participantes. Este curso foi desenvolvido para ajudar os alunos a usar o inglês com confiança no âmbito académico. As competências obtidas podem ser transferidas para a técnicas de escrita, leitura e pesquisa em outras línguas.</p>
                            <div className="lf-services__cards-unit--price">
                                <h3>Preço</h3>
                                <h3>--.--€</h3>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">Contact us</a>
                            </div>
                       </div>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">Competências de Escrita e Oralidade académica</h2>
                            <ul className="lf-services__cards-unit--topics">
                                <li>Estratégias para a leitura e compreensão de textos académicos</li>
                                <li>Analisar argumentos em artigos e livros académicos</li>
                                <li>Desenvolver competências na escrita académica</li>
                                <li>Redação de propostas de pesquisa e pedidos de subsídios</li>
                                <li>Preparar e fazer apresentações académicas eficazes</li>
                            </ul>
                            <p className="lf-services__cards-unit--description">O conteúdo e a estrutura deste curso podem variar dependendo da instituição e das disciplinas académicas específicas dos alunos. O objetivo é ajudar os alunos a se tornarem comunicadores e académicos eficazes e confiantes nas suas áreas de estudo escolhidas. As competências obtidas podem ser transferidas para a técnicas de escrita, leitura e pesquisa em outras línguas.</p>
                            <div className="lf-services__cards-unit--price">
                                <h3>Preço</h3>
                                <h3>--.--€</h3>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">Contact us</a>
                            </div>
                       </div>
                    </div>
                    <div className="lf-services__cards">
                       <h1>Inglês para exames de Cambridge</h1>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">Preparação para exames Cambridge</h2>
                            <ul className="lf-services__cards-unit--topics">
                                <li>KET</li>
                                <li>PET</li>
                                <li>FCE</li>
                                <li>CAE</li>
                                <li>IELTS</li>
                            </ul>
                            <p className="lf-services__cards-unit--description"></p>
                            <div className="lf-services__cards-unit--price">
                                <h3>Preço</h3>
                                <h3>--.--€</h3>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">Contact us</a>
                            </div>
                       </div>
                    </div>
                    <div className="lf-services__cards">
                       <h1>Técnicas de falar em público</h1>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">Preparação para exames Cambridge</h2>
                            <ul className="lf-services__cards-unit--topics">
                                <li>Superar o medo e a ansiedade ao falar em público</li>
                                <li>Preparação e organização do discurso</li>
                                <li>Análise do público</li>
                                <li>Fazer um discurso eficaz</li>
                                <li>Recursos visuais e tecnologia</li>
                                <li>Linguagem corporal e movimento</li>
                                <li>Responder a perguntas e interação com o público</li>
                                <li>Géneros diferentes de discursos</li>
                            </ul>
                            <p className="lf-services__cards-unit--description">O conteúdo do curso pode variar de acordo com o nível (iniciante, intermédio, avançado) e os objetivos específicos do curso. O objetivo é ajudar os indivíduos a se tornarem comunicadores confiantes e eficazes em situações de falar em público, seja num contexto profissional ou pessoal.</p>
                            <div className="lf-services__cards-unit--price">
                                <h3>Preço</h3>
                                <h3>--.--€</h3>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">Contact us</a>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <div className="lf-contact" id="contact">
                <h1>Contacte-nos</h1>
            </div>
        </div>
    )
}
export default App
