Nevernote.Views.NotebooksIndex = Backbone.View.extend({

  template: JST['notebooks/index'],

  initialize: function(options){
    this.notebooks = options.notebooks;
  },

  render: function() {
    this.$el.html(this.template({ notebooks: this.notebooks }));

    return this;
  },

});
