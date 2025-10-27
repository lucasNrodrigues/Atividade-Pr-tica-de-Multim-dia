# 🎵 Player de Áudio Avançado - Atividade de Continuação

## 📖 Sobre o Projeto

Player de música web desenvolvido em **Next.js** como continuação da Atividade Prática de Multimídia. Este projeto expande as funcionalidades do player básico anterior, implementando recursos avançados de controle e navegação.

---

## 🎯 Objetivos da Atividade

Expandir o projeto anterior adicionando:

- Listagem e seleção de múltiplas músicas
- Controle avançado de tempo
- Navegação entre músicas
- Reprodução automática sequencial

---

## ✅ Funcionalidades Implementadas

### 🎼 Atividade Anterior (Base)

- [x] Botão Play/Pause
- [x] Controle de Volume (slider 0-100%)
- [x] Botão Mute/Unmute
- [x] Ícones dinâmicos
- [x] Gerenciamento com useState

### 🚀 Novas Funcionalidades (Continuação)

#### 1️⃣ Listagem de Músicas

- [x] Lista com 3+ músicas disponíveis
- [x] Exibição de título, artista e duração
- [x] Capas individuais para cada música
- [x] Indicador visual da música atual

#### 2️⃣ Reprodução da Música Selecionada

- [x] Clique na música inicia reprodução
- [x] Troca automática de áudio
- [x] Destaque visual da música tocando

#### 3️⃣ Exibição do Tempo

- [x] Tempo atual da música (MM:SS)
- [x] Tempo total da música (MM:SS)
- [x] Atualização dinâmica em tempo real

#### 4️⃣ Controle de Tempo de Execução

- [x] Slider para navegar na música
- [x] Botão "Retroceder -10 segundos"
- [x] Botão "Avançar +10 segundos"
- [x] Controle preciso de posição

#### 5️⃣ Navegação entre Músicas

- [x] Botão "Próxima Música"
- [x] Botão "Música Anterior"
- [x] Reprodução automática da próxima ao terminar
- [x] Modo Shuffle (ordem aleatória)
- [x] Modo Repeat (off/all/one)

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js 14](https://nextjs.org/)** - Framework React
- **[React 18](https://react.dev/)** - Biblioteca de interface
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **HTML5 Audio API** - Controle nativo de áudio

---

## 📂 Estrutura do Projeto

```
simulador-audio/
├── public/
│   ├── imagem.png          # Capa: Sweet child o' mine
│   ├── imagem2.png         # Capa: Interstellar X Experience
│   ├── imagem3.png         # Capa: Era Eu
│   ├── musica.mp3          # Áudio 1
│   ├── musica2.mp3         # Áudio 2
│   └── musica3.mp3         # Áudio 3
├── src/
│   └── app/
│       ├── page.tsx        # Componente principal do player
│       ├── layout.tsx      # Layout da aplicação
│       └── globals.css     # Estilos globais
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js** 18.0 ou superior
- **npm** ou **yarn**

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/lucasNrodrigues/Atividade-Pr-tica-de-Multim-dia.git

# 2. Entre na pasta do projeto
cd simulador-audio

# 3. Instale as dependências
npm install
# ou
yarn install
```

### Executar em Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse: **<http://localhost:3000>**

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Executar build
npm start
```

---

## 🎮 Como Usar o Player

### Controles Básicos

- **▶️ Play/Pause**: Iniciar ou pausar reprodução
- **🔊 Volume**: Ajustar volume com slider
- **🔇 Mute**: Silenciar/reativar som

### Controles de Tempo

- **Slider de Progresso**: Arrastar para navegar na música
- **-10s**: Retroceder 10 segundos
- **+10s**: Avançar 10 segundos

### Navegação

- **⏮️ Anterior**: Voltar para música anterior
- **⏭️ Próximo**: Avançar para próxima música
- **🔀 Shuffle**: Ativar/desativar ordem aleatória
- **🔁 Repeat**: Alternar modos (off/all/one)

### Playlist

- **Clicar na música**: Selecionar e reproduzir
- **Indicador ▶**: Mostra música atual
- **Duração**: Tempo total de cada música

---

## 📋 Músicas Incluídas

1. **Sweet child o' mine** - guns n roses
2. **Interstellar X Experience** - Tony Ann
3. **Era Eu** - Felipe Rodrigues

> 💡 **Nota**: Para adicionar suas próprias músicas, coloque os arquivos MP3 e PNG na pasta `public/` e edite o array `playlist` em `page.tsx`.

---

## 🎨 Recursos de Interface

- **Design Moderno**: Tema escuro minimalista
- **Responsivo**: Funciona em desktop, tablet e mobile
- **Animações Suaves**: Transições e hover effects
- **Ícones Dinâmicos**: Mudam conforme o estado
- **Feedback Visual**: Destaque da música tocando

---

## 🧪 Demonstração

### Vídeo Demonstrativo

📹 [https://drive.google.com/file/d/1HndXFZSNCubb3qa0YwUnBV-Mi-bkRiuj/view?usp=drive_link] - Demonstração de 3 minutos mostrando:

- Listagem e seleção de músicas
- Controle de tempo com slider e botões
- Navegação entre músicas
- Reprodução automática

## 📚 Requisitos da Atividade

### ✅ Checklist Completo

- [x] **1. Listagem de Músicas**
  - [x] Pelo menos 3 músicas
  - [x] Seleção clicável

- [x] **2. Reprodução Selecionada**
  - [x] Clique inicia reprodução
  - [x] Troca de áudio funcional

- [x] **3. Exibição de Tempo**
  - [x] Tempo atual visível
  - [x] Tempo total visível
  - [x] Atualização dinâmica

- [x] **4. Controle de Tempo**
  - [x] Slider funcional
  - [x] Botão -10s
  - [x] Botão +10s

- [x] **5. Navegação**
  - [x] Botão Próxima
  - [x] Botão Anterior
  - [x] Auto-play ao terminar

---

## 👨‍💻 Desenvolvimento

### Principais Componentes

#### Estados (useState)

```typescript
const [playlist, setPlaylist] = useState<Track[]>([...]);
const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
const [isPlaying, setIsPlaying] = useState(false);
const [currentTime, setCurrentTime] = useState(0);
const [volume, setVolume] = useState(70);
```

#### Funções Principais

- `togglePlayPause()` - Controla play/pause
- `selectTrack(index)` - Seleciona música da lista
- `handleNext()` - Próxima música
- `handlePrevious()` - Música anterior
- `skipForward10()` - Avança 10 segundos
- `skipBackward10()` - Retrocede 10 segundos
- `handleSeek()` - Controle do slider

#### Hooks

- `useEffect` - Sincronização de volume e eventos
- `useRef` - Referência ao elemento audio

---

## 🐛 Solução de Problemas

### Música não toca

- Verifique se os arquivos MP3 estão na pasta `public/`
- Confirme que os nomes dos arquivos correspondem ao código
- Tente outro navegador

### Imagens não aparecem

- Verifique se os arquivos PNG estão em `public/`
- Renomeie para `imagem.png`, `imagem2.png`, `imagem3.png`
- Limpe o cache: `npm run dev` (reinicie)

### Erro de compilação

```bash
# Limpar cache e reinstalar
rm -rf node_modules .next
npm install
npm run dev
```

---

## 📊 Comparação: Antes vs Depois

| Recurso | Atividade Base | Atividade Continuação |
|---------|----------------|----------------------|
| Músicas | 1 música | 3+ músicas |
| Seleção | Não | ✅ Sim |
| Lista Visual | Não | ✅ Sim |
| Tempo Visível | Não | ✅ Sim (atual + total) |
| Navegação Tempo | Não | ✅ Slider + botões |
| Próxima/Anterior | Não | ✅ Sim |
| Auto-play | Não | ✅ Sim |
| -10s / +10s | Não | ✅ Sim |

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte da disciplina de Multimídia.

---

## 👤 Autor

**Lucas do Nascimento Rodrigues**

- GitHub: [@lucasNrodrigues](https://github.com/lucasNrodrigues)
- Email:  <lucas.rodrigues67337@alunos.ufersa.edu.br>

---

## 🎓 Informações Acadêmicas

**Disciplina**: Multimídia
**Instituição**: UFERSA  
**Professor**:  REUDISMAM ROLIM DE SOUSA  
**Atividade**: Prática de Continuação - Player de Áudio

---

## 📌 Observações

- ✅ Todos os requisitos implementados
- ✅ Código comentado e documentado
- ✅ Interface moderna e intuitiva
- ✅ Funciona em todos navegadores modernos
- ✅ Pronto para demonstração

---

**⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!**
