function TurnAttributeIntoLinkRefactoring(json) {
    UsabilityRefactoringOnElement.call(this, json);
    if (json) {
        this.targetURL = targetURL;
    }
}

TurnAttributeIntoLinkRefactoring.prototype = new UsabilityRefactoringOnElement();
TurnAttributeIntoLinkRefactoring.prototype.constructor = TurnAttributeIntoLinkRefactoring;

TurnAttributeIntoLinkRefactoring.prototype.transform = function () {
    var anElement = $(this.getElement());
    if (typeof(anElement[0]) != "undefined") {
        anElement.replaceWith($("<a href='" + this.targetURL + "'>" + anElement[0].outerHTML + "</a>"));
    }
};

TurnAttributeIntoLinkRefactoring.prototype.setTargetURL = function (url) {
    this.targetURL = url;
};

TurnAttributeIntoLinkRefactoring.prototype.serialize = function () {
    var json = UsabilityRefactoringOnElement.prototype.serialize.call(this);
    json.targetURL = this.targetURL;
    return json;
};

TurnAttributeIntoLinkRefactoring.getName = function () {
    return "Turn Attribute into Link";
};

TurnAttributeIntoLinkRefactoring.getView = function () {
    return TurnAttributeIntoLinkView;
};

TurnAttributeIntoLinkRefactoring.targetElements = function () {
    return "div, p, span, h1, h2, h3, h4, h5, h6";
}