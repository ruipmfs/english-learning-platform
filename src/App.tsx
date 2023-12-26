import './App.scss';
import BackgroundVid from './assets/background2.mp4';
import Portrait from './assets/AboutUs.jpg';
import Quotes1 from './assets/quotes1.png';
import Quotes2 from './assets/quotes2.png';
import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { TypeAnimation } from "react-type-animation";
import LeafLogo from './assets/leaf_logo_3_negative.png'
import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggleLanguage } from './store';

function App() {
    // @ts-ignore
    const isPortuguese = useSelector((state) => state.isPortuguese);
    const dispatch = useDispatch();
    const updateLang = () => {
        dispatch(toggleLanguage());
    }

    const QuotesStyle: React.CSSProperties = {
        position: 'relative', // Set position to relative for pseudo-elements
        zIndex: -1,
      };
    
    const Quotes1Style: React.CSSProperties = {
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

    const Quotes2Style: React.CSSProperties = {
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

    const [isScrolled, setIsScrolled] = useState(false);
    const checkIsScrolled = () => {
        if (window.scrollY >= 80) {
            setIsScrolled(true)
        }
        else {
            setIsScrolled(false)
        }
    }

    window.addEventListener('scroll', checkIsScrolled);

    return (
        <div className="lf-homepage">
            <video autoPlay loop muted playsInline className="lf-homepage__background-vid">
                <source src={BackgroundVid} type="video/mp4"></source>
            </video>
            {/* @ts-ignore*/}
            <Header changeLanguage={ updateLang } />
            <div className="lf-homepage__container">
                <TypeAnimation className="lf-homepage__container__type-animation"
                    style={{ whiteSpace: 'pre-line', height: '420', display: 'block', fontFamily: "'Oranienbaum', cursive" }}
                    sequence={[
                        `Live\nEnglish\nAnd\nFly`,
                        2000,
                        '',
                    ]}
                    repeat={Infinity}
                />
                { !isScrolled && <a href="#about" className="lf-homepage__button"><FontAwesomeIcon icon={faChevronDown} beat style={{color: "#ffffff", height: 50, width: 50}} /></a> }
            </div>
            <div className="lf-about" id="about">
                <h1>{isPortuguese ? "O que é a L E A F?" : "What is L E A F?"}</h1>
                <div className="lf-about__container">
                    <div className="lf-about__container--text">
                        <p>{ isPortuguese ? "Sempre tive uma fascinação por línguas - os seus sons, as suas nuances culturais e o seu uso como instrumento de expressão. A minha educação na rica tapeçaria cultural da África do Sul proporcionou-me um privilégio único - mergulhar no mosaico vibrante da diversidade étnica. Isso não só proporcionou uma experiência enriquecedora, mas também aumentou a consciência dos desafios que enfrentamos ao tentar comunicar numa língua diferente." : "I have always had a fascination for languages – their sounds, their cultural nuances, and their use as an instrument for expression. My upbringing in the culturally rich tapestry of South Africa has afforded me the unique privilege of immersing myself in the vibrant mosaic of ethnic diversity. This not only provided an enriching experience but also heightened awareness of the challenges we encounter when trying to communicate in a different language."}</p>
                        <p>{ isPortuguese ? "Como professora de inglês com quase três décadas de experiência, estou sediada em Portugal, onde dediquei a minha carreira a capacitar jovens adultos, profissionais e académicos. A minha jornada começou numa escola de línguas, Inglês Funcional, em Portugal, e pouco depois de concluir um mestrado em Educação, embarquei no contexto universitário na Universidade de Coimbra, em Portugal, e na Universidade de Durham, no Reino Unido." : "As an English teacher boasting nearly three decades of expertise, I am based in\n" +
                            "Portugal, where I have dedicated my career to empowering young adults,\n" +
                            "professionals and academics. My journey began at a language school, Inglês\n" +
                            "Funcional, in Portugal and soon after completing a Master’s degree in\n" +
                            "Education, ventured into the university context at Coimbra University in Portugal\n" +
                            "and Durham University in the United Kingdom."}</p>
                    </div>
                    <img src={ Portrait } alt="Portrait"></img>
                </div>
                <div className="lf-about__container">
                    <img src={ LeafLogo } alt="Leaf Logo"></img>
                    <span>{ isPortuguese ?
                        "A missão do L E A F é proporcionar aos aprendentes de inglês um centro\n" +
                        "abrangente onde possam adquirir competências linguísticas essenciais,\n" +
                        "aprimorar a fluência e aumentar a confiança na comunicação em inglês.\n" +
                        "Acredito firmemente que o sucesso na aprendizagem de uma língua não\n" +
                        "envolve apenas a aplicação de um conjunto de regras e prática regular, mas\n" +
                        "também um sentimento de segurança e confiança que ultrapassa os obstáculos\n" +
                        "de aprendizagem e promove uma aquisição aprimorada da língua."
                        : "The L E A F mission is to provide English learners with a comprehensive hub where they can acquire essential language skills, improve fluency and boost their confidence in English communication. I firmly believe that success in learning a language does not only involve the application of a set of rules and regular practice, but also a feeling of security and confidence that overcomes learning obstacles and fosters enhanced language acquisition."}</span>
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
                    <h1 style={{ color: '#ffffff' }}>{isPortuguese ? "Serviços" : "Services"}</h1>
                    <div className="lf-services__cards">
                       <h1>{ isPortuguese ? "Inglês para Adultos" : "English for Adults"}</h1>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">{ isPortuguese ? "Inglês Geral para a Vida" : "General English for Life"}</h2>
                            <ul className="lf-services__cards-unit--topics">
                                <li>{isPortuguese ? "Competências funcionais de linguagem" : "Functional Language Skills"}</li>
                                <li>{isPortuguese ? "Conversas diárias" : "Everyday Conversations"}</li>
                                <li>{isPortuguese ? "Compreensão auditiva e de leitura" : "Listening & Reading Comprehension"}</li>
                                <li>{isPortuguese ? "Prática de conversação" : "Speaking Practice"}</li>
                                <li>{isPortuguese ? "Competências de escrita" : "Writing Skills"}</li>
                                <li>{isPortuguese ? "Aspetos culturais e sociais" : "Cultural and Social Aspects"}</li>
                                <li>{isPortuguese ? "Comunicação digital" : "Digital Communication"}</li>
                            </ul>
                            <span className="lf-services__cards-unit--description lf-italic">{isPortuguese ? "O conteúdo específico e a estrutura do curso podem variar de acordo com o nível (iniciante, intermédio, avançado) e os objetivos do curso. Este curso foi desenvolvido para ajudar os alunos a usar o inglês com confiança em cenários da vida real e a melhorar as suas competências de conversação e comunicação." : "The specific content and structure of the\n" +
                                "course may vary based on the level\n" +
                                "(beginner, intermediate, advanced) and\n" +
                                "the goals of the course. This course is\n" +
                                "designed to help students use English\n" +
                                "confidently in real-life scenarios and\n" +
                                "improve their conversational and\n" +
                                "communication skills."}</span>
                            <div className="lf-services__cards-unit--price">
                                <div className="lf-services__cards-unit--price-module lf-black">
                                    <h3>{isPortuguese ? "Módulo: 10h" : "Module: 10h"}</h3>
                                </div>
                                <div className="lf-services__cards-unit--price-values lf-black">
                                    <h3>{isPortuguese ? "Grupos/hora: 160,00€" : "Groups/hour: 160,00€"}</h3>
                                    <h3>{isPortuguese ? "Individual/hora: 30,00€" : "Individual/hour: 30,00€"}</h3>
                                </div>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">{isPortuguese ? "Contacte-nos" : "Contact us"}</a>
                            </div>
                       </div>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">{isPortuguese ? "Inglês para Comunicação Empresarial" : "English for Business Communication" }</h2>
                            <ul className="lf-services__cards-unit--topics">
                                <li>{isPortuguese ? "Vocabulário empresarial" : "Business Vocabulary"}</li>
                                <li>{isPortuguese ? "Competências de comunicação empresarial" : "Business Communication Skills"}</li>
                                <li>{isPortuguese ? "Comunicação intercultural" : "Cross-Cultural Communication"}</li>
                                <li>{isPortuguese ? "Networking e socialização" : "Networking and Socialising"}</li>
                                <li>{isPortuguese ? "Comunicação digital" : "Digital Communication"}</li>
                            </ul>
                            <span className="lf-services__cards-unit--description lf-italic">{isPortuguese ? "Este curso pode ser personalizado com base nas necessidades específicas dos participantes e dos setores em que trabalham. O objetivo é equipar os participantes com as competências linguísticas e de comunicação necessárias para se destacarem nas suas carreiras profissionais e se envolverem efetivamente na comunidade empresarial global." : "This course may be customised based on\n" +
                                "the specific needs of the participants\n" +
                                "and the industries they work in. The goal\n" +
                                "is to equip participants with the\n" +
                                "language and communication skills\n" +
                                "necessary to excel in their professional\n" +
                                "careers and engage effectively in the\n" +
                                "global business community."}</span>
                            <div className="lf-services__cards-unit--price">
                                <div className="lf-services__cards-unit--price-module lf-black">
                                    <h3>{isPortuguese ? "Módulo: 10h" : "Module: 10h"}</h3>
                                </div>
                                <div className="lf-services__cards-unit--price-values lf-black">
                                    <h3>{isPortuguese ? "Grupos/hora: 160,00€" : "Groups/hour: 160,00€"}</h3>
                                    <h3>{isPortuguese ? "Individual/hora: 30,00€" : "Individual/hour: 30,00€"}</h3>
                                </div>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">{isPortuguese ? "Contacte-nos" : "Contact us"}</a>
                            </div>
                       </div>
                    </div>
                    <div className="lf-services__cards">
                       <h1>{isPortuguese ? "Inglês para Fins Académicos" : "English for Academic Purposes"}</h1>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">{isPortuguese ? "Competências acadêmicas para estudantes a iniciar o Ensino Superior" : "Academic skills for Undergraduates"}</h2>
                            <ul className="lf-services__cards-unit--topics">
                                <li>{isPortuguese ? "Vocabulário e Terminologia Académico" : "Academic Vocabulary and Terminology"}</li>
                                <li>{isPortuguese ? "Leitura e compreensão de textos académicos" : "Reading and Understanding Academic Texts"}</li>
                                <li>{isPortuguese ? "Desenvolver competências de pensamento crítico" : "Developing critical thinking skills"}</li>
                                <li>{isPortuguese ? "Competências de escrita" : "Writing skills"}</li>
                                <li>{isPortuguese ? "Técnicas de pesquisa" : "Research skills"}</li>
                                <li>{isPortuguese ? "Técnicas de apresentação oral" : "Oral Presentation Skills"}</li>
                                <li>{isPortuguese ? "Gerência de tempo e de estudo" : "Time Management & Study skills"}</li>
                            </ul>
                            <span className="lf-services__cards-unit--description lf-italic">{isPortuguese ? "O conteúdo específico e a estrutura do curso podem variar de acordo com o nível (iniciante, intermédio, avançado) dos participantes. Este curso foi desenvolvido para ajudar os alunos a usar o inglês com confiança no âmbito académico. As competências obtidas podem ser transferidas para a técnicas de escrita, leitura e pesquisa em outras línguas." : "This course is designed for\n" +
                                "undergraduate students who are in\n" +
                                "their initial years at university. The\n" +
                                "skills acquired in this course are\n" +
                                "transferable to other languages."}</span>
                            <div className="lf-services__cards-unit--price">
                                <div className="lf-services__cards-unit--price-module lf-black">
                                    <h3>{isPortuguese ? "Módulo: 10h" : "Module: 10h"}</h3>
                                </div>
                                <div className="lf-services__cards-unit--price-values lf-black">
                                    <h3>{isPortuguese ? "Grupos/hora: 170,00€" : "Groups/hour: 170,00€"}</h3>
                                    <h3>{isPortuguese ? "Individual/hora: 32,00€" : "Individual/hour: 32,00€"}</h3>
                                </div>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">{isPortuguese ? "Contacte-nos" : "Contact us"}</a>
                            </div>
                       </div>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">{isPortuguese ? "Competências de Escrita e Oralidade académica" : "Academic Writing and Speaking Skills"}</h2>
                            <ul className="lf-services__cards-unit--topics">
                                <li>{isPortuguese ? "Estratégias para a leitura e compreensão de textos académicos" : "Strategies for reading and understanding academic texts"}</li>
                                <li>{isPortuguese ? "Analisar argumentos em artigos e livros académicos" : "Analysing arguments in scholarly articles and books"}</li>
                                <li>{isPortuguese ? "Desenvolver competências na escrita académica" : "Developing academic writing skills"}</li>
                                <li>{isPortuguese ? "Redação de propostas de pesquisa e pedidos de subsídios" : "Writing research proposals and grant applications"}</li>
                                <li>{isPortuguese ? "Preparar e fazer apresentações académicas eficazes" : "Preparing and delivering effective academic presentations"}</li>
                            </ul>
                            <span className="lf-services__cards-unit--description lf-italic">{isPortuguese ? "O conteúdo e a estrutura deste curso podem variar dependendo da instituição e das disciplinas académicas específicas dos alunos. O objetivo é ajudar os alunos a se tornarem comunicadores e académicos eficazes e confiantes nas suas áreas de estudo escolhidas. As competências obtidas podem ser transferidas para a técnicas de escrita, leitura e pesquisa em outras línguas." : "The content and structure of this\n" +
                                "course may vary depending on the\n" +
                                "institution and the specific academic\n" +
                                "disciplines of the students. The goal\n" +
                                "is to help students become effective\n" +
                                "and confident communicators and\n" +
                                "scholars in their chosen fields of\n" +
                                "study. The skills acquired in this\n" +
                                "course are transferable to other\n" +
                                "languages."}</span>
                            <div className="lf-services__cards-unit--price">
                                <div className="lf-services__cards-unit--price-module lf-black">
                                    <h3>{isPortuguese ? "Módulo: 10h" : "Module: 10h"}</h3>
                                </div>
                                <div className="lf-services__cards-unit--price-values lf-black">
                                    <h3>{isPortuguese ? "Grupos/hora: 170,00€" : "Groups/hour: 170,00€"}</h3>
                                    <h3>{isPortuguese ? "Individual/hora: 32,00€" : "Individual/hour: 32,00€"}</h3>
                                </div>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">{isPortuguese ? "Contacte-nos" : "Contact us"}</a>
                            </div>
                       </div>
                    </div>
                    <div className="lf-services__cards">
                       <h1>{isPortuguese ? "Inglês para exames de Cambridge" : "English for Cambridge Exams"}</h1>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">{isPortuguese ? "Preparação para exames Cambridge" : "Cambridge Exam preparation"}</h2>
                            <ul className="lf-services__cards-unit--topics">
                                <li>KET</li>
                                <li>PET</li>
                                <li>FCE</li>
                                <li>CAE</li>
                                <li>IELTS</li>
                            </ul>
                            <p className="lf-services__cards-unit--description"></p>
                            <div className="lf-services__cards-unit--price">
                                <div className="lf-services__cards-unit--price-module lf-black">
                                    <h3>{isPortuguese ? "Módulo: 10h" : "Module: 10h"}</h3>
                                </div>
                                <div className="lf-services__cards-unit--price-values lf-black">
                                    <h3>{isPortuguese ? "Grupos/hora: 180,00€" : "Groups/hour: 180,00€"}</h3>
                                    <h3>{isPortuguese ? "Individual/hora: 35,00€" : "Individual/hour: 35,00€"}</h3>
                                </div>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">{isPortuguese ? "Contacte-nos" : "Contact us"}</a>
                            </div>
                       </div>
                    </div>
                    <div className="lf-services__cards">
                       <h1>{isPortuguese ? "Técnicas de falar em público" : "Guidance in Public Speaking"}</h1>
                       <div className="lf-services__cards-unit">
                            <h2 className="lf-services__cards-unit--title">{isPortuguese ? "Falar em público" : "Public Speaking"}</h2>
                            <ul className="lf-services__cards-unit--topics">
                                <li>{isPortuguese ? "Superar o medo e a ansiedade ao falar em público" : "Overcoming fear and anxiety in public speaking"}</li>
                                <li>{isPortuguese ? "Preparação e organização do discurso" : "Speech preparation and organisation"}</li>
                                <li>{isPortuguese ? "Análise do público" : "Audience analysis"}</li>
                                <li>{isPortuguese ? "Fazer um discurso eficaz" : "Effective delivery"}</li>
                                <li>{isPortuguese ? "Recursos visuais e tecnologia" : "Visual aids and technology"}</li>
                                <li>{isPortuguese ? "Linguagem corporal e movimento" : "Body language and movement"}</li>
                                <li>{isPortuguese ? "Responder a perguntas e interação com o público" : "Handling questions and audience interaction"}</li>
                                <li>{isPortuguese ? "Géneros diferentes de discursos" : "Special types of speeches"}</li>
                            </ul>
                            <p className="lf-services__cards-unit--description lf-italic">{isPortuguese ? "O conteúdo do curso pode variar de acordo com o nível (iniciante, intermédio, avançado) e os objetivos específicos do curso. O objetivo é ajudar os indivíduos a se tornarem comunicadores confiantes e eficazes em situações de falar em público, seja num contexto profissional ou pessoal." : "The content of the course can vary based on the level (beginner, intermediate, advanced)\n" +
                                "and the specific goals of the course. The aim is to help individuals become confident and\n" +
                                "effective communicators in public speaking situations, whether in a professional or personal\n" +
                                "context."}</p>
                            <div className="lf-services__cards-unit--price">
                                <div className="lf-services__cards-unit--price-module lf-black">
                                    <h3>{isPortuguese ? "Módulo: 10h" : "Module: 10h"}</h3>
                                </div>
                                <div className="lf-services__cards-unit--price-values lf-black">
                                    <h3>{isPortuguese ? "Grupos/hora: 170,00€" : "Groups/hour: 170,00€"}</h3>
                                    <h3>{isPortuguese ? "Individual/hora: 32,00€" : "Individual/hour: 32,00€"}</h3>
                                </div>
                            </div>
                            <div className="lf-services__cards-unit--button">
                                <a className="lf-services__cards-unit--button" href="#contact">{isPortuguese ? "Contacte-nos" : "Contact us"}</a>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <div className="lf-contact" id="contact">
                <h1>{isPortuguese ? "Contacte-nos" : "Contact us"}</h1>
                <h3 className="lf-black">{isPortuguese ? "Como podemos ajudar?" : "How can we help?"}</h3>
                <div className="lf-contact-container">
                    <div className="lf-contact-container--mail">
                        <h2 className="lf-black">{isPortuguese ? "Entre em Contacto!" : "Drop a line!"}</h2>
                        <a className="lf-black" href="mailto:leaf.live.english@gmail.com" target="__blank">{isPortuguese ? "leaf.live.english@gmail.com" : "leaf.live.english@gmail.com"}</a>
                    </div>
                    <div className="lf-contact-container--phone">
                        <h2 className="lf-black">{isPortuguese ? "Dê um toque!" : "Get in touch!"}</h2>
                        <div className="lf-contact-container--phone__unit">
                            <span className="lf-black">(+351) 934 524 501</span>
                        </div>
                    </div>
                    <div className="lf-contact-container--social">
                        <h2 className="lf-black">{isPortuguese ? "Mantenha-se a par!" : "Keep on track!"}</h2>
                        <span className="lf-black">SOCIAL MEDIA LINKS!!!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App
