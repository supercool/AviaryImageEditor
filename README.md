# Aviary Image Editor Plugin for Craft

An image editor plugin for craft that makes use of the Aviary Image Editor from Adobe (https://developers.aviary.com/). 

The plugin allows you to make edits to images through craft. The image edit tools that are available include, but are not limited to: applying various effects, cropping/resizing, adding text to the image and tweaking various image properties such as the contrast or brightness.


## Installation

To install Aviary Image Editor, follow these steps:

1.  Upload the fruitaviaryimageeditor/ folder to your craft/plugins/ folder.
2.  Go to Settings > Plugins from your Craft control panel and install the Aviary Image Editor plugin.
3. 	Register for an Adobe Creative SDK API key. Without an API key you will not be able to use the plugin. Once you have your API key use it to set the API key for the plugin through the plugin's settings page.
4.  With your API key set you should now be able to use the plugin.

> If you are running the plugin from a local dev environment you might need to enable CORS from the plugin's settings page for the plugin to work

## Basic Usage Example

With the plugin successfully installed follow these steps to make edits to images:

1.	Navigate to your Assets page in Craft.
2.	Tick the image you wish to edit (only one image can be edited at a time).
3.	From the settings menu that appears when you tick an asset select Edit Image (The settings menu is the same one that includes other functions such as 'Rename file' and 'delete...'). 
4.	The Aviary Image editor should now appear. From here you can make edits to your image.
5.  Once you have finished making changes to your image press save and your image will either be saved as a new image with a new name or it will overwrite the existing image. You can change the default save image behaviour through the plugin's settings page.


## Roadmap

* Add support for Hi-Res images.


## Changelog

### 0.9.2

* Fixed spelling mistake on settings page.
* Updated the readme file to include extra information regarding running the plugin locally.

### 0.9.1

* Removed unnecessary javascript.
* Changed so that JS is only loaded when request is from the craft CP.

### 0.9

* Initial beta release


## Licence

Copyright 2014 Fruit Studios Ltd.
