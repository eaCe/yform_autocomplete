$(document).on('rex:ready', function () {
    const $autocomplete = $('#autocomplete');
    const column = autocompleteObj[$autocomplete.attr('name')];

    const options = {
        url: function(phrase) {
            return autocompleteUrl + '&column=' + encodeURI(column) + '&query=' + encodeURI(phrase);
        },
        getValue: function(element) {
            return element[column];
        },
        list: {
            match: {
                enabled: true
            },
            onClickEvent: function (a, b) {
                const data = $autocomplete.getSelectedItemData();
                const keys = Object.keys(data);

                if(data) {
                    keys.filter(key => key !== 'id').forEach((key, index) => {
                        $('[name="' + autocompleteMap[key] + '"]').val(data[key]);
                    });
                }
            }
        },
        theme: 'redaxo'
    };

    $autocomplete.easyAutocomplete(options);
})
