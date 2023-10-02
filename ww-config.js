export default {
    editor: {
        label: {
            en: 'Spark Card',
        },
        icon: 'fire',
        excludedSections: ['spacing', 'positioning', 'background', 'styling', 'display'],
        customStylePropertiesOrder: [
            ['elevationTitle', 'elevation', 'elevationInfo'],
            ['roundnessTitle', 'roundness', 'customRoundness'],
            ['paddingTitle', 'padding', 'customPadding'],
            ['themeTitle', 'color', 'bgColor', 'borderColor', 'isDarkMode'],
        ],
    },
    properties: {
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

        elevationInfo: {
            label: {
                en: 'Info',
            },

            // Type
            type: 'Info',

            // Config
            options: {
                text: { en: 'Based on the elevation, the bg color gets picked and a shadow is added.' },
            },
            editorOnly: true,
            section: 'style',
            // hidden: content => !content.showDocs,
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

        color: {
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

        bgColor: {
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
            hidden: content => content.color !== 'custom',
        },

        borderColor: {
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
            hidden: content => content.color !== 'custom',
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
            hidden: content => content.color == 'custom',
        },
    },
};
