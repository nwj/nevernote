Nevernote.Models.Note = Backbone.Model.extend({
  urlRoot: "api/notes/",

  parse: function(response) {
    response["notebooks"] = new Nevernote.Collections.Notebooks(
      response["notebooks"], {
        url: "api/notebooks/"
      }
    );

    response["taggings"] = new Nevernote.Collections.Taggings(
      response["taggings"], {
        url: "api/notes/" + response["id"] + "/taggings/"
      }
    );

    return response;
  },

});
