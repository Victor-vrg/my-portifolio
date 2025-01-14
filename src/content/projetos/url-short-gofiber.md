---
title: Encurtamento de URLs
description: Uma POC (Prova de conceito) de encurtamento de URLs robusto e escalável construído com Go, utilizando Fiber framework e PostgreSQL
publishDate: 2025-01-13
tags: 
  - Go
  - PostgreSQL
featured: true
thumbnail: /src/assets/img/clean-arch.webp
slug: url-short-gofiber
liveUrl:  https://victor-vrg-portifolio.netlify.app/encurtador/
---

#  🔗 URL Shortener API - Vantagens de Utilizar um Encurtador de URL

1. **Praticidade**: URLs encurtadas são mais fáceis de compartilhar em redes sociais, mensagens e e-mails, economizando espaço e evitando que links longos se quebrem.
2. **Estética**: Links curtos são visualmente mais agradáveis e profissionais, melhorando a aparência de comunicações e materiais promocionais.
3. **Rastreamento**: Muitos encurtadores oferecem ferramentas de análise, permitindo monitorar cliques, origem do tráfego e outras métricas úteis.
4. **Gestão**: É possível personalizar URLs encurtadas, tornando-as mais memoráveis e alinhadas com a marca ou campanha.

Esses benefícios tornam os encurtadores de URL uma ferramenta valiosa para simplificar e otimizar o compartilhamento de links.


## 🚀 Funcionalidades

- **Encurtamento de URLs:**
  - Geração automática de URLs curtas
  - Opção para URLs personalizadas
  - Expiração automática (1 min para usuários normais, 5 min para premium)

- **Gerenciamento de Usuários:**
  - Sistema básico de usuários
  - Diferenciação entre usuários normais e premium
  - Listagem de URLs por usuário

- **Rastreamento e Estatísticas:**
  - Contagem de acessos
  - Registro de último acesso
  - Histórico de criação

- **Documentação:**
  - API documentada com Swagger
  - Endpoints intuitivos e RESTful

## 🛠️ Tecnologias Utilizadas

- **[Go](https://golang.org/)** - Linguagem de programação
- **[Fiber](https://gofiber.io/)** - Framework web
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados
- **[Railway](https://railway.app/)** - Plataforma de deploy
- **[Swagger](https://swagger.io/)** - Documentação da API

## 📋 Pré-requisitos

- Go 1.16 ou superior
- PostgreSQL
- [Railway CLI](https://docs.railway.app/develop/cli) (para deploy)

## 🔧 Instalação e Configuração

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/url-shortener.git
cd url-shortener
```

2. **Instale as dependências:**
```bash
go mod download
```

3. **Configure as variáveis de ambiente:**
Crie um arquivo `.env` na raiz do projeto:
```env
DATABASE_URL=sua_url_do_postgresql
PORT=3000
BASE_URL=http://localhost:3000
```

4. **Gere a documentação Swagger:**
```bash
go install github.com/swaggo/swag/cmd/swag@latest
swag init
```

5. **Execute o projeto:**
```bash
go run main.go
```

## 🚀 Deploy no Railway

1. **Faça login no Railway:**
```bash
railway login
```

2. **Inicie um novo projeto:**
```bash
railway init
```

3. **Configure as variáveis de ambiente no Railway:**
- DATABASE_URL (fornecido automaticamente pelo Railway)
- PORT
- BASE_URL (URL do seu serviço no Railway)

4. **Deploy:**
```bash
railway up
```

## 📚 Documentação da API

Após iniciar o servidor, acesse a documentação Swagger em:
```
http://seu-dominio/swagger/
```

### Endpoints Principais

#### Usuários
- `POST /api/users` - Criar novo usuário
- `GET /api/users/:id` - Obter detalhes do usuário

#### URLs
- `POST /api/urls` - Criar URL curta
- `GET /api/urls/:shortURL` - Obter detalhes da URL
- `GET /api/urls/user/:userID` - Listar URLs do usuário
- `GET /:shortURL` - Redirecionar para URL original
- `GET /api/urls/:shortURL/stats` - Obter estatísticas da URL

## 📦 Estrutura do Banco de Dados

### Tabela `users`
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    is_premium BOOLEAN DEFAULT false
);
```

### Tabela `urls`
```sql
CREATE TABLE urls (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    original_url TEXT NOT NULL,
    short_url TEXT UNIQUE NOT NULL,
    access_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_accessed TIMESTAMP,
    expires_at TIMESTAMP NOT NULL
);
```

---

## 🔮 Pontos Futuros

- **Otimização de Custos e Performance:**
  - Implementar métricas de uso do banco de dados para otimizar queries
  - Adicionar cache para reduzir consultas em URLs frequentemente acessadas
  - Análise de padrões de leitura/escrita para melhor dimensionamento
  - Monitoramento de custos na free tier do Railway

- **Segurança e Autenticação:**
  - Implementar sistema de autenticação JWT
  - Proteção contra abusos e spam
  - Rate limiting por IP/usuário
  - Painel administrativo seguro

- **Funcionalidades Premium:**
  - Sistema de cobrança para usuários premium
  - Analytics avançados de acesso
  - Personalização de domínios
  - Aumento do tempo de expiração das URLs
  - QR Code para URLs
  ---

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📬 Contato

Victor Resende - [@Linkedin](www.linkedin.com/in/victorvrg
) 

Link do Projeto: [url-short-gofiber](https://github.com/Victor-vrg/url-short-gofiber)


⭐️ From [Victor Resende](https://github.com/Victor-vrg)
