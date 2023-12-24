// Array of questions and correct answers
var questions = [
    { question: "Вопрос номер 1", correctAnswer: "CorrectAnswer1" },
    { question: "Вопрос номер 2", correctAnswer: "CorrectAnswer2" },
    { question: "Вопрос номер 3", correctAnswer: "CorrectAnswer3" }
];

var currentQuestionIndex = 0;
var mainPlaceholder = "Писать сюда";
var actionButton = "Жмяк";

function displayQuestion() {
    // Display the current question
    document.getElementById('questionsContainer').innerHTML = `
        <div id="question">${questions[currentQuestionIndex].question}</div>
    `;
}

function validateAnswer() {
    var userInput = document.getElementById('userInput').value;
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var errorBlock = document.getElementById('errorBlock');

    if (userInput === correctAnswer) {
        // Replace the insert block with another one
        document.getElementById('insertBlock').innerHTML = `
            <input type="text" id="userInput" placeholder="${mainPlaceholder}">
            <button onclick="validateAnswer()">${actionButton}</button>
        `;

        console.log(userInput);

        // Hide the error block
        errorBlock.style.display = 'none';

        // Move to the next question or perform any other actions
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            // Display the next question
            displayQuestion();
        } else {
            // All questions are answered, display an image and hide previous content
            alert('All questions answered!');
            
            // Create a container for the image and audio
            var mediaContainer = document.createElement('div');
            mediaContainer.id = 'mediaContainer';
            
            // Create an image element
            var imageElement = document.createElement('img');
            imageElement.src = '2s8my2.jpg';
            imageElement.alt = 'Congratulations Image';
            
            // Append the image element to the media container
            mediaContainer.appendChild(imageElement);
            
            // Add audio element to play music in the background
            var audioPlayer = document.createElement('audio');
            audioPlayer.controls = true; // Show controls for user control (optional)
            audioPlayer.autoplay = true; // Automatically start playing
            audioPlayer.loop = true; // Loop the audio continuously
            audioPlayer.style.marginTop = '20px';
            audioPlayer.innerHTML = `
                <source src="ChapaChapa.mp4" type="audio/mp4">
                Your browser does not support the audio tag.
            `;
            
            // Create a container for the content
            var contentContainer = document.createElement('div');
            contentContainer.className = 'content';
            
            // Append the media container and audio player to the content container
            contentContainer.appendChild(mediaContainer);
            contentContainer.appendChild(audioPlayer);
            
            // Replace the existing content with the content container
            document.body.innerHTML = ''; // Clear existing content
            document.body.appendChild(contentContainer);
            
            // Set background gradient GIF
            document.body.style.background = 'url("Bg1.gif")';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';
        }
    } else {
        // Show the error block
        errorBlock.style.display = 'block';
    }
}

displayQuestion();
