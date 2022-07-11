import { isError, run } from "./errors";
import { appendWorld} from "./methods";

const a = {};
const aWithWorld = run(a, appendWorld);
console.log(isError(aWithWorld))

const b = "Hello ";
const bWithWorld = run(b, appendWorld);
console.log(isError(bWithWorld));
