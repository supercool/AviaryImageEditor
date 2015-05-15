(function($){

/**
 * AviaryActionTrigger Class
 */
Craft.AviaryActionTrigger = Garnish.Base.extend(
{

	classHandle: null,
	aviaryApiKey: null,
	fileExtensionsJSArray: null,
	imageOverwrite: null,

	init: function(classHandle, aviaryApiKey, fileExtensionsJSArray, imageOverwrite)
	{

		this.classHandle = classHandle;
		this.aviaryApiKey = aviaryApiKey;
		this.fileExtensionsJSArray = fileExtensionsJSArray;
		this.imageOverwrite = imageOverwrite;

		var that = this;

		var trigger = new Craft.ElementActionTrigger({
			handle: that.classHandle,
			batch: false,
			validateSelection: function($selectedItems)
			{

				var $element = $selectedItems.find('.element'),
						fileExtension = $element.data('url').split('.').pop().toLowerCase(),
						fileExtension = fileExtension.split('?')[0].toLowerCase();

				if(that.aviaryApiKey == '')
				{
					return false;
				}
				if($.inArray(fileExtension, that.fileExtensionsJSArray) != -1)
				{
					return true;
				}
				else
				{
					return false;
				}
			},
			activate: function($selectedItems)
			{

				var $element = $selectedItems.find('.element'),
						id = $element.data('id'),
						uid = 'fruitImageEdit' + id,
						url = $element.data('url');

				var img = $('<img style="display: none;" id="' + uid + '">');
				img.attr('src', url);
				img.appendTo('body');

				var options = {
					onClose: function() {
						$('#' + uid ).remove();
					},
					onSave: function(imageID, newURL) {
						var data = {
							folderId: Craft.elementIndex.$source.data('key').split(':')[1],
							fileName: $element.data('url').split('/').pop(),
							aviaryPath: newURL,
							imageOverwrite: that.imageOverwrite
						};
						Craft.postActionRequest('fruitAviaryImageEditor/saveImage', data, function(response){

							if(response.success)
							{
								Craft.elementIndex.updateElements();
								Fruit.featherEditor.close();
								if(response.imageOverwrite)
								{
									location.reload(true); // To Do : Must be a better way to update the image thumbnail.
								}
							}
							else
							{
								console.log('saveAsset Failed');
							}
						});

					},
				}

				Fruit.launchEditor(uid, url, options);
			}
		});

	}

});

})(jQuery);
