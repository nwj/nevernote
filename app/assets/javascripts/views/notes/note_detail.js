Nevernote.Views.NoteDetail = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");

    this.bindTo(Nevernote.note, "add", this.render);
    this.bindTo(Nevernote.note, "remove", this.render);
    this.bindTo(Nevernote.note, "change", this.render);
  },

  render: function() {
    console.log("Rendering note detail", Nevernote.note);
    this.$el.html(JST['notes/detail']());

    return this;
  }

});
