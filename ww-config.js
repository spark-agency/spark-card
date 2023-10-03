export default {
    editor: {
        label: {
            en: 'Spark Card',
        },
        icon: 'collection',
        bubble: {
            icon: 'collection',
        },
        excludedSections: ['spacing', 'positioning', 'background', 'styling', 'display'],
        customStylePropertiesOrder: [
            'info',
            ['elevationTitle', 'elevation'],
            ['roundnessTitle', 'roundness', 'customRoundness'],
            ['paddingTitle', 'padding', 'customPadding'],
            ['themeTitle', 'colors', 'customBgColor', 'customBorderColor', 'isDarkMode'],
        ],
    },
    properties: {
        info: {
            label: {
                en: 'Spark Card',
            },

            // Type
            type: 'Info',

            // Config
            options: {
                text: { en: 'Find the docs <a href="https://spark-ui.com/card" target="blank" style="text-decoration: underline; display: inline">here</a>.' },
            },
            editorOnly: true,
            section: 'style',
        },

        elevationTitle: {
            label: {
                en: 'Elevation',
            },

            // Type
            type: 'Title',

            // Config
            section: 'style',
            editorOnly: true,
        },

        elevation: {
            label: {
                en: 'Elevation',
            },

            // Type
            type: 'TextSelect',

            options: {
                options: [
                    { value: 'none', label: { en: 'none' } },
                    { value: 'elevated', label: { en: 'elevated' } },
                ],
            },

            // Default
            defaultValue: 'none',

            // Interactions
            classes: true,
            states: true,
            responsive: true,

            // Validation
            bindingValidation: {
                type: 'string',
                tooltip: 'One of the following: `"none", "small", "medium", "large"`',
            },
        },

        roundnessTitle: {
            label: {
                en: 'Roundness',
            },

            // Type
            type: 'Title',

            // Config
            section: 'style',
            editorOnly: true,
        },

        roundness: {
            label: {
                en: 'Roundness',
            },

            // Type
            type: 'TextSelect',

            options: {
                options: [
                    { value: 'small', label: { en: 'small' } },
                    { value: 'medium', label: { en: 'medium' } },
                    { value: 'large', label: { en: 'large' } },
                    { value: 'custom', label: { en: 'custom' } },
                ],
            },

            // Default
            defaultValue: 'medium',

            // Interactions
            classes: true,
            states: true,
            responsive: true,

            // Validation
            bindingValidation: {
                type: 'string',
                tooltip: 'One of the following: `"small", "medium", "large", "custom"`',
            },
        },

        customRoundness: {
            label: {
                en: 'Custom Roundness',
            },

            // Type
            type: 'Number',

            // Default
            defaultValue: 24,

            // Interactions
            bindable: true,
            classes: true,
            states: true,
            responsive: true,

            // Validation
            bindingValidation: {
                type: 'Number',
                tooltip: 'Number that represents the border radius in pixel.',
            },

            // Config
            hidden: content => content.roundness !== 'custom',
        },

        paddingTitle: {
            label: {
                en: 'Padding',
            },

            // Type
            type: 'Title',

            // Config
            section: 'style',
            editorOnly: true,
        },

        padding: {
            label: {
                en: 'Padding',
            },

            // Type
            type: 'TextSelect',

            options: {
                options: [
                    { value: 'small', label: { en: 'small' } },
                    { value: 'medium', label: { en: 'medium' } },
                    { value: 'large', label: { en: 'large' } },
                    { value: 'custom', label: { en: 'custom' } },
                ],
            },

            // Default
            defaultValue: 'medium',

            // Interactions
            classes: true,
            states: true,
            responsive: true,

            // Validation
            bindingValidation: {
                type: 'string',
                tooltip: 'One of the following: `"small", "medium", "large", "custom"`',
            },
        },

        customPadding: {
            label: {
                en: 'Custom Padding',
            },

            // Type
            type: 'Number',

            // Default
            defaultValue: 24,

            // Interactions
            bindable: true,
            classes: true,
            states: true,
            responsive: true,

            // Validation
            bindingValidation: {
                type: 'Number',
                tooltip: 'Number that represents the padding in pixel.',
            },

            // Config
            hidden: content => content.padding !== 'custom',
        },

        themeTitle: {
            label: {
                en: 'Theme',
            },

            // Type
            type: 'Title',

            // Config
            section: 'style',
            editorOnly: true,
        },

        colors: {
            label: {
                en: 'Colors',
            },

            // Type
            type: 'TextSelect',

            options: {
                options: [
                    { value: 'default', label: { en: 'default' } },
                    { value: 'custom', label: { en: 'custom' } },
                ],
            },

            // Default
            defaultValue: 'default',

            // Interactions
            classes: true,
            states: true,

            // Validation
            bindingValidation: {
                type: 'string',
                tooltip: 'One of the following: `"default", "custom"`',
            },
        },

        customBgColor: {
            label: {
                en: 'Background Color',
            },

            // Type
            type: 'Color',

            // Default
            defaultValue: '#ffffff',

            // Interactions
            bindable: true,
            classes: true,
            states: true,

            // Validation
            bindingValidation: {
                type: 'string',
                tooltip: 'Color string like `"#000000"`',
            },

            // Config
            hidden: content => content.colors !== 'custom',
        },

        customBorderColor: {
            label: {
                en: 'Border Color',
            },

            // Type
            type: 'Color',

            // Default
            defaultValue: '#cccccc',

            // Interactions
            bindable: true,
            classes: true,
            states: true,

            // Validation
            bindingValidation: {
                type: 'string',
                tooltip: 'Color string like `"#000000"`',
            },

            // Config
            hidden: content => content.colors !== 'custom',
        },

        isDarkMode: {
            label: {
                en: 'Dark Mode',
            },

            // Type
            type: 'OnOff',

            // Default
            defaultValue: false,

            // Interactions
            bindable: true,
            classes: true,
            states: true,

            // Validation
            bindingValidation: {
                type: 'string',
                tooltip: 'A boolean value like "true" or "false"',
            },

            // Config
            hidden: content => content.colors === 'custom',
        },

        content: {
            defaultValue: [
                {
                    isWwObject: true,
                    type: "ww-flexbox",
                    style: {
                        height: "100px",
                        width: "200px"
                    }
                },
            ],
        },
    },
};
