# Plano de Testes — Practice Software Testing

## 1. Identificação

**Disciplina:** Testes e Qualidade de Software  
**Professora:** Monique Soares  
**Sistema sob Teste (SUT):** Practice Software Testing  
**URL:** https://practicesoftwaretesting.com  
**Equipe:** Diana da Silva e Gustavo Igor 
**Ferramentas:** Playwright, TypeScript, GitHub e GitHub Actions

## 2. Objetivo

Planejar e executar atividades de verificação e validação no sistema Practice Software Testing, identificando possíveis falhas funcionais, avaliando comportamentos esperados e documentando evidências que contribuam para a análise da qualidade do software.

O projeto contempla testes manuais, exploratórios, automatizados de interface e de API, além de análise de qualidade e integração contínua.

## 3. Escopo dos Testes

### 3.1 Funcionalidades incluídas

- Login e autenticação de usuários.
- Validação de campos de formulários.
- Cadastro de usuários, conforme disponibilidade para execução.
- Listagem e pesquisa de produtos.
- Visualização dos detalhes de produtos.
- Adição, alteração de quantidade e remoção de produtos do carrinho.
- Validação de informações e respostas da API de produtos.

### 3.2 Funcionalidades fora do escopo

- Testes de carga em larga escala.
- Testes de invasão e exploração de vulnerabilidades.
- Alterações na infraestrutura de produção.
- Integrações externas que dependam de serviços sem controle da equipe.

Essas exclusões consideram o prazo disponível e a prioridade atribuída aos fluxos funcionais.

## 4. Análise e Priorização de Riscos

A priorização será realizada considerando a probabilidade de falha e o impacto da falha sobre o usuário, com valores de 1 a 5.

**Fórmula:** Risco = Probabilidade × Impacto.

| Funcionalidade | Probabilidade | Impacto | Risco | Prioridade |
|---|---:|---:|---:|---|
| Login e autenticação | 4 | 5 | 20 | Alta |
| Carrinho de compras | 4 | 4 | 16 | Alta |
| Cadastro de usuários | 3 | 4 | 12 | Alta |
| Pesquisa de produtos | 3 | 3 | 9 | Média |
| Detalhes de produtos | 2 | 3 | 6 | Média |

### Justificativas propostas

**Login e autenticação:** falhas podem impedir o acesso à conta e às funcionalidades que exigem autenticação.

**Carrinho:** problemas na quantidade, remoção ou subtotal podem comprometer a experiência de compra.

**Cadastro:** falhas podem impedir a criação de novas contas ou produzir registros inconsistentes.

**Pesquisa:** problemas podem dificultar a localização de produtos disponíveis.

**Detalhes dos produtos:** informações incorretas podem prejudicar a escolha do usuário.

As pontuações representam hipóteses iniciais de risco e deverão ser validadas pela equipe.

## 5. Estratégia de Verificação e Validação

A estratégia combina diferentes abordagens:

**Testes manuais:** execução de casos estruturados, comparando os resultados esperados e obtidos.

**Testes exploratórios:** investigação de funcionalidades com objetivos previamente definidos, registrando comportamentos, dúvidas e possíveis defeitos.

**Testes automatizados E2E:** utilização do Playwright para verificar fluxos funcionais pela interface do navegador.

**Testes de API:** verificação de códigos HTTP, estrutura das respostas e informações retornadas pelos endpoints selecionados.

**Testes de regressão:** reexecução dos testes automatizados após alterações no repositório.

**Integração contínua:** execução automatizada dos testes no GitHub Actions, com falha do pipeline quando algum teste obrigatório não é aprovado.

## 6. Critérios de Entrada

As atividades poderão começar quando:

- O sistema estiver acessível.
- O ambiente de testes estiver configurado.
- As dependências necessárias estiverem instaladas.
- Os dados de teste estiverem disponíveis.
- Os casos e objetivos de teste estiverem definidos.

## 7. Critérios de Saída

As atividades poderão ser encerradas quando:

- Os casos planejados tiverem sido executados ou suas limitações justificadas.
- Os resultados obtidos estiverem registrados.
- Os defeitos encontrados estiverem documentados.
- A suíte automatizada tiver sido executada e seus resultados preservados.
- Os riscos residuais e limitações estiverem identificados.
- As evidências estiverem organizadas para o relatório final.

## 8. Ambiente e Ferramentas

| Recurso | Utilização |
|---|---|
| Practice Software Testing | Sistema sob teste |
| Playwright | Automação de interface e API |
| TypeScript | Implementação dos testes |
| Chromium | Navegador utilizado nas execuções |
| Visual Studio Code | Desenvolvimento e manutenção |
| Git e GitHub | Versionamento e colaboração |
| GitHub Actions | Integração contínua |
| Capturas e relatórios | Evidências de execução |

## 9. Rastreabilidade

Os casos de teste deverão possuir identificadores únicos, relacionados às funcionalidades e aos riscos correspondentes.

Os resultados de execução e as evidências serão identificados de maneira que permitam localizar o cenário testado, o comportamento observado e eventuais defeitos associados.

## 10. Limitações e Riscos Residuais

O sistema utilizado é um ambiente público de demonstração, sujeito a mudanças e indisponibilidades fora do controle da equipe.

A automação depende da estabilidade do ambiente e dos dados utilizados.

A cobertura dos testes será limitada às funcionalidades selecionadas e não representa garantia de ausência de defeitos em todo o sistema.

## 11. Responsabilidades e Revisão

As atividades do projeto foram organizadas com a definição de um responsável pela execução e de uma revisora encarregada de verificar a qualidade dos artefatos produzidos.

| Atividade | Responsável (Dono) | Revisora |
|---|---|---|
| Planejamento e estratégia de testes | Diana | Gustavo Igor |
| Testes manuais e exploratórios | Gustavo Igor | Diana |
| Testes automatizados de interface | Gustavo Igor | Diana |
| Testes automatizados de API | Diana | Gustavo Igor |
| Análise de qualidade e refatoração | Gustavo Igor | Diana |
| Gestão de defeitos | Gustavo Igor | Diana |
| Configuração do CI/CD | Gustavo Igor | Diana |
| Elaboração do relatório final | Gustavo Igor | Diana |