/* *** Most use E6 ***/

//Importing the object person from file './3-person-to-export.js'
import prs from './3-person-to-export'; //The name of the import is arbitrary as default export in exported file
console.log(prs);

//Importing the objects baseData amd clean from file '3-utility-to-export.js'
import {baseData} from './3-utility-to-export'; //As no default exprt name is the same as function in file '3-utility-to-export.js'
import {clean} from './3-utility-to-export'; //As no default exprt name is the same as vairable in file '3-utility-to-export.js'