export default class Settings {
  constructor(set) {
    this.defaultSettings = new Map([
      [{ theme: 'dark' }, ['ligth', 'gray']],
      [{ music: 'trance' }, ['pop', 'rock', 'chillout', 'off']],
      [{ difficulty: 'easy' }, ['normal', 'hard', 'nightmare']],
    ]);
    this.userSettings = new Map(set);
  }

  settings() {
    const copyDefaultSettings = this.defaultSettings;

    copyDefaultSettings.forEach((value, key) => {
      if (value.indexOf(Object.values(key)) === -1) {
        value.push(Object.values(key).toString()); // вставка в массив значения свойства из ключа
      }
    });

    // двойная итерация для сопоставления ключа и значения разных Map()
    for (const [key] of this.userSettings) {
      for (const [keys, values] of copyDefaultSettings) {
        this.userSettings.set(key, values);
        copyDefaultSettings.delete(keys);
        break;
      }
    }

    for (const [key, value] of this.userSettings) {
      value.splice(value.indexOf(Object.values(key)[0]), 1);
    }

    return this.userSettings;
  }
}
