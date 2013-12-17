Nevernote.Views.Home = Support.CompositeView.extend({

  render: function() {
    this.renderLayout();
    this.renderSidebar();
    //this.renderNotesList();
    //this.renderNoteDetail();

    return this;
  },

  renderLayout: function() {
    this.$el.html(JST['layout']());
  },

  renderSidebar: function() {
    var view = new Nevernote.Views.Sidebar();
    var container = this.$('#sidebar');
    this.renderChildInto(view, container);
  }

});
