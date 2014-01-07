Nevernote.Views.NoteDelete = Backbone.View.extend({
  id: "lightbox-dialog",

  events: {
    "click button.save" : "save",
    "click button.cancel" : "cancel"
  },

  render: function() {
    this.$el.html(JST['notes/delete']({
        note: Nevernote.currentNote
    }));

    return this;
  },

  save: function(event) {
    event.preventDefault();
    Nevernote.currentNote.destroy({
        success: function() {
            Nevernote.notebooks.fetch();
            Nevernote.tags.fetch();
        }
    });
    Nevernote.notes.remove(Nevernote.currentNote);
    Nevernote.currentNote.clear({silent: true});
    Nevernote.currentNote.set({id: Nevernote.notes.at(0).get('id')}, {silent: true});
    Nevernote.currentNote.fetch();
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
