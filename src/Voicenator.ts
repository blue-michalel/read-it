interface SpeechSynthesisVoice {
  default: boolean;
  lang: string;
  localService: boolean;
  name: string;
  voiceURI: string;
}

class Voicenator {
  config: VoicenatorConfig;
  msg: any;
  voices: Array<SpeechSynthesisVoice>;

  constructor(config: VoicenatorConfig) {
    this.msg = new SpeechSynthesisUtterance();
    this.voices = [];
    this.config = config;
  }

  setVoice = (event: Event): void => {
    console.log("Changing voice...");
    const target = event.target as HTMLInputElement;
    const { value }: { value: string } = target;

    const voice = this.voices.find((voice) => voice.name === value);
    this.msg.voice = voice;
    this.toggle();
  };

  populateVoices = (e: Event): void => {
    const target = e.target as Window["speechSynthesis"];
    this.voices = target.getVoices();

    const voiceOptions = this.voices
      .map(
        (voice) =>
          `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
      )
      .join("");

    this.config.voicesDropdown.innerHTML = voiceOptions;
  };

  setOption = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    this.msg[name] = value;

    this.toggle();
  };

  toggle = (startOver = true): void => {
    speechSynthesis.cancel();
    if (startOver) {
      this.msg.text = this.config.text.value;
      speechSynthesis.speak(this.msg);
    }
  };

  setup = (): void => {
    speechSynthesis.addEventListener("voiceschanged", this.populateVoices);
    this.config.voicesDropdown.addEventListener("change", this.setVoice);
    this.config.options.forEach((option) =>
      option.addEventListener("change", (e) => this.setOption(e))
    );

    this.config.speakButton.addEventListener("click", () => this.toggle());
    this.config.stopButton.addEventListener("click", () => this.toggle(false));
  };
}

export default Voicenator;
