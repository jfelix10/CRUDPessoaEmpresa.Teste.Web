# CRUD Pessoa e Empresa - Teste Web

Este projeto é uma **aplicação frontend desenvolvida em Angular**, projetada para realizar o cadastro de clientes de maneira eficiente e responsiva. Ele utiliza uma **masterpage responsiva** e recursos de **template-driven forms** para proporcionar uma experiência de usuário intuitiva e moderna.

---

## 🚀 Funcionalidades

- **Cadastro de Clientes**: 
  - Interface simples e validada com regras como obrigatoriedade de campos e máscaras para CPF/CNPJ e telefone.
  - Mensagem de sucesso ao salvar um cliente, que desaparece automaticamente após um período.
  
- **Masterpage Responsiva**:
  - Barra de navegação fixa no topo e menu lateral que pode ser expandido e recolhido.
  - Layout moderno utilizando **Bootstrap** para responsividade.

- **Validações Avançadas**:
  - Máscaras para inputs como CPF/CNPJ e telefone, facilitando a entrada de dados.
  - Feedback visual em tempo real para valores inválidos.

---

## 🛠️ Tecnologias Utilizadas

- **Framework Angular (v19.x)**:
  - Componentização, reatividade e validação com **FormsModule**.
- **Bootstrap 5**:
  - Responsividade e estilização moderna.
- **Font Awesome**:
  - Ícones para uma interface mais elegante.
- **ngx-mask**:
  - Aplicação de máscaras em campos de formulário.
- **RxJS**:
  - Gerenciamento de estados e reatividade no Angular.

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── app/
│   ├── master-page/
│   │   ├── master-page.component.html   # Template da masterpage
│   │   ├── master-page.component.ts     # Lógica da masterpage (menu responsivo)
│   │   ├── master-page.component.css    # Estilo da masterpage
│   ├── cliente/
│   │   ├── cliente.component.html       # Template do cadastro de cliente
│   │   ├── cliente.component.ts         # Lógica e validações do cadastro de cliente
│   │   ├── cliente.component.css        # Estilo do cadastro de cliente
├── assets/
│   ├── ...                              # Recursos estáticos
└── ...

## ✨ Vantagens da Arquitetura
Separação de Preocupações:

Cada funcionalidade (como o cadastro de clientes) está isolada em um componente, promovendo modularidade e fácil manutenção.

Experiência do Usuário Aprimorada:

Respostas visuais imediatas, como mensagens de sucesso e feedback de validação em campos.

Navegação intuitiva com a masterpage e o menu lateral.

Integração de Tecnologias Modernas:

Uso de bibliotecas amplamente suportadas (como Bootstrap e ngx-mask) para acelerar o desenvolvimento.

Responsividade Garantida:

Layouts adaptáveis que oferecem ótima experiência tanto em dispositivos móveis quanto em desktops.

## 🎨 Captura de Tela (Opcional)
Adicione imagens da aplicação em funcionamento para ilustrar as telas, como o formulário de cadastro de clientes e a masterpage com menu lateral.

## 🔧 Instalação e Configuração
Clone o repositório:

bash
git clone <url-do-repositorio>
Instale as dependências do projeto:

bash
npm install
Inicie o servidor de desenvolvimento:

bash
npm start
Acesse o aplicativo:

plaintext
http://localhost:4200
## 🚦 Como Usar
Navegue até o menu lateral e clique em Clientes.

Preencha o formulário com as informações do cliente:

Nome/Razão Social.

CPF ou CNPJ (com máscara).

Data de nascimento.

Telefone.

E-mail.

Clique em Salvar.

Uma mensagem de sucesso será exibida por 5 segundos, indicando que o cliente foi cadastrado com sucesso.

## 📜 Scripts Disponíveis
npm start: Inicia o servidor de desenvolvimento.

npm build: Cria a versão de produção do projeto.

npm test: Executa os testes unitários.

## 📝 Notas Adicionais
Este projeto foi criado como parte de um teste técnico, com foco em boas práticas e componentes reutilizáveis.

O backend correspondente é desenvolvido com .NET Core e se comunica com esta aplicação para persistir os dados do cliente.
