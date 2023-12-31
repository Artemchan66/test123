var questions = [
    { question: "Начнем с базы: чей год мы встречаем? (Какое животное?)", correctAnswer: "дракон" },
    { question: "Тэкс, ну еще тогда, год-то високосный будет? (Да/нет)", correctAnswer: "да" },
    { question: "Теперь загадки. Кого плотненько попустили в канун Нового года, и про кого теперь песня: 'Никаких больше вечеринок'", correctAnswer: "ивлеева" },
    { question: "Страна в которой пьют ракию и постоянно делают полако. Мы целый год ее мусолим, но никак не можем поехать. (А еще билеты в нее стоят как тюнингованная приора)", correctAnswer: "сербия" },
    { question: "Какую кинофраншизу мы смотрели на прошлых новогодних праздниках? И которая была очень даже неплоха (Ну по крайней мере первые 3 фильма, мяу)", correctAnswer: "гарри поттер" },
    { question: "Хайчите?", correctAnswer: "не байчите" },
    { question: "Мяу?", correctAnswer: "мяу" },
    { question: "А угадаешь, чья музычка играет? (Пишишьте имя на кириллице)", correctAnswer: "тайлер" },
    { question: "Ну и главный вопрос, а ты меня любишь? 👉👈", correctAnswer: "да" },
    { question: "Очень? 👉👈", correctAnswer: "да" },
];

var currentQuestionIndex = 0;
var mainPlaceholder = "Писать сюда";
var actionButton = "Жмяк";

var audioPlayer = document.createElement('audio');
audioPlayer.controls = true;
audioPlayer.autoplay = true;
audioPlayer.loop = false; // Set loop to false initially
audioPlayer.style.position = 'fixed';
audioPlayer.style.bottom = '10px';
audioPlayer.style.left = '10px';

var musicSources = [
    'msc/Whoville.mp3',
    'msc/Hot Chocolate.mp3',
    'msc/LightsOn.mp3'
];

var currentMusicIndex = 0;

audioPlayer.src = musicSources[currentMusicIndex];

document.body.appendChild(audioPlayer);

function displayQuestion() {
    document.getElementById('questionsContainer').innerHTML = `
        <div id="question">${questions[currentQuestionIndex].question}</div>
    `;
    audioPlayer.style.display = 'none';
}

function validateAnswer() {
    var userInput = document.getElementById('userInput').value.toLowerCase();
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var errorBlock = document.getElementById('errorBlock');

    if (userInput === correctAnswer) {
        document.getElementById('insertBlock').innerHTML = `
            <input type="text" id="userInput" placeholder="${mainPlaceholder}">
            <button onclick="validateAnswer()">${actionButton}</button>
        `;
        errorBlock.style.display = 'none';
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            var audioPlayer = document.createElement('audio');
            audioPlayer.controls = true;
            audioPlayer.autoplay = true;
            audioPlayer.loop = true;
            audioPlayer.style.marginTop = '20px';
            audioPlayer.style.display = 'none';
            audioPlayer.innerHTML = `
                <source src="msc/ChapaChapa.mp4" type="audio/mp4">
            `;
            
            alert('Уря! Ты правльно ответила на все вопросы, быстрее жмякай ОК и забирай подарок!!!!');
            
            var mediaContainer = document.createElement('div');
            mediaContainer.id = 'mediaContainer';

            var gifClasses = ['giftop-left', 'giftop-right', 'gifbottom-left', 'gifbottom-right'];

            for (var i = 1; i <= 4; i++) {
                var gifElement = document.createElement('img');
                gifElement.src = 'img/Chipi.gif';
                gifElement.alt = 'Gif ' + i;
                gifElement.className = 'surrounding-gif ' + gifClasses[i - 1];
                mediaContainer.appendChild(gifElement);
            }
            
            
            var imageElement = document.createElement('img');
            imageElement.src = 'img/Cert.jpg';
            imageElement.alt = 'Congratulations Image';
            imageElement.width = 700;
            imageElement.height = 450;
            
            mediaContainer.appendChild(imageElement);
            
            var contentContainer = document.createElement('div');
            contentContainer.className = 'content';
            
            contentContainer.appendChild(mediaContainer);
            contentContainer.appendChild(audioPlayer);
            
            document.body.innerHTML = '';
            document.body.appendChild(contentContainer);
            
            document.body.style.background = 'url("img/Bg1.gif")';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';

        }
    } else {
        errorBlock.style.display = 'block';
    }
}

function toggleMusic() {
    var toggleMusicBtn = document.getElementById('toggleMusicBtn');

    if (audioPlayer.paused) {
        audioPlayer.play();
        toggleMusicBtn.innerText = 'Найс 😎, чтобы выключить ткни есчо раз';
    } else {
        audioPlayer.pause();
        toggleMusicBtn.innerText = 'Грустновато без музычки так-то 😥, чтобы включить жми сюда!';
    }
}

audioPlayer.addEventListener('ended', function () {
    currentMusicIndex = (currentMusicIndex + 1) % musicSources.length;
    audioPlayer.src = musicSources[currentMusicIndex];
    audioPlayer.play();
});
displayQuestion();
