_.extend(Support.CompositeView.prototype, {
  switchCurrentNote: function(noteId) {
    Nevernote.currentNote.clear({silent: true});
    Nevernote.currentNote.set({id: noteId}, {silent: true});
    Nevernote.currentNote.fetch();
  },

});
