Nevernote.Views.Home = Support.CompositeView.extend({
  events: {
    "click button#new-note": "newNote"
  },

  newNote: function() {
    if (Nevernote.currentNotebook === null) {
      var notebook = Nevernote.notebooks.findWhere({default: true});
    } else {
      var notebook = Nevernote.currentNotebook;
    }

    Nevernote.notes.create({title: "Untitled", notebook_id: notebook.get('id')})
    Nevernote.notebooks.fetch();
  },

  render: function() {
    this.renderLayout();
    this.renderSidebar();
    this.renderNotesList();
    this.renderNoteDetail();

    return this;
  },

    renderLayout: function() {
    this.$el.html(JST['layout']());
  },

  renderSidebar: function() {
    var view = new Nevernote.Views.Sidebar();
    var container = this.$('#sidebar');
    this.renderChildInto(view, container);
  },

  renderNotesList: function() {
    var view = new Nevernote.Views.NotesList();
    var container = this.$('#notes-list');
    this.renderChildInto(view, container);
  },

  renderNoteDetail: function() {
    var view = new Nevernote.Views.NoteDetail();
    var container = this.$('#note-detail');
    this.renderChildInto(view, container);
  }

});
