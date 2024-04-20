import { Footer } from '../Component/Footer'
import { Navebar } from '../Component/Navebar'
import { Section } from '../Component/Section'
import { Showprocate } from '../Component/Showprocate'



export const Home = () => {
  return (
    <>
    <div className="overflow-hidden">
    <Navebar/>
    <Section/>
    <Showprocate/>
    <Footer/>
    </div>
    </>
  )
}
