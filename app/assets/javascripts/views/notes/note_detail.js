Nevernote.Views.NoteDetail = Support.CompositeView.extend({
  events: {
    "click button.delete-note": "deleteNote"
  },

  deleteNote: function() {
    Nevernote.note.destroy({
        success: function () {
            console.log('test2');
            Nevernote.router.all();
        }
    });
  },

  newNote: function() {
    Nevernote.notes.create({title: "Untitled"})
  },


  render: function() {
    this.$el.html(JST['notes/detail']());

    return this;
  },

});
