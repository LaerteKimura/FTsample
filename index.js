const express = require('express')
const app = express()
require('dotenv').config();

const bodyparser = require('body-parser');
const roteador = require('./rotas');
 
app.use(bodyparser.urlencoded({ extended:true }));
app.use(bodyparser.json())

app.use('/token', roteador);

app.get('/fichatecnica', (req,res)=>{
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Content-Type", "application/json");
    var auth = req.headers['authorization']; 
    console.log(auth);
    console.log(req.body)

    const {COD_FICHA_TECNICA} = req.params;
    console.log(COD_FICHA_TECNICA)

    res.status(200).send(`{
        "DATA": [
            {
                "QUAIS_OS_MATERIAIS_DO_CURSO_COMERCIAL": "",
                "ROWNUM": 1,
                "TAGS_COMERCIAL": "curso de desenho de joias sp, curso de desenho de joias do senac, criação de peças de joalheria, desenho de peças de joalheria, normas específicas de joalheria, desenho de observação, aplicação de perspectiva, coloração de joias, gemologia, técnicas de lapidação, técnicas de cravação, Senac. ",
                "OBS_PARA_CLIENTE": "Para a realização do curso é necessária a compra de materiais que serão utilizados no decorrer do período. No primeiro dia de aula os participantes serão orientados quanto à compra dos itens.",
                "POSSO_FAZER_ESTE_CURSO_COMERCIAL": "",
                "DESPUBLICAR_CURSO": "true",
                "LINK_PARA_O_PORTAL": "",
                "COMO_VOU_APRENDER_COMERCIAL": "Proposta metodológica:\r\nO curso permite que os alunos exercitem o desenho e busquem alternativas para a confecção de uma joia, promovendo ainda atividades como proposições de problemas, discussões em grupo, pesquisas e exposições dialogadas com o apoio de slides. \r\nOs alunos serão incentivados a visitar indústrias de joias, feiras, exposições e vitrines de joalheria e a participar de concursos. Poderão participar de palestras com profissionais de referência no segmento de joalheria (entidades de classe, marketing, tendências etc.).\r\n",
                "TEMA_PRINCIPAL_PORTAL": "123-468",
                "PASSO_GCR": "false",
                "PRE_REQUISITO": "",
                "CERTIFICACAO": "O Senac confere certificado de conclusão do curso aos alunos aprovados.",
                "DT_EFETIVA": "Jan 1, 1900",
                "METODOLOGIA": "Proposta metodológica:\r\nO curso permite que os alunos exercitem o desenho e busquem alternativas para a confecção de uma joia, promovendo ainda atividades como proposições de problemas, discussões em grupo, pesquisas e exposições dialogadas com o apoio de slides. \r\nOs alunos serão incentivados a visitar indústrias de joias, feiras, exposições e vitrines de joalheria e a participar de concursos. Poderão participar de palestras com profissionais de referência no segmento de joalheria (entidades de classe, marketing, tendências etc.).\r\n",
                "DT_EFETIVA_FORMATADA": "01/01/1900",
                "O_QUE_MAIS_PRECISO_SABER_COMERCIAL": "",
                "TITULO_COMERCIAL": "Desenho de Joias",
                "OBJETIVO_COMERCIAL": "Objetivo:\r\nCapacitar o profissional para desenvolver e ilustrar joias, utilizando técnicas de desenho e coloração apropriadas para apresentação de projetos na comercialização em indústrias, exposições, feiras e concursos.\r\n",
                "DOCUMENTOS_PARA_MATRICULA": "Apresentação dos documentos:\r\n- RG\r\n- CPF",
                "DESC_TIPO": "LIVRE",
                "EXIBIR_NO_PORTAL": "true",
                "TEMA_SUBTEMA_MERCADOLOGICO": ",111-421,123-468",
                "COD_TIPO_COMERCIAL": 88414,
                "ESTAGIO": "",
                "COD_TIPO": "L",
                "COMO_ME_MATRICULAR_COMERCIAL": "",
                "ATOS_AUTORIZATIVOS": "",
                "INSCRICOES_ABERTAS": "true",
                "PRE_REQUISITO_PUBLICO_ALVO": "Pré-Requisitos: \\n Público Alvo: Trabalhadores do segmento de jóias, profissionais e alunos da área de Design, público em geral e jovens em busca de inserção no mercado de trabalho.\\n Idade Mínima: 16\\n Escolaridade Mínima: ensino fundamental completo",
                "PRECISO_ESTAGIAR_COMERCIAL": "",
                "COD_FICHA_TECNICA": 3920,
                "CARGA_HORARIA_TOTAL": 72,
                "POSSUI_BOLSAS": "false",
                "PROGRAMA": "-\u0095 Introdução à história de joalheria e do design\r\n\u0095- Desenho de observação\r\n- Conhecimento e aplicação da perspectiva\r\n- Desenho de peças típicas da joalheria\r\n- Projeto e coloração das peças elaboradas\r\n- Introdução a gemologia, tipos de gemas, lapidações e cravações\r\n- Processo de criação, de ilustração e de apresentação dos desenhos\r\n- Montagem de portifólio executado em aula",
                "OBJETIVO": "Objetivo:\r\nCapacitar o profissional para desenvolver e ilustrar joias, utilizando técnicas de desenho e coloração apropriadas para apresentação de projetos na comercialização em indústrias, exposições, feiras e concursos.\r\n",
                "PUBLICO_ALVO": "Trabalhadores do segmento de jóias, profissionais e alunos da área de Design, público em geral e jovens em busca de inserção no mercado de trabalho.",
                "DT_ULTIMA_ALTERACAO": "",
                "DSC_MODALIDADE": "APERFEIÇOAMENTO",
                "OQUE_VOU_APRENDER_COMERCIAL": "",
                "TEREI_DIPLOMA_COMERCIAL": "",
                "TEREI_CERTIFICADO_COMERCIAL": "",
                "COD_MODALIDADE": "11",
                "TITULO": "DESENHO DE JÓIAS"
            },
            {
                "QUAIS_OS_MATERIAIS_DO_CURSO_COMERCIAL": "https://fichatecnica.sp.senac.br/upload/uploads/materiais_comercial/3920/20150101/materiais_3920_01_01_2015_fic_desenho_joais.pdf",
                "ROWNUM": 2,
                "TAGS_COMERCIAL": "desenhar joias,desenhar brincos,desenhar aneis,desenhar pulseiras,desenhar colar,desenhar broches,desenho,criação de joias,design de joias,gemologia",
                "OBS_PARA_CLIENTE": "Para a realização do curso é necessária a compra de materiais que serão utilizados no decorrer do período. No primeiro dia de aula os participantes serão orientados quanto à compra dos itens.",
                "POSSO_FAZER_ESTE_CURSO_COMERCIAL": "<p>Você deve ter concluído o ensino fundamental 2 e ser maior de 16 anos.<br /><br />Este curso é para quem gosta de usar a criatividade, se identifica com o universo de design de joias e gostaria de atuar ou se aperfeiçoar nessa área.<br /><br />Caso a sua turma tenha aulas remotas, você precisará usar um celular, tablet ou, preferencialmente, um computador com conexão à internet.</p>",
                "DESPUBLICAR_CURSO": "false",
                "LINK_PARA_O_PORTAL": "https://www.sp.senac.br/cursos-livres/curso-de-desenho-de-joias",
                "COMO_VOU_APRENDER_COMERCIAL": "<p>Com aulas práticas e dinâmicas que conectam você às inovações da área, sempre com espaço para tirar dúvidas e trocar experiências.<br /><br />Tudo isso para você ficar cada vez mais perto do seu objetivo.<br /><br />Este é o Jeito Senac de Educar.<br /><br /><strong>Importante:</strong> para turmas com aulas remotas, teremos encontros on-line e ao vivo, usando uma plataforma digital. Então, você precisará acompanhar as aulas nos dias e horários da sua turma.</p>",
                "TEMA_PRINCIPAL_PORTAL": "123-465",
                "PASSO_GCR": "false",
                "PRE_REQUISITO": "Pré-requisitos e Público-alvo\r\nIdade mínima: 16 anos.\r\nEscolaridade mínima: ensino fundamental completo.\r\nTrabalhadores do segmento de joias, profissionais e alunos da área de design, público em geral e jovens em busca de inserção no mercado de trabalho.\r\n",
                "CERTIFICACAO": "O Senac confere certificado de conclusão do curso aos alunos aprovados.",
                "DT_EFETIVA": "Jan 1, 2015",
                "METODOLOGIA": "O curso Desenho de Joias engloba aulas expositivas dialogadas e com demonstração, aulas práticas, visitações e a realização de pesquisas em publicações de moda para a busca de alternativas para a confecção de joias.\r\n",
                "DT_EFETIVA_FORMATADA": "01/01/2015",
                "O_QUE_MAIS_PRECISO_SABER_COMERCIAL": "",
                "TITULO_COMERCIAL": "Desenho de Joias",
                "OBJETIVO_COMERCIAL": "<p>Você aprenderá como criar e ilustrar joias de vários modelos, utilizando técnicas de desenho e coloração.</p>",
                "DOCUMENTOS_PARA_MATRICULA": "Apresentação dos documentos originais:\r\n- RG\r\n- CPF",
                "DESC_TIPO": "LIVRE",
                "EXIBIR_NO_PORTAL": "true",
                "TEMA_SUBTEMA_MERCADOLOGICO": ",123-465",
                "COD_TIPO_COMERCIAL": 88414,
                "ESTAGIO": "",
                "COD_TIPO": "L",
                "COMO_ME_MATRICULAR_COMERCIAL": "<p>Escolha a sua turma e finalize a compra do curso.<br /><br />Após se matricular, você precisará dos seus documentos pessoais. Então, já deixe separado:<br />- RG (apresentar original)<br />- CPF (apresentar original)<br /><br />Você também pode apresentar outro documento de identificação original que tenha os números do seu RG e CPF.</p>",
                "ATOS_AUTORIZATIVOS": "",
                "INSCRICOES_ABERTAS": "true",
                "PRE_REQUISITO_PUBLICO_ALVO": "Pré-Requisitos: Pré-requisitos e Público-alvo\r\nIdade mínima: 16 anos.\r\nEscolaridade mínima: ensino fundamental completo.\r\nTrabalhadores do segmento de joias, profissionais e alunos da área de design, público em geral e jovens em busca de inserção no mercado de trabalho.\r\n\\n Público Alvo: Profissionais da área de moda e design e interessados que desejam investir em sua formação e desenvolvimento.\\n Idade Mínima: 16\\n Escolaridade Mínima: ensino fundamental completo",
                "PRECISO_ESTAGIAR_COMERCIAL": "",
                "COD_FICHA_TECNICA": 3920,
                "CARGA_HORARIA_TOTAL": 72,
                "POSSUI_BOLSAS": "false",
                "PROGRAMA": "- Introdução à história de joalheria e do design.\r\n- Desenho de observação.\r\n- Conhecimento e aplicação da perspectiva.\r\n- Desenho de peças típicas da joalheria.\r\n- Projeto e coloração das peças elaboradas.\r\n- Introdução a gemologia, tipos de gemas, lapidações e cravações.\r\n- Processo de criação, de ilustração e de apresentação dos desenhos.\r\n- Montagem de portfólio executado em aula.\r\n",
                "OBJETIVO": "Capacita o aluno para criar, desenvolver e ilustrar joias de vários modelos, utilizando técnicas de desenho e coloração. Identificando e analisando seu processo de criação e construção de acordo com normas específicas de joalheria.\r\n",
                "PUBLICO_ALVO": "Profissionais da área de moda e design e interessados que desejam investir em sua formação e desenvolvimento.",
                "DT_ULTIMA_ALTERACAO": "October, 11 2020 13:41:01",
                "DSC_MODALIDADE": "APERFEIÇOAMENTO",
                "OQUE_VOU_APRENDER_COMERCIAL": "<p>- Panorama sobre o design de joias<br />- Desenvolver esboços de objetos de diferentes formas e volumes<br />- Criar e desenhar à mão diferentes tipos de joias, como anéis, colares e brincos<br />- Conceitos básicos de gemologia, tipos de gemas, lapidações e cravações<br />- Montar portfólio com material desenvolvido durante o curso</p>",
                "TEREI_DIPLOMA_COMERCIAL": "",
                "TEREI_CERTIFICADO_COMERCIAL": "<p>Sim. Após a aprovação no curso, você receberá seu certificado, que é aceito em todo o Brasil.</p>",
                "COD_MODALIDADE": "11",
                "TITULO": "DESENHO DE JÓIAS"
            }
        ],
        "PAGINATION": {
            "TOTAL": 2,
            "ENDROW": 2,
            "STARTROW": 1,
            "NBPAGES": 1,
            "CURRENTPAGE": 1
        }
    }` )
}
)
app.get('/fichatecnica/?COD_FICHA_TECNICA=:COD_FICHA_TECNICA', (req,res)=>{
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Content-Type", "application/json");
    var auth = req.headers['authorization']; 
    console.log(auth);
    console.log(req.body)

    const {COD_FICHA_TECNICA} = req.params;
    console.log(COD_FICHA_TECNICA)

    res.status(200).send(`{
        "DATA": [
            {
                "QUAIS_OS_MATERIAIS_DO_CURSO_COMERCIAL": "",
                "ROWNUM": 1,
                "TAGS_COMERCIAL": "curso de desenho de joias sp, curso de desenho de joias do senac, criação de peças de joalheria, desenho de peças de joalheria, normas específicas de joalheria, desenho de observação, aplicação de perspectiva, coloração de joias, gemologia, técnicas de lapidação, técnicas de cravação, Senac. ",
                "OBS_PARA_CLIENTE": "Para a realização do curso é necessária a compra de materiais que serão utilizados no decorrer do período. No primeiro dia de aula os participantes serão orientados quanto à compra dos itens.",
                "POSSO_FAZER_ESTE_CURSO_COMERCIAL": "",
                "DESPUBLICAR_CURSO": "true",
                "LINK_PARA_O_PORTAL": "",
                "COMO_VOU_APRENDER_COMERCIAL": "Proposta metodológica:\r\nO curso permite que os alunos exercitem o desenho e busquem alternativas para a confecção de uma joia, promovendo ainda atividades como proposições de problemas, discussões em grupo, pesquisas e exposições dialogadas com o apoio de slides. \r\nOs alunos serão incentivados a visitar indústrias de joias, feiras, exposições e vitrines de joalheria e a participar de concursos. Poderão participar de palestras com profissionais de referência no segmento de joalheria (entidades de classe, marketing, tendências etc.).\r\n",
                "TEMA_PRINCIPAL_PORTAL": "123-468",
                "PASSO_GCR": "false",
                "PRE_REQUISITO": "",
                "CERTIFICACAO": "O Senac confere certificado de conclusão do curso aos alunos aprovados.",
                "DT_EFETIVA": "Jan 1, 1900",
                "METODOLOGIA": "Proposta metodológica:\r\nO curso permite que os alunos exercitem o desenho e busquem alternativas para a confecção de uma joia, promovendo ainda atividades como proposições de problemas, discussões em grupo, pesquisas e exposições dialogadas com o apoio de slides. \r\nOs alunos serão incentivados a visitar indústrias de joias, feiras, exposições e vitrines de joalheria e a participar de concursos. Poderão participar de palestras com profissionais de referência no segmento de joalheria (entidades de classe, marketing, tendências etc.).\r\n",
                "DT_EFETIVA_FORMATADA": "01/01/1900",
                "O_QUE_MAIS_PRECISO_SABER_COMERCIAL": "",
                "TITULO_COMERCIAL": "Desenho de Joias",
                "OBJETIVO_COMERCIAL": "Objetivo:\r\nCapacitar o profissional para desenvolver e ilustrar joias, utilizando técnicas de desenho e coloração apropriadas para apresentação de projetos na comercialização em indústrias, exposições, feiras e concursos.\r\n",
                "DOCUMENTOS_PARA_MATRICULA": "Apresentação dos documentos:\r\n- RG\r\n- CPF",
                "DESC_TIPO": "LIVRE",
                "EXIBIR_NO_PORTAL": "true",
                "TEMA_SUBTEMA_MERCADOLOGICO": ",111-421,123-468",
                "COD_TIPO_COMERCIAL": 88414,
                "ESTAGIO": "",
                "COD_TIPO": "L",
                "COMO_ME_MATRICULAR_COMERCIAL": "",
                "ATOS_AUTORIZATIVOS": "",
                "INSCRICOES_ABERTAS": "true",
                "PRE_REQUISITO_PUBLICO_ALVO": "Pré-Requisitos: \\n Público Alvo: Trabalhadores do segmento de jóias, profissionais e alunos da área de Design, público em geral e jovens em busca de inserção no mercado de trabalho.\\n Idade Mínima: 16\\n Escolaridade Mínima: ensino fundamental completo",
                "PRECISO_ESTAGIAR_COMERCIAL": "",
                "COD_FICHA_TECNICA": 3920,
                "CARGA_HORARIA_TOTAL": 72,
                "POSSUI_BOLSAS": "false",
                "PROGRAMA": "-\u0095 Introdução à história de joalheria e do design\r\n\u0095- Desenho de observação\r\n- Conhecimento e aplicação da perspectiva\r\n- Desenho de peças típicas da joalheria\r\n- Projeto e coloração das peças elaboradas\r\n- Introdução a gemologia, tipos de gemas, lapidações e cravações\r\n- Processo de criação, de ilustração e de apresentação dos desenhos\r\n- Montagem de portifólio executado em aula",
                "OBJETIVO": "Objetivo:\r\nCapacitar o profissional para desenvolver e ilustrar joias, utilizando técnicas de desenho e coloração apropriadas para apresentação de projetos na comercialização em indústrias, exposições, feiras e concursos.\r\n",
                "PUBLICO_ALVO": "Trabalhadores do segmento de jóias, profissionais e alunos da área de Design, público em geral e jovens em busca de inserção no mercado de trabalho.",
                "DT_ULTIMA_ALTERACAO": "",
                "DSC_MODALIDADE": "APERFEIÇOAMENTO",
                "OQUE_VOU_APRENDER_COMERCIAL": "",
                "TEREI_DIPLOMA_COMERCIAL": "",
                "TEREI_CERTIFICADO_COMERCIAL": "",
                "COD_MODALIDADE": "11",
                "TITULO": "DESENHO DE JÓIAS"
            },
            {
                "QUAIS_OS_MATERIAIS_DO_CURSO_COMERCIAL": "https://fichatecnica.sp.senac.br/upload/uploads/materiais_comercial/3920/20150101/materiais_3920_01_01_2015_fic_desenho_joais.pdf",
                "ROWNUM": 2,
                "TAGS_COMERCIAL": "desenhar joias,desenhar brincos,desenhar aneis,desenhar pulseiras,desenhar colar,desenhar broches,desenho,criação de joias,design de joias,gemologia",
                "OBS_PARA_CLIENTE": "Para a realização do curso é necessária a compra de materiais que serão utilizados no decorrer do período. No primeiro dia de aula os participantes serão orientados quanto à compra dos itens.",
                "POSSO_FAZER_ESTE_CURSO_COMERCIAL": "<p>Você deve ter concluído o ensino fundamental 2 e ser maior de 16 anos.<br /><br />Este curso é para quem gosta de usar a criatividade, se identifica com o universo de design de joias e gostaria de atuar ou se aperfeiçoar nessa área.<br /><br />Caso a sua turma tenha aulas remotas, você precisará usar um celular, tablet ou, preferencialmente, um computador com conexão à internet.</p>",
                "DESPUBLICAR_CURSO": "false",
                "LINK_PARA_O_PORTAL": "https://www.sp.senac.br/cursos-livres/curso-de-desenho-de-joias",
                "COMO_VOU_APRENDER_COMERCIAL": "<p>Com aulas práticas e dinâmicas que conectam você às inovações da área, sempre com espaço para tirar dúvidas e trocar experiências.<br /><br />Tudo isso para você ficar cada vez mais perto do seu objetivo.<br /><br />Este é o Jeito Senac de Educar.<br /><br /><strong>Importante:</strong> para turmas com aulas remotas, teremos encontros on-line e ao vivo, usando uma plataforma digital. Então, você precisará acompanhar as aulas nos dias e horários da sua turma.</p>",
                "TEMA_PRINCIPAL_PORTAL": "123-465",
                "PASSO_GCR": "false",
                "PRE_REQUISITO": "Pré-requisitos e Público-alvo\r\nIdade mínima: 16 anos.\r\nEscolaridade mínima: ensino fundamental completo.\r\nTrabalhadores do segmento de joias, profissionais e alunos da área de design, público em geral e jovens em busca de inserção no mercado de trabalho.\r\n",
                "CERTIFICACAO": "O Senac confere certificado de conclusão do curso aos alunos aprovados.",
                "DT_EFETIVA": "Jan 1, 2015",
                "METODOLOGIA": "O curso Desenho de Joias engloba aulas expositivas dialogadas e com demonstração, aulas práticas, visitações e a realização de pesquisas em publicações de moda para a busca de alternativas para a confecção de joias.\r\n",
                "DT_EFETIVA_FORMATADA": "01/01/2015",
                "O_QUE_MAIS_PRECISO_SABER_COMERCIAL": "",
                "TITULO_COMERCIAL": "Desenho de Joias",
                "OBJETIVO_COMERCIAL": "<p>Você aprenderá como criar e ilustrar joias de vários modelos, utilizando técnicas de desenho e coloração.</p>",
                "DOCUMENTOS_PARA_MATRICULA": "Apresentação dos documentos originais:\r\n- RG\r\n- CPF",
                "DESC_TIPO": "LIVRE",
                "EXIBIR_NO_PORTAL": "true",
                "TEMA_SUBTEMA_MERCADOLOGICO": ",123-465",
                "COD_TIPO_COMERCIAL": 88414,
                "ESTAGIO": "",
                "COD_TIPO": "L",
                "COMO_ME_MATRICULAR_COMERCIAL": "<p>Escolha a sua turma e finalize a compra do curso.<br /><br />Após se matricular, você precisará dos seus documentos pessoais. Então, já deixe separado:<br />- RG (apresentar original)<br />- CPF (apresentar original)<br /><br />Você também pode apresentar outro documento de identificação original que tenha os números do seu RG e CPF.</p>",
                "ATOS_AUTORIZATIVOS": "",
                "INSCRICOES_ABERTAS": "true",
                "PRE_REQUISITO_PUBLICO_ALVO": "Pré-Requisitos: Pré-requisitos e Público-alvo\r\nIdade mínima: 16 anos.\r\nEscolaridade mínima: ensino fundamental completo.\r\nTrabalhadores do segmento de joias, profissionais e alunos da área de design, público em geral e jovens em busca de inserção no mercado de trabalho.\r\n\\n Público Alvo: Profissionais da área de moda e design e interessados que desejam investir em sua formação e desenvolvimento.\\n Idade Mínima: 16\\n Escolaridade Mínima: ensino fundamental completo",
                "PRECISO_ESTAGIAR_COMERCIAL": "",
                "COD_FICHA_TECNICA": 3920,
                "CARGA_HORARIA_TOTAL": 72,
                "POSSUI_BOLSAS": "false",
                "PROGRAMA": "- Introdução à história de joalheria e do design.\r\n- Desenho de observação.\r\n- Conhecimento e aplicação da perspectiva.\r\n- Desenho de peças típicas da joalheria.\r\n- Projeto e coloração das peças elaboradas.\r\n- Introdução a gemologia, tipos de gemas, lapidações e cravações.\r\n- Processo de criação, de ilustração e de apresentação dos desenhos.\r\n- Montagem de portfólio executado em aula.\r\n",
                "OBJETIVO": "Capacita o aluno para criar, desenvolver e ilustrar joias de vários modelos, utilizando técnicas de desenho e coloração. Identificando e analisando seu processo de criação e construção de acordo com normas específicas de joalheria.\r\n",
                "PUBLICO_ALVO": "Profissionais da área de moda e design e interessados que desejam investir em sua formação e desenvolvimento.",
                "DT_ULTIMA_ALTERACAO": "October, 11 2020 13:41:01",
                "DSC_MODALIDADE": "APERFEIÇOAMENTO",
                "OQUE_VOU_APRENDER_COMERCIAL": "<p>- Panorama sobre o design de joias<br />- Desenvolver esboços de objetos de diferentes formas e volumes<br />- Criar e desenhar à mão diferentes tipos de joias, como anéis, colares e brincos<br />- Conceitos básicos de gemologia, tipos de gemas, lapidações e cravações<br />- Montar portfólio com material desenvolvido durante o curso</p>",
                "TEREI_DIPLOMA_COMERCIAL": "",
                "TEREI_CERTIFICADO_COMERCIAL": "<p>Sim. Após a aprovação no curso, você receberá seu certificado, que é aceito em todo o Brasil.</p>",
                "COD_MODALIDADE": "11",
                "TITULO": "DESENHO DE JÓIAS"
            }
        ],
        "PAGINATION": {
            "TOTAL": 2,
            "ENDROW": 2,
            "STARTROW": 1,
            "NBPAGES": 1,
            "CURRENTPAGE": 1
        }
    }` )
}
)



app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`Server running in ${process.env.PORT  } `)
} ) ;
