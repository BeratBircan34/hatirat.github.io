const questions = [
    {
      question: "Türkiye'nin başkenti neresidir?",
      options: ["İstanbul", "Ankara", "İzmir", "Bursa"],
      answer: "Ankara"
    },
    {
      question: "Dünya'nın en büyük okyanusu hangisidir?",
      options: ["Atlantik", "Hint", "Arktik", "Pasifik"],
      answer: "Pasifik"
    },
    {
      question: "Atatürk'ün doğum yılı nedir?",
      options: ["1880", "1881", "1885", "1890"],
      answer: "1881"
    },
    {
      question: "En uzun nehir hangisidir?",
      options: ["Nil", "Amazon", "Mississippi", "Fırat"],
      answer: "Amazon"
    },
    {
      question: "Ay'ın etrafındaki dönüş süresi yaklaşık kaç gündür?",
      options: ["15", "27", "30", "365"],
      answer: "27"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60; // saniye cinsinden toplam süre
  let timerInterval;
  
  document.getElementById("start-quiz").addEventListener("click", function () {
    const quizBox = document.getElementById("quiz-box");
    quizBox.style.display = "block";
    quizBox.classList.add("fade-in");
    this.style.display = "none";
    startTimer();
    showQuestion();
  });
  
  function startTimer() {
    const timerDisplay = document.getElementById("quiz-timer");
    timerInterval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endQuizDueToTime();
      } else {
        timerDisplay.textContent = `Kalan Süre: ${timeLeft} saniye`;
        timeLeft--;
      }
    }, 1000);
  }
  
  function endQuizDueToTime() {
    document.getElementById("quiz-question").textContent = "Süre doldu! Elendiniz.";
    document.getElementById("quiz-options").innerHTML = "";
    document.getElementById("quiz-result").textContent = `Doğru: ${score} | Yanlış: ${currentQuestion - score}`;
    document.getElementById("quiz-timer").textContent = "";
  }
  
  function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("quiz-question").textContent = q.question;
  
    const optionsDiv = document.getElementById("quiz-options");
    optionsDiv.innerHTML = "";
  
    document.getElementById("quiz-result").textContent = "";
    document.getElementById("score-summary").textContent = "";
    document.getElementById("coupon-button-container").innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.style.margin = "10px";
      btn.style.padding = "10px 20px";
      btn.style.borderRadius = "10px";
      btn.style.backgroundColor = "#d6b67a";
      btn.style.border = "none";
      btn.style.cursor = "pointer";
      btn.onclick = () => checkAnswer(option);
      optionsDiv.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const correctAnswer = questions[currentQuestion].answer;
    const resultDiv = document.getElementById("quiz-result");
    const scoreDiv = document.getElementById("score-summary");
  
    if (selected === correctAnswer) {
      score++;
    } else {
      clearInterval(timerInterval);
      resultDiv.textContent = "Yanlış cevap! Elendiniz.";
      scoreDiv.textContent = `Doğru: ${score} | Yanlış: ${currentQuestion + 1 - score}`;
      document.getElementById("quiz-options").innerHTML = "";
      document.getElementById("quiz-timer").textContent = "";
      return;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      clearInterval(timerInterval);
      const totalQuestions = questions.length;
      if (score === totalQuestions) {
        resultDiv.textContent = "Tebrikler! Tüm soruları doğru bildiniz 🎉";
        showCouponButton();
      } else {
        resultDiv.textContent = "Quiz tamamlandı.";
      }
      scoreDiv.textContent = `Doğru: ${score} | Yanlış: ${totalQuestions - score}`;
      document.getElementById("quiz-options").innerHTML = "";
      document.getElementById("quiz-timer").textContent = "";
    }
  }
  
  function showCouponButton() {
    const btn = document.createElement("button");
    btn.textContent = "Kupon bağlantısına git";
    btn.style.marginTop = "20px";
    btn.style.padding = "12px 24px";
    btn.style.backgroundColor = "#4b3213";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "10px";
    btn.style.cursor = "pointer";
    btn.onclick = () => {
      window.location.href = "https://www.ornekkupon.com/hatirat10"; // Kupon sayfanın adresi
    };
  
    document.getElementById("coupon-button-container").appendChild(btn);
  }
  