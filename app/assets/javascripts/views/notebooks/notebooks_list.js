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
    event.preventDefault();
    var notebook = Nevernote.notebooks.get($(event.currentTarget).attr('data-id'))
    Nevernote.currentNotebook = notebook;

    notebook.fetch({
        success: function() {
            Nevernote.notes.reset(notebook.get('notes').models);
            Nevernote.note = Nevernote.notes.at(0);
        }
    });
  },

  all: function(event) {
    event.preventDefault();
    Nevernote.currentNotebook = null;

    Nevernote.notes.fetch({
        success: function() {
            Nevernote.note = Nevernote.notes.at(0);
        }
    });
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
  }

});
