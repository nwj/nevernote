Nevernote.Views.NotesList = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");

    this.bindTo(Nevernote.notes, "add", this.render);
    this.bindTo(Nevernote.notes, "remove", this.render);
    this.bindTo(Nevernote.notes, "reset", this.render);
  },

  render: function() {
    this.$el.html(JST['notes/list']());

    return this;
  },

});
