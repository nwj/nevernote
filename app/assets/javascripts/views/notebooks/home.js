Nevernote.Views.NotebooksShow = Support.CompositeView.extend({

  render: function() {
    this.renderLayout();
    this.renderSidebar();
    this.renderNotesList();
    this.renderNoteDetail();
  },

  renderLayout: function() {
    this.$el.html(JST('home/layout')]());
  },

});
