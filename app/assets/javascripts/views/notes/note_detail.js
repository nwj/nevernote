Nevernote.Views.NoteDetail = Support.CompositeView.extend({

  render: function() {
    this.$el.html(JST['notes/detail']());

    return this;
  },

});
