Nevernote.Views.NotebooksIndex = Backbone.View.extend({

  template: JST['notebooks/index'],

  initialize: function(options){
    this.notebooks = options.notebooks;
  },

  render: function() {
    console.log(this.notebooks)
    this.$el.html(this.template({ notebooks: this.notebooks }));

    return this;
  },

  leave: function(){
    this.remove();
  }

});
