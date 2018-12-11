import Datastore from 'nedb'

// const db = {
const Users = new Datastore({filename: './users.db', timestampData: true, autoload: true});
const Posts = new Datastore({filename: './posts.db', timestampData: true, autoload: true});
// };

export {Users, Posts}