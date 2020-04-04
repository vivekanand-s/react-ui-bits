import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// https://www.jackfranklin.co.uk/blog/failing-tests-on-react-proptypes/

// const originalConsoleError = global.console.error

// global.console.error = (...args) => {
//     const propTypeFailures = [/Failed prop type/, /Warning: Received/]

//     if (propTypeFailures.some(prop => prop.test(args[0]))) {
//         throw new Error(args[0])
//     }

//     originalConsoleError(...args)
// }

configure({ adapter: new Adapter() })
