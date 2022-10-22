// 타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요. Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.

// add: 단어를 추가함
// get: 단어의 정의를 반환함
// delete: 단어를 삭제함
// update: 단어를 업데이트 함
// showAll: 딕셔너리의 단어를 모두 프린트함
// count: 딕셔너리 단어들의 총 수를 반환함

type Words = {
  [key: string]: string;
};
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    } else {
      console.log("이미 존재하는 단어입니다.");
    }
  }
  get(term: string) {
    if (this.words[term] !== undefined) {
      return this.words[term];
    }
  }
  delete(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
    } else {
      console.log("사전에 해당 단어가 존재하지 않습니다.");
    }
  }
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    } else {
      console.log("사전에 해당 단어가 존재하지 않습니다.");
    }
  }
  showAll() {
    let str: string;
    for (const key in this.words) {
      if (Object.prototype.hasOwnProperty.call(this.words, key)) {
        str = `${key}: ${this.words[key]}`;
        console.log(str);
      }
    }
  }
  count() {
    return Object.keys(this.words).length;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}
