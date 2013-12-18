Nevernote.Views.NotesList = Support.CompositeView.extend({

  render: function() {
    this.$el.html(JST['notes/list']());

    return this;
  },

});
