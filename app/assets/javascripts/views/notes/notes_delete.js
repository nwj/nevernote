Nevernote.Views.NoteDelete = Backbone.View.extend({
  id: "lightbox-dialog",

  events: {
    "click button.save" : "save",
    "click button.cancel" : "cancel"
  },

  render: function() {
    this.$el.html(JST['notes/delete']({
        note: Nevernote.note
    }));

    return this;
  },

  save: function(event) {
    event.preventDefault();
    Nevernote.note.destroy({
        success: function() {
            Nevernote.notebooks.fetch();
            Nevernote.tags.fetch();
        }
    });
    Nevernote.notes.remove(Nevernote.note);
    Nevernote.note.set(Nevernote.notes.at(0).attributes);
    this.leave();
  },

  cancel: function(event) {
    event.preventDefault();
    this.leave();
  },

  leave: function() {
    $('#lightbox').toggleClass('hide');
    this.off();
    this.remove();
  }

});
