const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve("dist/index.html"), "utf8");

jest.dontMock("fs");
window["SpeechSynthesisUtterance"] = jest.fn();

import Voicenator from "@/Voicenator";

describe("Voicenator test", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  it("Check init config", () => {
    const initConfig: VoicenatorConfig = {
      voicesDropdown: document.querySelector('[name="voice"]'),
      options: document.querySelectorAll('[type="range"], [name="text"]'),
      speakButton: document.querySelector("#speak"),
      stopButton: document.querySelector("#stop"),
      text: document.querySelector('[name="text"]')
    };

    const SpeechSynthesis = new Voicenator(initConfig);
    expect(SpeechSynthesis.config).toBe(initConfig);
    expect(window["SpeechSynthesisUtterance"]).toBeCalled();
  });
});
