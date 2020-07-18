// TODO: Humanクラスを継承し、Hiroクラスを作成してください
// Hiroクラスは　seiken(Hiroのもつ聖剣の名前) というメンバ変数をもちます
// Hiroの名前、年齢、持っている聖剣の名前をconsoleに出力してください

class Human {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }

  get name() {
    return "私の名前は" + this._name + "です。";
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return "年齢は" + this._age + "才です。";
  }

  set age(value) {
    this._age = value;
  }

  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

// class Hiro
class Hiro extends Human {
  constructor(seiken,age,name) {
    super (age,name);
    this.seiken = seiken;
  }


  get seiken () {
     return "" + this._seiken + "です";
  };

  set seiken (value) {
    this._seiken = value
  }

  getSeiken() {
    return this.seiken;
  }

  
}
var mmm = new Hiro('エクスカリバー','17','yugo');



console.log(mmm.getSeiken());