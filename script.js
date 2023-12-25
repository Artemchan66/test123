var questions = [
    { question: "Вопрос номер 1", correctAnswer: "CorrectAnswer1" },
    { question: "Вопрос номер 2", correctAnswer: "CorrectAnswer2" },
    { question: "Вопрос номер 3", correctAnswer: "CorrectAnswer3" }
];

var currentQuestionIndex = 0;
var mainPlaceholder = "Писать сюда";
var actionButton = "Жмяк";

var audioPlayer = document.createElement('audio');
audioPlayer.controls = true;
audioPlayer.autoplay = true;
audioPlayer.loop = true;
audioPlayer.style.position = 'fixed';
audioPlayer.style.bottom = '10px';
audioPlayer.style.left = '10px';
audioPlayer.innerHTML = `
    <source src="msc/Hot Chocolate.mp3" type="audio/mp3">
`;
document.body.appendChild(audioPlayer);

function displayQuestion() {
    document.getElementById('questionsContainer').innerHTML = `
        <div id="question">${questions[currentQuestionIndex].question}</div>
    `;
    audioPlayer.style.display = 'none';
}

function validateAnswer() {
    var userInput = document.getElementById('userInput').value;
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
            
            alert('All questions answered!');
            
            var mediaContainer = document.createElement('div');
            mediaContainer.id = 'mediaContainer';
            
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
        toggleMusicBtn.innerText = 'Найс 😎';
    } else {
        audioPlayer.pause();
        toggleMusicBtn.innerText = 'Грустновато без музычки так-то 😥';
    }
}

displayQuestion();
