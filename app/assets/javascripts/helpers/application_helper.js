_.extend(Support.CompositeView.prototype, {
  switchCurrentNote: function(noteId) {
    if (Nevernote.notes.length > 0) {
      var noteId = noteId || Nevernote.notes.at(0).get('id');
      Nevernote.currentNote.clear({silent: true});
      Nevernote.currentNote.set({id: noteId}, {silent: true});
      Nevernote.currentNote.fetch();
    }
  },

});
