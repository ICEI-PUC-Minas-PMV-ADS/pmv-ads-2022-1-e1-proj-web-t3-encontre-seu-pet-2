# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na Internet;
- Navegador da Internet - Chrome, Firefox ou Edge;
- Conectividade de Internet.
 
Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

|Caso de teste | Tela inicial |
|--------------|--------------|
|Requisitos associados| RF-001	O site deve ter cadastramento de usuários e seus animais perdidos. <br>RF-002	O site deve ter geolocalização, demonstrando onde o animal foi localizado.|
|Objetivo do Teste | Verificar se as paginas estão se comunicando (HomePage , tela de login de usuario , tela de cadastro de usuario , tela de cadastro de pet ).
| Passos | 1) Acessar a tela principal. <br> 2) Login/Cadastro. 
|Criterio de Êxito| Conseguir acessar a tela de login/cadastro.

|Caso de teste | Tela inicial |
|--------------|--------------|
|Requisitos associados| RF-003	O site deve ter filtros de buscas por espécie, raça e características. Exemplo: Cachorro, Husky, Grande Porte.|
|Objetivo do Teste |Certificar que a barra de pesquisa está filtrando as postagens de forma correta.
| Passos | 1) Acessar a tela principal. <br> 2) Acessar a barra de pesquisa. 
|Criterio de Êxito| Conseguir acessar a postagem referente a pesquisa feita.

|Caso de teste | Tela de cadastro de Pets |
|--------------|--------------|
|Requisitos associados| RF-001 O site deve ter cadastramento de usuários e seus animais perdidos. <br> RF-004	O site deve ter Inclusão / alteração / exclusão de informações dos animais cadastrados. <br> RF-007 O site deve permitir que usuários possam descrever com detalhes os pets.|
|Objetivo do Teste |Certificar que as informações inseridas no cadastro sejam registradas no site.
| Passos | 1) Acessar a tela de cadastro de pets. <br> 2) Inserir as informações. <br> 3) Enviar as informações.
|Criterio de Êxito| Regsitrar as informações no site.

|Caso de teste | Tela de cadastro de Pets |
|--------------|--------------|
|Requisitos associados| RF-004	O site deve ter Inclusão / alteração / exclusão de informações dos animais cadastrados. <br> RF-007 O site deve permitir que usuários possam descrever com detalhes os pets.|
|Objetivo do Teste |Certificar que todas as lacunas sejam preenchidas.
| Passos | 1) Acessar a tela de cadastro de pets. <br> 2) Inserir as informações. <br> 3) Enviar as informações. <br> 4) Receber o aviso que o campo é obrigatório e deve ser preenchido.
|Criterio de Êxito| Notificar o usuário sobre a obrigatoriedade de preenchimento de todas os espaços.


## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
