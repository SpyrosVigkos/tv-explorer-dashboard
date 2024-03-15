import axios from "axios";
import { getTvMazeAPIUrl } from "../constants/constants";

export default axios.create({
  baseURL: getTvMazeAPIUrl(),
});
