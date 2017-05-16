//button.spec.js
import React from 'react'
import { shallow } from 'enzyme'

import Button, { styles } from './button'

describe('rendering', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Button label="Submit" onClick={() => {}} />)
    })
    it('should render a <TouchableOpacity/>', () => {
        expect(wrapper.find('TouchableOpacity')).toHaveLength(1)
    })
    it('should render a label', () => {
        expect(wrapper.find('Text').contains('Submit')).toBe(true)
    })
    describe('no type', () => {
        it('should have the default style', () => {
            expect(wrapper.find('TouchableOpacity').prop('style')).toEqual(
                styles.default
            )
        })
    })
    describe('primary type', () => {
        beforeEach(() => {
            wrapper = shallow(<Button label="Submit" type="primary" onClick={() => {}} />)
        })
        it('should have the primary type', () => {
            expect(wrapper.find('TouchableOpacity').prop('style')).toEqual(
                styles.primary
            )
        })
    })
})

describe('interaction', () => {
    let wrapper
    let props
    beforeEach(() => {
        props = {label: 'Submit', onClick: jest.fn() },
        wrapper = shallow(<Button {...props} />)
    })
    describe('clicking the button', () => {
        beforeEach(() => {
            wrapper.find('TouchableOpacity').prop('onPress')()
        })
        it('should call the onClick callback', () => {
            expect(props.onClick).toHaveBeenCalledTimes(1)
        })
    })
})