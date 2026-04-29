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
- `app/api/whatsapp/webhook/route.ts` - webhook de mensagens
- `supabase/schema.sql` - modelo de banco de dados

## Próximos passos

- Configurar Supabase com as tabelas descritas em `supabase/schema.sql`
- Conectar Twilio ao webhook público em `/api/whatsapp/webhook`
- Implementar geração de PDF no backend ou no frontend
- Integrar Stripe / Mercado Pago / Asaas para cobranças e assinaturas
- Adicionar autenticação e controle de acesso por perfil
