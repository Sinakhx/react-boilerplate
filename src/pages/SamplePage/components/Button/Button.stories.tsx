// src/components/Button/Button.stories.ts
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        initialCount: 0,
        step: 1
    }
}

export const WithInitialCount: Story = {
    args: {
        initialCount: 10,
        step: 1
    }
}

export const LargeStep: Story = {
    args: {
        initialCount: 0,
        step: 5
    }
}

export const NegativeStep: Story = {
    args: {
        initialCount: 100,
        step: -10
    }
}

export const WithCustomClass: Story = {
    args: {
        initialCount: 0,
        step: 1,
        className: 'tw-bg-red-500 tw-text-white'
    }
}

export const Interactive: Story = {
    args: {
        initialCount: 0,
        step: 1
    },
    render: (args) => <Button {...args} />
}
