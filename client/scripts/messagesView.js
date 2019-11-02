var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    if (data.length === 1) {
      var username = data[0].username;
      var text = data[0].text;
      var msg = MessageView.render({'username': username, 'text': text});
      var $msg = $(msg);
      MessagesView.$chats.prepend($msg);
    }
    data.forEach(function(element) {
      var username = element.username;
      var text = element.text;
      var msg = MessageView.render({'username': username, 'text': text});
      var $msg = $(msg);
      MessagesView.$chats.append($msg);
    });

  }

};