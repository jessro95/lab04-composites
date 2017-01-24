var DomElement = (function () {
    function DomElement(self) {
        this.self = self;
        this.children = [];
    }
    DomElement.prototype.add = function (element) {
        this.children.push(element);
    };
    DomElement.prototype.print = function () {
        console.log('<' + this.self + '>');
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.print();
        }
        console.log('</' + this.self + '>');
    };
    return DomElement;
}());
var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function () {
        console.log(this.text);
    };
    return TextNode;
}());
var p1 = new DomElement("p");
var p2 = new DomElement("p");
var div = new DomElement("div");
var html = new DomElement("html");
p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));
div.add(p1);
div.add(p2);
html.add(div);
html.print();
