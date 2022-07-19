import { render, screen} from "@testing-library/react"
import HomePage from "../../pages/HomePage"

describe('Home Page test', () => {
    test('Testing the home template', () => {
        render(<HomePage/>);
        expect(screen.getByTestId('home-template')).toBeInTheDocument();
        
    })
})