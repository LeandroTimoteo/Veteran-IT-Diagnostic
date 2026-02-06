# Veteran IT Diagnostic - Produção

## Configuração para Vercel

1. **Importar o projeto**
   - Conecte o repositório do GitHub ao Vercel
   - Importe o projeto

2. **Variáveis de Ambiente no Vercel**
   - Vá para **Settings → Environment Variables**
   - Adicione:
     ```
     Name: VITE_OPENROUTER_API_KEY
     Value: <sua-chave-openrouter>
     ```

3. **Build Settings** (automático)
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Deploy**
   - Vercel fará deploy automático a cada push na branch principal

## Variáveis de Ambiente

- `.env.local` - Desenvolvimento local (não versionado)
- `.env.example` - Template para documentação
- `.env.production` - Produção (não incluir segredos no repositório)
- Vercel Dashboard - Recomendado para secrets em produção

## Segurança

⚠️ **IMPORTANTE**: Não versionar chaves de API no repositório. Configure apenas via Vercel Environment Variables.

## Teste Local

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000
