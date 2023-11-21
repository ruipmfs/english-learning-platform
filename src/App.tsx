import './App.scss';
import BackgroundVid from './assets/background2.mp4';
import Portrait from './assets/AboutUs.jpg';
import Quotes1 from './assets/quotes1.png';
import Quotes2 from './assets/quotes2.png';
import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { TypeAnimation } from "react-type-animation";
import LeafLogo from './assets/leaf_logo_negative_2.png'

function App() {
    const QuotesStyle = {
        position: 'relative', // Set position to relative for pseudo-elements
        zIndex: -1,
      };
    
    const Quotes1Style = {
        content: '""',
        backgroundImage: `url(${Quotes1})`,
        backgroundSize: '80px 80px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',
        position: 'absolute',
        top: 20,
        left: 20,
        padding: '60px', // Add padding
        opacity: 0.1, // Set opacity
    };

    const Quotes2Style = {
        content: '""',
        backgroundImage: `url(${Quotes2})`,
        backgroundSize: '80px 80px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',
        position: 'absolute',
        bottom: 20,
        right: 20,
        padding: '80px', // Add padding
        opacity: 0.1, // Set opacity
    };

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
                <div className="lf-about__container">
                    <div className="lf-about__container--text">
                        <p>Sempre tive uma fascinação por línguas - os seus sons, as suas nuances culturais e o seu uso como instrumento de expressão. A minha educação na rica tapeçaria cultural da África do Sul proporcionou-me um privilégio único - mergulhar no mosaico vibrante da diversidade étnica. Isso não só proporcionou uma experiência enriquecedora, mas também aumentou a consciência dos desafios que enfrentamos ao tentar comunicar numa língua diferente.</p>
                        <p>Como professora de inglês com quase três décadas de experiência, estou sediada em Portugal, onde dediquei a minha carreira a capacitar jovens adultos, profissionais e académicos. A minha jornada começou numa escola de línguas, Inglês Funcional, em Portugal, e pouco depois de concluir um mestrado em Educação, embarquei no contexto universitário na Universidade de Coimbra, em Portugal, e na Universidade de Durham, no Reino Unido.</p>
                    </div>
                    <img src={ Portrait } alt="Portrait"></img>
                </div>
                <div className="lf-about__container">
                    <img src={ LeafLogo } alt="Leaf Logo"></img>
                    <span>A missão do L E A F é proporcionar aos aprendentes de inglês um centro abrangente onde possam adquirir competências linguísticas essenciais, aprimorar a fluência e aumentar a confiança na comunicação em inglês. Acredito firmemente que o sucesso na aprendizagem de uma língua não envolve apenas a aplicação de um conjunto de regras e prática regular, mas também um sentimento de segurança e confiança que ultrapassa os obstáculos de aprendizagem e promove uma aquisição aprimorada da língua.</span>
                </div>
                <div className="lf-about__mentions">
                    <div className="lf-about__mentions-unit" style={QuotesStyle}>
                        <span className="lf-about__mentions-unit--text lf-italic">Having classes with Michelle was a transformative experience. Her guidance helped me enhance my English skills and gain the confidence to actively contribute in a business setting, especially during crucial stakeholder meetings and discussions. I'm immensely grateful for her support and mentorship.</span>
                        <span>Pedro Caetano, MD</span>
                        <div style={Quotes1Style}></div>
                        <div style={Quotes2Style}></div>
                    </div>
                    <div className="lf-about__mentions-unit" style={QuotesStyle}>
                        <span className="lf-about__mentions-unit--text lf-italic">Michelle is one of the most talented and creative language professionals we have employed. Her awareness of pedagogical materials preparation, classroom methodologies and student needs, together with her complete dedication and professionalism, make her one of our most valued teachers.</span>
                        <span>Steve Kirk, University of Durham, UK</span>
                        <div style={Quotes1Style}></div>
                        <div style={Quotes2Style}></div>
                    </div>
                </div>
            </div>
            <div className="lf-bg-container">
                <div className="lf-services" id="services">
                    <h1 style={{ color: '#ffffff' }}>Serviços</h1>
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
                            <span className="lf-services__cards-unit--description">O conteúdo específico e a estrutura do curso podem variar de acordo com o nível (iniciante, intermédio, avançado) e os objetivos do curso. Este curso foi desenvolvido para ajudar os alunos a usar o inglês com confiança em cenários da vida real e a melhorar as suas competências de conversação e comunicação.</span>
                            <div className="lf-services__cards-unit--price">
                                <div className="lf-services__cards-unit--price-module">
                                    <h3>Módulo: 10h</h3>
                                </div>
                                <div className="lf-services__cards-unit--price-values">
                                    <h3>Grupos/hora: 160,00€</h3>
                                    <h3>Individual/hora: 30,00€</h3>
                                </div>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">Contacte-nos</a>
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
                            <span className="lf-services__cards-unit--description">Este curso pode ser personalizado com base nas necessidades específicas dos participantes e dos setores em que trabalham. O objetivo é equipar os participantes com as competências linguísticas e de comunicação necessárias para se destacarem nas suas carreiras profissionais e se envolverem efetivamente na comunidade empresarial global.</span>
                            <div className="lf-services__cards-unit--price">
                                <div className="lf-services__cards-unit--price-module">
                                    <h3>Módulo: 10h</h3>
                                </div>
                                <div className="lf-services__cards-unit--price-values">
                                    <h3>Grupos/hora: 160,00€</h3>
                                    <h3>Individual/hora: 30,00€</h3>
                                </div>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">Contacte-nos</a>
                            </div>
                       </div>
                    </div>
                    <div className="lf-services__cards">
                       <h1>Inglês para Fins Académicos</h1>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">Competências acadêmicas para estudantes a iniciar o Ensino Superior</h2>
                            <ul className="lf-services__cards-unit--topics">
                                <li>Vocabulário e Terminologia Académico</li>
                                <li>Leitura e compreensão de textos académicos</li>
                                <li>Desenvolver competências de pensamento crítico</li>
                                <li>Competências de escrita</li>
                                <li>Técnicas de pesquisa</li>
                                <li>Técnicas de apresentação oral</li>
                                <li>Gerência de tempo e de estudo</li>
                            </ul>
                            <span className="lf-services__cards-unit--description">O conteúdo específico e a estrutura do curso podem variar de acordo com o nível (iniciante, intermédio, avançado) dos participantes. Este curso foi desenvolvido para ajudar os alunos a usar o inglês com confiança no âmbito académico. As competências obtidas podem ser transferidas para a técnicas de escrita, leitura e pesquisa em outras línguas.</span>
                            <div className="lf-services__cards-unit--price">
                                <div className="lf-services__cards-unit--price-module">
                                    <h3>Módulo: 10h</h3>
                                </div>
                                <div className="lf-services__cards-unit--price-values">
                                    <h3>Grupos/hora: 170,00€</h3>
                                    <h3>Individual/hora: 32,00€</h3>
                                </div>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">Contacte-nos</a>
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
                            <span className="lf-services__cards-unit--description">O conteúdo e a estrutura deste curso podem variar dependendo da instituição e das disciplinas académicas específicas dos alunos. O objetivo é ajudar os alunos a se tornarem comunicadores e académicos eficazes e confiantes nas suas áreas de estudo escolhidas. As competências obtidas podem ser transferidas para a técnicas de escrita, leitura e pesquisa em outras línguas.</span>
                            <div className="lf-services__cards-unit--price">
                                <div className="lf-services__cards-unit--price-module">
                                    <h3>Módulo: 10h</h3>
                                </div>
                                <div className="lf-services__cards-unit--price-values">
                                    <h3>Grupos/hora: 170,00€</h3>
                                    <h3>Individual/hora: 32,00€</h3>
                                </div>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">Contacte-nos</a>
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
                                <div className="lf-services__cards-unit--price-module">
                                    <h3>Módulo: 10h</h3>
                                </div>
                                <div className="lf-services__cards-unit--price-values">
                                    <h3>Grupos/hora: 180,00€</h3>
                                    <h3>Individual/hora: 35,00€</h3>
                                </div>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">Contacte-nos</a>
                            </div>
                       </div>
                    </div>
                    <div className="lf-services__cards">
                       <h1>Técnicas de falar em público</h1>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">Falar em público</h2>
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
                                <div className="lf-services__cards-unit--price-module">
                                    <h3>Módulo: 10h</h3>
                                </div>
                                <div className="lf-services__cards-unit--price-values">
                                    <h3>Grupos/hora: 170,00€</h3>
                                    <h3>Individual/hora: 32,00€</h3>
                                </div>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">Contacte-nos</a>
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
