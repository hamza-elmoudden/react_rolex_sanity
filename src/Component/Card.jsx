import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { urlFor } from '../Sanity/Client';


export const Card = (props) => {

  const {prod} = props
  return (
    <>
         <div className="card md:w-1/4 w-full" >
                  <div className="p-2 border border-rose-200 border-b-4 border-t-0 border-l-0 border-r-0 border-spacing-2  space-y-4 hover:border-t-4 hover:border-l-4 hover:border-r-4 hover:rounded-xl relative overflow-hidden">
                    <div className="">
                      <div>
                          <img src={urlFor(prod.image_one.asset._ref)} alt="product one" />
                        </div>
                        <div className="py-2 px-3 space-y-4">
                          <div>
                              <h1 className="font-bold text-3xl opacity-80 text-center">{prod ? prod.title : "Prodcate Title"}</h1>
                          </div>
                          <div className="flex items-center justify-evenly px-8 flex-wrap">
                            <div className="space-x-2 text-yellow-600">
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div>
                            <p className="text-2xl font-bold">{prod ? prod.price : "100"} $</p>
                            </div>
                          </div>
                        </div>
                    </div>
                    <Link className="order py-4 px-8 border-spacing-2 border border-rose-200 w-fit rounded-xl cursor-pointer hover:text-white hover:bg-rose-400 absolute -top-1/2  right-1/2 translate-x-1/2 bg-white -translate-y-1/2" to={`/Proudacte/${prod ? prod._id : ""}`}>
                        <h1 className="text-xl uppercase font-bold">Order</h1>
                    </Link>
                  </div>
        </div>
    </>
  )
}
