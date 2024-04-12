import PhotoRepository from "./PhotoRepository";
import UserRepository from "./UserRepository";

const repositories = {
  'Photos': PhotoRepository,
  'Users': UserRepository
}
export default {
  get: name => repositories[name]
};