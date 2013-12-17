window.Nevernote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    this.notebooks = new Nevernote.Collections.Notebooks(data.notebooks);
    this.tags = new Nevernote.Collections.Tags(data.tags);

    new Nevernote.Routers.Home({ notebooks: this.notebooks, tags: this.tags });
    if (!Backbone.history.started) {
      Backbone.history.start();
      Backbone.history.started = true;
    }
  }
};
