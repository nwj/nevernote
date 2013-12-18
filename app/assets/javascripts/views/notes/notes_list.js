Nevernote.Views.NotesList = Backbone.View.extend({

  render: function() {
    this.$el.html(JST['notes/list']());

    return this;
  },

});
