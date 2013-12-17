Nevernote.Views.Sidebar = Support.CompositeView.extend({

  render: function() {
    this.renderLayout()
    //this.renderNotebooks();
    //this.renderTags();

    return this;
  },

  renderLayout: function() {
    this.$el.html(JST['sidebar/layout']());
  },

  //renderNotebooks: function() {
    //var view = Nevernote.Views.NotebooksList();
    //var container = this.$(#notebooks-list);
    //this.renderChildInto(view, container);
  //},

});
