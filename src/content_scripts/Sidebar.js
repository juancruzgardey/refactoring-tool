function Sidebar () {
    this.opened = false;
    this.refactoringSessionManager = new RefactoringSessionManager();
    this.logger = new Logger();
    this.currentView = new VersionsView();
}

Sidebar.prototype.render = function () {
    $("#refactorings-sidebar").empty();
    this.currentView.render();
};

Sidebar.prototype.open = function () {
    var div = $("<div>")[0];
    $(div).attr("id", "refactorings-sidebar");
    document.body.appendChild(div);
    this.render();
    this.opened = true;
};

Sidebar.prototype.close = function () {
    $("#refactorings-sidebar").remove();
    this.opened = false;
}

Sidebar.prototype.toggle = function () {
    this.opened ? this.close(): this.open();
};

Sidebar.prototype.show = function (view) {
    this.currentView = view;
    this.render();
};

Sidebar.prototype.onElementSelected = function (element) {
    this.currentView.onElementSelected(element);
};

Sidebar.prototype.getLogger = function () {
    return this.logger;
}


sidebar = new Sidebar();
browser.runtime.onMessage.addListener((request, sender) => {
    sidebar.toggle();
});