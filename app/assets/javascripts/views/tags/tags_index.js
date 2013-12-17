Nevernote.Views.TagsIndex = Backbone.View.extend({

  template: JST['tags/index'],

  render: function() {
    this.$el.html(this.template);

    return this;
  },

});
