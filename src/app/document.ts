import { v4 as uuidv4 } from "uuid";

export class Document {
  root: Element[];
  tree: {
    [s: string]: Element | Text;
  };

  constructor() {
    this.root = [];
    this.tree = {};
  }

  registerElement(element: Element | Text) {
    this.tree[element.id] = element;
    if (!element.document.includes(this)) element.document.push(this);
  }

  appendChild(child: Element) {
    this.root.push(child);
    this.registerElement(child);
  }
}

export class Text {
  id: string;
  document: Document[];
  name = "text";
  value: string;

  constructor(value: string) {
    this.id = uuidv4();
    this.document = [];
    this.value = value;
  }

  setValue(value: string) {
    this.value = value;
  }
}

export class Element {
  id: string;
  document: Document[];
  name: string;
  attributes: {
    role: string;
  };
  children: (Element | Text)[];
  childrenRestriction: {
    mustElements?: string[];
    allowElements?: string[];
  };

  constructor(value?: string) {
    this.id = uuidv4();
    this.document = [];
    this.name = "";
    this.attributes = {
      role: "",
    };
    this.children = [];
    this.childrenRestriction = {};
    if (value) {
      const text = new Text(value);
      this.appendChild(text);
    }
  }

  getId() {
    return this.id;
  }

  appendChild(child: Element | Text) {
    if (!this.childrenRestriction.allowElements?.includes(child.name)) return;
    this.children.push(child);
    for (const document of this.document) document.registerElement(child);
  }

  /*setAttribute(key: string, value: any) {
    this.attributes[key] = value;
  }*/
}

export class Section extends Element {
  constructor() {
    super();
    this.name = "section";
    this.childrenRestriction = {
      mustElements: ["title"],
      allowElements: ["para"],
    };
  }
}

export class Title extends Element {
  constructor(value: string) {
    super(value);
    this.name = "title";
    this.childrenRestriction = {
      mustElements: [],
      allowElements: [],
    };
  }
}

export class Para extends Element {
  constructor(value: string) {
    super(value);
    this.name = "para";
    this.childrenRestriction = {
      mustElements: [],
      allowElements: [],
    };
  }
}

const document: Document = new Document();
const section: Section = new Section();
const title: Title = new Title("This is a title.");
const para: Para = new Para("Also, this is a text.");

section.appendChild(title);
section.appendChild(para);

document.appendChild(section);
