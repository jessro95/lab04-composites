# Lab 04 - Composite Pattern

## Overview
Often an application will need to manipulate a collection of objects in the same way it would a single object. The composite design pattern allows objects to be composed of other objects in a tree, and to treat branches and leaves the same. In this way, your application can treat compositions of objects and individual objects uniformly.

## Objectives
- To learn and practice the composite pattern.
- To understand how recursive composition works.
- To compose objects into tree structures to represent whole-part hierarchies.

## Necessary Files
You will need to **fork** and **clone** this repository and open in VSCode or your favorite editor.


## Structure
Define an interface Component, which defines the shared functionality across leaves and composites in the tree. In this case doThis() is shared between the leaf and composite elements, and allows you to treat Leaf and Composite uniformly.

Implement Component with Leaf and Composite; Composites contain lists of components, each of which could be a leaf or a composite itself.

Implement doThis() in both Leaf and Composite, but the functionality differes in that Composite iterates through it's list of elements and calls doThis() on each.

![alt text](https://sourcemaking.com/files/v2/content/patterns/Composite.svg "Composite Pattern")

## Recursive Composition

When doThis() is called on any composite, it iterates through it's list of components, and calls doThis() on each of them. Each of these doThis() may call a doThis() of a list of components, thus recursively calling until a Leaf.

## Example - Graphics Drawing Editor

In graphics editors, shapes can be simple or complex. An example of a simple shape is a line, while a triangle is complex because it is composed of three lines. You may want to even create even more complex shapes out of other complex shapes, for instance you could create a duck shape out of a collection of traingle shapes.

From that example we can identify the following components:
+ Shape (Component)
+ Line (Leaf)
+ Rectangle, Triangle, Duck (Composite)

This is much like [tangrams](https://en.wikipedia.org/wiki/Tangram)!

<img src="https://s3.amazonaws.com/media-p.slid.es/uploads/377018/images/2152390/dc7rMnpc9.jpeg" width="300">
<img src="https://s3.amazonaws.com/media-p.slid.es/uploads/377018/images/2152408/Screen_Shot_2016-01-20_at_11.10.19_AM.png" width="300">

This turns groups of shapes into a tree, which can be recursively treated the same way.


## Your task

Recall the DOM (Document Object Model) from 343. It defines a structured representation of a web page document as a tree. Each node in the tree is an object which represents some part of the document. Most nodes can be composed of other nodes, and 

Your task for this lab is to write TypeScript that constructs and prints out an HTML DOM using the composites pattern.

Your output will look something like this:

```
C:\code\info498e\lab04-composites>node composite-html-2.js
<html>
<div>
<p>
Hello world!
</p>
<p>
How is it going?
</p>
</div>
</html>

```

We have given you some starter code that includes an interface (IDomElement). You need to create a class (DomElement) that implements this interface.

```javascript
interface IDomElement {
  add(element: DomElement);
  print();
}
```

Each instance of this DomElement class will represent a element (you can also call them nodes) in your DOM tree.

Use this composite structure to create a DOM tree that looks like the sample output we've provided you above.


## Submission
To recieve credit for this lab, turn in a link to your repository in the Lab4 assignment on Canvas here.



