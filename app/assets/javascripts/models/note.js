Nevernote.Models.Note = Backbone.Model.extend({

  parse: function(response) {
    response["notebooks"] = new Nevernote.Collections.Notebooks(
      response["notebooks"], {
        url: "api/notebooks/" + response["id"],
      }
    );

    response["taggings"] = new Nevernote.Collections.Taggings(
      response["taggings"], {
        url: "api/taggings/" + response["id"],
      }
    );

    return response;
  },

});
