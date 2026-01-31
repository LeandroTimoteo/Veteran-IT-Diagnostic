# Veteran IT Diagnostic - Produção

## Configuração para Vercel

1. **Clonar o projeto no Vercel**
   - Conecte seu repositório GitHub ao Vercel
   - Importe o projeto

2. **Variáveis de Ambiente no Vercel**
   - Vá para **Settings → Environment Variables**
   - Adicione:
     ```
     Name: VITE_OPENROUTER_API_KEY
     Value: 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
     ```

3. **Build Settings** (automático)
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Deploy**
   - Vercel fará deploy automático a cada push na branch principal

## Variáveis de Ambiente

- `.env.local` - Desenvolvimento local
- `.env.example` - Template para documentação
- `.env.production` - Produção (Vercel)
- Vercel Dashboard - Recomendado para secrets em produção

## Segurança

⚠️ **IMPORTANTE**: Sua chave de API está exposta neste repositório. Para máxima segurança:
1. Gere uma nova chave no OpenRouter
2. Remova a chave atual do histórico do git
3. Configure apenas via Vercel Environment Variables (não no repositório)

## Dependências Atualizadas

- Removido: `@google/genai` (Gemini)
- Adicionado: Fetch API nativa (OpenRouter)

## Teste Local

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000
