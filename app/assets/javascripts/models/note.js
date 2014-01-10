Nevernote.Models.Note = Backbone.Model.extend({
  urlRoot: "api/notes/",

  parse: function(response) {
    response["notebooks"] = new Nevernote.Collections.Notebooks(
      response["notebooks"], {
        url: "api/notebooks/"
      }
    );

    response["tags"] = new Nevernote.Collections.Tags(
      response["tags"], {
        url: "api/tags/"
      }
    );

    return response;
  },

});
