window.speech = {
    speak: (text, config) => {
        return new Promise((resolve) => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.pitch = config.pitch ?? 1.0;
            utterance.rate = config.rate ?? 1.0;
            utterance.volume = config.volume ?? 1.0;
            utterance.lang = config.lang ?? 'en-US';

            if (config.voice) {
                const voices = speechSynthesis.getVoices();
                const selectedVoice = voices.find(v => v.name.includes(config.voice));
                if (selectedVoice) {
                    utterance.voice = selectedVoice;
                }
            }

            // Resolve the promise when speech finishes
            utterance.onend = () => resolve(true);
            utterance.onerror = (e) => resolve(false); // Handle errors

            speechSynthesis.speak(utterance);
        });
    },

    stop: () => {
        speechSynthesis.cancel();
    },

    getVoices: () => {
        return new Promise((resolve) => {
            let voices = speechSynthesis.getVoices();
            if (voices.length > 0) {
                resolve(voices.map(v => ({ name: v.name, lang: v.lang })));
            } else {
                speechSynthesis.onvoiceschanged = () => {
                    voices = speechSynthesis.getVoices();
                    resolve(voices.map(v => ({ name: v.name, lang: v.lang })));
                };
            }
        });
    }
};
