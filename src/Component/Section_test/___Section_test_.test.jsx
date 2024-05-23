import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Section } from "../Section";
import { BrowserRouter } from 'react-router-dom';
import 'intersection-observer';

const RederSction = async () => {
             return (
                <BrowserRouter>
                    <Section/>
                </BrowserRouter>
            )
        }


describe("Section Home",()=>{

    it("Home Section", async () => {
        const renderedSection = await RederSction()
        render(renderedSection)
        const Element =  await screen.findByText(/AN EXTRAORDINARY CLASSIC/i)
        expect(Element).toBeInTheDocument()
    })

    it("slider left show", async () => {
        const renderedSection = await RederSction()
        render(renderedSection)
        const Element =  await screen.findByText(/Unique Watches from Classic Collections/i)
        expect(Element).toBeInTheDocument()
    })

    it("slider right show", async () => {
        const renderedSection = await RederSction()
        render(renderedSection)
        const Element =  await screen.findByText(/GIZMO/i)
        expect(Element).toBeInTheDocument()
    })
}
)



