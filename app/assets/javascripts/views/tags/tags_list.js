Nevernote.Views.TagsList = Backbone.View.extend({

  render: function() {
    this.$el.html(JST['tags/list']());

    return this;
  },

});
