<template>
    <div class="container" :class="{ shadow: showShadow }" :style="rootStyle"></div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        content: { type: Object, required: true },
    },

    setup(props) {
        const bgColor = computed(() => {
            const predefinedColors = {
                white: '#ffffff',
                black: '#1D1D2F',
                blackElevated: '#272737',
            };

            if (!props.content.isDarkMode) {
                return predefinedColors.white;
            }

            if (props.content.elevation == 'elevated') {
                return predefinedColors.blackElevated;
            }

            return predefinedColors.black;
        });

        const borderColor = computed(() => {
            const predefinedColors = {
                white: '#ffffff',
                black: '#1D1D2F',
                blackElevated: '#272737',
            };

            if (!props.content.isDarkMode) {
                return predefinedColors.white;
            }

            if (props.content.elevation == 'elevated') {
                return predefinedColors.blackElevated;
            }

            return predefinedColors.black;
        });

        const padding = computed(() => {
            const predefinedPadding = {
                small: 12,
                medium: 20,
                large: 32,
            };

            if (props.content.padding === 'custom') {
                return props.content.customPadding;
            }

            return predefinedPadding[props.content.padding];
        });

        const roundness = computed(() => {
            const predefinedRoundness = {
                small: 12,
                medium: 20,
                large: 32,
            };

            if (props.content.roundness === 'custom') {
                return props.content.customRoundness;
            }

            return predefinedRoundness[props.content.roundness];
        });

        const showShadow = computed(() => {
            return props.content.elevation === 'elevated';
        });

        return { bgColor, borderColor, showShadow, roundness, padding };
    },

    computed: {
        rootStyle() {
            return {
                '--background-color': this.bgColor,
                '--border-color': this.borderColor,
                '--padding': this.padding + 'px',
                '--border-radius': this.roundness + 'px',
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    padding: var(--padding);
    border-radius: var(--border-radius);
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.shadow {
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.12);
}
</style>
