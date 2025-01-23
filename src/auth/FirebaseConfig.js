import {getAuth} from "firebase/auth"
import { app } from "src/firebase"

const auth = getAuth(app)
export default auth