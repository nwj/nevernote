Nevernote.Views.TagsList = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");

    this.bindTo(Nevernote.tags, "add", this.render);
    this.bindTo(Nevernote.tags, "remove", this.render);
    this.bindTo(Nevernote.tags, "change", this.render);
    this.bindTo(Nevernote.tags, "reset", this.render);
  },

  events: {
    "click .show" : "show",
    "click .new" : "new",
    "click .rename": "rename",
    "click .delete": "delete"
  },

  show: function(event) {
    event.preventDefault();
    var tag = Nevernote.tags.get($(event.currentTarget).attr('data-id'))
    Nevernote.currentTag = tag;

    //notebook.fetch({
        //success: function() {
            //Nevernote.notes.reset(notebook.get('notes').models);
            //Nevernote.note.set(Nevernote.notes.at(0).attributes);
        //}
    //});
  },

  render: function() {
    this.$el.html(JST['tags/list']());

    return this;
  },

  new: function(event) {
    event.preventDefault();

    var view = new Nevernote.Views.TagNew();
    var container = $('#lightbox');
    container.html(view.render().$el)
    container.toggleClass('hide');
  },

  rename: function(event) {
    event.preventDefault();
    tag = Nevernote.tags.get($(event.currentTarget).attr('data-id'))

    var view = new Nevernote.Views.TagRename({ model: tag });
    var container = $('#lightbox');
    container.html(view.render().$el)
    container.toggleClass('hide');
  },

  delete: function(event) {
    event.preventDefault();
    tag = Nevernote.tags.get($(event.currentTarget).attr('data-id'))

    var view = new Nevernote.Views.TagDelete({ model: tag });
    var container = $('#lightbox');
    container.html(view.render().$el)
    container.toggleClass('hide');
  }

});
