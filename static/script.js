const keys = document.querySelectorAll('.key')
const audios = document.querySelectorAll('audio')

function doSomething (input) {
    
    console.log(input.key)
}


keys.forEach((key) => {
    window.addEventListener('keydown', (e) => {
        if (e.key === key.dataset.key) {
            key.className = 'key active';
            audios.forEach((audio) => {
                if (key.dataset.key == audio.dataset.key) {
                    audio.currentTime = -0.5
                    audio.play()
                }
            })
        };
    window.addEventListener('keyup', () => {
        key.className = 'key';
    })
    })
})

// make it clickable for phones
keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        
            key.className = 'key active';
            audios.forEach((audio) => {
                if (key.dataset.key == audio.dataset.key) {
                    audio.currentTime =0
                    audio.play()
                }
            key.className = 'key'    
            });

    key.addEventListener('', () => {
        key.className = 'key';
    })
    })
})
