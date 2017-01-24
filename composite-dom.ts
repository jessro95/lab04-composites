interface IDomElement {
  print();
}

class DomElement implements IDomElement{
  private children : IDomElement[];
  private self : string;
  
  constructor(self:string) {
    this.self = self;
    this.children = [];
  }

  add(element:IDomElement) {
    this.children.push(element);
  }
  print() {
    console.log('<' + this.self + '>');
    for(let child of this.children){
      child.print();
    }
    console.log('</' + this.self + '>');

  }
}

class TextNode implements IDomElement{
  private text: string;
  constructor(text :string){
    this.text = text;
  }
  print() {
    console.log(this.text);
  }
}


let p1 = new DomElement("p");
let p2 = new DomElement("p");
let div = new DomElement("div");
let html = new DomElement("html");

p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));

div.add(p1);
div.add(p2);
html.add(div);

html.print();