# Preparação da loja Amora para vendas

## Como a venda funciona

- O cliente cria uma conta, adiciona peças à sacola e informa o endereço.
- O servidor recalcula os preços a partir de `catalog.js`; valores enviados pelo navegador não definem o total.
- A entrega custa R$ 14,90 e fica grátis em pedidos a partir de R$ 199,00. O frete é calculado novamente no servidor.
- O servidor cria o pedido no PostgreSQL e gera um QR Pix com valor e identificador exclusivos.
- O painel `/vendedor` lista pedidos pendentes. O vendedor precisa confirmar o crédito no extrato bancário antes de marcar o pedido como pago.
- Não há cartão, gateway, webhook bancário, confirmação automática, cálculo de prazo por CEP, controle de estoque ou integração de transportadora. Não anuncie esses serviços como disponíveis.
- A inscrição da newsletter é apenas demonstrativa e não envia e-mail.

## 1. Preparar o ambiente

1. Use Node.js 20 ou superior.
2. Na pasta do projeto, instale as dependências com `npm install`.
3. Execute `npm test` para validar catálogo, preços, frete e regras de pedido.
4. Para desenvolvimento local, copie `.env.example` para `.env` e preencha as variáveis. Nunca publique ou compartilhe `.env`; ele já está no `.gitignore`.

## 2. Configurar banco e recebimento Pix

1. Crie um banco PostgreSQL gerenciado e copie a connection string para `DATABASE_URL`.
2. Configure `PIX_KEY` com a chave de recebimento da loja.
3. Preencha `PIX_RECEIVER_NAME` com o nome do titular que o cliente deve conferir no aplicativo do banco (máximo de 25 caracteres) e `PIX_RECEIVER_CITY` com a cidade (máximo de 15 caracteres).
4. Use uma `SELLER_PASSWORD` exclusiva com pelo menos 16 caracteres e um `SESSION_SECRET` aleatório com pelo menos 32 caracteres. Não reutilize senhas.
5. Mantenha os segredos no cofre de variáveis do provedor de hospedagem, não em arquivos versionados nem no chat.

Gere um segredo aleatório no PowerShell:

```powershell
node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
```

O QR Pix inclui valor e identificador do pedido, mas é uma cobrança com confirmação manual. A leitura do QR ou um comprovante enviado pelo cliente não prova que o dinheiro foi creditado.

## 3. Publicar no Render

1. Revise e envie ao GitHub somente os arquivos necessários; confira que `.env` não está no commit.
2. Crie um Blueprint no Render a partir do repositório. O `render.yaml` configura o serviço Node e o health check.
3. Configure no Render `DATABASE_URL`, `PIX_KEY`, `PIX_RECEIVER_NAME`, `PIX_RECEIVER_CITY`, `SELLER_PASSWORD` e `SESSION_SECRET`.
4. O Render fornece a URL pública em `RENDER_EXTERNAL_URL`. Em produção, o servidor exige HTTPS.
5. Depois do deploy, abra `/api/health` na URL HTTPS. A resposta esperada é `{"status":"ok"}`.

## 4. Validar antes de divulgar

1. Use a URL HTTPS publicada, crie uma conta com um e-mail que você controla e faça um pedido real de teste.
2. Confira se produto, preço, frete, endereço e total do QR estão corretos.
3. Leia o QR com outro aplicativo bancário e confirme nome do beneficiário, cidade e valor antes de autorizar.
4. Se optar por pagar, confirme o crédito no extrato da conta recebedora.
5. Abra `/vendedor`, autentique com `SELLER_PASSWORD`, confira os dados e marque como pago somente depois de validar o crédito.
6. Consulte o status do pedido na loja, teste o logout da conta e confirme que um pedido pendente não aparece como pago.
7. Não use pagamentos de teste se não estiver preparado para devolver o valor e cancelar o pedido manualmente.

## 5. Operação diária

1. Entre em `/vendedor` e atualize a lista de pedidos.
2. Confira o identificador Pix, o total e o crédito no extrato bancário; não aceite comprovante de tela como confirmação.
3. Confira os itens e o endereço. Recados e opção de presente aparecem no painel.
4. Marque o pedido como pago somente após a conferência. O QR não expira e o status não é atualizado automaticamente pelo banco.
5. Combine prazo e envio com o cliente e comunique atualizações pelo canal de atendimento da loja.
6. Planeje a expedição e o tratamento de pagamentos duplicados, estornos, devoluções e pedidos não pagos: essas rotinas não são automatizadas.

## Pendências obrigatórias antes de vender publicamente

- Cadastre e confira os 15 produtos, preços, disponibilidade e fotos reais. O catálogo atual é conteúdo de demonstração e não controla estoque.
- Confirme a política de envio: o site aplica uma tarifa única de R$ 14,90 ou frete grátis a partir de R$ 199, sem cotação nem prazo por CEP.
- Publique a identificação comercial e os canais de atendimento reais da loja.
- Prepare e publique termos de compra, política de privacidade/LGPD e regras de troca, devolução e arrependimento conforme sua operação e a legislação aplicável.
- Teste o nome do recebedor e o QR com a conta Pix real; confirme os detalhes e custos do seu banco.
- Avalie um plano de hospedagem e banco com disponibilidade, backups e recursos adequados à operação. O plano gratuito pode suspender o serviço por inatividade.

Não substitua esses dados por informações inventadas. O site só deve ser divulgado depois que as pendências comerciais e legais forem preenchidas e o fluxo tiver sido testado no ambiente publicado.

## Limitações operacionais

- A senha do cliente é armazenada no banco com hash scrypt; a sessão usa cookie `HttpOnly`, `SameSite=Strict` e `Secure` em HTTPS. A conta exige conexão ao servidor e ao banco.
- O preço oficial está em `catalog.js`, compartilhado pelo catálogo do navegador e pelo cálculo do servidor. Atualize esse arquivo para mudar nomes e preços.
- A confirmação Pix é manual; não existe integração bancária para consultar transações automaticamente.
- O QR não expira automaticamente. Para pagamento duplicado, incorreto ou não identificado, confira o extrato e trate a ocorrência diretamente.
- O painel do vendedor usa autenticação separada e limite de tentativas. Trocar `SESSION_SECRET` encerra as sessões existentes.
- O serviço envia cabeçalhos de segurança e limita tentativas de autenticação e pedidos, mas isso não substitui backups, monitoramento, gestão de acesso e atualização das dependências.
