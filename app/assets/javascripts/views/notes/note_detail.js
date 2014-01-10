Nevernote.Views.NoteDetail = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");

    this.bindTo(Nevernote.currentNote, "change", this.render);

    $(window).on('resize', function() {
      var windowHeight = $(window).height();
      var windowWidth = $(window).width();
      $('#note-detail').height(windowHeight - 86);
      $('#note-detail').width(windowWidth - 596);
      $('.note-content-wrapper').height(windowHeight - 123);
    });
  },

  events: {
    "click .delete-note" : "delete",
    "click .note-title > h2" : "edit",
    "blur .note-title > .input" : "saveTitle",
    "click .note-body > p" : "edit",
    "blur .note-body > .input" : "saveBody",
    "click .notebook-selector-button" : "selectNotebook",
    "click .notebook-selector li" : "changeNotebook",
    "click .note-info-button" : "toggleInfo"
  },

  render: function() {
    this.$el.html(JST['notes/detail']());

    setTimeout(function() {
      var windowHeight = $(window).height();
      var windowWidth = $(window).width();
      $('#note-detail').height(windowHeight - 86);
      $('#note-detail').width(windowWidth - 615);
      $('.note-content-wrapper').height(windowHeight - 123);
    }, 0);

    return this;
  },

  delete: function(event) {
    var view = new Nevernote.Views.NoteDelete();
    var container = $('#lightbox');
    container.html(view.render().$el)
    container.toggleClass('hide');
  },

  edit: function(event) {
    $(event.currentTarget).toggleClass('hide');
    var inputEl = $(event.currentTarget).parent().find('.input');
    inputEl.toggleClass('hide');
    inputEl.focus();
  },

  saveTitle: function(event) {
    var formData = $(event.target).serializeJSON();

    Nevernote.currentNote.save(formData, {
      wait: true,
      success: function() {
        Nevernote.notes.fetch();
      }
    });

    $(event.currentTarget).toggleClass('hide');
    $(event.currentTarget).parent().find('.input').toggleClass('hide');
  },

  saveBody: function(event) {
    var formData = {content: $(event.target).html()}

    Nevernote.currentNote.save(formData, {
      wait: true,
      success: function() {
        Nevernote.notes.fetch();
      }
    });

    $(event.currentTarget).toggleClass('hide');
    $(event.currentTarget).parent().find('.input').toggleClass('hide');
  },

  selectNotebook: function(event) {
    $('.notebook-selector ul').toggleClass('hide');
  },

  changeNotebook: function(event) {
    var new_notebook_id = $(event.currentTarget).attr('data-id');

    Nevernote.currentNote.save({notebook_id: new_notebook_id}, {
        success: function() {
            Nevernote.notebooks.fetch();
        }
    });

    $('.notebook-selector ul').toggleClass('hide');
  },

  toggleInfo: function(event) {
    $('.note-info-dropdown').toggleClass('hide');
  }
});
