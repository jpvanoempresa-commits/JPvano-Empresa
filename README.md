# Clínica SaaS

Plataforma SaaS para clínicas, consultórios e profissionais da saúde, com foco em:

- Chatbot inteligente para atendimento
- Geração de laudos médicos em PDF
- Emissão de receitas médicas
- Agendador de consultas com calendário
- Integração com WhatsApp Business / Twilio
- Dashboard administrativo com métricas e monetização
- Autenticação por níveis: admin, médico, atendente
- Estrutura backend para Supabase e pagamentos recorrentes

## Como iniciar

1. Instale dependências:

```bash
npm install
```

2. Configure o ambiente em `.env` com:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_WEBHOOK_TOKEN`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

3. Inicie o servidor:

```bash
npm run dev
```

## Estrutura principal

- `app/` - páginas do Next.js e dashboard
- `components/` - interface do painel
- `lib/` - clientes Supabase, Twilio, PDF e pagamentos
- `supabase/schema.sql` - modelo de banco de dados

## Próximos passos

- Configurar Supabase com as tabelas descritas em `supabase/schema.sql`
- Implementar geração de PDF no backend ou no frontend
- Integrar Stripe / Mercado Pago / Asaas para cobranças e assinaturas
- Adicionar autenticação e controle de acesso por perfil

## Deploy como site

### Usando Vercel

1. Instale o Vercel CLI (opcional):

```bash
npm i -g vercel
```

2. Faça login:

```bash
vercel login
```

3. Execute o deploy no diretório do projeto:

```bash
vercel
```

4. Para publicar em produção:

```bash
vercel --prod
```

5. Configure as variáveis de ambiente no painel do Vercel ou com o CLI:

```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
vercel env add TWILIO_AUTH_TOKEN production
vercel env add TWILIO_WEBHOOK_TOKEN production
vercel env add STRIPE_SECRET_KEY production
vercel env add STRIPE_WEBHOOK_SECRET production
```

### Observações

- O arquivo `vercel.json` já está configurado para deploy Next.js.
- O `.vercelignore` evita envio do arquivo `.env` e pastas locais desnecessárias.
- Se preferir outro host, o build padrão é `npm run build` e o start é `npm start`.
