Nevernote.Views.NotebooksList = Support.CompositeView.extend({

  render: function() {
    this.$el.html(JST['notebooks/list']());

    return this;
  },

});
