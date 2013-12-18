Nevernote.Views.Sidebar = Support.CompositeView.extend({

  render: function() {
    this.renderLayout();
    this.renderNotebooks();
    this.renderTags();

    return this;
  },

  renderLayout: function() {
    this.$el.html(JST['sidebar/layout']());
  },

  renderNotebooks: function() {
    var view = new Nevernote.Views.NotebooksList();
    var container = this.$('#notebooks-list');
    this.renderChildInto(view, container);
  },

  renderTags: function() {
    var view = new Nevernote.Views.TagsList();
    var container = this.$('#tags-list');
    this.renderChildInto(view, container);
  },

});
