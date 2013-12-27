window.Nevernote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    var self = this;
    
    this.tags = new Nevernote.Collections.Tags(data.tags);
    this.notes = new Nevernote.Collections.Notes(data.notes);
    this.note = new Nevernote.Models.Note(this.notes.at(0).attributes)
    this.currentNotebook = null;

    this.notebooks = new Nevernote.Collections.Notebooks();
    this.notebooks.fetch({
        success: function() {
            self.defaultNotebook = self.notebooks.findWhere({default: true})
            new Nevernote.Routers.Home();
            if (!Backbone.history.started) {
                Backbone.history.start();
                Backbone.history.started = true;
            }
        }
    });
  },
};
