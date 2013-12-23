Nevernote.Views.NotesList = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");

    this.bindTo(Nevernote.notes, "add", this.render);
    this.bindTo(Nevernote.notes, "remove", this.render);
    this.bindTo(Nevernote.notes, "change", this.render);
    this.bindTo(Nevernote.notes, "reset", this.render);
  },

  events: {
    "click .show" : "show"
  },

  render: function() {
    console.log("Notes list rendering");
    this.$el.html(JST['notes/list']());

    return this;
  },

  show: function(event) {
    event.preventDefault();
    var note = Nevernote.notes.get($(event.currentTarget).attr('data-id'))
    Nevernote.note.set(note.attributes);
  }

});
