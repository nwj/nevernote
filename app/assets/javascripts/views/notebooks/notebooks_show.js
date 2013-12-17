Nevernote.Views.NotebooksShow = Backbone.View.extend({

  template: JST['notebooks/show'],

  render: function() {
    this.$el.html(this.template);

    return this;
  },

});
