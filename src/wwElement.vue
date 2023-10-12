<template>
    <div class="spark-card" :class="{ shadow: showShadow }" :style="rootStyle">
        <wwLayout
            class="spark-card__dropzone"
            direction="column"
            path="content"
            ww-responsive="card-dropzone"
            :inherit-from-element="['width']"
        ></wwLayout>
    </div>
</template>

<script>
import { computed } from 'vue';

const COLORS = {
    white: '#ffffff',
    black: '#1D1D2F',
    blackElevated: '#272737',
};

const ROUNDNESS = {
    small: 12,
    medium: 20,
    large: 32,
};

const TRANSITION = 'background-color 250ms ease, border-color 250ms ease, box-shadow 300ms ease';

const DEFAULT_SHADOW = '0px 6px 16px 0px rgba(0, 0, 0, 0.12)';

export default {
    props: {
        content: { type: Object, required: true },
    },

    setup(props) {
        const bgColor = computed(() => {
            if (props.content.colors === 'custom') {
                return props.content.customBgColor;
            }

            if (!props.content.isDarkMode) {
                return COLORS.white;
            }

            if (props.content.elevation == 'elevated') {
                return COLORS.blackElevated;
            }

            return COLORS.black;
        });

        const borderColor = computed(() => {
            if (props.content.colors === 'custom') {
                return props.content.customBorderColor;
            }

            if (!props.content.isDarkMode) {
                return COLORS.white;
            }

            if (props.content.elevation === 'elevated') {
                return COLORS.blackElevated;
            }

            return COLORS.black;
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
            if (props.content.roundness === 'custom') {
                return props.content.customRoundness;
            }

            return ROUNDNESS[props.content.roundness];
        });

        const showShadow = computed(() => {
            return props.content.elevation === 'elevated';
        });

        return { bgColor, borderColor, showShadow, roundness, padding };
    },

    computed: {
        rootStyle() {
            return {
                '--spark-card-background-color': this.bgColor,
                '--spark-card-border-color': this.borderColor,
                '--spark-card-padding': this.padding + 'px',
                '--spark-card-border-radius': this.roundness + 'px',
                '--spark-card-shadow': DEFAULT_SHADOW,
                '--spark-card-transition': TRANSITION,
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.spark-card {
    background-color: var(--spark-card-background-color);
    border: 1px solid var(--spark-card-border-color);
    padding: var(--spark-card-padding) !important;
    border-radius: var(--spark-card-border-radius);
    box-sizing: border-box;

    transition: var(--spark-card-transition);
}

.shadow {
    box-shadow: var(--spark-card-shadow);
}
</style>
