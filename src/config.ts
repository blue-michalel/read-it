export interface VoicenatorConfig {
  voicesDropdown: HTMLElement;
  options: NodeList;
  speakButton: HTMLElement;
  stopButton: HTMLElement;
  text: HTMLInputElement;
}

const config: VoicenatorConfig = {
  voicesDropdown: document.querySelector('[name="voice"]'),
  options: document.querySelectorAll('[type="range"], [name="text"]'),
  speakButton: document.querySelector("#speak"),
  stopButton: document.querySelector("#stop"),
  text: document.querySelector('[name="text"]'),
};

export default config;
