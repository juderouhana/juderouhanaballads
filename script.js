document.addEventListener('DOMContentLoaded', function () {
    const audioSelect = document.getElementById("audioSelect"); // Dropdown
    const playButton = document.getElementById("playButton");      // Play button
    const audioPlayer = document.getElementById("audioPlayer"); // Audio element
    function playAudio() {
        const selectedAudio = audioSelect.value;
        if (selectedAudio) {
            audioPlayer.src = selectedAudio;
            audioPlayer.style.display = 'block';
            audioPlayer.play();                 //CITE:https://www.w3schools.com/jsref/met_audio_play.asp
                                                //DESC: used to figure out the built in .play() function for playing audio
        } else {
            alert("Please select an audio file.");
        }
    }
    playButton.addEventListener("click", playAudio);
});

 // Optional JavaScript to enhance navigation
 document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Get the target section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Smooth scroll to the section
            targetSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });
});