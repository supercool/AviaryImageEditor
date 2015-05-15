<?php
namespace Craft;

class FruitAviaryImageEditor_EditImageElementAction extends BaseElementAction
{
	public function getName()
	{
		return Craft::t('Edit image');
	}

	public function getTriggerHtml()
	{
		$settings = craft()->plugins->getPlugin('fruitAviaryImageEditor')->getSettings();
        if($settings['aviaryTheme'] == 'minimum')
        {
            craft()->templates->includeCssResource('fruitaviaryimageeditor/css/craft.css');
        }
		$fileExtensions = craft()->config->get('fileExtensions', 'fruitaviaryimageeditor');
		$fileExtensionsJSArray = '[\''.implode ("', '", $fileExtensions).'\']';

		craft()->templates->includeJsResource('fruitaviaryimageeditor/js/actionTrigger.js');


		$js = "new Craft.AviaryActionTrigger('".$this->classHandle."', '".$settings['aviaryApiKey']."', ".$fileExtensionsJSArray.", ".($settings['imageOverwrite'] ? 'true' : 'false').");";

		craft()->templates->includeJs($js);

	}
}
