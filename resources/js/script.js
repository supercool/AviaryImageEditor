var featherEditor = new Aviary.Feather({
    apiKey: '821f60d2b0fd4ffa83822f34b7261d2b',
    tools: 'all',
    enableCORS: 'false',
    theme: 'minimum'
});
function launchEditor(id, src, options) {
    var defaults = {
        image: id,
        url: src
    }
    var options = $.extend({}, defaults, options);
    featherEditor.launch(options);
}