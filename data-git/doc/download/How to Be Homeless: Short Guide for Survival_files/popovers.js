jQuery(document).ready(function($) {
	var contents = {},
		current = null,
		loading = true,
		timeout = null;

	function getContent() {
		var $element   = $(this),
			$data      = $element.data(),
			data       = {},
			identifier = $element.data('identifier'),
			locale     = $element.data('locale'),
			popover    = $element.data('bs.popover');

		if(contents[locale] && contents[locale][identifier]) {
			return contents[locale][identifier];
		} else {
			for(var p in $data) {
				if('object' !== typeof $data[p] && 'function' !== typeof $data[p]) {
					data[p] = $data[p];
				}
			}

			$.post(
				EasyAzonPro_Components_Popovers.ajaxUrl,
				{
					action: EasyAzonPro_Components_Popovers.ajaxAction,
					atts:   data,
				},
				function(data, status) {
					saveContent(identifier, locale, data.markup);

					if(null !== current) {
						$(current).popover('hide').popover('show');
					}
				},
				'json'
			);

			return saveContent(identifier, locale, EasyAzonPro_Components_Popovers.loading);
		}
	}

	function saveContent(identifier, locale, content) {
		if(!contents[locale]) {
			contents[locale] = {};
		}

		contents[locale][identifier] = content;

		return contents[locale][identifier];
	}

	function popoverTimeoutClear() {
		if(null !== timeout) {
			clearTimeout(timeout);
			timeout = null;
		}
	}

	function popoverTimeoutSet() {
		timeout = setTimeout(function() {
			if(null !== current) {
				$(current).popover('hide');

				current = null;
				timeout = null;
			}
		}, parseInt(EasyAzonPro_Components_Popovers.timeout));
	}

	$('[data-identifier][data-locale][data-popups="y"]').each(function(index, element) {
		var $element = $(element),
			$block   = $element.parents('.easyazon-block');

		if(!$block.size()) {
			$element.popover({
				content:   getContent,
				html:      true,
				placement: EasyAzonPro_Components_Popovers.placement,
				template:  EasyAzonPro_Components_Popovers.template,
				trigger:   'manual'
			});
		}
	}).hover(function(event) {
		var $element = $(this),
			element = $element.get(0);


		popoverTimeoutClear();

		if(current !== element) {
			if(null !== current) {
				$(current).popover('hide');
			}

			$element.popover('show');

			current = element;
		}
	}, function(event) {
		popoverTimeoutSet();
	});

	$(document).on('mouseenter', '.easyazon-popover', function() {
		popoverTimeoutClear();
	}).on('mouseleave', '.easyazon-popover', function() {
		popoverTimeoutSet();
	});
});