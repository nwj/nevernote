Nevernote.Views.NotebooksList = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");

    this.bindTo(Nevernote.notebooks, "add", this.render);
    this.bindTo(Nevernote.notebooks, "remove", this.render);
    this.bindTo(Nevernote.notebooks, "reset", this.render);
  },

  render: function() {
    this.$el.html(JST['notebooks/list']());

    return this;
  },

});
