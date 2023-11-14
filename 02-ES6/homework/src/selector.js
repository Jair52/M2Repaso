// TODO: 03
var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  if (matchFunc(startEl)) resultSet.push(startEl);
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  for (const child of startEl.children) {
    resultSet.push(...traverseDomAndCollectElements(matchFunc, child));
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag
// TODO: 01
var selectorTypeMatcher = function (selector) { // $("#pagetitle")  $(".pagetitle")  $("img.deleted")  $("div")
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  for (let i = 1; i < selector.length; i++) {
    if(selector[i] === '.') return 'tag.class';
  }
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.
// TODO: 02
var matchFunctionMaker = function (selector) {
  // $(".pagetitle")
  var selectorType = selectorTypeMatcher(selector); // --> "id"
  var matchFunction;
  if (selectorType === "id") {
    // "#" + "pagetitle"  === "#pagetitle"
    matchFunction = (element) => `#${element.id}` === selector; // retorna un true || false
  } else if (selectorType === "class") {
    matchFunction = (element) => {
      // []    ".pagetitle"
      for (let i = 0; i < element.classList.length; i++) {
        if (`.${element.classList[i]}` === selector) return true;
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (element) => {
      let [tag, clase] = selector.split("."); // -> ["tag", "class"]
      let funcClass = matchFunctionMaker(`.${clase}`);
      let funcTag = matchFunctionMaker(tag); // -> (element) => element.tagName === selector.toUpperCase()
      return funcClass(element) && funcTag(element);
    };
  } else if (selectorType === "tag") {
    // element.tagName --> DIV
    matchFunction = (element) => element.tagName === selector.toUpperCase();
  }
  return matchFunction; // (element) => element.tagName === selector.toUpperCase() && matchFunction = (element) => {
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  // traverseDomAndCollectElements((element) => `#${element.id}` === selector)
  return elements;
};
