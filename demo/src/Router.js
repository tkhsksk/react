import { createBrowserRouter } from "react-router-dom";
import { SampleA, SampleB, SampleC } from './routes/SamplePage'

const Routes = createBrowserRouter([
    { path: '/', element:<SampleA/>},
    { path: '/sampleB', element:<SampleB/>},
    { path: '/sampleC', element:<SampleC/>},
]);
export default Routes;