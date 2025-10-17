'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Shuffle, Repeat } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: number;
  url: string;
  cover: string;
}

export default function AudioSimulator() {
  // ====== REQUISITO 5: ESTADOS COM useState ======
  const [playlist, setPlaylist] = useState<Track[]>([
    {
      id: 1,
      title: "Sweet child o' mine",
      artist: "guns n roses",
      duration: 0,
      url: "/musica.mp3",
      cover: "/imagem.png"
    },
    {
      id: 2,
      title: "Interstellar X Experience",
      artist: "Tony Ann",
      duration: 0,
      url: "/musica3.mp3",
      cover: "/imagem3.png"
    },
    {
      id: 3,
      title: "Era Eu",
      artist: "Felipe Rodrigues",
      duration: 0,
      url: "/musica2.mp3",
      cover: "/imagem2.png"
    }
  ]);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);        // REQUISITO 1: Estado Play/Pause
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(70);                 // REQUISITO 2: Estado Volume
  const [isMuted, setIsMuted] = useState(false);            // REQUISITO 3: Estado Mute
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'off' | 'all' | 'one'>('off');
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentTrack = playlist[currentTrackIndex];

  // ====== REQUISITO 2: useEffect para VOLUME ======
  useEffect(() => {
    if (audioRef.current) {
      // Aplica volume ao elemento audio
      // Se estiver mutado, volume = 0, senão usa o valor do slider
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]); // Executa quando volume ou mute mudam

  // ====== useEffect para EVENTOS DE ÁUDIO ======
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Atualiza tempo atual durante reprodução
    const updateTime = () => setCurrentTime(audio.currentTime);
    
    // Captura duração quando áudio carrega
    const handleLoadedMetadata = () => {
      const updatedPlaylist = [...playlist];
      updatedPlaylist[currentTrackIndex].duration = audio.duration;
      setPlaylist(updatedPlaylist);
    };
    
    // Decide o que fazer quando música termina
    const handleEnded = () => {
      if (repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play();
      } else if (repeatMode === 'all' || currentTrackIndex < playlist.length - 1) {
        handleNext();
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrackIndex, repeatMode]);

  // ====== REQUISITO 1: FUNÇÃO PLAY/PAUSE ======
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pausa o áudio
      } else {
        audioRef.current.play();  // Toca o áudio
      }
      setIsPlaying(!isPlaying);   // Alterna o estado
    }
  };

  // ====== FUNÇÃO PRÓXIMA MÚSICA ======
  const handleNext = () => {
    if (isShuffleOn) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentTrackIndex(randomIndex);
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    }
    setCurrentTime(0);
    if (isPlaying && audioRef.current) {
      setTimeout(() => audioRef.current?.play(), 100);
    }
  };

  // ====== FUNÇÃO MÚSICA ANTERIOR ======
  const handlePrevious = () => {
    if (currentTime > 3) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
      setCurrentTime(0);
    } else {
      setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
      setCurrentTime(0);
      if (isPlaying && audioRef.current) {
        setTimeout(() => audioRef.current?.play(), 100);
      }
    }
  };

  // ====== FUNÇÃO NAVEGAR NA MÚSICA (Barra de Progresso) ======
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  // ====== REQUISITO 3: FUNÇÃO MUTE/UNMUTE ======
  const toggleMute = () => {
    setIsMuted(!isMuted); // Alterna entre mutado e não mutado
  };

  // ====== FUNÇÃO SHUFFLE ======
  const toggleShuffle = () => {
    setIsShuffleOn(!isShuffleOn);
  };

  // ====== FUNÇÃO REPEAT ======
  const cycleRepeat = () => {
    const modes: Array<'off' | 'all' | 'one'> = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(repeatMode);
    setRepeatMode(modes[(currentIndex + 1) % modes.length]);
  };

  // ====== FUNÇÃO FORMATAR TEMPO (MM:SS) ======
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // ====== FUNÇÃO SELECIONAR MÚSICA DA PLAYLIST ======
  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setCurrentTime(0);
    if (isPlaying && audioRef.current) {
      setTimeout(() => audioRef.current?.play(), 100);
    }
  };

  // ====== RENDERIZAÇÃO DO COMPONENTE ======
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-800">
          
          {/* ====== CABEÇALHO ====== */}
          <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 p-4">
            <h1 className="text-2xl font-bold text-white mb-1">Simulador de Áudio</h1>
            <p className="text-zinc-400 text-sm">Seu player de música completo</p>
          </div>

          <div className="p-6">
            
            {/* ====== PLAYER PRINCIPAL ====== */}
            <div className="bg-zinc-800/50 rounded-xl p-6 mb-4 border border-zinc-700">
              
              {/* ====== CAPA DO ÁLBUM ====== */}
              <div className="w-32 h-32 mx-auto mb-4 bg-zinc-700 rounded-xl flex items-center justify-center shadow-xl overflow-hidden">
                <img 
                  src={currentTrack.cover} 
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ====== INFORMAÇÕES DA MÚSICA ====== */}
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-white mb-1">{currentTrack.title}</h2>
                <p className="text-zinc-400 text-sm">{currentTrack.artist}</p>
              </div>

              {/* ====== BARRA DE PROGRESSO ====== */}
              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max={currentTrack.duration || 1}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #ffffff 0%, #ffffff ${currentTrack.duration ? (currentTime / currentTrack.duration) * 100 : 0}%, #3f3f46 ${currentTrack.duration ? (currentTime / currentTrack.duration) * 100 : 0}%, #3f3f46 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-zinc-400 mt-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{currentTrack.duration ? formatTime(currentTrack.duration) : 'Carregando...'}</span>
                </div>
              </div>

              {/* ====== CONTROLES PRINCIPAIS ====== */}
              <div className="flex items-center justify-center gap-3 mb-4">
                
                {/* Botão Shuffle */}
                <button
                  onClick={toggleShuffle}
                  className={`p-2 rounded-full transition-all ${
                    isShuffleOn ? 'bg-white text-black' : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}
                  aria-label="Shuffle"
                  title={isShuffleOn ? "Shuffle Ativado" : "Shuffle Desativado"}
                >
                  <Shuffle size={16} />
                </button>
                
                {/* Botão Anterior */}
                <button
                  onClick={handlePrevious}
                  className="p-3 bg-zinc-700 text-white rounded-full hover:bg-zinc-600 transition-all"
                  aria-label="Anterior"
                  title="Música Anterior"
                >
                  <SkipBack size={20} />
                </button>
                
                {/* ====== REQUISITO 1 + 4: BOTÃO PLAY/PAUSE COM ÍCONE DINÂMICO ====== */}
                <button
                  onClick={togglePlayPause}
                  className="p-4 bg-white text-black rounded-full hover:scale-105 transition-all shadow-lg"
                  aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                  title={isPlaying ? "Pausar" : "Reproduzir"}
                >
                  {/* REQUISITO 4: Ícone muda dinamicamente */}
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                </button>
                
                {/* Botão Próximo */}
                <button
                  onClick={handleNext}
                  className="p-3 bg-zinc-700 text-white rounded-full hover:bg-zinc-600 transition-all"
                  aria-label="Próximo"
                  title="Próxima Música"
                >
                  <SkipForward size={20} />
                </button>
                
                {/* Botão Repeat */}
                <button
                  onClick={cycleRepeat}
                  className={`p-2 rounded-full transition-all relative ${
                    repeatMode !== 'off' ? 'bg-white text-black' : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}
                  aria-label="Repetir"
                  title={
                    repeatMode === 'off' ? 'Repetir Desativado' : 
                    repeatMode === 'all' ? 'Repetir Todas' : 
                    'Repetir Uma'
                  }
                >
                  <Repeat size={16} />
                  {repeatMode === 'one' && (
                    <span className="absolute -top-1 -right-1 text-xs bg-zinc-900 text-white rounded-full w-4 h-4 flex items-center justify-center">1</span>
                  )}
                </button>
              </div>

              {/* ====== REQUISITO 2 + 3: CONTROLE DE VOLUME E MUTE ====== */}
              <div className="flex items-center gap-3">
                
                {/* ====== REQUISITO 3 + 4: BOTÃO MUTE COM ÍCONE DINÂMICO ====== */}
                <button 
                  onClick={toggleMute} 
                  className="text-white hover:text-zinc-300 transition-colors" 
                  aria-label={isMuted ? "Ativar Som" : "Silenciar"}
                  title={isMuted ? "Ativar Som" : "Silenciar"}
                >
                  {/* REQUISITO 4: Ícone muda dinamicamente */}
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                
                {/* ====== REQUISITO 2: SLIDER DE VOLUME ====== */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="flex-1 h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #ffffff 0%, #ffffff ${isMuted ? 0 : volume}%, #3f3f46 ${isMuted ? 0 : volume}%, #3f3f46 100%)`
                  }}
                  aria-label="Controle de Volume"
                  title={`Volume: ${isMuted ? 0 : volume}%`}
                />
                
                {/* ====== REQUISITO 4: TEXTO DINÂMICO DO VOLUME ====== */}
                <span className="text-white text-xs w-10 text-right">
                  {isMuted ? 0 : volume}%
                </span>
              </div>
            </div>

            {/* ====== PLAYLIST ====== */}
            <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700">
              <h3 className="text-lg font-bold text-white mb-3">Playlist</h3>
              <div className="space-y-2">
                {playlist.map((track, index) => (
                  <button
                    key={track.id}
                    onClick={() => selectTrack(index)}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      index === currentTrackIndex
                        ? 'bg-white text-black'
                        : 'bg-zinc-800/50 text-white hover:bg-zinc-700'
                    }`}
                    title={`Reproduzir: ${track.title}`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md overflow-hidden bg-zinc-700 flex-shrink-0">
                          <img 
                            src={track.cover} 
                            alt={track.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{track.title}</div>
                          <div className={`text-xs ${index === currentTrackIndex ? 'text-zinc-700' : 'text-zinc-400'}`}>
                            {track.artist}
                          </div>
                        </div>
                      </div>
                      <div className={`text-xs ${index === currentTrackIndex ? 'text-zinc-700' : 'text-zinc-400'}`}>
                        {track.duration ? formatTime(track.duration) : '--:--'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ====== ELEMENTO AUDIO HTML5 ====== */}
        <audio ref={audioRef} src={currentTrack.url} />

        {/* ====== ESTILOS CUSTOMIZADOS PARA SLIDERS ====== */}
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          }
          
          input[type="range"]::-moz-range-thumb {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            border: none;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          }
        `}</style>
      </div>
    </div>
  );
}
