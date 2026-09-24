/**
 * Workout Data & Interactive Controller
 * Especialmente formatado para emagrecimento feminino com equipamentos da Smart Fit
 */

// Banco de dados dos exercícios e rotinas Smart Fit
const workoutDatabase = {
  treinoA: {
    title: "Treino A: Membros Inferiores (Foco Quadríceps & Glúteos) + Queima Metabólica",
    description: "Foco nos maiores grupamentos musculares para alta taxa metabólica basal e queima de gordura contínua.",
    smartfitZone: "Área de Musculação & Cardio Smart Fit",
    estimatedCal: "380 - 460 kcal",
    duration: "50 min",
    exercises: [
      {
        id: "leg-press-45",
        name: "Leg Press 45°",
        target: "Quadríceps, Glúteos e Posterior",
        machine: "Aparelho Leg Press 45° (Smart Fit Musculação)",
        sets: "4 séries",
        reps: "12 a 15 reps",
        rest: "45 seg",
        // Vídeo leve em loop demonstrativo de fitness em MP4 público/rápido de CDN
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-squats-in-a-gym-43302-large.mp4",
        tips: [
          "Posicione os pés na largura dos ombros no meio/alto da plataforma para recrutar mais glúteo.",
          "Não trave totalmente os joelhos na extensão máxima (mantenha microflexionados).",
          "Desça de forma controlada até cerca de 90 graus na articulação do joelho.",
          "Mantenha as costas e lombar firmemente apoiadas no encosto."
        ],
        burnTips: "Executar com cadência de 3 segundos na descida aumenta o estresse metabólico e potencializa a lipólise."
      },
      {
        id: "cadeira-extensora",
        name: "Cadeira Extensora",
        target: "Quadríceps (Parte frontal da coxa)",
        machine: "Cadeira Extensora (Torre de Pesos Smart Fit)",
        sets: "3 séries",
        reps: "15 reps + Drop-set",
        rest: "40 seg",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-out-on-leg-extension-machine-43304-large.mp4",
        tips: [
          "Ajuste o rolo almofadado logo acima do tornozelo.",
          "Segure firme nos suportes laterais para evitar que o quadril levante do banco.",
          "Suba contraindo o quadríceps e segure 1 segundo no topo antes de descer lentamente."
        ],
        burnTips: "Na última série, reduza 30% da carga sem descanso e faça repetições até a fadiga para esgotar glicogênio muscular."
      },
      {
        id: "agachamento-smith",
        name: "Agachamento na Barra Guiada (Smith Machine)",
        target: "Glúteos, Quadríceps e Core",
        machine: "Smith Machine / Barra Guiada Smart Fit",
        sets: "4 séries",
        reps: "10 a 12 reps",
        rest: "60 seg",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-girl-doing-barbell-squats-in-a-gym-43303-large.mp4",
        tips: [
          "Coloque os pés ligeiramente à frente da linha da barra para proteger os joelhos e enfatizar glúteo.",
          "Trave as escápulas e apoie a barra no trapézio, nunca nas vértebras do pescoço.",
          "Inspire na descida empurrando o quadril para trás como se fosse sentar num banco."
        ],
        burnTips: "Exercício composto de altíssimo custo energético, ideal para aceleração da queima de gordura."
      },
      {
        id: "cadeira-abdutora",
        name: "Cadeira Abdutora",
        target: "Glúteo Médio & Mínimo (Desenho lateral do quadril)",
        machine: "Cadeira Abdutora (Torre de Cargas Smart Fit)",
        sets: "4 séries",
        reps: "15 a 20 reps",
        rest: "35 seg",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-out-her-legs-at-the-gym-43308-large.mp4",
        tips: [
          "Incline o tronco levemente à frente para aumentar a ativação das fibras do glúteo.",
          "Abra até a amplitude confortável e controle o retorno sem deixar as placas baterem.",
          "Mantenha o abdômen ativado o tempo todo."
        ],
        burnTips: "Intervalo curto de 35 segundos para manter a frequência cardíaca elevada."
      },
      {
        id: "esteira-inclinada",
        name: "Cardio HIIT / Caminhada Inclinada",
        target: "Sistema Cardiovascular & Queima Acentuada de Gordura",
        machine: "Esteira Smart Fit (Painel Digital)",
        sets: "1 sessão contínua",
        reps: "15 a 20 minutos",
        rest: "Final de treino",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-running-on-treadmill-in-gym-43313-large.mp4",
        tips: [
          "Ajuste a inclinação entre 6% a 10% e velocidade entre 4.8 a 5.8 km/h.",
          "Evite se segurar nos apoios da esteira para recrutar a musculatura postural e queimar mais calorias.",
          "Mantenha uma respiração rítmica pelo nariz e boca."
        ],
        burnTips: "A caminhada inclinada após o treino de força utiliza ácidos graxos livres como fonte de combustível primária."
      }
    ]
  },
  treinoB: {
    title: "Treino B: Membros Superiores, Costas (Postura) & Abdômen Definido",
    description: "Tonificação dos membros superiores para desenhar a cintura, melhorar a postura e potencializar gasto calórico.",
    smartfitZone: "Smart Box / Área de Cabos e Aparelhos",
    estimatedCal: "320 - 400 kcal",
    duration: "45 min",
    exercises: [
      {
        id: "puxada-alta",
        name: "Puxada Frontal Aberta (Pulley)",
        target: "Dorsais, Costas e Bíceps (Efeito afinador de cintura)",
        machine: "Torre Pulley / Puxador Articulado Smart Fit",
        sets: "4 séries",
        reps: "12 reps",
        rest: "45 seg",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-lat-pulldowns-in-the-gym-43307-large.mp4",
        tips: [
          "Ajuste os rolos das coxas para ficar bem travada no assento.",
          "Puxe a barra em direção ao peitoral superior, projetando o peito para fora.",
          "Concentre a força nos cotovelos apontando para baixo, sem curvar as costas."
        ],
        burnTips: "Dorsais desenvolvidas criam a ilusão óptica de cintura visualmente mais fina."
      },
      {
        id: "remada-baixa",
        name: "Remada Baixa no Triângulo",
        target: "Meio das Costas & Romboides (Correção de Postura)",
        machine: "Cabo com Banco Smart Fit",
        sets: "3 séries",
        reps: "12 a 15 reps",
        rest: "40 seg",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-training-back-muscles-on-cable-machine-43306-large.mp4",
        tips: [
          "Mantenha os joelhos ligeiramente flexionados e a coluna neutra.",
          "Puxe a manopla até o abdômen apertando as escápulas atrás.",
          "Alongue os braços sem deixar o tronco cair todo para a frente."
        ],
        burnTips: "Ajuda a eliminar a gordura localizada das costas perto da alça do sutiã."
      },
      {
        id: "triceps-corda",
        name: "Tríceps na Corda (Polia)",
        target: "Tríceps (Elimina o 'músculo do tchauzinho')",
        machine: "Crossover / Torre de Cabos Smart Fit",
        sets: "3 séries",
        reps: "15 reps",
        rest: "35 seg",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-out-triceps-on-cable-machine-43305-large.mp4",
        tips: [
          "Fixe os cotovelos colados às costelas durante todo o trajeto.",
          "No ponto mais baixo abra a corda para máxima contração da musculatura.",
          "Suba apenas até os antebraços formarem um ângulo de 90°."
        ],
        burnTips: "Firmeza total para a parte de trás do braço."
      },
      {
        id: "prancha-abdominal",
        name: "Prancha Isométrica + Prancha Tocando Ombros",
        target: "Core Profundo, Transverso do Abdômen e Estabilidade",
        machine: "Colchonete Smart Fit / Área de Alongamento",
        sets: "3 séries",
        reps: "40 seg isometria",
        rest: "30 seg",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-exercising-in-a-gym-doing-plank-43309-large.mp4",
        tips: [
          "Mantenha o corpo em uma linha reta da cabeça aos calcanhares.",
          "Puxe o umbigo para dentro em direção à coluna para ativar o transverso.",
          "Não deixe o quadril cair nem empinar excessivamente."
        ],
        burnTips: "O fortalecimento do transverso atua como uma 'cinta modeladora natural'."
      },
      {
        id: "transporte-eliptico",
        name: "Transport / Elíptico Smart Fit",
        target: "Cardio de Baixo Impacto articular & Gasto Calórico",
        machine: "Elíptico Smart Fit",
        sets: "1 sessão contínua",
        reps: "15 minutos moderado",
        rest: "Final do treino",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-training-on-an-elliptical-trainer-in-a-gym-43312-large.mp4",
        tips: [
          "Mantenha os calcanhares apoiados na base dos pedais para ativar glúteos.",
          "Use os braços móveis para integrar o corpo todo no movimento.",
          "Excelente alternativa para quem tem sensibilidade nos joelhos."
        ],
        burnTips: "Zera o impacto articular enquanto consome até 150 kcal adicionais."
      }
    ]
  },
  treinoC: {
    title: "Treino C: Posterior de Coxa, Glúteo Isolado & Escada Queima Gordura",
    description: "Foco na cadeia posterior das pernas e glúteos com finalização no melhor simulador de escadas da Smart Fit.",
    smartfitZone: "Smart Shape / Musculação & Escadas",
    estimatedCal: "400 - 520 kcal",
    duration: "55 min",
    exercises: [
      {
        id: "elevacao-pelvica",
        name: "Elevação Pélvica (Hip Thrust)",
        target: "Glúteo Máximo",
        machine: "Máquina de Elevação Pélvica ou Banco com Barra Smart Fit",
        sets: "4 séries",
        reps: "10 a 12 reps (com 2s de pausa em cima)",
        rest: "60 seg",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-bridge-exercises-in-a-gym-43311-large.mp4",
        tips: [
          "Apoie as escápulas no estofado e deixe os pés alinhados com os joelhos.",
          "Suba empurrando pelo calcanhar e faça contração potente no topo.",
          "Mantenha o queixo apontado para frente e não hiperestenda a lombar."
        ],
        burnTips: "O melhor exercício da ciência moderna para hipertrofia e firmeza do bumbum."
      },
      {
        id: "mesa-flexora",
        name: "Mesa Flexora",
        target: "Posterior de Coxa (Isquiotibiais)",
        machine: "Mesa Flexora Deitada Smart Fit",
        sets: "4 séries",
        reps: "12 a 15 reps",
        rest: "45 seg",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-out-her-legs-at-the-gym-43308-large.mp4",
        tips: [
          "Posicione a almofada cilíndrica logo acima do tendão de Aquiles.",
          "Não tire o quadril da mesa durante a puxada.",
          "Controle a descida para máxima quebra e remodelamento muscular."
        ],
        burnTips: "Desenha a linha posterior da perna, combatendo a flacidez."
      },
      {
        id: "gluteo-polia",
        name: "Glúteo Coice na Polia Baixa",
        target: "Glúteo Isolado & Linha da Cintura",
        machine: "Crossover com Tornozeleira Smart Fit",
        sets: "3 séries cada perna",
        reps: "15 reps",
        rest: "30 seg",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-doing-leg-press-in-a-gym-43310-large.mp4",
        tips: [
          "Fixe a tornozeleira no cabo baixo e segure na coluna de apoio.",
          "Chute a perna para trás e para cima sem arquear as costas.",
          "Segure 1 segundo no pico de contração."
        ],
        burnTips: "Isolamento cirúrgico de glúteo sem sobrecarregar coluna."
      },
      {
        id: "simulador-escada",
        name: "Simulador de Escada (Climber)",
        target: "Queima Intensa de Calorias & Enrijecimento de Pernas/Glúteo",
        machine: "Escada StairMaster Smart Fit",
        sets: "1 sessão contínua",
        reps: "15 a 20 minutos (Ritmo constante)",
        rest: "Final do treino",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-running-on-treadmill-in-gym-43313-large.mp4",
        tips: [
          "Pise com a sola do pé inteira no degrau, impulsionando pelo calcanhar.",
          "Mantenha a coluna ereta; não se debruce sobre os corrimões de apoio.",
          "Varie o ritmo se desejar: 1 minuto rápido, 1 minuto moderado."
        ],
        burnTips: "O aparelho favorito das mulheres na Smart Fit: queima até 250 kcal em apenas 20 minutos!"
      }
    ]
  }
};

// Estado da aplicação
let currentWorkoutKey = "treinoA";
let completedExercises = new Set();
let timerInterval = null;
let timerSeconds = 45;
let timerRunning = false;

// Inicialização da página
document.addEventListener("DOMContentLoaded", () => {
  renderWorkout(currentWorkoutKey);
  setupEventListeners();
  updateProgressUI();
});

// Renderizar treino na tela
function renderWorkout(key) {
  currentWorkoutKey = key;
  const workout = workoutDatabase[key];
  if (!workout) return;

  // Atualizar cabeçalho do treino
  document.getElementById("workout-title").innerText = workout.title;
  document.getElementById("workout-desc").innerText = workout.description;
  document.getElementById("workout-zone-tag").innerText = workout.smartfitZone;
  document.getElementById("workout-cal-tag").innerText = `🔥 Gasto: ${workout.estimatedCal}`;
  document.getElementById("workout-time-tag").innerText = `⏱ Duração: ${workout.duration}`;

  // Atualizar botões de abas
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.workout === key);
  });

  // Renderizar grid de exercícios
  const grid = document.getElementById("exercise-grid");
  grid.innerHTML = "";

  workout.exercises.forEach(ex => {
    const isCompleted = completedExercises.has(ex.id);
    const card = document.createElement("div");
    card.className = `exercise-card ${isCompleted ? 'completed' : ''}`;
    card.id = `card-${ex.id}`;

    card.innerHTML = `
      <div class="exercise-media">
        <video 
          class="exercise-video" 
          src="${ex.videoUrl}" 
          autoplay 
          loop 
          muted 
          playsinline
          preload="metadata"
          poster=""
        ></video>
        <span class="media-smartfit-zone">Smart Fit Machine</span>
        <span class="media-badge">▶ Execução em Loop</span>
      </div>

      <div class="exercise-body">
        <div class="exercise-title-row">
          <h3 class="exercise-name">${ex.name}</h3>
        </div>
        <div class="exercise-target">🎯 Alvo: ${ex.target}</div>
        
        <div class="exercise-smartfit-machine">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43 1.43 1.43 2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43z"/>
          </svg>
          <span>${ex.machine}</span>
        </div>

        <div class="parameters-grid">
          <div class="param-item">
            <span class="param-label">Séries</span>
            <span class="param-val">${ex.sets}</span>
          </div>
          <div class="param-item">
            <span class="param-label">Repetições</span>
            <span class="param-val">${ex.reps}</span>
          </div>
          <div class="param-item">
            <span class="param-label">Descanso</span>
            <span class="param-val">${ex.rest}</span>
          </div>
        </div>

        <p class="instructions-text">${ex.tips[0]}</p>

        <div class="exercise-actions">
          <button class="btn-action btn-check ${isCompleted ? 'done' : ''}" onclick="toggleExerciseDone('${ex.id}')">
            ${isCompleted ? '✓ Feito' : 'Marcar Concluído'}
          </button>
          <button class="btn-action btn-detail" onclick="openExerciseModal('${key}', '${ex.id}')">
            Ver Detalhes & Dicas
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Configuração de Event Listeners
function setupEventListeners() {
  // Tabs do treino
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      renderWorkout(btn.dataset.workout);
    });
  });

  // Modal Fechamento
  const modal = document.getElementById("exercise-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Timer Controls
  document.getElementById("btn-start-timer")?.addEventListener("click", startTimer);
  document.getElementById("btn-reset-timer")?.addEventListener("click", () => resetTimer(45));
  document.getElementById("btn-60s")?.addEventListener("click", () => resetTimer(60));
  document.getElementById("btn-30s")?.addEventListener("click", () => resetTimer(30));

  // Calculadora de Metabolismo & Déficit
  document.getElementById("calc-btn")?.addEventListener("click", calculateCaloricDeficit);
}

// Conclusão de Exercício
window.toggleExerciseDone = function(exerciseId) {
  if (completedExercises.has(exerciseId)) {
    completedExercises.delete(exerciseId);
  } else {
    completedExercises.add(exerciseId);
    // Dispara descanso automático de 45 segundos
    resetTimer(45);
    startTimer();
  }
  renderWorkout(currentWorkoutKey);
  updateProgressUI();
};

function updateProgressUI() {
  const currentExercises = workoutDatabase[currentWorkoutKey].exercises;
  let count = 0;
  currentExercises.forEach(ex => {
    if (completedExercises.has(ex.id)) count++;
  });

  const percent = Math.round((count / currentExercises.length) * 100);
  const progressElem = document.getElementById("stat-progress");
  if (progressElem) progressElem.innerText = `${percent}%`;

  const countElem = document.getElementById("stat-completed-count");
  if (countElem) countElem.innerText = `${count} de ${currentExercises.length}`;
}

// Modal de Detalhes
window.openExerciseModal = function(workoutKey, exerciseId) {
  const workout = workoutDatabase[workoutKey];
  const ex = workout.exercises.find(item => item.id === exerciseId);
  if (!ex) return;

  const modal = document.getElementById("exercise-modal");
  document.getElementById("modal-title").innerText = ex.name;
  
  const modalVideo = document.getElementById("modal-video");
  modalVideo.src = ex.videoUrl;
  modalVideo.play().catch(() => {});

  document.getElementById("modal-machine").innerText = ex.machine;
  document.getElementById("modal-reps").innerText = `${ex.sets} | ${ex.reps} (Descanso: ${ex.rest})`;
  document.getElementById("modal-burntip").innerText = ex.burnTips;

  const tipsList = document.getElementById("modal-tips-list");
  tipsList.innerHTML = "";
  ex.tips.forEach(tip => {
    const li = document.createElement("li");
    li.innerText = tip;
    tipsList.appendChild(li);
  });

  modal.classList.add("open");
};

function closeModal() {
  const modal = document.getElementById("exercise-modal");
  const modalVideo = document.getElementById("modal-video");
  if (modalVideo) modalVideo.pause();
  modal.classList.remove("open");
}

// Timer de Descanso Interativo
function startTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById("btn-start-timer").innerText = "Iniciar";
    return;
  }

  timerRunning = true;
  document.getElementById("btn-start-timer").innerText = "Pausar";

  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      timerRunning = false;
      document.getElementById("btn-start-timer").innerText = "Iniciar";
      // Som suave de notificação de descanso encerrado
      playBeep();
    }
  }, 1000);
}

function resetTimer(seconds = 45) {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = seconds;
  document.getElementById("btn-start-timer").innerText = "Iniciar";
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  document.getElementById("timer-display").innerText = formatted;
}

// Sintetizador Web Audio para aviso sonoro sem depender de arquivos externos pesados
function playBeep() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.6);
  } catch(e) {
    console.log("AudioContext não suportado ou bloqueado");
  }
}

// Calculadora de Metabolismo Basal Feminino & Meta para Emagrecimento
function calculateCaloricDeficit() {
  const weight = parseFloat(document.getElementById("calc-weight")?.value);
  const height = parseFloat(document.getElementById("calc-height")?.value);
  const age = parseFloat(document.getElementById("calc-age")?.value);
  const daysWeek = parseFloat(document.getElementById("calc-frequency")?.value || "4");

  if (!weight || !height || !age) {
    alert("Por favor, preencha peso, altura e idade corretamente!");
    return;
  }

  // Equação Mifflin-St Jeor para mulheres: (10 × peso em kg) + (6.25 × altura em cm) - (5 × idade em anos) - 161
  const tmb = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  
  // Fator de atividade física baseado na frequência
  let factor = 1.35;
  if (daysWeek >= 5) factor = 1.55;
  else if (daysWeek >= 3) factor = 1.45;

  const tdee = Math.round(tmb * factor);
  // Déficit seguro de 400 kcal para queima de gordura preservando massa magra
  const targetCalories = Math.max(1200, tdee - 450);

  document.getElementById("result-calories").innerText = `${targetCalories} kcal`;
  document.getElementById("result-tdee").innerText = `${tdee} kcal`;
  document.getElementById("result-deficit").innerText = `-450 kcal/dia`;
  document.getElementById("result-container").style.display = "block";
}
