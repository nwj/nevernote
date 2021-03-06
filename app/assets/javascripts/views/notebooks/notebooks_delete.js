Nevernote.Views.NotebookDelete = Backbone.View.extend({
  id: "lightbox-dialog",

  events: {
    "click button.save" : "save",
    "click button.cancel" : "cancel"
  },

  render: function() {
    this.$el.html(JST['notebooks/delete']({
        notebook: this.model
    }));

    return this;
  },

  save: function(event) {
    event.preventDefault();
    if (this.model === Nevernote.currentNotebook) {
      Nevernote.currentNotebook = null;
      Nevernote.notes.fetch({
        success: function() {
            Nevernote.currentNote.clear({silent: true});
            Nevernote.currentNote.set({id: Nevernote.notes.at(0).get('id')});
            Nevernote.currentNote.fetch();
        }
      });
    };
    this.model.destroy();
    Nevernote.notebooks.fetch();
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
