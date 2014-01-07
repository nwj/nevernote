window.Nevernote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    var self = this;

    function bootstrapUser() {
      self.user = new self.Models.User();
      return self.user.fetch();
    };

    function bootstrapNotebooks() {
      self.notebooks = new self.Collections.Notebooks();
      return self.notebooks.fetch();
    }

    function bootstrapNotes() {
      self.notes = new self.Collections.Notes();
      return self.notes.fetch();
    }

    function bootstrapTags() {
      self.tags = new self.Collections.Tags();
      return self.tags.fetch();
    }

    $.when(
      bootstrapUser(),
      bootstrapNotebooks(),
      bootstrapNotes(),
      bootstrapTags()
    ).done(function() {
      if (self.notes.length > 0) {
        self.note = new self.Models.Note(self.notes.at(0).attributes);
      } else {
        self.note = new self.Models.Note();
      };
      self.defaultNotebook = self.notebooks.get(self.user.get('notebook_id'));
      self.currentNotebook = null;
      self.currentTag = null;

      new self.Routers.Home();
      if (!Backbone.history.started) {
        Backbone.history.start();
        Backbone.history.started = true;
      };
    });
  }
};
