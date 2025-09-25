import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TestExamplePage from '../page'
describe('testing page example', () => {
    it('Should render page title', () => {
        render(<TestExamplePage/>)

        const heading = screen.getByRole('heading', {level: 1})
        expect(heading).toBeInTheDocument();
    })
})