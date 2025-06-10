# Work - Plataforma de Educação Online

## Visão Geral
Work é uma plataforma moderna de educação online desenvolvida com React, TypeScript e Vite. A plataforma oferece uma interface elegante e responsiva para apresentar cursos online, com foco em tecnologia, marketing digital e gestão de projetos.

## Tecnologias Utilizadas

### Frontend
- **React 18.3.1**: Framework JavaScript para construção de interfaces
- **TypeScript 5.5.3**: Superset JavaScript com tipagem estática
- **Vite 5.4.2**: Build tool e servidor de desenvolvimento
- **TailwindCSS 3.4.1**: Framework CSS para estilização
- **Lucide React 0.344.0**: Biblioteca de ícones

### Ferramentas de Desenvolvimento
- **ESLint**: Linting e formatação de código
- **PostCSS**: Processador CSS
- **Autoprefixer**: Adiciona prefixos de vendor automaticamente

## Estrutura do Projeto

```
├── src/
│   ├── App.tsx          # Componente principal da aplicação
│   ├── main.tsx         # Ponto de entrada da aplicação
│   ├── index.css        # Estilos globais
│   └── vite-env.d.ts    # Definições de tipos do Vite
├── public/              # Arquivos estáticos
├── docs/               # Documentação do projeto
└── [arquivos de configuração]
```

## Funcionalidades Principais

1. **Navegação Responsiva**
   - Menu hamburguer para dispositivos móveis
   - Navegação fixa no topo
   - Links para todas as seções principais

2. **Seção Hero**
   - Apresentação principal da plataforma
   - Call-to-action para início dos cursos
   - Demonstração em vídeo

3. **Estatísticas**
   - Métricas importantes da plataforma
   - Layout responsivo em grid

4. **Cursos**
   - Exibição de cursos populares
   - Cards interativos com hover effects
   - Informações detalhadas sobre cada curso

5. **Sobre**
   - Diferenciais da plataforma
   - Ícones interativos
   - Layout em grid responsivo

## Como Executar o Projeto

1. **Pré-requisitos**
   - Node.js (versão LTS recomendada)
   - npm ou yarn

2. **Instalação**
   ```bash
   # Clone o repositório
   git clone [URL_DO_REPOSITÓRIO]

   # Instale as dependências
   npm install
   # ou
   yarn install
   ```

3. **Desenvolvimento**
   ```bash
   # Inicie o servidor de desenvolvimento
   npm run dev
   # ou
   yarn dev
   ```

4. **Build**
   ```bash
   # Crie a build de produção
   npm run build
   # ou
   yarn build
   ```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria a build de produção
- `npm run lint`: Executa o linter
- `npm run preview`: Visualiza a build de produção localmente

## Estilos e Design

O projeto utiliza TailwindCSS para estilização, com um design moderno e responsivo. As principais características incluem:

- Paleta de cores consistente (azul, laranja, verde)
- Gradientes modernos
- Animações suaves
- Layout responsivo para todos os dispositivos
- Cards interativos com efeitos hover
- Tipografia clara e legível

## Boas Práticas

1. **Código**
   - Use TypeScript para todas as novas implementações
   - Siga as convenções de nomenclatura do React
   - Mantenha os componentes pequenos e focados

2. **Estilos**
   - Utilize as classes do TailwindCSS
   - Mantenha a consistência com o design system
   - Evite estilos inline

3. **Performance**
   - Otimize imagens
   - Utilize lazy loading quando apropriado
   - Mantenha o bundle size otimizado

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Suporte

Para suporte, entre em contato através dos canais:
- Email: [EMAIL]
- Discord: [LINK_DO_DISCORD]
- Issues do GitHub: [LINK_DO_REPOSITÓRIO]/issues 
