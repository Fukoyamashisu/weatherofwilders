import * as Firebase from 'firebase';
import Rebase from 're-base';
import config from './local.config';

const firebaseInit = Firebase.initializeApp(config);
const base = Rebase.createClass(firebaseInit.database());

export default base;


