Nevernote.Models.Tag = Backbone.Model.extend({

  parse: function(response){
    response["notes"] = new Nevernote.Collections.Notes(response["notes"]);

    return response;
  },

});
