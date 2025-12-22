import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import viteConfig from '../vite.config'

const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    stories: ['../src/**/*.stories.@(ts|tsx)'],
    staticDirs: ['../public'],
    viteFinal: (config) => mergeConfig(viteConfig, config)
}

export default config
