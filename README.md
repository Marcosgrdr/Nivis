# 🌿 NIVIS - Sistema de Organização Financeira

O **NIVIS** é um sistema financeiro desenvolvido para auxiliar no **controle e organização de valores**, utilizando um modelo inovador baseado em entidades chamadas **Dendrons**, que representam diferentes tipos de valores (positivos, negativos, rendimentos e de investimento).

---

## 🧠 Conceito dos Dendrons

O projeto introduz o conceito de **Dendrons**, que funcionam como ramificações financeiras dentro do sistema, representando diferentes categorias de valores.  
Cada Dendron pode se relacionar com operações, usuários e reduções financeiras específicas.

### Tipos de Dendrons:
- **VP** – Valor Positivo
- **VN** – Valor Negativo
- **VR** – Valor Rendido
- **VI** – Valor de Investimento

---

## 🚀 Funcionalidades

- Cadastro de usuários (PF e PJ)
- Associação de endereços e números de contato
- Registro de valores positivos e negativos
- Controle de reduções manuais (operações financeiras diretas)
- Persistência de dados via JPA e Oracle Database
- Serviços REST estruturados com Spring Boot

---
No momento da entrega deste trabalho apenas algumas destas funções estão disponíveis


## 🧩 Estrutura do Projeto

src/
├── main/java/br/com/royalpair/nivis/
│ ├── controller/ → Endpoints REST
│ ├── model/ → Entidades JPA (Usuario, PF, Dendron, VN, ReducaoManual, etc.)
│ ├── repository/ → Interfaces que estendem JpaRepository
│ ├── service/ → Regras de negócio e validações
│ └── NivisApplication.java → Classe principal
│
└── main/resources/
├── application.properties → Configuração do banco Oracle


---

## ⚙️ Tecnologias Utilizadas

- **Java 25**  (na atividade da fase 7 não mencionava o modelo exigido, por isso usei a versão LTS mais recente)
- **Spring Boot 3**
- **Spring Data JPA (Hibernate)**
- **Oracle Database**
- **Maven**
- **IntelliJ IDEA** (IDE de desenvolvimento)
- **Git/GitHub** para versionamento e colaboração

---

## ▶️ Como Executar o Projeto

### 1️⃣ Pré-requisitos
Certifique-se de ter instalado:
- [Java 17+](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Maven 3.8+](https://maven.apache.org/download.cgi)
- [Oracle Database](https://www.oracle.com/database/)
- [IntelliJ IDEA](https://www.jetbrains.com/idea/)

### 2️⃣ Clonar o repositório
```bash
git clone https://github.com/Marcosgrdr/Nivis.git
