# Arquitetura da Solução

Nesta seção são apresentados os detalhes técnicos criados pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura que se segue.

![Diagrama de Componentes](https://user-images.githubusercontent.com/103541634/164843491-0cf081dd-a514-4a1d-8616-c2affbf671c6.png)
<!-- <center>Figura XX - Arquitetura da Solução</center> -->

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Canais** - seções de notícias apresentadas 
     - **Comentários** - registro de opiniões dos usuários sobre as notícias
     - **Preferidas** - lista de notícias mantidas para leitura e acesso posterior
 - **News API** - plataforma que permite o acesso às notícias exibidas no site.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

## Hospedagem

O site usará como serviço de hospedagem a plataforma (Azure).
[Azure](https://azure.microsoft.com/pt-br/)
