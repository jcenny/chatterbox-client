var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    data.forEach(function(element) {
      var username = element.username;
      var text = element.text;
      var msg = MessageView.render({'username': username, 'text': text});
      var $msg = $(msg);
      MessagesView.$chats.append($msg);
    })

  }

};