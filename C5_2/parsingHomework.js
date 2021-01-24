//парсинг   XML
const xmlExample = `<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>`;

const xmlExample2 = `<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const domPars = new DOMParser();

const xmlDom = domPars.parseFromString(xmlExample, "text/xml");

const studentNode = xmlDom.querySelector("student");
const nameNode = studentNode.querySelector("name");
const firstNameNode = nameNode.querySelector("first");
const secondNameNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");

const langAttr = nameNode.getAttribute("lang");

const domPars2 = new DOMParser();

const xmlDom2 = domPars2.parseFromString(xmlExample2, "text/xml");

const studentNode2 = xmlDom2.querySelector("student");
const nameNode2 = studentNode2.querySelector("name");
const firstNameNode2 = nameNode2.querySelector("first");
const secondNameNode2 = nameNode2.querySelector("second");
const ageNode2 = studentNode2.querySelector("age");
const profNode2 = studentNode2.querySelector("prof");

const langAttr2 = nameNode2.getAttribute("lang");

const objJs = {
  list: [
    {
      name: `${firstNameNode}${secondNameNode}`,
      age: `${ageNode}`,
      prof: `${profNode}`,
      lang: `${langAttr}`,
    },
    {
      name: `${firstNameNode2}${secondNameNode2}`,
      age: `${ageNode2}`,
      prof: `${profNode2}`,
      lang: `${langAttr2}`,
    },
  ],
};
console.log(objJs);

// парсинг JSON
const jsonFile = {
  list: [
    {
      name: "Petr",
      age: "20",
      prof: "mechanic",
    },
  ],
};

const jsonFile2 = {
  list: [
    {
      name: "Vova",
      age: "60",
      prof: "pilot",
    },
  ],
};

const TestJS = JSON.stringify(jsonFile);
const JsObjFromJson = JSON.parse(TestJS);
const list1 = JsObjFromJson.list;

const TestJS2 = JSON.stringify(jsonFile2);
const JsObjFromJson2 = JSON.parse(TestJS2);
const list2 = JsObjFromJson2.list;

const result = {
  list: [
    { name: list1[0].name, age: list1[0].age, prof: list1[0].prof },
    {
      name: list2[0].name,
      age: list2[0].name,
      prof: list2[0].name,
    },
  ],
};

console.log(
  `list:[
    { name: ${list1[0].name}, age: ${list1[0].age}, prof: ${list1[0].prof}},
    { name: ${list2[0].name}, age: ${list2[0].age}, prof: ${list2[0].prof}}
  ]`
);
