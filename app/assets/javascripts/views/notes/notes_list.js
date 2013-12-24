Nevernote.Views.NotesList = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");

    this.bindTo(Nevernote.notes, "add", this.render);
    this.bindTo(Nevernote.notes, "remove", this.render);
    this.bindTo(Nevernote.notes, "change", this.render);
    this.bindTo(Nevernote.notes, "reset", this.render);

    $(window).on('resize', function() {
      var windowHeight = $(window).height();
      $('#notes-list').height(windowHeight - 86);
      $('#notes-list').find('ul').height(windowHeight - 126);
    });
  },

  events: {
    "click .show" : "show"
  },

  render: function() {
    this.$el.html(JST['notes/list']());

    return this;
  },

  show: function(event) {
    event.preventDefault();
    var note = Nevernote.notes.get($(event.currentTarget).attr('data-id'))
    Nevernote.note.set(note.attributes);
  }

});
