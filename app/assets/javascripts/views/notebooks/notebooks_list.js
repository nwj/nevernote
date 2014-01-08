Nevernote.Views.NotebooksList = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");

    this.bindTo(Nevernote.notebooks, "add", this.render);
    this.bindTo(Nevernote.notebooks, "remove", this.render);
    this.bindTo(Nevernote.notebooks, "change", this.render);
    this.bindTo(Nevernote.notebooks, "reset", this.render);
  },

  events: {
    "click .show" : "show",
    "click .all" : "all",
    "click .new" : "new",
    "click .rename" : "rename",
    "click .properties" : "properties",
    "click .delete" : "delete"
  },

  render: function() {
    var template = JST['notebooks/list'];
    this.$el.html(template());

    return this;
  },

  show: function(event) {
    var self = this;
    event.preventDefault();
    var notebook = Nevernote.notebooks.get($(event.currentTarget).attr('data-id'))
    Nevernote.currentNotebook = notebook;

    notebook.fetch({
        success: function() {
            if ( Nevernote.currentTag !== null ) {
                var notes = Nevernote.currentTag.get('notes');
                var currentNotebookId = Nevernote.currentNotebook.get('id');
                notes = notes.where({notebook_id: currentNotebookId});
            } else {
                var notes = Nevernote.currentNotebook.get('notes').models;
            }

            Nevernote.notes.reset(notes);
            if (Nevernote.notes.at(0) !== undefined) {
                self.switchCurrentNote();
            }
        }
    });
  },

  all: function(event) {
    var self = this;
    event.preventDefault();
    Nevernote.currentNotebook = null;

    if (Nevernote.currentTag !== null) {
        var notes = Nevernote.currentTag.get('notes').models;
        Nevernote.notes.reset(notes);
        if (Nevernote.notes.at(0) !== undefined) {
            self.switchCurrentNote();
        }
    } else {
        Nevernote.notes.fetch({
            success: function() {
                self.switchCurrentNote();
            }
        });
    };
  },

  new: function(event) {
    event.preventDefault();

    var view = new Nevernote.Views.NotebookNew();
    var container = $('#lightbox');
    container.html(view.render().$el)
    container.toggleClass('hide');
  },

  rename: function(event) {
    event.preventDefault();
    notebook = Nevernote.notebooks.get($(event.currentTarget).attr('data-id'))

    var view = new Nevernote.Views.NotebookRename({ model: notebook });
    var container = $('#lightbox');
    container.html(view.render().$el)
    container.toggleClass('hide');
  },

  properties: function(event) {
    event.preventDefault();
    notebook = Nevernote.notebooks.get($(event.currentTarget).attr('data-id'))

    var view = new Nevernote.Views.NotebookProperties({ model: notebook });
    var container = $('#lightbox');
    container.html(view.render().$el)
    container.toggleClass('hide');
  },


  delete: function(event) {
    event.preventDefault();
    notebook = Nevernote.notebooks.get($(event.currentTarget).attr('data-id'))

    var view = new Nevernote.Views.NotebookDelete({ model: notebook });
    var container = $('#lightbox');
    container.html(view.render().$el)
    container.toggleClass('hide');
  },

});
