# Este projeto serve para gerenciar o fluxo de um site de anúncios, utilizando o CRUD para criar, pesquisar, atualizar e deletar registro no banco de dados.

## Foram criados 3 atributos:
    descricao  --> Nome do anúncio, é uma atribuito que não pode ser nulo;
    preco   --> preco do anúncio, é um atributo opcional;
    contato --> contato do anúncio, é um atributo opcional;

    id      --> é criado pelo banco de dados ao inserir um novo registro, é a chave pela qual será realizado pesquisa, alteração ou deleção.

## A API foi criada utilizando as seguintes tecnologias:

* ![Static Badge](https://img.shields.io/badge/JavaScript-badge?style=flat&logo=javascript&logoColor=black&color=%23F7DF1E)
* ![Static Badge](https://img.shields.io/badge/Node.js-badge?style=flat&logo=nodedotjs&logoColor=black&color=%235FA04E)
* ![Static Badge](https://img.shields.io/badge/Github-badge?style=flat&logo=github&labelColor=%23181717&color=white)
* ![Static Badge](https://img.shields.io/badge/MongoDB-green?style=flat&logo=MongoDB&logoColor=green&labelColor=white&color=green)


    * Node.js:
        Instalar o express;
        Instalar o datenv;

    * MongoDB Atlas como banco de dados:
        Para acessar a base de dados é necessário logar na conta no MongoDB Atlas utilizando o link abaixo:
        https://cloud.mongodb.com/v2/668884d80e1fa22658d84fa5#/metrics/replicaSet/67b10234b53a4c489b1ae70a/explorer/Anuncios/anuncios/find

    * Postman para realizar os testes dos endpoints criados.

        Utilize os seguintes metódos para: 

        Get: http://localhost:3000/anuncios - para buscar todos os anúncios;
        Get: http://localhost:3000/anuncios/Id - para buscar um anúncio especifico através do ID.

        Post: http://localhost:3000/anuncios, - para criar um novo registro

            No body formato Json incluir:
            {
                "descricao": "",
                "preco": "",
                "contato": ""
            }

        Put: http://localhost:3000/anuncios/Id, - para atualizar qualquer atributo 
        
            No body formato Json incluir um dos atributos que deseja alterar, sendo eles:
            {
                "descricao": "",
                "preco": "",
                "contato": ""
            }
        
        Delete: http://localhost:3000/anuncios/Id, para deletar um anúncio especifico utilizado o ID.

    
#   H a c k a t h o n - P o s t e c h 
 
 