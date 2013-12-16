Nevernote.Models.Note = Backbone.Model.extend({

  parse: function(response) {
    response["notebooks"] = new Nevernote.Collections.Notebooks(response["notebooks"], {
      url: "api/notebooks/" + response["id"],
    });

    return response;
  },

});
